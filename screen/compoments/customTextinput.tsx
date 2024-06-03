import { View, Text, TextInput,StyleSheet } from 'react-native'
import React from 'react'
type inputProps={
    label:string,
    placeholder:string,
    type?:any,
    onChangeText?:(text:string)=>void
}
const Input:React.FC<inputProps> = ({label,placeholder,type,onChangeText}) => {
  return (
    <View>
        <Text style={styles.text}>{label}</Text>
        <TextInput style={styles.textInput} placeholder={placeholder} keyboardType={type} onChangeText={onChangeText}/>
    </View>
  )
}
const styles=StyleSheet.create({
    text:{
        fontSize:15,
        padding:5,
        marginTop:10
    },
    textInput:{
        borderWidth:2,
        padding:10,
        borderRadius:20,
        width:400,
        borderColor:'black'
    }
})

export default Input;