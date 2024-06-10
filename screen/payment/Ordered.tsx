import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Alert, Image, ActivityIndicator } from 'react-native';
import Button from '../compoments/customButton';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CartProduct from '../compoments/customCart';
import { CartContext } from '../../Context/cartContext';
import { baseUrl } from '../home/constraint';
import { child, get, getDatabase, ref } from 'firebase/database';
import { firebaseapp } from '../../Database/Firebase';
 
const Ordered: React.FC = () => {
  const navigation = useNavigation();
  const [data,setData]=useState([]);
  const [loading, setLoading]=useState(false);
  const {userID}=useContext(CartContext);
  const loadData=async()=>{
    setLoading(true);
    const dbRef=ref(getDatabase(firebaseapp));
    try{
        const snapshot=await get(child(dbRef,`User/${userID}/orders`));
        if(snapshot.exists){
            const array=Object.values(snapshot.val());
            setData(array);
        } else {
            console.warn("No data available");
        }
    }catch(error){
        console.warn(error);
    }
    setLoading(false);
  }
  useEffect(()=>{
    loadData();
  },[])

   return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.textTop}>Ordered</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.bodyTitle}>
          <Text style={styles.titleText}>Information</Text>
        </View>
        {loading ? (
          <ActivityIndicator size="large" color="blue" />
        ) : (
            <FlatList
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={styles.informtextContainer}>
                <Text style={styles.informText}>Order Date: {item.OrderDate}</Text>
                <Text style={styles.informText}>Total: {item.Total}</Text>
                <Text style={styles.informText}>Products:</Text>
                <FlatList
                data={item.Products}
                keyExtractor={(product, index) => index.toString()}
                renderItem={({ item: product }) => (
                    <View>
                    <Text style={styles.informText}>ProductID: {product.productId}</Text>
                    <Text style={styles.informText}>Count: {product.count}</Text>
                    </View>
                )}
                />
              </View>
            )}
          />
        )}
      </View>
      <View style={styles.bottom}>
        <Button text='Main' width={250} height={60} color={'#c3e703'} onPress={()=>navigation.goBack()} />
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
    fontSize: 30,
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

export default Ordered;
