// dependences
import React from 'react';
import { Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

// interfaces
import { IPlantCardProps } from './plantCard.interface';

// styles
import { styles } from './styles';

export function PlantCard({ data, ...rest}: IPlantCardProps){
  return(
    <RectButton style={styles.container} {...rest}>
      <Text style={styles.name}>{data.name}</Text>
    </RectButton>
  )
}
