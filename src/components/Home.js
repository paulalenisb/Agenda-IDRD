import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, Text, View, Button } from 'react-native';

const event={
  name: "Recorrido bicicleta",
  date:"2021-02-23"
}

const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem('@storage_Key', jsonValue)
  } catch (e) {
    // saving error
  }
}


const handlePressButton = () => {
   alert("crear recordatorio")
   storeData(event)
}
  
export default function Home({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
        title="Ver más"
        onPress={() => navigation.navigate('Evento')}
      />
    <Button onPress={handlePressButton} title="crear recordatorio"></Button>
      </View>
    )
}
