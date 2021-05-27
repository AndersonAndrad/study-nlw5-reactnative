// dependencies
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// api
import { api } from '../../services/api.service';

// interfaces
import { IEnviromentProps, IPlantProps } from './plantSelect.interface';

// components shared
import { Header } from '../../components/header';
import { EnvironmentButton } from '../../components/environmentButton';
import { PlantCard } from '../../components/plantCard';

// style
import { styles } from './styles';

export function PlantSelect(){
  const { navigate } = useNavigation();
  const [ environments, setEnvironments ] = useState<IEnviromentProps[]>([]);
  const [ plants, setPlants ] = useState<IPlantProps[]>([]);

  useEffect(() => {
    async function fetchEnvironments(){
      const { data } = await api.get('plants_environments');
      setEnvironments([
        { key: 'all', title: 'Todos' },
        ...data
      ])
    }

    async function fetchPlants(){
      const { data } = await api.get('plants');
      setPlants(data);
    }

    fetchPlants();
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

      <View>
        <FlatList
          data={plants}
          renderItem={({ item }) => (<PlantCard data={{name: item.name, photo: item.photo}}/>)}
          numColumns={2}
          showsVerticalScrollIndicator={false}
        />
      </View>

    </View>
  );
}

//TODO:implements the plants card, bug not permite slide the list
//TODO: Video time 1hour and 6minutes