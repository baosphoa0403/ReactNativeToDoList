import React from 'react';
import {SafeAreaView} from 'react-native';
import {Task} from '../../app/TaskProvider/Task.type';

import TaskItem from '../Task/Task';
interface IListTask {
  listTask: Task[];
}
const ListTask = ({listTask}: IListTask) => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <SafeAreaView style={{paddingHorizontal: 10}}>
      {listTask.map((item, index) => {
        return <TaskItem item={item} key={index} />;
      })}
    </SafeAreaView>
  );
};

export default ListTask;
