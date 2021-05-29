// dependencies
import React from 'react';
import LootieView from 'lottie-react-native';
import { View } from 'react-native';

// others files
import LoadAnimation from '../../assets/load.json';

// styles
import { styles } from './style'

export function Load(){
  return(
      <View style={styles.container}>
        <LootieView
          source={LoadAnimation}
          autoPlay
          loop
          style={styles.animation}
        />
      </View>
  )
}

