import React from "react";
import { View, Text, StyleSheet, StatusBar, TextInput, TouchableOpacity, Alert, Touchable, Image} from "react-native";
import Fontisto from '@expo/vector-icons/Fontisto';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const LoginScreen = () => {
    const navigation=useNavigation();
    const handleNext=()=>{
        navigation.navigate("Main");
    }
    return(
        <View style = {styles.container}>
            <StatusBar></StatusBar>
            <View style = {{alignItems: 'center'}}>
                <Text style = {styles.title}>Login</Text>
            </View>
            <View style = {styles.diss}>
                <Text style = {{fontSize: 20}}>By singing in you are agreeing</Text>
                <View style = {{ flexDirection: 'row', alignContent: 'center'}}>
                    <Text style = {{fontSize: 20}}>our </Text>
                    <TouchableOpacity><Text style = {{fontSize: 20, color: '#00feff'}}>Term and privacy policy</Text></TouchableOpacity>
                </View>
            </View>
            <View style = {styles.form}>
                <View style = {styles.group}>
                    <Fontisto name= 'email' style = {styles.icon}/>
                    <TextInput placeholder="Ten Dang Nhap" style = {styles.ip}></TextInput>
                </View>
                <View style = {styles.group}>
                    <Fontisto name= 'locked' style = {styles.icon}/>
                    <TextInput placeholder="Mat khau" style = {styles.mk} secureTextEntry = {true}></TextInput>
                </View>
            </View>
            <View>
                <TouchableOpacity style = {{paddingHorizontal: 25}} onPress={handleNext}><Text style = {styles.conphom}>Dang Nhap</Text></TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create ({
    container:{
        paddingHorizontal: 20,
        flex: 1,
    },
    icon: {
        fontSize: 25,
        position: 'absolute',
        zIndex: 1000,
        top: 27,
        left: 20,
    },
    title:{
        paddingVertical: 40,
        fontSize: 30,
        fontWeight: 'bold',
    },
    diss: {
        alignItems : 'center',
        padding: 10,
    },
    form: {
        paddingTop: 30,
    },
    group: {
        padding : 20,
    },
    ip: {
        borderColor: 'gray',
        borderBottomWidth: 1,
        padding: 5,
        fontSize: 17,
        paddingLeft:30,
    },
    mk: {
        borderColor: 'gray',
        borderBottomWidth: 1,
        padding: 5,
        fontSize: 17,
        paddingLeft:30,
    },
    conphom:{
        textAlign: 'center',
        fontSize: 20,
        backgroundColor: '#0fffff',
        borderRadius: 5,
        marginTop: 30,
        paddingVertical: 10,
    }
})
export default LoginScreen;