import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeStackNavigator, MiAgendaStackNavigation } from './src/components/StackNavigation';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
      screenOptions= {({route})=> ({
        tabBarIcon: ({size, color})=> {
        switch (route.name){
        case "Home":
          return (
            <Ionicons name="md-home-sharp" size={size} color={color}/>
          )
          
        case "Mi agenda":
          return (
            <Ionicons name="md-calendar-sharp" size={size} color={color}/> 
          )
        }
      }})}
      tabBarOptions= {{
        inactiveTintColor:"rgba(0, 0, 0, 0.2)",
        activeTintColor:"rgba(88, 71, 153, 1)"
      }}>
        <Tab.Screen name="Home" component={HomeStackNavigator} />
        <Tab.Screen name="Mi agenda" component={MiAgendaStackNavigation} />
      </Tab.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Roboto'
  },
});
