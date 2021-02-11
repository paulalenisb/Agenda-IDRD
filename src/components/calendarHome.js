import React, { Component } from 'react';
import { View, Text } from 'react-native';
import moment from 'moment';
import 'moment/locale/es';
import CalendarStrip from 'react-native-calendar-strip';


export default function Calendar() {
    let customDatesStyles = []
    let startDate = moment()
    // startDate = startDate.locale('es')
    console.log(startDate);

    for (let i=0; i<7; i++) {
      let date = startDate.clone().add(i, 'days');

          customDatesStyles.push({
          startDate: date, // Single date since no endDate provided
          dateNameStyle: {color: 'white'},
          dateNumberStyle: {color: 'white'},
          highlightDateNameStyle: {color: 'white'},
          highlightDateNumberStyle: {color: 'white'},
          // Random color...
          dateContainerStyle: { backgroundColor: '#584799' },
        });
      

    // let datesWhitelist = [{
    //     start: moment(),
    //     end: moment().add(7, 'days')  // total 4 days enabled
    // }];

    // let datesBlacklist = [moment().add(1, 'days')]; // 1 day disabled



    return (
        <View>
            <CalendarStrip
                customDatesStyles={customDatesStyles}
                // calendarAnimation={{ type: 'sequence', duration: 30 }}
                // daySelectionAnimation={{ type: 'border', duration: 200, borderWidth: 1, borderHighlightColor: 'white' }}
                style={{ height: 100, paddingTop: 20, paddingBottom: 10 }}
                calendarHeaderStyle={{ color: '#584799' }}
                calendarColor={'#fff'}
                dateNumberStyle={{ color: '#B8ADE2' }}
                dateNameStyle={{ color: '#B8ADE2' }}
                highlightDateNumberStyle={{ color: 'rgba(89, 251, 218, 1)' }}
                highlightDateNameStyle={{ color: 'rgba(89, 251, 218, 1)' }}
                disabledDateNameStyle={{ color: '#584799' }}
                disabledDateNumberStyle={{ color: '#584799' }}
                // datesWhitelist={datesWhitelist}
                // datesBlacklist={datesBlacklist}                
                iconContainer={{flex: 0.1}}

            />
        </View>
    );
}
}
