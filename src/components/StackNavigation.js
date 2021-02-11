import React from 'React';
import { createStackNavigator } from '@react-navigation/stack';
import { Dimensions } from 'react-native';

import Home from './Home'
import MiAgenda from './MiAgenda';
import Evento from './Evento';

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#584799",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
  headerTitleStyle: {
    fontWeight: 'bold',
  },
    width: Dimensions.get('screen').width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  headerTitleAlign: "center",
};

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={Home} options={{ title: 'AGENDA IDRD', headerStyle: {height: 45, backgroundColor: "#584799"} }} />
      <Stack.Screen name="Evento" component={Evento} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

const MiAgendaStackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Mi Agenda" component={MiAgenda} options={{ title: 'AGENDA IDRD', headerStyle: {height: 45, backgroundColor: "#584799"} }} />
    </Stack.Navigator>
  )
}

export { HomeStackNavigator, MiAgendaStackNavigation }