import { View, Text,StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Input from '../compoments/customTextinput'
import Button from '../compoments/customButton'
import { useNavigation } from '@react-navigation/native'

const Address = () => {
    const navigation=useNavigation();
    const [name,setName]=useState('');
    const [phone,setPhone]=useState('');
    const [address,setAddress]=useState('');
    const saveInformation=()=>{
       navigation.navigate('Cart');
    }
  return (
    <View style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.textTop}>Infomation</Text>
        </View>
        <View style={styles.body}>
            <Input label={"Name"} placeholder='Name' />
            <Input label={"Phone"} placeholder='Phone' type={'numeric'}/>
            <Input label={"Address"} placeholder='Address'/>
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
  top:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  textTop:{
    fontWeight:'bold',
    fontSize:30
  },
  body:{
    flex:6,
    padding:5,
    alignItems:'center'
  },
  button:{
    marginTop:10
  }
})

export default Address