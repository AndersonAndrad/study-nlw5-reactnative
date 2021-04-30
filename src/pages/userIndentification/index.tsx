import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, Text, View, TextInput, Platform, KeyboardAvoidingView} from 'react-native';

// shared components
import { Button } from '../../components/button/button.compopnent';

// styles
import { styles } from './styles';

export function UserIndetification(){
  const { navigate } = useNavigation();

  function navigateToConfirm(){
    navigate('confirmation');
  }

  return(
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.emoji}> 😍 </Text>
          <Text style={styles.title}>Que bom ter voce por aqui</Text>
          <Text style={styles.title}>qual o seu nome?</Text>
        </View> 
        <View style={styles.form}>
          <TextInput style={styles.input} placeholder='Digite seu nome'/>
        </View>
        <View style={styles.footer}>
          <Button title='Confirmar' onPress={() => navigateToConfirm()} />
        </View>
    </SafeAreaView>
  )
}