import {NavigationContainer} from '@react-navigation/native';

import React from 'react';
import HomeScreenStack from './HomeStacksScreen';

function Navigation() {
  return (
    <NavigationContainer>
      <HomeScreenStack />
    </NavigationContainer>
  );
}

export default Navigation;
