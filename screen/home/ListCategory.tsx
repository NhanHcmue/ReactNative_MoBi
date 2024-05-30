import React from "react";
import {View,Image, Text, StyleSheet} from "react-native";
import GiCungDuoc from "../compoments/GiCungDuoc";

const ListCategory = () => {
    return(
        <>
            <GiCungDuoc title1="Danh Muc" title2 ="Xem Them"/>
            <View style = {styles.container}>
                <View>
                    <Image style={styles.image} source ={require('../../assets/Iphone.png')}/>
                </View>
                <View>
                    <Image style={styles.image} source ={require('../../assets/tablet.png')}/>
                </View>
                <View>
                    <Image style={styles.image} source ={require('../../assets/Watch.png')}/>
                </View>
                <View>
                    <Image style={styles.image} source ={require('../../assets/macbook.png')}/>
                </View>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    container:{
        paddingTop: 10,
        flexDirection : 'row',
        justifyContent:'space-between'
    },
    image:{
        width:70,
        height:70
    }
})


export default ListCategory;