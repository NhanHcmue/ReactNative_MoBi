import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'
import Input from '../compoments/customTextinput'
import Button from '../compoments/customButton'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';
const Address = () => {
    const navigation=useNavigation();
    const [name,setName]=useState('');
    const [phone,setPhone]=useState('');
    const [address,setAddress]=useState('');
    const saveInformation = async () => {
      try {
        const userInfo = { name, phone, address };
        await AsyncStorage.setItem('user', JSON.stringify(userInfo));
        navigation.navigate('Cart');
      } catch (error) {
        console.error('Failed to save user info', error);
      }
    };
   
  return (
    <View style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.textTop}>Infomation</Text>
        </View>
        <View style={styles.body}>
          <View style = {styles.form}>
            <View style = {styles.group}>
              <Text>Name</Text>
              <TextInput placeholder="Name" style = {styles.ip} onChangeText={setName}></TextInput>
            </View>
            <View style = {styles.group}>
              <Text>Phone</Text>
              <TextInput placeholder="Phone" style = {styles.ip} onChangeText={setPhone}></TextInput>
            </View>
            <View style = {styles.group}>
              <Text>Address</Text>
              <TextInput placeholder="Address" style = {styles.ip} onChangeText={setAddress}></TextInput>
            </View>
          </View>
          <View style={styles.button}>
            <Button text={'Save'} height={60} width={200} color={'#c3e703'} onPress={saveInformation}/>
          </View>
        </View>
    </View>
  )
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white'
  },
  form: {
    paddingTop: 30,
  },
  group: {
    padding : 10,
  },
  ip: {
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 10,
      padding: 10,
      fontSize: 17,
  },
 
  top:{
    justifyContent:'center',
    alignItems:'center'
  },
  textTop:{
    fontWeight:'bold',
    fontSize:30
  },
  body:{
    paddingHorizontal: 10
  },
  button:{
    marginTop:10,
    alignItems: 'center',
  }
})

export default Address