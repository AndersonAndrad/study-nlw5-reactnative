import React from 'react';
import {SafeAreaView, Text, Image, TouchableOpacity } from 'react-native';

// images
import wateringImg from '../../assets/watering.png';

// share-components
import { Button } from '../../components/button/button.compopnent';

// styles
import { styles } from './style';

export function Welcome(){
  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Gerencie {'\n'} sua planta de forma {'\n'} simples</Text>
      <Image style={styles.image} source={wateringImg} />
      <Text style={styles.subtitle}>
        Nao esquca mais de regar suas plantas.
       {'\n'} Nos cuidamos de lembrar voce sempre que precisar.
      </Text>

      <Button title='Next'/>
      
    </SafeAreaView>
  ) 
}