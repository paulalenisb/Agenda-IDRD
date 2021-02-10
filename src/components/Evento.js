import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { Container, Content } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';

export default function Evento() {
  return (
    <View>
      <Container>
        <Image
          style={styles.eventImage}
          resizeMode={'cover'}
          source={{
            uri: 'https://dam.tbg.com.mx/content/dam/tbg/mexico/natgeo/mx/traveler/lugares/17/10/12/santuario-de-monserrate-bogota.jpg.imgo.jpg',
          }}
        />
        <View style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 300, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={styles.textImage}>Título</Text>
        </View>

        <View style={{ flexDirection: 'row', marginTop: -100, marginLeft: 50 }}>
          <Text style={{ width: 50, height: 50, backgroundColor: '#59FBDA', color: '#584799', fontSize: 20 }} >FEB 10</Text>
          <Text style={{ width: 100, height: 50 }}> Míercoles 19:30 </Text>
          <Button
            title="Añadir"
            color="#59FBDA"
            //disabled                     
            onPress={() => Alert.alert('Cannot press this one')}
          />
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
            <Text style={{ width: 100}}>Online</Text> 
              <MaterialIcons name="attach-money" size={15} color="#59FBDA" />
            <Text style={{ width: 100}}>Gratis</Text>
            <MaterialIcons name="group" size={15} color="#59FBDA" />
            <Text style={{ width: 100}}>Todo público</Text>
          </View>

        </Content>

      </Container>
    </View>
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