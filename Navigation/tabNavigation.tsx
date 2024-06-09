import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from "../screen/home/HomeScreen";
import Cart from "../screen/payment/Cart";
import { CartContext } from "../Context/cartContext";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const { cart } = useContext(CartContext);
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Cart') {
            iconName = focused ? 'shopping-cart' : 'shopping-cart';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'lightsalmon',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Cart" component={Cart}
        options={{ tabBarBadge: cart.length > 0 ? cart.length : null}}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
