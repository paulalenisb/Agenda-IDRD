import React, { Component } from 'react';
import { View, Text } from 'react-native';
import moment from 'moment';
import CalendarStrip from 'react-native-calendar-strip';

// export default class App extends Component({}) {
//     constructor(props) {
//         super(props);
    
//         let startDate = moment(); // today

//         // Create a week's worth of custom date styles and marked dates.
//         let customDatesStyles = [];
//         let markedDates = [];
//         for (let i=0; i<7; i++) {
//         let date = startDate.clone().add(i, 'days');
//         customDatesStyles.push({
//             startDate: date, // Single date since no endDate provided
//             dateNameStyle: {color: 'blue'},
//             dateNumberStyle: {color: 'purple'},
//             highlightDateNameStyle: {color: 'pink'},
//             highlightDateNumberStyle: {color: 'yellow'},
//             // Random color...
//             dateContainerStyle: { backgroundColor: `#${(`#00000${(Math.random() * (1 << 24) | 0).toString(16)}`).slice(-6)}` },
//           });
    
//           let dots = [];
//           let lines = [];
    
//           if (i % 2) {
//             lines.push({
//               color: 'cyan',
//               selectedColor: 'orange',
//             });
//           }
//           else {
//             dots.push({
//               color: 'red',
//               selectedColor: 'yellow',
//             });
//           }
//           markedDates.push({
//             date,
//             dots,
//             lines
//           });
//         }
    
//         this.state = {
//           selectedDate: '',
//           customDatesStyles,
//           markedDates,
//           startDate,
//         };
//       }
    
//       datesBlacklistFunc = date => {
//         return date.isoWeekday() === 6; // disable Saturdays
//       }
    
//       onDateSelected = date => {
//         this.setState({ formattedDate: date.format('YYYY-MM-DD')});
//       }
    
//       render() {
//         return (
//           <View>
//             <CalendarStrip
//               scrollable
//               calendarAnimation={{type: 'sequence', duration: 30}}
//               daySelectionAnimation={{type: 'background', duration: 300, highlightColor: '#9265DC'}}
//               style={{height:200, paddingTop: 20, paddingBottom: 10}}
//               calendarHeaderStyle={{color: 'white'}}
//               calendarColor={'#3343CE'}
//               dateNumberStyle={{color: 'white'}}
//               dateNameStyle={{color: 'white'}}
//               iconContainer={{flex: 0.1}}
//               customDatesStyles={this.state.customDatesStyles}
//               highlightDateContainerStyle={{backgroundColor: 'black'}}
//               markedDates={this.state.markedDates}
//               datesBlacklist={this.datesBlacklistFunc}
//               onDateSelected={this.onDateSelected}
//               useIsoWeekday={false}
//             />
//             <Text style={{fontSize: 24}}>Selected Date: {this.state.formattedDate}</Text>
//           </View>
//         );
//       }
//     }

export default function Calendar() {
    let customDatesStyles = []
    let startDate = moment();
    let markedDates = [];

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
                dateNumberStyle={{ color: '#584799' }}
                dateNameStyle={{ color: '#584799' }}
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