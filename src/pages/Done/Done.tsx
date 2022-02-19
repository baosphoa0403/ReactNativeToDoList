import {useFocusEffect} from '@react-navigation/native';
import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {selectListTasks} from '../../app/TaskProvider/Task.selector';
import {fetchListTask} from '../../app/TaskProvider/Task.service';
import {setListTask, setListTaskDone} from '../../app/TaskProvider/Task.slice';
import ListTask from '../../component/ListTask/ListTask';
import {restAPI} from '../../config/api';
const ListTaskDone = () => {
  const dispatch = useDispatch();
  const listTask = useSelector(selectListTasks);
  useFocusEffect(
    React.useCallback(() => {
      fetchListTask(restAPI)
        .then(res => {
          dispatch(setListTaskDone(res));
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
      <ScrollView>
        <ListTask listTask={listTask} />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
export default ListTaskDone;
