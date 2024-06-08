import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Alert } from 'react-native';
import Button from '../compoments/customButton';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CartProduct from '../compoments/customCart';
import { CartContext } from '../../Context/cartContext';
import { baseUrl } from '../home/constraint';
import { get, ref, set, update } from 'firebase/database';
import { database, firebaseapp } from '../../Database/Firebase';

type User = {
  name: string,
  phone: string,
  address: string
};

const Cart: React.FC = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState<User | null>(null);
  const { cart, removeFromCart } = useContext(CartContext);

  const handleSwitchDelivery = () => {
    navigation.navigate('Address');
  };
  const checkoutAPI = async () => {
    try {
      const dbRef = ref(database, 'orderId');
      const snapshot = await get(dbRef);
      let newId = 1;
      if (snapshot.exists()) {
        newId = snapshot.val() + 1;
      }

      const ordersRef = ref(database, `Carts/${newId}`);
      const totalAmount = calculateTotal();
      const products = cart.map(item => ({ productId: item.productId, count: item.count }));
      const orderData = {
        Name: user?.name,
        Address: user?.address,
        Products: products,
        Total: totalAmount,
        id: newId
      };

      await set(ordersRef, orderData);
      await update(dbRef, { 'id': newId });

      navigation.navigate('Confirm', { total: formattedTotal, products: cart });
    } catch (error) {
      console.warn(error);
      Alert.alert('Failed');
    }
  };
  // get user's data from asyncStorage
  useEffect(() => {
    const getUser = async () => {
      try {
        const userInfo = await AsyncStorage.getItem('user');
        if (userInfo) {
          setUser(JSON.parse(userInfo));
        }
      } catch (e) {
        console.warn(e);
      }
    };
    getUser();
  }, []);
  
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.count), 0);
  };

  const formattedTotal = Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(calculateTotal());

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.textTop}>Cart</Text>
        <Button
          text={user ? user.address : 'set your Address'}
          width={380}
          height={60}
          color='#D1D8C5'
          onPress={handleSwitchDelivery}
        />
      </View>
      <View style={styles.body}>
        <FlatList
          data={cart}
          keyExtractor={(item, index) => `${item.productId}_${index}`}
          renderItem={({ item }) => (
            <CartProduct
              name={item.title}
              price={item.price}
              image={item.imageUrl}
              count={item.count}
              onPress={() => removeFromCart(item.productId)}
            />
          )}
        />
      </View>
      <View style={styles.bottom}>
        <Text style={styles.textPrice}>Total: {formattedTotal}</Text>
        {cart.length > 0 && (
          <Button text='Checkout' width={250} height={50} color={'#c3e703'} onPress={checkoutAPI} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray'
  },
  top: {
    flex: 1,
    paddingLeft:22,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor: 'white',
    borderBottomStartRadius: 30,
    borderBottomEndRadius: 30
  },
  textTop: {
    fontWeight: 'bold',
    fontSize: 30
  },
  address: {
    borderWidth: 1
  },
  body: {
    flex: 4,
    backgroundColor: 'white',
    marginTop: 10,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30
  },
  bottom: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textPrice: {
    fontWeight: 'bold',
    color: 'red',
    fontSize: 16
  }
});

export default Cart;
