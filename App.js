import React from "react";
import HomeScreen from "./screen/home/HomeScreen";
import LoginScreen from "./screen/login/LoginScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Details from "./screen/details/Details";
const stack=createNativeStackNavigator();
const App = () => {
  return(
  <NavigationContainer>
    <stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <stack.Screen name="Login" component={LoginScreen}/>
      <stack.Screen name="Home" component={HomeScreen}/>
      <stack.Screen name="Detail" component={Details}/>
    </stack.Navigator>
  </NavigationContainer>
  )
};
export default App;
