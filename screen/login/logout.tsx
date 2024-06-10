import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { CartContext } from '../../Context/cartContext';

const LogoutScreen = () => {
  const navigation = useNavigation();
  const {clearUserID}=useContext(CartContext);
  useEffect(() => {
    const handleLogout = () => {
      clearUserID();
      navigation.reset({
        index: 0,
        routes: [{ name: 'Login' }],
      });
    };

    handleLogout();
  }, []);

  return null; // You can return any UI component here if needed
};

export default LogoutScreen;
