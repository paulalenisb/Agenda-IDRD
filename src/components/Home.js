import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import {Picker,  Container, Header} from "native-base";
const header= require('../../assets/Header.png'); 


export default function Home({ navigation }) {
  const [selectedValue, setSelectedValue] = useState("kennedy");
    return (
        <Container style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around'}}>
        <Image  source={header} style={stylesHome.imagen} />
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
        style= {stylesHome.select} 
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Categorias" value="java" />
        <Picker.Item label="Caminatas" value="js" />
      </Picker>
      </View>
      <Text style={{ flex: 1, alignItems: 'center', margin: 10}}>" Sesión de actividad física
 Facebook Live Recreovía MIERCOLES 7:30 am, 4:00 pm y 6:00 pm comunidad general  y 3:30 pm sesion de niños"
</Text>
      <View style={stylesHome.containerSelect}>
      <TouchableOpacity style ={stylesHome.boton} onPress={() => navigation.navigate('Evento')}>
          <Text style={{ textAlign: 'center'}} >Ver más</Text></TouchableOpacity>
        <TouchableOpacity style ={stylesHome.boton} onPress={()=> navigation.navigate('Mi agenda')}>
          <Text style={{ textAlign: 'center'}}>Reservar</Text>
        </TouchableOpacity>
      </View>
      </Container>
    )
}

const stylesHome = StyleSheet.create({
    select: {
    borderRadius: 10,
    width: 130,
    height: 30,
    margin: 10
  },
  boton: {
    borderRadius:10,
    backgroundColor: "rgba(89, 251, 218, 1)",
    width: 80,
    height: 30,
    margin: 10
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