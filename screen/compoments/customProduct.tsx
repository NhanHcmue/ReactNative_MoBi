import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
type laptopProps={
    name:string,
    image:string,
    onPress?:()=>void;
}
const Product:React.FC<laptopProps> = ({name,image,onPress}) => {
  return (
    <View style={styles.container}>
       <Image style={styles.imagePoster} source={{uri:image}}/>
      <Text style={styles.text} numberOfLines={1} ellipsizeMode="tail">{name}</Text>
      <TouchableOpacity style={styles.textContainer} onPress={onPress}>
         <Text style={{color:'red',fontWeight:'bold'}}>Chi Tiết</Text>
      </TouchableOpacity>
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
  textContainer:{
      marginTop:130,
      marginLeft:10
  },
  imageIcon:{
      height:20,
      width:20,
  },
  text:{
      fontSize:15,
      color:'black',
      fontWeight:'bold',
      marginLeft:10,
      fontStyle:'italic',
      flexShrink: 2,
      flexGrow: 1 
  }
})
export default Product;

