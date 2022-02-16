import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ListTaskToDo from '../listTask/ListTask';
import Profile from '../profile/profile';
import React from 'react';
const Tab = createBottomTabNavigator();
import Icon from 'react-native-vector-icons/FontAwesome';
import IconAnt from 'react-native-vector-icons/AntDesign';
export const Home = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          tabBarLabel: 'List Task',
          tabBarIcon: ({color, size}) => (
            <Icon name="tasks" color={color} size={size} />
          ),
        }}
        name="List Task"
        component={ListTaskToDo}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <IconAnt name="user" color={color} size={size} />
          ),
        }}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
};
