/* eslint-disable react-native/no-inline-styles */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ListTaskToDo from '../ListTask/ListTask';
import Profile from '../profile/profile';
import React from 'react';
const Tab = createBottomTabNavigator();
import Icon from 'react-native-vector-icons/FontAwesome';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import {openCloseModal} from '../../app/TaskProvider/Task.slice';
import {useDispatch} from 'react-redux';
import ListTaskDone from '../Done/Done';
export const Home = () => {
  const dispatch = useDispatch();
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          tabBarLabel: 'Tasks',
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
        name="Tasks"
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
      <Tab.Screen
        options={{
          tabBarLabel: 'Done',
          tabBarIcon: ({color, size}) => (
            <IconMaterial name="done" color={color} size={size} />
          ),
        }}
        name="Done"
        component={ListTaskDone}
      />
    </Tab.Navigator>
  );
};
