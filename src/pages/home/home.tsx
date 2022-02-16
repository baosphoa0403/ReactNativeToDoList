import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ListTaskToDo from '../listTask/ListTask';
import Profile from '../profile/profile';
import React from 'react';
const Tab = createBottomTabNavigator();

export const Home = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="List Task" component={ListTaskToDo} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};
