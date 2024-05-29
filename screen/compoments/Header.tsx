import React from "react"
import { Image,StyleSheet, View, Text } from "react-native";

const Header = () => {
    return (
        <View style= {styles.container}> 
            <View>
                <Text style = {styles.title}>MosofsVn</Text>
            </View>
            <View>
                <Image source={require('../../assets/logo.png')}/>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        paddingTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        color : '#FF0000',
        fontSize: 14,
        fontWeight: '700',
        textTransform: 'uppercase',
    }
})


export default Header