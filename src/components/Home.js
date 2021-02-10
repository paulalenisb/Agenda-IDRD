
import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView} from 'react-native';
import {Picker,  Container, Content, CardItem, Left, Body, Button, Card, Title} from "native-base";
const header= require('../../assets/Header.png'); 

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




const CardEvent= ({objNavigate}) => {
  
  return (
    <ScrollView>
        <Card style={{flex: 1, flexDirection: 'row'}}>
          <CardItem>
            <Left>
              <Body>
              <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Monserrate_Sanctuary.JPG/1200px-Monserrate_Sanctuary.JPG'}} style={{height: 50, width: 50, flex: 1, borderRadius:5}}/>
              </Body>
            </Left>
          </CardItem>
          <CardItem style={{flex: 2, flexDirection: 'column'}}>
            <Body>
            <Title style={{color: 'black', fontSize: 15}}>{events.name}</Title>
            <Text style={{textAlign: 'justify', fontSize: 10}}>{events.details}</Text>
            </Body>
            <Body style={{flex: 1, flexDirection: 'row'}}>
            <TouchableOpacity style ={stylesHome.boton} onPress={() => objNavigate.navigate('Evento')}>
            <Text style={{ textAlign: 'center'}}  >Ver más</Text></TouchableOpacity>
//             <TouchableOpacity style ={stylesHome.boton} onPress={()=> objNavigate.navigate('Mi agenda')}>
              <TouchableOpacity style ={stylesHome.boton} onPress={handlePressButton}>
            <Text style={{ textAlign: 'center'}}>Reservar</Text>
      </TouchableOpacity>
            </Body>
          </CardItem>
        </Card>
</ScrollView>
            
            
  );
} 

export default function Home({navigation}) {
  const [selectedValue, setSelectedValue] = useState("kennedy");
    return (
        <ScrollView>
        <Image  source={header} style={stylesHome.imagen} />
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
        style= {stylesHome.select} 
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)} >
        <Picker.Item label="Categorias" value="java" />
        <Picker.Item label="Caminatas" value="js" />
      </Picker>
      </View>
      <View>
          <Content padder>{
        dataEvents.map((events, index) => {
            <CardEvent objNavigate={navigation}
            events={events}/>
            
        }

        )
      }

      </Content>

      
      </View>
    </ScrollView>
    )



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
   margin: 15
  }
 });