import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Button } from 'react-native-paper';
import { RootStackParamList } from '../views/route/ListRoute';

type Props = NativeStackScreenProps<RootStackParamList, 'Inicio'>;
export const Barra = ({ navigation }: Props) => {

 const handlePress = () => {
    navigation.navigate('NuevoCliente');
 };
  return (
    <Button icon="plus-circle" textColor='#fff' onPress={() => handlePress()}>Barra</Button>
  );
};
