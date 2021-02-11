import React, { Component } from 'react';
import { View } from 'react-native';
import moment from 'moment';
import CalendarStrip from 'react-native-calendar-strip';

export default function Calendar() {

    let datesWhitelist = [{
        start: moment(),
        end: moment().add(3, 'days')  // total 4 days enabled
    }];

    let datesBlacklist = [moment().add(1, 'days')]; // 1 day disabled


    return (
        <View>
            <CalendarStrip
                calendarAnimation={{ type: 'sequence', duration: 30 }}
                daySelectionAnimation={{ type: 'border', duration: 200, borderWidth: 1, borderHighlightColor: 'white' }}
                style={{ height: 100, paddingTop: 20, paddingBottom: 10 }}
                calendarHeaderStyle={{ color: 'white' }}
                calendarColor={'#7743CE'}
                dateNumberStyle={{ color: 'white' }}
                dateNameStyle={{ color: 'white' }}
                highlightDateNumberStyle={{ color: 'rgba(89, 251, 218, 1)' }}
                highlightDateNameStyle={{ color: 'rgba(89, 251, 218, 1)' }}
                disabledDateNameStyle={{ color: 'white' }}
                disabledDateNumberStyle={{ color: 'white' }}
                datesWhitelist={datesWhitelist}
                datesBlacklist={datesBlacklist}                
                iconContainer={{flex: 0.1}}

            />
        </View>
    );
}