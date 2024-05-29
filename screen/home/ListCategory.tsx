import React from "react";
import {View,Image, Text, StyleSheet} from "react-native";
import GiCungDuoc from "../compoments/GiCungDuoc";

const ListCategory = () => {
    return(
        <>
            <GiCungDuoc title1="Danh Muc" title2 ="Xem Them"/>
            <View style = {styles.continar}>
                <View>
                    <Image source ={require('../../assets/cate1.png')}/>
                </View>
                <View>
                    <Image source ={require('../../assets/cate1.png')}/>
                </View>
                <View>
                    <Image source ={require('../../assets/cate1.png')}/>
                </View>
                <View>
                    <Image source ={require('../../assets/cate1.png')}/>
                </View>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    continar:{
        paddingTop: 10,
        flexDirection : 'row',
        justifyContent: 'space-between',
    }
})


export default ListCategory;