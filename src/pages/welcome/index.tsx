import React from 'react';
import { SafeAreaView, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';

// icons
import { Entypo } from '@expo/vector-icons';

// images
import wateringImg from '../../assets/watering.png';

// styles
import { styles } from './style';

export function Welcome(){
  const { navigate } = useNavigation(); 

  function navigateToUserIndentification(){
    navigate('userIndentification');
  }  

  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Gerencie {'\n'} sua planta de forma {'\n'} simples</Text>
      <Image style={styles.image} source={wateringImg} resizeMode='contain' />
      <Text style={styles.subtitle}>
        Nao esquca mais de regar suas plantas.
       {'\n'} Nos cuidamos de lembrar voce sempre que precisar.
      </Text>

      <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={() => navigateToUserIndentification()}>
         <Entypo name='chevron-right' style={styles.buttonIcon} />
      </TouchableOpacity>
      
    </SafeAreaView> 
  ) 
}