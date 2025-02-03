import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import axios from 'axios';
import {Button, Headline, List, FAB} from 'react-native-paper';
import {globalStyles} from '../styles/global';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from './route/ListRoute';

type Props = NativeStackScreenProps<RootStackParamList, 'Inicio'>;
export const Inicio = ({navigation}: Props) => {
  type Item = {
    nombre: string;
    empresa: string;
    id: number;
    email: string;
    telefono: string;
  };
  const [clientes, setC1ientes] = useState<Item[]>([]);
  const [consultarAPI, setConsultarAPI] = useState<boolean>(true);
  useEffect(() => {
    const getCliente = async () => {
      try {
        const res = await axios.get('http://192.168.1.119:3000/clientes');
        setC1ientes(res.data);
        setConsultarAPI(false);
      } catch (err) {
        console.error(err);
      }
    };

    if (consultarAPI) {
      getCliente();
    }
  }, [consultarAPI]);
  return (
    <View style={globalStyles.contenedor}>
      <Button
        icon="plus-circle"
        onPress={() => navigation.navigate('NuevoCliente', {setConsultarAPI, cliente: null})}>
        Nuevo Cliente
      </Button>
      <Headline style={globalStyles.titulo}>
        {clientes.length > 0 ? 'Clientes' : 'Aún no hay clientes'}
      </Headline>
      <FlatList
        data={clientes}
        keyExtractor={cliente => cliente.id.toString()}
        renderItem={({item}) => (
          <List.Item title={item.nombre} description={item.empresa} onPress={() => navigation.navigate('DetalleCliente', {item, setConsultarAPI})} />
        )}
      />
      <FAB
        icon="plus"
        style={globalStyles.fab}
        onPress={() => navigation.navigate('NuevoCliente', {setConsultarAPI, cliente: null})}
      />
    </View>
  );
};

