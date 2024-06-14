import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform } from "react-native";
import Header from "../compoments/Header";
import ListCategory from "./ListCategory";
import ListProduct from "./ListProduct";

const HomeScreen = () => {
    const [search, setSearch] = useState('');

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <Header search={search} setSearch={setSearch} />
                    <ListCategory />
                    <ListProduct search={search} setSearch={setSearch} />
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
});

export default HomeScreen;
