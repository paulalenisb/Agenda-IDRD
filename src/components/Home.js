import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, Modal, Alert } from 'react-native';
import { Picker, Container, Content, CardItem, Left, Body, Button, Card, Title } from "native-base";
import Calendar from '../components/calendarHome';
import data from '../../data/events.json'

const dataEvents = data.events;
const header = require('../../assets/Header.png');

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
                    <TouchableOpacity style={stylesHome.boton} onPress={() => objNavigate.navigate('Evento')}>
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
  // const [modalVisible, setModalVisible] = useState(false)

    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', headerTitleAlign: "center",}}>
            <Image  source={header} style={stylesHome.imagen} />
          </View>
       
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
        onValueChange={() => setSelectedValue(e.target.value)} >
        <Picker.Item label='Ubicación' value="java" />
        <Picker.Item label="Caminatas" value="js" />
      </Picker>
      </View>
      <View>
      <Calendar>        
      </Calendar>

      {/* <Button
        onPress={() => setModalVisible(true)}>
        <Text >Show Modal</Text>
      </Button>  */}

         {/* <Modal
        transparent={true}
          animationType="slide"
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
            }}
          ><View  style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 22,
            backgroundColor: 'rgba(0, 0, 0, 0.50)'
          }}>
          <View style={{
          margin: 20,
          backgroundColor: "white",
          borderRadius: 20,
          padding: 35,
          alignItems: "center",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2
          },
          shadowOpacity: 0.25,
          shadowRadius: 4,
          elevation: 5}} >
        <Text >Hello World!</Text>
        <Button
          onPress={() => setModalVisible(false)}>
          <Text>Hide Modal</Text>
        </Button>
      </View>
    </View>
  </Modal> */}


          <Content>         
            <CardEvent objNavigate={navigation}/>
      </Content>
      </View>
    </ScrollView>
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
