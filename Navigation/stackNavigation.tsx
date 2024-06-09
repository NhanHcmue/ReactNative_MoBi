import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "../screen/login/LoginScreen";
import Details from "../screen/details/Details";
import Address from "../screen/payment/Address";
import Confirmation from "../screen/payment/Confirmation";
import ListProduct from "../screen/home/ListProduct";
import DrawerNavigator from './drawerNavigation';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Main" component={DrawerNavigator} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Address" component={Address} />
      <Stack.Screen name="Confirm" component={Confirmation} />
      <Stack.Screen name="Product" component={ListProduct} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
