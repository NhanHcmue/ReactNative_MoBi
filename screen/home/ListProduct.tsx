import React from "react";
import {View, Text, StyleSheet, Image} from "react-native"
import GiCungDuoc from "../compoments/GiCungDuoc";

const ListProduct = () => {
    return(
        <>
            <GiCungDuoc title1="Danh Muc" title2="Xem Them"/>
            <View style = {styles.container}>
                <View style = {styles.item}>
                    <View style = {styles.sale}>
                        <Text>Sale 30%</Text>
                    </View>
                    <Image source={require('../../assets/cuaghe.jpg')} style = {{width: "100%", height : 150}}/>
                    <View style = {styles.dess}>
                        <Text style = {{color: 'white', textAlign: 'center'}}>okok</Text>
                    </View>
                </View>
                <View style = {styles.item}>
                    <Image source={require('../../assets/cuaghe.jpg')} style = {{width: "100%", height : 150}} />
                    <View style = {styles.dess}>
                        <Text style = {{color: 'white', textAlign: 'center'}}>okok</Text>
                    </View>
                </View>
                <View style = {styles.item}>
                    <Image source={require('../../assets/cuaghe.jpg')} style = {{width: "100%", height : 150}} />
                    <View style = {styles.dess}>
                        <Text style = {{color: 'white', textAlign: 'center'}}>okok</Text>
                    </View>
                </View>
                <View style = {styles.item}>
                    <Image source={require('../../assets/cuaghe.jpg')} style = {{width: "100%", height : 150}} />
                    <View style = {styles.dess}>
                        <Text style = {{color: 'white', textAlign: 'center'}}>koko</Text>
                    </View>
                </View>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    item:{
        width: '45%'
    },
    dess:{
        backgroundColor: 'black',
        paddingVertical: 8,
    },
    sale:{
        backgroundColor: 'gray',
        width: 100,
        position: 'absolute',
        top : 10,
        right: 10,
        zIndex: 1000000,
    }
})

export default ListProduct;