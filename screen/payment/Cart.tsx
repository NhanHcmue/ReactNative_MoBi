import { View, Text,StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Button from '../compoments/customButton'
import { useNavigation } from '@react-navigation/native'

const Cart = () => {
  const navigation=useNavigation();
  const handleswitchDelivery=()=>{
     navigation.navigate('Address');
  }
  return (
    <View style={styles.container}>
        <View style={styles.top}>
            <Text style={styles.textTop}>Cart</Text>
             <Button text='102 Chien Thang, 9th ward, Phu Nhuan district' width={380} height={60} color='#D1D8C5' onPress={handleswitchDelivery}/>
        </View>
        <View style={styles.body}></View>
        <View style={styles.bottom}>
          <Button text='Checkout' width={300} height={60} color={'#c3e703'}/>
        </View>

    </View>
  )
}
const styles=StyleSheet.create({
   container:{
     flex:1,
     backgroundColor:'lightgray'
   },
   top:{
      flex:1,
      padding:15,
      backgroundColor:'white',
      borderBottomStartRadius:30,
      borderBottomEndRadius:30
   },
   textTop:{
    fontWeight:'bold',
    fontSize:30,
   },
   address:{
      borderWidth:1
   },
   body:{
     flex:5,
     backgroundColor:'white',
     marginTop:10,
     borderTopStartRadius:30,
     borderTopEndRadius:30
   },
   bottom:{
     flex:1,
     backgroundColor:'white',
     justifyContent:'center',
     alignItems:'center'
   }
})
export default Cart;