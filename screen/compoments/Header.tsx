import React from "react"
import { Image,StyleSheet, View, Text, TextInput } from "react-native";

const Header= ({search,setSearch}) => {
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
                <Image style={styles.image} source={require('../../assets/cart.png')}/>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor:'pink',
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