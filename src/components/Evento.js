import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { Container, Content, Button } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function Evento() {
  return (
    <ScrollView>
      <Container>
        <Image
          style={styles.eventImage}
          resizeModel={'cover'}
          source={{
            uri: 'https://dam.tbg.com.mx/content/dam/tbg/mexico/natgeo/mx/traveler/lugares/17/10/12/santuario-de-monserrate-bogota.jpg.imgo.jpg',
          }}
        />
        <View style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 300, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={styles.textImage}>Caminata</Text>
        </View>

        <View style={{ flexDirection: 'row', marginTop: -100, marginLeft: 50 }}>
          {/* <Text style={{ width: 50, height: 50, backgroundColor: '#59FBDA', color: '#584799', fontSize: 20,  textAlign: 'center', fontWeight: 600 }} >FEB 10</Text> */}
          <View style={{backgroundColor: '#59FBDA', flex: 1,aspectRatio: 1, width:70, borderRadius: 10  }}>
                          <Text style={{ color:'#584799', fontWeight: 'bold', fontSize: 20, textAlign: 'center', marginTop: 5 }} >FEB</Text>
                          <Text style={{ color:'#000', fontWeight: 'bold', fontSize: 18, textAlign: 'center', marginBottom: 5 }}>10</Text>
                          </View>
          <Text style={{ width: 100, height: 50 }}> Míercoles 19:30 </Text>
          <Button rounded style={{ backgroundColor: '#59FBDA'}} >
            <Text style={{ width: 100,  color: '#584799', fontSize: 20 , textAlign: 'center', fontWeight: 600}}>Añadir</Text>
          </Button>
        </View>

        <Content style={{ marginLeft: 40, marginTop: 20 }}>
          <Text style={{ fontWeight: 600 }}>
            Descripción
            <AntDesign name="staro" size={20} color="black" />
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et magna odio consectetur ipsum montes, quis ut imperdiet maecenas. Ultrices etiam et vitae mauris odio ut malesuada.
          </Text>

          <View style={{ flexDirection: 'row', marginTop: 20 }}>
            <MaterialIcons name="place" size={15} color="#59FBDA" />
            <Text style={{ width: 100 }}>Online</Text>
            <MaterialIcons name="attach-money" size={15} color="#59FBDA" />
            <Text style={{ width: 100 }}>Gratis</Text>
            <MaterialIcons name="group" size={15} color="#59FBDA" />
            <Text style={{ width: 100 }}>Todo público</Text>
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
    color: 'white',
    fontSize: 20,
    fontWeight: 600,
    marginLeft: -200,
    marginTop: 100,
  }

});