// dependencies
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// api
import { api } from '../../services/api.service';

// interfaces
import { IEnvironmentsProps, IPlantProps } from './plantSelect.interface';

// components shared
import { Header } from '../../components/header';
import { EnvironmentButton } from '../../components/environmentButton';
import { PlantCard } from '../../components/plantCard';
import { Load } from '../../components/load';

// style
import { styles } from './styles';

export function PlantSelect(){
  const { navigate } = useNavigation();
  const [ environments, setEnvironments ] = useState<IEnvironmentsProps[]>([]);
  const [ environmentSelected, setEnvironmentSelected ] = useState('all');
  const [ plants, setPlants ] = useState<IPlantProps[]>([]);
  const [ filteredPlants, setFilteredPlants ] = useState<IPlantProps[]>([]);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    async function fetchEnvironments(){
      const { data } = await api.get('plants_environments');
      setEnvironments([
        { key: 'all', title: 'all' },
        ...data
      ])
    }

    async function fetchPlants(){
      const { data } = await api.get('plants', {params: {_limit: 10}});
      setPlants(data);
    }

    fetchPlants();
    fetchEnvironments();
    setLoading(false);
  },[]);

  function handleEnvironmentSelected(environment: string){
    setEnvironmentSelected(environment);

    if(environment === 'all'){
      return setFilteredPlants(plants);
    }

    const filtered = plants.filter(plant => 
      plant.environments.includes(environment)
    );

    setFilteredPlants(filtered);
  }

  if(loading){return(<Load/>)}

  return(
    <View style={styles.container}>
      <Header/>
      <Text style={styles.title}>Em qual ambiente</Text>
      <Text style={styles.subTitle}>Voce quer colocar sua planta?</Text>

      <View>
        <FlatList
          data={environments}
          renderItem={({ item }) => (
            <EnvironmentButton 
              title={item.title} 
              active={item.key === environmentSelected}
              onPress={() => handleEnvironmentSelected(item.key)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.enviromentList}
        />
      </View>

      <View>
        <FlatList
          data={filteredPlants}
          renderItem={({ item }) => (<PlantCard data={{name: item.name, photo: item.photo}}/>)}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainerStyle}
        />
      </View>

    </View>
  );
}

//TODO: missing add load plants as the user is requesting