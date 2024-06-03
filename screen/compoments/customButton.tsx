import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
type buttonProps={
    text:string,
    width:number,
    height:number,
    color:string,
    onPress?:()=>void
}
const Button:React.FC<buttonProps>= ({text,width,height,color,onPress}) => {
  return (
    <View>
       <TouchableOpacity style={[styles.button,{width:width,height:height,backgroundColor:color}]} onPress={onPress}>
           <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    </View>
  )
}
const styles=StyleSheet.create({
    button:{
        borderWidth:1,
        backgroundColor:'lightblue',
        marginTop:10,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20,
        borderColor:'white'
    },
    text:{
        color:'black',
        fontSize:15,
        fontWeight:'bold'
    }
    
})

export default Button;