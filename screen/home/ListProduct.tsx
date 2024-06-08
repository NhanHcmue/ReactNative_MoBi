import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from "react-native";
import GiCungDuoc from "../compoments/GiCungDuoc";
import { useNavigation } from "@react-navigation/native";
import { baseUrl } from "./constraint";
import Product from "../compoments/customProduct";
import { child, get, getDatabase, ref } from "firebase/database";
import { firebaseapp } from "../../Database/Firebase";
const ListProduct = ({ search }) => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
// tải dữ liệu từ firebase
  const loadData = async () => {
    setLoading(true);
    const dbRef = ref(getDatabase(firebaseapp));
    try {
      const snapshot = await get(child(dbRef, 'products'));
      if (snapshot.exists()) {
        setData(snapshot.val());
      } else {
        console.warn("No data available");
      }
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  const filteredData = data.filter(item => item.title.toLowerCase().includes(search.toLowerCase()));

  const handleNext = (productID) => {
    navigation.navigate("Details", { productID }); 
  };

  if (loading) {
    return (
      <View>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <>
      <GiCungDuoc title1="Danh Muc" title2="Xem Them" />
      <View style={styles.container}>
        <FlatList
          data={filteredData}
          renderItem={({ item }) => (
            <Product
              name={item.title}
              image={item.imageUrl}
              onPress={() => handleNext(item.productId)}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
});

export default ListProduct;