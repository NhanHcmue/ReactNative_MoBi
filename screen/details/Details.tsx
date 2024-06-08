import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ActivityIndicator, TextInput } from 'react-native';
import Button from '../compoments/customButton';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { CartContext } from '../../Context/cartContext';
import { baseUrl } from '../home/constraint';
import { child, get, ref } from 'firebase/database';
import { database } from '../../Database/Firebase';

type RootStackParamList = {
  Details: { productID: string };
};

type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

interface Product {
  id: string;
  title: string;
  price: string;
  imageUrl: string;
  source: string;
}

const Details: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute<DetailsScreenRouteProp>();
  const { productID } = route.params;
  const { addToCart, cart } = useContext(CartContext);
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [number, setNumber] = useState(0);
  const [error, setError] = useState('');
  const loadData = async () => {
    setLoading(true);
    const dbRef = ref(database);
    try {
      const snapshot = await get(child(dbRef, `products`));
      if (snapshot.exists()) {
        const productsArray = snapshot.val();
        const foundProduct = productsArray.find((item: any) => item.productId === productID);
        if (foundProduct) {
          setProduct(foundProduct);
        } else {
          console.log("Product not found");
        }
      } else {
        console.log("No data available");
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, [productID]);

  const handleBack = () => {
    navigation.navigate('Home');
  };

  const checkInputNumber = (number: number) => {
    if (number > 0) {
      setError('');
      addToCart({...product, count: number });
      navigation.navigate('Cart');
    } else {
      setError('Please input a valid number');
    }
  };

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (!product) {
    return (
      <View style={styles.loaderContainer}>
        <Text style={{ color: 'red' }}>Error loading product details.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.textTop}>HCMUE SHOP</Text>
        <View style={styles.containerInput}>
          <TouchableOpacity>
            <Image style={styles.iconCart} source={require('../../assets/cart.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleBack}>
            <Image style={styles.iconCart} source={require('../../assets/iconNext.png')} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.containImage}>
          <Image style={styles.imageProduct} source={{ uri: product.imageUrl }} />
        </View>
        <View style={styles.textProduct}>
          <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20 }}>{product.title}</Text>
          <Text style={{ color: 'red', fontSize: 15, fontWeight: 'bold' }}>{product.price}</Text>
          <Text style={{ color: 'black', fontSize: 15, marginTop: 5 }}>{product.source}</Text>
          <TextInput
            placeholder='input number'
            keyboardType='numeric'
            onChangeText={(text) => setNumber(parseInt(text))}
          />
          {error ? <Text style={styles.error}>{error}</Text> : null}
          <Button text={'Add to cart'} height={50} width={100} color={'#c3e703'} onPress={() => checkInputNumber(number)} />
        </View>
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
    flex: 0.7,
    backgroundColor: 'white',
    flexDirection: 'row',
    borderBottomStartRadius: 30,
    borderBottomEndRadius: 30
  },
  textTop: {
    color: 'black',
    fontSize: 40,
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 40,
  },
  containerInput: {
    flex: 0.5,
    flexDirection: 'row',
    marginLeft: 50,
    marginTop: 50,
  },
  iconCart: {
    height: 45,
    width: 45,
  },
  body: {
    flex: 4,
    backgroundColor: 'white',
    flexDirection: 'row',
    marginTop: 10,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30
  },
  containImage: {
    flex: 2,
    marginTop: 120,
    marginLeft: 20,
  },
  imageProduct: {
    width: 130,
    height: 150,
  },
  textProduct: {
    flex: 2,
    marginTop: 100,
  },
  error: {
    color: 'red',
    marginTop: 5,
    fontWeight: 'bold'
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Details;
