
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, Modal } from 'react-native';
import { Picker, Container, Content, CardItem, Left, Body, Button, Card, Title } from "native-base";
const header = require('../../assets/Header.png');


import Calendar from '../components/calendarHome'



import data from '../../data/events.json'

let dataEvents = data.events;

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
      <Content style={{ flex: 1 , flexDirection: 'row' }} padder>{
        dataEvents.map((events, index) => {
          return (
              <Card style={{ flex: 2, flexDirection: 'row', }} >
                <CardItem>
                  <Left>
                    <Body>
                      <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Monserrate_Sanctuary.JPG/1200px-Monserrate_Sanctuary.JPG' }} style={{ height: 80, width: 80, borderRadius: 5, margin: 0 }} />
                    </Body>
                  </Left>
                </CardItem>
                <CardItem style={{ flex: 2, flexDirection: 'column' }}>
                  <Body style={{width:170, height:30}}>
                    <Text style={ stylesHome.textName}>{events.name}</Text>
                    <Text style={stylesHome.textDetails}>{events.details}</Text>
                    <Text style={stylesHome.textDate}>{events.date}</Text>
                    <Button onPress={handlePressButton} title="crear recordatorio"></Button>
                  </Body>
                  <Body style={{ flex: 2, flexDirection: 'row' }}>
                    <TouchableOpacity style={stylesHome.boton} onPress={() => objNavigate.navigate('Evento')}>
                      <Text style={stylesHome.textBoton} >Ver más</Text></TouchableOpacity>
                    <TouchableOpacity style={stylesHome.boton} onPress={() => objNavigate.navigate('Mi agenda')}>
                <Text style={stylesHome.textBoton}>Reservar</Text>
              </TouchableOpacity>
                  </Body>
                </CardItem>
              </Card>
          )
        }
        )
      }
      </Content>
  )
}


export default function Home({navigation}) {
  const [selectedValue, setSelectedValue] = useState("kennedy");
  let mapCategory = dataEvents.map((element) => element.category);
  let unicoCategory = [...new Set(mapCategory)];
  console.log(unicoCategory);
  let mapUbicacion = dataEvents.map((element, index)=> element.locality);
  let unicaUbicacion = [...new Set(mapUbicacion)];


  const localidades = ()=>{
    let arrayLocality = [];
    console.log(arrayLocality); 
    for ( let i= 0; i < dataEvents.length; i++) {
    let localidad = dataEvents[i].locality;
    for (let j= 0; j < localidad.length; j++){
      let allLocality = localidad[j];
      arrayLocality.push(allLocality);
    }
    }
  }
  localidades();

    return (
      <Container style={{ flex: 1 , justifyContent:'center', alignItems: 'center' }} >
<Content>

        <Image  source={header} style={stylesHome.imagen} />
      <View style={stylesHome.containerSelect} >
      <Picker
        selectedValue={selectedValue}
        style={stylesHome.select} 
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
        <Picker.Item label="Ubicación" value="java" padder/>{
          unicaUbicacion.map((element)=>
          <Picker.Item label={element} value="js" /> 
          ) 
        } 
      </Picker>
      <Picker
        selectedValue={selectedValue}
        style= {stylesHome.select} 
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)} >
        <Picker.Item label="Categorias" value="java" padder/>{
          unicoCategory.map((event) => 
          <Picker.Item label={event} value="js"/>
            )}
      </Picker>
      </View>
      <View>
      <Calendar>        
      </Calendar>
      </View>
      <CardEvent objNavigate={navigation}/>            
      </Content>
      </Container>
  
        
    ) }

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
    borderRadius: 5,
    textAlign: 'center',
    padding: 2,
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
  },
  textBoton: {
    color: '#584799',
    fontSize: 17,
    fontWeight: 600
  },
  textName:{
    color: '#584799', 
    fontWeight: 600, 
    fontSize: 20
  },
  textDate :{ 
    textAlign: 'justify',
    fontSize: 15 },
  textDetails: {
    width: 190,
    textAlign: 'justify',
    marginBottom: 5
  }
});