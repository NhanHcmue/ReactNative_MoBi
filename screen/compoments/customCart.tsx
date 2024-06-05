import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
type laptopProps={
    name:string,
    image?:string,
    count:number,
    price:number,
    onPress?:()=>void;
}
const CartProduct:React.FC<laptopProps> = ({name,price,count,image,onPress}) => {
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.imagePoster} source={{uri:image}}/>
      </View>
      <View style={styles.textContainer}>
        <Text style={[styles.text,{fontSize:15}]}>{name}</Text>
        <Text style={[styles.text,{fontSize:15,color:'red'}]}>{Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price)}</Text>
      </View>
       <View style={{flexDirection:'column'}}>
            <TouchableOpacity onPress={onPress}>
                <Image style={styles.imageremoveCart} source={require('../../assets/removeCart.png')}/>
            </TouchableOpacity>
            <Text style={styles.textCount} numberOfLines={1} ellipsizeMode="tail">Number:{count}</Text>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
      flexDirection:'row',
      borderWidth:1,
      justifyContent:'flex-start',
      alignItems:'center',
      height:170,
      borderRadius: 10,
      padding: 10,
      margin:10,
  },
  
  imagePoster:{
      height: 100,
      width: 90,
      marginRight: 10 
  },
  textCount:{
      marginTop:100,
      fontWeight:'bold',
      fontSize:15,
      color:'red'
  },
  imageIcon:{
      height:20,
      width:20,
  },
  textContainer:{
      marginLeft:5,
      fontStyle:'italic',
      flexShrink: 2,
      flexGrow: 1
  },
  text:{
    fontWeight:'bold'
  },
  imageremoveCart:{
    height:40,
    width:40,
    marginLeft:25
  }
})
export default CartProduct;

