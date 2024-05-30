import React, { useEffect, useState } from "react";
import {View, Text, StyleSheet, Image, FlatList, ScrollView, ActivityIndicator} from "react-native"
import GiCungDuoc from "../compoments/GiCungDuoc";
import { useNavigation } from "@react-navigation/native";
import { baseUrl } from "./constraint";
import Product from "../compoments/customProduct";
import Header from "../compoments/Header";
const ListProduct = ({search,setSearch}) => {
    const navigation=useNavigation();
    const [data, setData] = useState<any[]>([]);
    const [loading,setLoading]=useState(false);
    const loadData=async()=>{
        setLoading(true);
        const url=`${baseUrl}/Products`;
        const options={
           method:"GET",
           headers: { 
             'Content-Type': 'application/json'
           }
        }
        try{
           const response=await fetch(url,options);
           if (!response.ok) {
             throw new Error(`Error: ${response.status}`);
           }
           const data=await response.json();
           setData(data);
           setLoading(false);
        }catch(error){
           console.error(error);
           setLoading(false);
        }
     }
     useEffect(()=>{
        loadData();
     },[])

     // tìm kiếm 
     const filteredData = data.filter(item => item.title.toLowerCase().includes(search.toLowerCase()));
     // chuyển qua details
     const handleNext=(productID: string)=>{
        navigation.navigate("Detail", { productID });
     }
     // trước khi load dữ liệu
     if (loading) {
        return (
            <View>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }
    return(
    <>
        <GiCungDuoc title1="Danh Muc" title2="Xem Them"/>
        <View style = {styles.container}>
                <FlatList data={filteredData} 
                    renderItem={({item})=><Product name={item.title} image={item.imageUrl}
                    onPress={() => handleNext(item.productId)}/>}
                    keyExtractor={(item, index) => index.toString()}/>
        </View>
    </>
)
}
const styles = StyleSheet.create({
    container:{
       flex:1,
       paddingHorizontal: 10,
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