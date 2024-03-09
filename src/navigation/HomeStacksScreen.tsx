import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
const StackHomeScreen = createNativeStackNavigator();
const HomeScreenStack = () => {
  return (
    <StackHomeScreen.Navigator initialRouteName="Home">
      <StackHomeScreen.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </StackHomeScreen.Navigator>
  );
};

export default HomeScreenStack;
