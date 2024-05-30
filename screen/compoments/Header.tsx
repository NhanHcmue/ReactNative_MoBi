import React from "react"
import { Image,StyleSheet, View, Text, TextInput } from "react-native";

const Header= ({search,setSearch}) => {
    return (
        <View style= {styles.container}> 
            <View>
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
        alignItems: 'center',
        backgroundColor:'pink',
        height:80,
    },
    title: {
        color : '#FF0000',
        fontSize: 14,
        fontWeight: '700',
        textTransform: 'uppercase',
    },
    textinput:{
        borderWidth:1,
        width:300,
        height:50,
        marginLeft:5,
        borderRadius:10,
        backgroundColor:'white',
        paddingLeft:5
    },
    image:{
        width:40,
        height:40,
        marginLeft:40
    }
})


export default Header