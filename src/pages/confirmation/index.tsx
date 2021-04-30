import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

// shared components
import { Button } from '../../components/button/button.compopnent';

// styles
import { styles } from './styles';

export function Confirmation(){
  return(
  <SafeAreaView style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.title}>😍</Text>
    </View>
    <View style={styles.body}>
      <Text style={styles.description}> Agora vamos comecar a cuidar das suas plantas com muito cuidado.</Text>
    </View>
    <View style={styles.footer}>
      <Button title='Comecar'/>
    </View>
  </SafeAreaView>)
}