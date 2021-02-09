import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeStackNavigator, MiAgendaStackNavigation } from './src/components/StackNavigation';

// const Stack = createStackNavigator();

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>{
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStackNavigator} />
        <Tab.Screen name="Contact" component={MiAgendaStackNavigation} />
      </Tab.Navigator>

      }</NavigationContainer>


  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
