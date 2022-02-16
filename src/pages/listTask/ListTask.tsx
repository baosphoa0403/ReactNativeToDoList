/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {fetchListTaskActionAsync} from '../../app/TaskProvider/Task.action';
import {fetchListTask} from '../../app/TaskProvider/Task.service';
import {Task} from '../../app/TaskProvider/Task.type';
import CreateTask from '../../component/CreateTask/CreateTask';
import ListTask from '../../component/ListTask/ListTask';
import Nav from '../../component/Nav/nav';
import {restAPI} from '../../config/api';

const ListTaskToDo = () => {
  const [listTask, setlistTask] = useState<Task[]>([]);
  useEffect(() => {
    fetchListTask(restAPI)
      .then(res => {
        console.log(res);
        setlistTask(res as Task[]);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Nav />
      <ScrollView>
        <ListTask listTask={listTask} />
      </ScrollView>
      {/* <CreateTask /> */}
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
