// dependencies
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// api
import { api } from '../../services/api.service';

// interfaces
import { IEnviromentProps } from './plantSelect.interface';

// components shared
import { Header } from '../../components/header';
import { EnvironmentButton } from '../../components/environmentButton';

// style
import { styles } from './styles';

export function PlantSelect(){
  const { navigate } = useNavigation();
  const [ environments, setEnvironments ] = useState<IEnviromentProps[]>([]);
 
  useEffect(() => {
    async function fetchEnvironments(){
      const { data } = await api.get('plants_environments');
      setEnvironments([
        { key: 'all', title: 'Todos' },
        ...data
      ])
    }
    fetchEnvironments();
  },[]);

  return(
    <View style={styles.container}>
      <Header/>
      <Text style={styles.title}>Em qual ambiente</Text>
      <Text style={styles.subTitle}>Voce quer colocar sua planta?</Text>

      <View>
        <FlatList
          data={environments}
          renderItem={({ item }) => (
            <EnvironmentButton title={item.title} active={false}/>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.enviromentList}
        />
      </View>

    </View>
  );
}