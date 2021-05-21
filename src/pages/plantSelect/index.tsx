import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// components shared
import { Header } from '../../components/header';

// style
import { styles } from './styles';

export function PlantSelect(){
  const { navigate } = useNavigation();
 
  return(
    <View style={styles.container}>
      <Header/>
    </View>
  );
}