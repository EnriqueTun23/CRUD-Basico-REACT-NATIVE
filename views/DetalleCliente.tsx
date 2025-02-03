import React from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { RootStackParamList } from './route/ListRoute';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, Headline, Subheading, Text, FAB } from 'react-native-paper';
import { globalStyles } from '../styles/global';
import axios from 'axios';

type Props = NativeStackScreenProps<RootStackParamList, 'DetalleCliente'>
export const DetalleCliente = ({route, navigation}: Props) => {
  const { nombre, telefono, email, empresa, id } =  route.params.item;
  const { setConsultarAPI } =  route.params;

  const mostrarConfirmacion = () => {
    Alert.alert('¿Deseas eliminar este cliente?', 'Un contacto eliminado no se puede recuperar', [ { text: 'Si eliminar', onPress: () => eliminarContacto() }, { text: 'Cancelar', style: 'cancel'}]);

  };
  const eliminarContacto = async () => {
    const url = `http://192.168.1.119:3000/clientes/${id}`;
    try {
      await axios.delete(url);
    } catch (error) {
      console.error(error);
    }
    // redireccionar
    navigation.navigate('Inicio');
    // consultar la api
    setConsultarAPI(true);
  }
  return (
    <View style={globalStyles.contenedor}>
      <Headline style={globalStyles.titulo}>
        {nombre}
      </Headline>
      <Text style={styles.text}>Empresa: <Subheading>{empresa}</Subheading>  </Text>
      <Text style={styles.text}>Correo: <Subheading>{email}</Subheading>  </Text>
      <Text style={styles.text}>Telefono: <Subheading>{telefono}</Subheading>  </Text>

      <Button style={styles.boton} mode="contained" icon="cancel" onPress={() => mostrarConfirmacion() }>
          Eliminar Cliente
      </Button>
      <FAB
              icon="pencil"
              style={globalStyles.fab}
              onPress={() => navigation.navigate('NuevoCliente', {setConsultarAPI, cliente: route.params.item})}
            />
    </View>
  );
};

const styles =  StyleSheet.create({
  text: {
    marginBottom: 20,
    fontSize: 18,
  },
  boton: {
    marginTop: 100,
    backgroundColor: 'red',
  },
});
