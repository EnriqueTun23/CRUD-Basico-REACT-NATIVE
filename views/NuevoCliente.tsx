import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {
  TextInput,
  Headline,
  Button,
  Paragraph,
  Dialog,
  Portal,
} from 'react-native-paper';
import {globalStyles} from '../styles/global';
import axios from 'axios';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './route/ListRoute';

type Props = NativeStackScreenProps<RootStackParamList, 'NuevoCliente'>;

export const NuevoCliente = ({navigation, route}: Props) => {
  const { setConsultarAPI } = route.params;
  // campos del formulario
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [empresa, setEmpresa] = useState('');

  const [alerta, setAlerta] = useState(false);

  // detectar si estamos editando o no
  useEffect(() => {
    if (route.params.cliente) {
      const { nombre, telefono, email, empresa } = route.params.cliente;
      setNombre(nombre);
      setTelefono(telefono);
      setEmail(email);
      setEmpresa(empresa);
    }
  }, [route.params.cliente]);

  const guardarCliente = async () => {
    // validar
    if (nombre === '' || telefono === '' || email === '' || empresa === '') {
      setAlerta(true);
      return;
    }
    // generar cliente

    const cliente = {nombre, telefono, email, empresa};
    // guardar Cliente
    if (route.params.cliente) {
      const {id} =  route.params.cliente;
      cliente.id = id;
      const url = `http://192.168.1.119:3000/clientes/${id}`;
      try {
        await axios.put(url, cliente);
      } catch (error) {
        console.log(error);
      }
    }else {
        try {
          await axios.post('http://192.168.1.119:3000/clientes', cliente);
        } catch (err) {
          console.error(err);
        }

    }
    // redireccionar
    navigation.navigate('Inicio');
    // limpiar form
    setNombre('');
    setTelefono('');
    setEmail('');
    setEmpresa('');
    // cambiar el true para traernos el nuevo cliente
    setConsultarAPI(true);
  };

  return (
    <View style={globalStyles.contenedor}>
      <Headline style={globalStyles.titulo}>Añadir Nuevo Cliente</Headline>
      <TextInput
        label="Nombre"
        placeholder="Juan"
        style={styles.input}
        onChangeText={texto => setNombre(texto)}
        value={nombre}
      />
      <TextInput
        label="Teléfono"
        placeholder="1236458970"
        style={styles.input}
        onChangeText={texto => setTelefono(texto)}
        value={telefono}
      />
      <TextInput
        label="Correo"
        placeholder="entun@gmail.com"
        style={styles.input}
        onChangeText={texto => setEmail(texto)}
        value={email}
      />
      <TextInput
        label="Empresa"
        placeholder="Nombre empresa"
        style={styles.input}
        onChangeText={texto => setEmpresa(texto)}
        value={empresa}
      />
      <Button
        icon="pencil-circle"
        mode="contained"
        onPress={() => guardarCliente()}>
        Guardar Cliente
      </Button>

      <Portal>
        <Dialog visible={alerta} onDismiss={() => setAlerta(false)}>
          <Dialog.Title>Error</Dialog.Title>
          <Dialog.Content>
            <Paragraph>Todos los campos son obligatorios</Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => setAlerta(false)}>Ok</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    marginBottom: 20,
    backgroundColor: 'transparent',
  },
});
