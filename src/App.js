import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';
import { AppContextProvider } from '@context/AppContextProvider';

export default function App() {
  return (
    <AppContextProvider>
      {/* NavigationContainer disabled for Expo */}
      {/* <NavigationContainer> */}
        <AppNavigator />
      {/* </NavigationContainer> */}
    </AppContextProvider>
  );
}