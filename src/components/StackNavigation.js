import React from 'React';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './Home'
import MiAgenda from './MiAgenda';
import Evento from './Evento';

const Stack = createStackNavigator();

const screenOptionStyle = {
    headerStyle: {
      backgroundColor: "#9AC4F8",
    },
    headerTintColor: "white",
    headerBackTitle: "Back",
  };

const HomeStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Evento" component={Evento} />
      </Stack.Navigator>
    );
  }

  const MiAgendaStackNavigation = () => {
      return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="Mi Agenda" component={MiAgenda} />
      </Stack.Navigator>
      )
  }

  export { HomeStackNavigator, MiAgendaStackNavigation}