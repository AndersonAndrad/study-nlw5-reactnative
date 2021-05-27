// dependences
import React from 'react';
import { Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { SvgFromUri } from 'react-native-svg';

// interfaces
import { IPlantCardProps } from './plantCard.interface';

// styles
import { styles } from './styles';

export function PlantCard({ data, ...rest}: IPlantCardProps){
  return(
    <RectButton style={styles.container} {...rest}>
      <SvgFromUri uri={data.photo} width={70} height={70} />
      <Text style={styles.name}>{data.name}</Text>
    </RectButton>
  )
}
