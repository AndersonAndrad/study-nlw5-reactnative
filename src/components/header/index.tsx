import React from 'react';
import { View, Text, Image} from 'react-native';

// styles
import { styles } from './styles';

// image 
import UserImage from '../../assets/watering.png';

export function Header(){
  return(
    <View style={styles.container}>
      <View>
        <Text style={styles.getting}>Ola</Text>
        <Text style={styles.userName}>Anderson Andrade</Text>
      </View>

      <Image source={UserImage} style={styles.image}/>
    </View>
  )
}
