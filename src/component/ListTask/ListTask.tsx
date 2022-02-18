/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, FlatList, StatusBar, LogBox} from 'react-native';
import {Task} from '../../app/TaskProvider/Task.type';

import TaskItem from '../Task/Task';
interface IListTask {
  listTask: Task[];
}
const ListTask = ({listTask}: IListTask) => {
  React.useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        paddingHorizontal: 10,
      }}>
      <FlatList
        data={listTask}
        renderItem={({item}) => {
          return <TaskItem item={item} />;
        }}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  );
};

export default ListTask;
