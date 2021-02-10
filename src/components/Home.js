
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Picker, Container, Content, CardItem, Left, Body, Button, Card, Title } from "native-base";
const header = require('../../assets/Header.png');

import Calendar from '../components/calendarHome'




export default function Home() {
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
    <Container>
       <Content>
        <Card style={{ flex: 1, flexDirection: 'row' }}>
          <CardItem>
            <Left>
              <Body>
                <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Monserrate_Sanctuary.JPG/1200px-Monserrate_Sanctuary.JPG' }} style={{ height: 50, width: 50, flex: 1, borderRadius: 5 }} />
              </Body>
            </Left>
          </CardItem>
          <CardItem style={{ flex: 2, flexDirection: 'column' }}>
            <Body>
              <Title style={{ color: 'black', fontSize: 15 }}>Recorrido virtual Monserrate</Title>
              <Text style={{ textAlign: 'justify', fontSize: 10 }}>El cerro de Monserrate en Bogotá</Text>
            </Body>
            <Body style={{ flex: 1, flexDirection: 'row' }}>
              <TouchableOpacity style={stylesHome.boton} onPress={() => navigation.navigate('Evento')}>
                <Text style={{ textAlign: 'center' }} >Ver más</Text></TouchableOpacity>
              <TouchableOpacity style={stylesHome.boton} onPress={() => navigation.navigate('Mi agenda')}>
                <Text style={{ textAlign: 'center' }}>Reservar</Text>
              </TouchableOpacity>
            </Body>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
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