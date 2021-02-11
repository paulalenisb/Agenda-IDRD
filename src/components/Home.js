
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Picker, Container, Content, CardItem, Left, Body, Button, Card, Title } from "native-base";
const header = require('../../assets/Header.png');

import Calendar from '../components/calendarHome'



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
  const [selectedValue, setSelectedValue] = useState("kennedy");
  return (
    <ScrollView>
      <Image source={header} style={stylesHome.imagen} />
      <View style={stylesHome.containerSelect} >
        <Picker
          selectedValue={selectedValue}
          style={stylesHome.select}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="Ubicación" value="java" />
          <Picker.Item label="Kennedy" value="js" />
        </Picker>
        <Picker
          selectedValue={selectedValue}
          style={stylesHome.select}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)} >
          <Picker.Item label="Categorias" value="java" />
          <Picker.Item label="Caminatas" value="js" />
        </Picker>
      </View>
     
      <Calendar>
        
    
      </Calendar>

      <CardEvent />
      <CardEvent />
      
    </ScrollView>
  )
}

const CardEvent = ({ navigation }) => {

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
              <Text style={{ color: '#584799', fontWeight: 600, fontSize: 15 }}>{events.name}</Text>
                <Text  style={{ textAlign: 'justify', fontSize: 10 }}>{events.date}</Text>
                <Button onPress={handlePressButton} title="crear recordatorio"></Button>
            </Body>

            <Body style={{ flex: 2, flexDirection: 'row' }}>
              <TouchableOpacity style={stylesHome.boton} onPress={() => navigation.navigate('Evento')}>
                <Text style={{ textAlign: 'center' }} >Ver más</Text></TouchableOpacity>
              <TouchableOpacity style={stylesHome.boton} onPress={() => navigation.navigate('Mi agenda')}>
                <Text style={{ textAlign: 'center' }}>Reservar</Text>
              </TouchableOpacity>
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


const stylesHome = StyleSheet.create({
  select: {
    borderRadius: 10,
    width: 120,
    height: 30,
    margin: 10
  },
  boton: {
    backgroundColor: "rgba(89, 251, 218, 1)",
    width: 80,
    height: 30,
    margin: 10,
    borderRadius: 5
  },
  imagen: {
    width: 300,
    height: 100,
    marginTop: 10
  },
  containerSelect: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 20
  }
});