import React, { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet, StatusBar, TextInput, TouchableOpacity, Alert, Image, TouchableWithoutFeedback, Keyboard } from "react-native";
import Fontisto from '@expo/vector-icons/Fontisto';
import { useNavigation } from '@react-navigation/native';
import { child, get, getDatabase, ref } from "firebase/database";
import { firebaseapp } from "../../Database/Firebase";
import { CartContext } from "../../Context/cartContext";

const LoginScreen = () => {
    const navigation = useNavigation();
    const{setuserID}=useContext(CartContext);
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const checkLogin = async () => {
        const dbRef = ref(getDatabase(firebaseapp));
        try {
            const snapshot = await get(child(dbRef, 'User'));
            if (snapshot.exists()) {
                const userData = Object.values(snapshot.val()).find(user => user.username === username);
                if (userData && userData.password === password) {
                    setuserID(userData.userID);
                    navigation.navigate("Main");
                } else {
                    Alert.alert('Inform', 'Username or password was wrong');
                }
            } else {
                Alert.alert('Inform', 'The account does not exist');
            }
        } catch (error) {
            console.error(error);
            Alert.alert('Error', 'An error occurred while checking login');
        }
    }

    const handleNext = () => {
        checkLogin();
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
            <StatusBar />
            <View style={{ alignItems: 'center' }}>
                <Text style={styles.title}>Login</Text>
            </View>
            <View style={styles.diss}>
                <Text style={{ fontSize: 20 }}>By signing in you are agreeing</Text>
                <View style={{ flexDirection: 'row', alignContent: 'center' }}>
                    <Text style={{ fontSize: 20 }}>our </Text>
                    <TouchableOpacity><Text style={{ fontSize: 20, color: '#00feff' }}>Term and privacy policy</Text></TouchableOpacity>
                </View>
            </View>
            <View style={styles.form}>
                <View style={styles.group}>
                    <Fontisto name='email' style={styles.icon} />
                    <TextInput placeholder="Ten Dang Nhap" style={styles.ip} onChangeText={setUsername} />
                </View>
                <View style={styles.group}>
                    <Fontisto name='locked' style={styles.icon} />
                    <TextInput placeholder="Mat khau" style={styles.mk} secureTextEntry={true} onChangeText={setPassword} />
                </View>
            </View>
            <View>
                <TouchableOpacity style={{ paddingHorizontal: 25 }} onPress={handleNext}>
                    <Text style={styles.conphom}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        flex: 1,
    },
    icon: {
        fontSize: 25,
        position: 'absolute',
        zIndex: 1000,
        top: 27,
        left: 20,
    },
    title: {
        paddingVertical: 40,
        fontSize: 30,
        fontWeight: 'bold',
    },
    diss: {
        alignItems: 'center',
        padding: 10,
    },
    form: {
        paddingTop: 30,
    },
    group: {
        padding: 20,
    },
    ip: {
        borderColor: 'gray',
        borderBottomWidth: 1,
        padding: 5,
        fontSize: 17,
        paddingLeft: 30,
    },
    mk: {
        borderColor: 'gray',
        borderBottomWidth: 1,
        padding: 5,
        fontSize: 17,
        paddingLeft: 30,
    },
    conphom: {
        textAlign: 'center',
        fontSize: 20,
        backgroundColor: '#0fffff',
        borderRadius: 5,
        marginTop: 30,
        paddingVertical: 10,
    }
})

export default LoginScreen;
