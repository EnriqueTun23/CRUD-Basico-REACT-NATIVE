/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Inicio} from './views/Inicio';
import {DetalleCliente} from './views/DetalleCliente';
import {NuevoCliente} from './views/NuevoCliente';

import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {Barra} from './components/Barra';
import { RootStackParamList } from './views/route/ListRoute';

const Stack = createNativeStackNavigator<RootStackParamList>();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#1774F2',
    accent: '#0655BF',
  },
};

function App(): React.JSX.Element {
  return (
    <>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Inicio"
            screenOptions={{
              headerStyle: {
                backgroundColor: theme.colors.primary,
              },
              headerTintColor: theme.colors.surface,
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}>
            <Stack.Screen
              name="Inicio"
              component={Inicio}
              options={({navigation, route}) => ({
                headerTitleAlign: 'center',
                // eslint-disable-next-line react/no-unstable-nested-components
                headerLeft: props => (
                  <Barra {...props} navigation={navigation} route={route} />
                ),
              })}
            />
            <Stack.Screen
              name="NuevoCliente"
              component={NuevoCliente}
              options={{title: 'Nuevo Cliente'}}
            />
            <Stack.Screen
              name="DetalleCliente"
              component={DetalleCliente}
              options={{title: 'Detalle Cliente'}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </>
  );
}


export default App;
