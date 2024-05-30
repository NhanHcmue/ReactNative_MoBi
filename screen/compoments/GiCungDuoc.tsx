import React from "react";
import {View, Text, StyleSheet} from "react-native";
type GiCungDuocProps = {
    title1: string,
    title2: string,
}

const GiCungDuoc = ({title1, title2}: GiCungDuocProps) => {
    return (
        <View style = {styles.container}>
            <View>
                <Text style = {styles.title1}>{title1}</Text>
            </View>
            <View>
                <Text>{title2}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop:10,
        paddingHorizontal: 10,
    },
    title1:{
        color: 'red',
        fontWeight: 'bold',
    }

})
export default GiCungDuoc;