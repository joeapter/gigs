import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import JobListings from '../screens/seeker/JobListings';
import MyCalendar from '../screens/seeker/MyCalendar';
import JobHistory from '../screens/seeker/JobHistory';
import SeekerSocial from '../screens/seeker/SeekerSocial';

const Tab = createBottomTabNavigator();

export default function SeekerTabs() {
console.log("JobListings:", JobListings);
console.log("MyCalendar:", MyCalendar);
console.log("JobHistory:", JobHistory);
console.log("SeekerSocial:", SeekerSocial);
  return (
    <Tab.Navigator>
      <Tab.Screen name="JobListings" component={JobListings} />
      <Tab.Screen name="MyCalendar" component={MyCalendar} />
      <Tab.Screen name="JobHistory" component={JobHistory} />
      <Tab.Screen name="SeekerSocial" component={SeekerSocial} />
    </Tab.Navigator>
  );
}
