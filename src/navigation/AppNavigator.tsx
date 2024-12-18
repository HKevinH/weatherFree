import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../screens/HomeScreen/HomeScreen';

export type RootStackParamList = {
  Home: undefined;
  Details: {itemId: number; message: string};
};

const stack = createNativeStackNavigator<RootStackParamList>();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Home">
        <stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Inicio', headerShown: false}}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
};
