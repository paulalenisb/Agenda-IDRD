import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Header, Left, Body, Right, Title } from 'native-base';
// import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
// import { ifIphoneX } from 'react-native-iphone-x-helper';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

export default function MiAgenda() {

    return (
      // <KeyboardAwareScrollView>
        <View>
          <Container>
            <Header>
              <Left/>
              <Body>
                <Title>Agenda IDRD</Title>
              </Body>
              <Right />
            </Header>
      </Container>

          {/* <Text>Febrero, 2021</Text> */}
        <Calendar   
          // style={{borderWidth: 1, borderColor: 'gray', height: 350}}
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
          monthFormat={'yyyy MMM'}
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
          renderHeader={(date) => {/*Return JSX*/}}
          // Enable the option to swipe between months. Default = false
          enableSwipeMonths={true}
        />
      </View>
      // </KeyboardAwareScrollView>
     
        
    )
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1, alignItems: 'center', justifyContent: 'center'
//   },
// });

