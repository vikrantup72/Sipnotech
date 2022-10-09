import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SplashScreen from './src/Screens/AuthScreens/SplashScreen';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigation from './src/Navigation/AuthNavigation';

const App = () => {
  return (
    <NavigationContainer independent={true}>
      <AuthNavigation />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
