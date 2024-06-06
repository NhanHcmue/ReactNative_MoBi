import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Alert, Image } from 'react-native';
import Button from '../compoments/customButton';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CartProduct from '../compoments/customCart';
import { CartContext } from '../../Context/cartContext';
import { baseUrl } from '../home/constraint';
type User={
  name:string,
  phone:string,
  address:string
}
type ConfirmScreenRouteProp = RouteProp<{ params: { total: string } }, 'params'>;
const Confirmation: React.FC = () => {
  const navigation = useNavigation();
  const [user,setUser]=useState<User|null>(null);
  const route=useRoute<ConfirmScreenRouteProp>();
  const {clearCart}=useContext(CartContext);
  const {total}=route.params;
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
  const handleMain=async()=>{
    try {
      await AsyncStorage.removeItem('user');
      clearCart();
      navigation.navigate('Home');
    } catch (error) {
      console.error('Failed to clear user info and cart', error);
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image style={styles.icon} source={require('../../assets/Success.png')}/> 
        <Text style={styles.textTop}>Successfully</Text>
     </View>
      <View style={styles.body}>
        <View style={styles.bodyTitle}>
          <Text style={styles.titleText}>Information</Text>
        </View>
        <View style={styles.informtextContainer}>
          <Text style={styles.informText}>Name: {user ? user.name:" set Name"}</Text>
          <Text style={styles.informText}>Address: {user ? user.address:" set Address"}</Text>
          <Text style={styles.informText}>Phone: {user ? user.phone:" set Phone"}</Text>
          <Text style={styles.informText}>Total:{total}</Text>
        </View>
      </View>
      <View style={styles.bottom}>
      <Button text='Main' width={250} height={60} color={'#c3e703'} onPress={handleMain} />
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
    flexDirection:'row',
    padding: 15,
    backgroundColor: 'white',
    justifyContent:'center',
    alignItems:'center',
    borderBottomStartRadius: 30,
    borderBottomEndRadius: 30
  },
  textTop: {
    fontWeight: 'bold',
    fontSize: 20,
    color:'red',
    flexWrap: 'wrap',
  },
  icon:{
    width:20,
    height:20,
    marginRight:5
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
  bodyTitle:{
      alignItems:'center',
      marginTop:20
  },
  titleText:{
    fontWeight:'bold',
    fontSize:25
  },
  informtextContainer:{
    justifyContent:'center',
    padding:20
  },
  informText:{
    fontSize:20,
    fontWeight:'bold',
    marginTop:10
  },
  bottom: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Confirmation;
