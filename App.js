import React from "react";
import HomeScreen from "./screen/home/HomeScreen";
import LoginScreen from "./screen/login/LoginScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Details from "./screen/details/Details";
import Cart from "./screen/payment/Cart";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StackNavigator from "./Navigation/stackNavigation";
import { CartProvider } from "./Context/cartContext";
import DrawNavigator from "./Navigation/drawerNavigation";
import { Keyboard, TouchableWithoutFeedback } from "react-native";

const App = () => {
  return (

  <CartProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
  </CartProvider>
 
  );
};

export default App;
