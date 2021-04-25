import React from 'react';
import {  useFonts, Roboto_400Regular, Roboto_700Bold  } from '@expo-google-fonts/roboto';
import ExpoLoaded from 'expo-app-loading';

// pages
import { Welcome } from './src/pages/welcome';
import { UserIndetification } from './src/pages/userIndentification';

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });

  if(!fontsLoaded){
    return <ExpoLoaded/>
  }

  return (
    <UserIndetification/>
  );  
}