import React, { useState } from "react";
import {Text, View,StyleSheet} from "react-native";
import Header from "../compoments/Header";
import ListCategory from "./ListCategory";
import ListProduct from "./ListProduct";


const HomeScreen = () => {
    const [search, setSearch] = useState('');
    return (
        <View style={styles.container}>
            <Header search={search} setSearch={setSearch} />
            <ListCategory/>
            <ListProduct search={search} setSearch={setSearch}/>
        </View>
    )
};
const styles=StyleSheet.create({
    container:{
        flex:1,
    }
})
export default HomeScreen;