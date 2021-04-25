import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

// interface
import { IButton } from './button.interface';

// styles
import { styles } from './button.style';

export function Button({title, ...props}: IButton){
  return(
    <TouchableOpacity activeOpacity={0.8} style={styles.button} {...props}>
      <Text style={styles.text}> {title} </Text>
    </TouchableOpacity>
  );
}