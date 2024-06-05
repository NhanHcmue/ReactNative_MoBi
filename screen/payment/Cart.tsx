import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Button from '../compoments/customButton';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CartProduct from '../compoments/customCart';
import { CartContext } from '../../Context/cartContext';
type User={
  name:string,
  phone:string,
  address:string
}
const Cart: React.FC = () => {
  const navigation = useNavigation();
  const [user,setUser]=useState<User|null>(null);
  const { cart,removeFromCart } = useContext(CartContext);

  const handleSwitchDelivery = () => {
    navigation.navigate('Address');
  };
  // get user's data from asyncStorage
  // install npm install @react-native-async-storage/async-storage before use
  useEffect(()=>{
    const getUser= async()=>{
      try{
        const userInfo=await AsyncStorage.getItem('user');
         if(userInfo){
            setUser(JSON.parse(userInfo));
         }
      }catch(e){
        console.warn(e);
      }
    };
    getUser();
  },[])
  const calculateTotal=()=>{
    return cart.reduce((total,item)=>total+(item.price*item.count),0);
  }
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
          keyExtractor={(item) => item.productId}
          renderItem={({ item }) => (
            <CartProduct
              name={item.title}
              price={item.price}
              image={item.imageUrl}
              count={item.count}
              onPress={()=>removeFromCart(item.productId)}
            />
          )}
        />
      </View>
      <View style={styles.bottom}>
        <Text style={styles.textPrice}>Total: {Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(calculateTotal())}</Text>
        <Button text='Checkout' width={250} height={50} color={'#c3e703'} />
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
    padding: 15,
    backgroundColor: 'white',
    borderBottomStartRadius: 30,
    borderBottomEndRadius: 30
  },
  textTop: {
    fontWeight: 'bold',
    fontSize: 30,
    flexWrap: 'wrap',
  },
  address:{
    borderWidth:1
 },
  body: {
    flex: 5,
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
  textPrice:{
    fontWeight:'bold',
    color:'red',
    fontSize:20
  }
});

export default Cart;
