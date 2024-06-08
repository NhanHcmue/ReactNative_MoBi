import { useNavigation } from "@react-navigation/native";
import React from "react"
import { Image,StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";

const Header= ({search,setSearch}) => {
    const navigation=useNavigation();
    const handleNext=()=>{
        navigation.navigate("Cart");
    }
    return (
        <View style= {styles.container}> 
            <View style = {styles.viewtext}>
                <TextInput
                        style={styles.textinput}
                        placeholder="Nhập từ khóa tìm kiếm"
                        value={search}
                        onChangeText={(text) => setSearch(text)}
                    />
            </View>
            <View>
                <TouchableOpacity onPress={handleNext}><Image style={styles.image} source={require('../../assets/account.png')}/></TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor:'white',
        height:80,
       
    },
    textinput:{
        borderWidth:1,
        height: 50,
        marginLeft:5,
        borderRadius:10,
        backgroundColor:'white',
        paddingLeft:5
    },
    viewtext:{
        width : '80%',
    },
    image:{
        width:40,
        height:40,
    }
})


export default Header