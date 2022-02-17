/* eslint-disable react-native/no-inline-styles */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ListTaskToDo from '../ListTask/ListTask';
import Profile from '../profile/profile';
import React from 'react';
const Tab = createBottomTabNavigator();
import Icon from 'react-native-vector-icons/FontAwesome';
import IconAnt from 'react-native-vector-icons/AntDesign';
import {openCloseModal} from '../../app/TaskProvider/Task.slice';
import {useDispatch} from 'react-redux';
export const Home = () => {
  const dispatch = useDispatch();
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          tabBarLabel: 'List Task',
          tabBarIcon: ({color, size}) => (
            <Icon name="tasks" color={color} size={size} />
          ),
          headerRight: () => (
            <IconAnt
              style={{marginRight: 20}}
              onPress={() => dispatch(openCloseModal())}
              name="plus"
              color="black"
              size={30}
            />
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
