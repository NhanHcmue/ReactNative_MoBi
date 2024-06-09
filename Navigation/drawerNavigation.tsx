import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './tabNavigation';
import LogoutScreen from '../screen/login/logout';

const Drawer = createDrawerNavigator();

const DrawerNavigator = ({ navigation }) => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="SubHome" component={TabNavigator} options={{ headerShown: false }} />
      <Drawer.Screen
        name="Log out"
        component={LogoutScreen}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
