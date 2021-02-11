import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Container, Content, Button } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import swal from '@sweetalert/with-react';
import data from '../../data/data.json'

console.log(data.events);
const dataEvents = data.events;


const handlePressButton = () => {
  swal(
    <View style={styles.modal}>
      <Text style={styles.title}>Te esperamos</Text>
    </View>,
    {
      icon: "success",
    }
  )
}


export default function Evento(index) {
  const idx = index.route.params.index;

  return (
    <ScrollView>
      <Container>{
        console.log(dataEvents[idx])
      }
        <Image
          style={styles.eventImage}
          resizeModel={'cover'}
          source={{ uri: dataEvents[idx].img }}
        />
        <View style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 300, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={styles.textImage}>{dataEvents[idx].name}</Text>
        </View>

        <View style={{ flexDirection: 'row', marginTop: -100, marginLeft: 30 }}>
          <Text style={{ width: 50, height: 50, backgroundColor: '#59FBDA', color: '#584799', fontSize: 18, textAlign: 'center', fontWeight: '600', borderRadius: 10 }} >
            {dataEvents[idx].date}
          </Text>
          <Text style={{ width: 100, height: 100, fontWeight: '600', fontSize: 18, marginLeft: 10 }}> {dataEvents[idx].hour1} </Text>
          <Button rounded style={{ backgroundColor: '#59FBDA', marginLeft: 40 }} onPress={() => handlePressButton()} >
            <Text style={{ width: 100, color: '#584799', fontSize: 20, textAlign: 'center', fontWeight: '600' }}>Añadir</Text>
          </Button>
        </View>
        <Content style={{ marginLeft: 30, marginTop: -20, width: 300 }}>
          <Text style={{ fontWeight: 600, fontSize: 20 }}>
            Descripción
          </Text>
          <Text>
            {dataEvents[idx].details}
          </Text>
          <Text style={{ color: '#584799', fontSize: 15, fontWeight: '600', marginTop: 10 }}>
            {dataEvents[idx].link}</Text>

          <View style={{ flexDirection: 'row', marginTop: 20 }}>
            <MaterialIcons name="place" size={15} color="#59FBDA" />
            <Text style={{ width: 100 }}>
              {dataEvents[idx].place}
            </Text>
            <MaterialIcons name="attach-money" size={15} color="#59FBDA" />
            <Text style={{ width: 100 }}>
              {dataEvents[idx].access}
            </Text>
            <MaterialIcons name="group" size={15} color="#59FBDA" />
            <Text style={{ width: 100 }}>
              {dataEvents[idx].audience}
            </Text>
          </View>

        </Content>

      </Container>
    </ScrollView>
  )
}



const styles = StyleSheet.create({

  eventImage: {
    width: 400,
    height: 400,
    top: -120,
    borderRadius: 100 / 2,
    marginLeft: -20,
  },

  textImage: {
    color: 'black',
    fontSize: 20,
    fontWeight: 600,
    marginLeft: -100,
    marginTop: 150,
  },
  boton: {
    backgroundColor: "rgba(89, 251, 218, 1)",
    width: 80,
    height: 30,
    margin: 10,
    borderRadius: 15
  },
  title: {
    color: 'blue',
    textAlign: 'center',
    color: '#584799',
    fontWeight: 'bold',
    fontSize: 20
  }

});