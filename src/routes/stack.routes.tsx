import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// styles
import colors from '../styles/colors';

// pages
import { Welcome } from '../pages/welcome';
import { UserIndetification } from '../pages/userIndentification';
import { Confirmation } from '../pages/confirmation';


const StackRoutes = createStackNavigator(); 

export default function AppRoutes(){
  return(
    <StackRoutes.Navigator headerMode='none' screenOptions={{cardStyle: {backgroundColor: colors.white}}}>
      <StackRoutes.Screen name='welcome' component={Welcome}/>
      <StackRoutes.Screen name='userIndentification' component={UserIndetification}/>
      <StackRoutes.Screen name='confirmation' component={Confirmation}/>
    </StackRoutes.Navigator>
  )
}