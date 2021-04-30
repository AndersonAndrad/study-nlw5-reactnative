import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import StackRouters from './stack.routes';

export default function Routes(){
  return(
    <NavigationContainer>
    <StackRouters/>
  </NavigationContainer>
  )
}