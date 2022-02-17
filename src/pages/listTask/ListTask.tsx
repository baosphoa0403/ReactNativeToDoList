/* eslint-disable @typescript-eslint/no-unused-vars */
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {selectListTasks} from '../../app/TaskProvider/Task.selector';
import {fetchListTask} from '../../app/TaskProvider/Task.service';
import {setListTask, setListTaskTODO} from '../../app/TaskProvider/Task.slice';
import {Task} from '../../app/TaskProvider/Task.type';
import ListTask from '../../component/ListTask/ListTask';
import Nav from '../../component/Nav/nav';
import {restAPI} from '../../config/api';
import ModalCreate from '../Modal/Modal';
import Toast from 'react-native-toast-message';
import {useFocusEffect} from '@react-navigation/native';
const ListTaskToDo = () => {
  const dispatch = useDispatch();
  const listTask = useSelector(selectListTasks);
  useFocusEffect(
    React.useCallback(() => {
      fetchListTask(restAPI)
        .then(res => {
          dispatch(setListTaskTODO(res));
        })
        .catch(error => {
          console.log(error);
        });
      return () => {
        dispatch(setListTask([]));
      };
    }, [dispatch]),
  );

  return (
    <View style={styles.container}>
      <Nav />
      <ScrollView>
        <ListTask listTask={listTask} />
      </ScrollView>
      <ModalCreate />
      <Toast />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default ListTaskToDo;
