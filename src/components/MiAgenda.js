
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StyleSheet, Text, View, Image } from 'react-native';
import { Container, Content, Header, H1, H2, H3, Card, CardItem, Left, Body, Right, Title } from 'native-base';
import { Calendar, CalendarList, Agenda} from 'react-native-calendars';


export default function MiAgenda() {
  const [state, setState] = useState();

    const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@storage_Key");
        const eventsValues = JSON.parse(jsonValue);
        setState(eventsValues.date);
        alert(state);
     
    } catch (e) {
      console.log("Error");
    }
  };

  return (
        <View style={{ backgroundColor: 'white' }}>
        <Calendar   
          style={{ height: 280}}

          theme={{
            // backgroundColor: '#ffffff',
            // calendarBackground: '#ffffff',
            textSectionTitleColor: '#b6c1cd',
            textSectionTitleDisabledColor: '#d9e1e8',
            selectedDayBackgroundColor: '#00adf5',
            selectedDayTextColor: '#584799',
            todayTextColor: '#584799',
            dayTextColor: '#2d4150',
            // dayTextFontWeight: 'bold',
            textDisabledColor: '#d9e1e8',
            dotColor: '#00adf5',
            // selectedDotColor: '#ffffff',
            arrowColor: 'orange',
            disabledArrowColor: '#d9e1e8',
            monthTextColor: '#584799',
            indicatorColor: 'blue',
            // textDayFontFamily: 'monospace',
            // textMonthFontFamily: 'monospace',
            // textDayHeaderFontFamily: 'monospace',
            textDayFontWeight: '400',
            textMonthFontWeight: 'bold',
            textDayHeaderFontWeight: '400',
            textDayFontSize: 17,
            textMonthFontSize: 25,
            textDayHeaderFontSize: 16
          }}

          // Initially visible month. Default = Date()
          current={'2021-02-12'}
          // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
          minDate={'2021-02-01'}
          // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
          maxDate={'2021-02-28'}
          // Handler which gets executed on day press. Default = undefined
          onDayPress={(day) => {console.log('selected day', day)}}
          // Handler which gets executed on day long press. Default = undefined
          onDayLongPress={(day) => {console.log('selected day', day)}}
          // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
          monthFormat={'MMM yyyy'}
          // Handler which gets executed when visible month changes in calendar. Default = undefined
          onMonthChange={(month) => {console.log('month changed', month)}}
          // Hide month navigation arrows. Default = false
          hideArrows={true}
          // Replace default arrows with custom ones (direction can be 'left' or 'right')
          renderArrow={(direction) => (<Arrow/>)}
          // Do not show days of other months in month page. Default = false
          hideExtraDays={true}
          // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
          // day from another month that is visible in calendar page. Default = false
          disableMonthChange={true}
          // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
          firstDay={1}
          // Hide day names. Default = false
          hideDayNames={true}
          // Show week numbers to the left. Default = false
          showWeekNumbers={true}
          // Handler which gets executed when press arrow icon left. It receive a callback can go back month
          onPressArrowLeft={subtractMonth => subtractMonth()}
          // Handler which gets executed when press arrow icon right. It receive a callback can go next month
          onPressArrowRight={addMonth => addMonth()}
          // Disable left arrow. Default = false
          disableArrowLeft={true}
          // Disable right arrow. Default = false
          disableArrowRight={true}
          // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
          disableAllTouchEventsForDisabledDays={true}
          // Replace default month and year title with custom one. the function receive a date as parameter.
          // renderHeader={(date) => {/*Return JSX*/}}
          // Enable the option to swipe between months. Default = false
          enableSwipeMonths={true}
          markedDates={{
            '2021-02-12': {selected: true, marked: true, selectedColor: '#59FBDA'},
            '2021-02-15': {selected: true, marked: true, selectedColor: '#59FBDA'},
            '2021-02-24': {selected: true, marked: true, selectedColor: '#59FBDA'},
            '2021-02-27': {selected: true, marked: true, selectedColor: '#59FBDA'},
            // '2021-02-17': {marked: true},
            // '2021-02-20': {marked: true, dotColor: 'red', activeOpacity: 0},
            // '2021-02-25': {disabled: true, disableTouchEvent: true}
          }}
//                   markedDates={{
//           [state]: { selected: true, marked: true, selectedColor: "blue" }
        />

        <H2 style={{ color:'#584799', fontWeight: 'bold', marginLeft: 20 }}>Próximos eventos</H2>
        <Container>
                <Content>
                  <Card style={{flex: 1, flexDirection: 'row', borderRadius: 10, border: 0 }}>
                    <CardItem>
                      {/* <Left> */}
                        <View style={{flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                          <View style={{backgroundColor: '#59FBDA', flex: 1,aspectRatio: 1, width:70, borderRadius: 10  }}>
                          <Text style={{ color:'#584799', fontWeight: 'bold', fontSize: 20, textAlign: 'center', marginTop: 5 }} >Mie</Text>
                          <Text style={{ color:'#000', fontWeight: 'bold', fontSize: 18, textAlign: 'center', marginBottom: 5 }}>10</Text>
                          </View>

                        </View>
                      {/* </Left>
                      <Right > */}
                      <View style={{marginLeft: 20}}>
                          <Text style={{color:'#000', fontWeight: 'bold', fontSize: 18, textAlign: 'center'}}>Caminata Virtual</Text>
                          <Text>19:30 <Image
                                source={require('../icons/Icon-place.png')}
                                style={{ width: 17, height: 22 }}
                              /> Online</Text>
                        </View>
                      {/* </Right> */}
                    </CardItem>
                  </Card>
                </Content>
              </Container>
      </View>
     
        
    )
}


