import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from "../screen/login/LoginScreen";
import TabNavigator from "./tabNavigation";
import Details from "../screen/details/Details";
import Address from "../screen/payment/Address";
import Confirmation from "../screen/payment/Confirmation";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Main" component={TabNavigator} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Address" component={Address}/>
      <Stack.Screen name="Confirm" component={Confirmation}/>
    </Stack.Navigator>
  );
};

export default StackNavigator;
