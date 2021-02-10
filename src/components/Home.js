import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, View, Button, ScrollView } from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Icon,
  Card,
  CardItem,
  Text,
  Body,
  Left,
  Right
} from "native-base";

import data from '../../data/events.json'

console.log(data.events);
const dataEvents = data.events;

const event = {
  name: "Recorrido bicicleta",
  date: "2021-02-23"
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
    <ScrollView contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Ver más"
        onPress={() => navigation.navigate('Evento')}
      />

      <Content padder>{
        dataEvents.map((events, index) => {
          return (
            <ScrollView>
            <Card>
            <CardItem>
              <Body>
              <Text>{events.name}</Text>
                <Text>{events.date}</Text>
                <Button onPress={handlePressButton} title="crear recordatorio"></Button>
              </Body>
            </CardItem>
            </Card>
            </ScrollView>
          )
        }

        // <Text>{events.name}</Text>
          // <EventHome
          //   key={'e' + index}
          //   events={events}/>
          // console.log('hola');

        )
      }

      </Content>

    </ScrollView>
  )
}
