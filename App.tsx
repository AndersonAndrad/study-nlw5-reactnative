import React from 'react';
import {  useFonts, Roboto_400Regular, Roboto_700Bold  } from '@expo-google-fonts/roboto';
import ExpoLoaded from 'expo-app-loading';

// routes
import Routes from './src/routes';

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });

  if(!fontsLoaded){
    return <ExpoLoaded/>
  }

  return (
    <Routes/>
  );  
}