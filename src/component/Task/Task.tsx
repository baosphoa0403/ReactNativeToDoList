import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {removeTask} from '../../app/TaskProvider/Task.slice';

import {ITask} from '../../models/Task';
interface PropsTask {
  item: ITask;
}

const Task = ({item}: PropsTask) => {
  const dispatch = useDispatch();
  const handleRemoveTask = (id: number) => {
    dispatch(removeTask(id));
  };
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square} />
        <Text style={styles.itemText}>{item.content} </Text>
        <Button
          title="Remove Task"
          onPress={() => {
            handleRemoveTask(item.id);
          }}
        />
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
  },
});
export default Task;
