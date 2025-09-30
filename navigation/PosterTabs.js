import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PosterHome from '../screens/poster/PosterHome';
import AvailableWorkers from '../screens/poster/AvailableWorkers';
import MyVenues from '../screens/poster/MyVenues';
import PosterSocial from '../screens/poster/PosterSocial';

const Tab = createBottomTabNavigator();

export default function PosterTabs() {
console.log("PosterHome:", PosterHome);
console.log("AvailableWorkers:", AvailableWorkers);
console.log("MyVenues:", MyVenues);
console.log("PosterSocial:", PosterSocial);

  return (
    <Tab.Navigator>
      <Tab.Screen name="PosterHome" component={PosterHome} />
      <Tab.Screen name="AvailableWorkers" component={AvailableWorkers} />
      <Tab.Screen name="MyVenues" component={MyVenues} />
      <Tab.Screen name="PosterSocial" component={PosterSocial} />
    </Tab.Navigator>
  );
}


