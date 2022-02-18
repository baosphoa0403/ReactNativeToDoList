/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {
  removeTask,
  updateStatusTaskDoneToDo,
} from '../../app/TaskProvider/Task.slice';
import {Task} from '../../app/TaskProvider/Task.type';
import Icon from 'react-native-vector-icons/FontAwesome';
import {fetchRemoveTask} from '../../app/TaskProvider/Task.service';
import {restAPI} from '../../config/api';
import {showToast} from '../../utils/utils';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
interface PropsTask {
  item: Task;
}

const TaskItem = ({item}: PropsTask) => {
  const dispatch = useDispatch();
  const handleRemoveTask = (data: Task) => {
    dispatch(removeTask(data.id));
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    fetchRemoveTask(data.id, restAPI).then(res => {
      showToast(
        'Remove Task Successfully',
        `${data.title} - ${data.description}`,
      );
    });
  };
  const updateTaskDone = async (data: Task) => {
    dispatch(updateStatusTaskDoneToDo(data));
    console.log(data);
    const token = await AsyncStorage.getItem('token');
    axios({
      method: 'PATCH',
      url: `http://localhost:3000/task/${data.id}?status=done`,
      headers: {Authorization: `Bearer ${token}`},
    })
      .then(res => {
        console.log(res.data);
        showToast(
          'Update Task Done Successfully',
          `${data.title} - ${data.description}`,
        );
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <View style={styles.item}>
      <BouncyCheckbox
        size={25}
        fillColor="#E84B82"
        unfillColor="#FFFFFF"
        text={`${item.title} - ${item.description}`}
        iconStyle={{borderColor: '#55BCF6'}}
        onPress={(isChecked: boolean) => {
          console.log(isChecked);
        }}
      />
      <View style={styles.itemLeft}>
        {item.status === 'todo' ? (
          <>
            <TouchableOpacity
              onPress={() => {
                updateTaskDone(item);
              }}>
              <IconMaterial
                style={{margin: 10, color: 'green'}}
                name="done"
                size={30}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                handleRemoveTask(item);
              }}>
              <Icon style={{margin: 20}} name="remove" size={30} />
            </TouchableOpacity>
          </>
        ) : (
          <></>
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  item: {
    height: 100,
    marginTop: 10,
    borderColor: 'white',
    borderWidth: 1,
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    shadowColor: '#55BCF6',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#55BCF6',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: '80%',
    marginRight: '2%',
  },
  itemTextTitle: {
    maxWidth: '80%',
    marginRight: '2%',
    fontWeight: 'bold',
  },
  chipToDo: {
    backgroundColor: '#df2284',
    padding: 20,
    borderRadius: 50,
  },
  chipDone: {
    backgroundColor: 'green',
    padding: 20,
    borderRadius: 50,
  },
});
export default TaskItem;
