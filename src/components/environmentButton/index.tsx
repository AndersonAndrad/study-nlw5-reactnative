import React from 'react';
import { View, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

// interfaces
import { IEnvironmentButtonProps } from './environmentButton.interface';

// styles
import { styles } from './styles';

export function EnvironmentButton({title, active= false, ...rest}: IEnvironmentButtonProps){
  return(
    <RectButton style={[styles.container, active && styles.containerActive]} {...rest}>
      <Text style={[styles.text, active && styles.textActive]} >{title}</Text>
    </RectButton>
  ); 
}