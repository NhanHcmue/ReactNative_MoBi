import React, { useContext } from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import TabNavigator from './tabNavigation';
import LogoutScreen from '../screen/login/logout';
import { View, Text, StyleSheet } from 'react-native';
import { CartContext } from '../Context/cartContext';
import Cart from '../screen/payment/Cart';
import Ordered from '../screen/payment/Ordered';

const Drawer = createDrawerNavigator();
// điều chỉnh lại cho drawer 
const CustomDrawer = (props) => {
  const { userID } = useContext(CartContext);

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.userInfoSection}>
        <Text style={styles.userInfoText}>UserID: {userID}</Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Main" component={TabNavigator} options={{ headerShown: false }} />
      <Drawer.Screen name="Ordered" component={Ordered} options={{ headerShown: false }} />
      <Drawer.Screen name="Logout" component={LogoutScreen} options={{ headerShown: false }} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  userInfoSection: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  userInfoText: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});

export default DrawerNavigator;
