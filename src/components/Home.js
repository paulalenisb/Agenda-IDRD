
import React, { useState } from 'react';
import * as Font from 'expo-font';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, Modal, Alert } from 'react-native';
import { Picker, Container, Content, CardItem, Left, Body, Button, Card, Title } from "native-base";
import Calendar from '../components/calendarHome';
import swal from '@sweetalert/with-react';
import data from '../../data/events.json'

const dataEvents = data.events;
const header = require('../../assets/Header.png');

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    padding: 6,
    fontFamily: "Arial",
    textAlign: "center",
    fontSize: 30,
  },
  title: {
    margin: 4,
    padding: 4,
    color: "#584799",
    fontSize: 24,
    fontWeight: "bold",
  },
  content: {
    margin: 2,
    padding: 4,
    color: "000000",
    fontSize: 20,
    fontWeight: "regular",
  },
  spot: {
    margin: 2,
    padding: 4,
    color: "000000",
    fontSize: 18,
    fontWeight: "regular",
  }
});

const storeData = async (value) => {
  try {
    const jsonValue = await AsyncStorage.getItem("@storage_Key");
    const eventsValues = JSON.parse(jsonValue);

    let eventsList = []
    if (eventsValues == null) {
      eventsList = [value]
    } else {
      eventsList = [...eventsValues, value]
    }
    console.log(eventsValues);
   
    const newJsonValue = JSON.stringify(eventsList)
    console.log(newJsonValue);
    await AsyncStorage.setItem('@storage_Key', newJsonValue)

  } catch (e) {
    // saving error
  }
}

const handlePressButton = async (newEvent) => {

  alert("crear recordatorio")
  storeData(newEvent)
    swal(
    <View style={styles.modal}>
      <Text style={styles.title}>Te esperamos</Text>
      <Text style={styles.container}>{event.name}</Text>
      <Text style={styles.spot}>{event.date}</Text>
    </View>,
    {
      icon: "success",
    }
  )
}

const CardEvent = ({ objNavigate }) => {
  
  
  return (
    <ScrollView contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Content padder>
        {dataEvents.map((events, index) => {

          return (
            <ScrollView>
              <Card style={{ flex: 1, flexDirection: 'row', borderRadius: 20, border: 0 }}>
                <CardItem>
                  <Left>
                    <Body>
                      <Image source={{uri: events.img}} style={{ height: 100, width: 100, flex: 1, borderRadius: 5 }} />
                    </Body>
                  </Left>
                </CardItem>

                <CardItem style={{ flex: 2, flexDirection: 'column' }}>
                  <Body>
                    <Text style={{ color: '#584799', fontWeight: 600, fontSize: 20 }}>{events.name}</Text>
                    <Text style={{ textAlign: 'justify', fontSize: 15 }}>{events.date}</Text>
                    {/* <Button onPress={handlePressButton} title="crear recordatorio"></Button> */}
                  </Body>

                  <Body style={{ flex: 2, flexDirection: 'row' }}>
                    <TouchableOpacity style={stylesHome.boton} onPress={() => objNavigate.navigate('Evento', {index})}>
                      <Text style={{ textAlign: 'center', color: '#584799', fontWeight: 'bold' }} >Ver más</Text></TouchableOpacity>
                    <TouchableOpacity style={stylesHome.boton} onPress={() => objNavigate.navigate('Mi agenda')}>
                      {/* {
                      handlePressButton.map((arrEvents) => {
                        return(
                          <Text style={{ textAlign: 'center', color: '#584799', fontWeight: 'bold' }} onPress={{arrEvents.date}}>Reservar</Text>
                        )
 
                        
                      })
                    } */}
                    <Text style={{ textAlign: 'center', color: '#584799', fontWeight: 'bold' }} onPress={() => handlePressButton({date: events.date,
                    name: events.name})}>Reservar</Text>
              </TouchableOpacity>
                  </Body>

                </CardItem>
              </Card>      
            </ScrollView>
          )}
        )}

      </Content>
    </ScrollView>
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
    width: 10,
    height: 30,
    margin: 10,
    textAlign: 'center'
  },
  boton: {
    backgroundColor: "rgba(89, 251, 218, 1)",
    width: 80,
    height: 30,
    margin: 10,
    borderRadius: 15
  },
  imagen: {
    width: 330,
    height: 130,
    marginTop: 20,

  },
  containerSelect: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 20,
    marginRight: 20
  }
});

