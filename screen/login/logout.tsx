import React from 'react';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const LogoutScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const handleLogout = () => {
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
