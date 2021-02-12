import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Container, Content, Header, H1, H2, H3, Card, CardItem, Left, Body, Right, Title } from 'native-base';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { MaterialIcons } from '@expo/vector-icons';


export default function MiAgenda() {
  const [state, setState] = useState([]);
  const [event, setEvent] = useState([])
  let markedDate = {};

  state.forEach((date) => {
    markedDate[date] = { selected: true, marked: true, selectedColor: "#59FBDA" }
  })

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@storage_Key");

      if (jsonValue) {
        const eventsValues = JSON.parse(jsonValue);
        setState(eventsValues.map((dateEvent) => dateEvent.date));
        setEvent(eventsValues)
        //  console.log(event);

      }
      // console.log(eventsValue);
    } catch (e) {
      console.log("Error");
    }
  };



  useEffect(() => { getData() }, []);

  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <Calendar
        style={{ height: 280 }}

        theme={{
          textSectionTitleColor: '#b6c1cd',
          textSectionTitleDisabledColor: '#d9e1e8',
          selectedDayBackgroundColor: '#00adf5',
          selectedDayTextColor: '#584799',
          todayTextColor: '#584799',
          dayTextColor: '#2d4150',
          textDisabledColor: '#d9e1e8',
          dotColor: '#00adf5',
          arrowColor: 'orange',
          disabledArrowColor: '#d9e1e8',
          monthTextColor: '#584799',
          indicatorColor: 'blue',
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
        onDayPress={(day) => { console.log('selected day', day) }}
        // Handler which gets executed on day long press. Default = undefined
        onDayLongPress={(day) => { console.log('selected day', day) }}
        // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
        monthFormat={'MMM yyyy'}
        // Handler which gets executed when visible month changes in calendar. Default = undefined
        onMonthChange={(month) => { console.log('month changed', month) }}
        // Hide month navigation arrows. Default = false
        hideArrows={true}
        // Replace default arrows with custom ones (direction can be 'left' or 'right')
        renderArrow={(direction) => (<Arrow />)}
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
        showWeekNumbers={false}
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
        markedDates={markedDate}
      />

      <H2 style={{ color: '#584799', fontWeight: 'bold', marginLeft: 20 }}>Próximos eventos</H2>
      <Container>
        <Content>
          {event &&
            event.map((item, index) => {
              // const idx = index.route.params.index;
              console.log(item.hour);
              // console.log(item.dateName);
              return (


                <View>
                <Card style={{flex: 1, flexDirection: 'row', borderRadius: 10, border: 0 }}>
                <CardItem>
                  {/* <Left> */}
                    <View style={{flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                      
                      <Text style={{ width: 50, height: 50, backgroundColor: '#59FBDA', color: '#584799', fontSize: 18, textAlign: 'center', fontWeight: '600', borderRadius: 10 }} >{item.dateName}</Text>
                  
                    </View>
                  {/* </Left>
                  <Right > */}
                  {/* <View style={{flex: 1, flexDirection: 'column', marginLeft: 20}}>
                      <Text style={{color:'#000', fontWeight: 600, fontSize: 18}}>{item.name}</Text>
                      <Text>{item.hour}</Text>
                      
                    </View> */}
                    <View style={{marginLeft: 20}}>
                          <Text style={{color:'#000', fontWeight: 'bold', fontSize: 18, textAlign: 'center'}}>{item.name}</Text>
                          <Text>{item.hour}</Text>
                        </View>
                    
                  {/* </Right> */}
                </CardItem>
              </Card>

              </View>

              )
            }



            )
          }

        </Content>
      </Container>
    </ScrollView>
  )
}