
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

const CardEvent = ({ objNavigate }) => {

  return (
    <ScrollView contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Content padder>
        {
          dataEvents.map((events, index) => {
            console.log(index)
            return (
              <ScrollView>
                <Card style={{ flex: 1, flexDirection: 'row' }}>
                  <CardItem>
                    <Left>
                      <Body>
                        <Image source={{ uri: events.img }} style={{ height: 100, width: 100, flex: 1, borderRadius: 5 }} />
                      </Body>
                    </Left>
                  </CardItem>

                  <CardItem style={{ flex: 2, flexDirection: 'column' }}>
                    <Body>
                      <Text style={{ color: '#584799', fontWeight: '600', fontSize: 20 }}>{events.name}</Text>
                      <Text>{events.details}</Text>
                    <Button onPress={handlePressButton} title="crear recordatorio"></Button>
                    </Body>

                    <Body style={{ flex: 2, flexDirection: 'row', marginTop: -30, marginLeft: -10 }}>
                      <TouchableOpacity style={stylesHome.boton} onPress={() => objNavigate.navigate('Evento',{index})}>
                        <Text style={{ textAlign: 'center' }} >Ver más</Text></TouchableOpacity>
                      <TouchableOpacity style={stylesHome.boton} onPress={() => objNavigate.navigate('Mi agenda')}>
                        <Text style={{ textAlign: 'center' }}>Reservar</Text>
                      </TouchableOpacity>
                    </Body>

                  </CardItem>
                </Card>


              </ScrollView>
            )
          }
          )
        }

      </Content>

    </ScrollView>
  )
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
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
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
      <View>
        <Calendar>
        </Calendar>
        <Content>
          <CardEvent objNavigate={navigation} />
        </Content>
      </View>
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