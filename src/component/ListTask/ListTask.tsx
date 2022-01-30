import React from 'react';
import {SafeAreaView} from 'react-native';
import {selectListCount} from '../../app/TaskProvider/Task.selector';
import {useAppSelector} from '../../hook/hook';

import Task from '../Task/Task';

const ListTask = () => {
  const listTask = useAppSelector(selectListCount);

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <SafeAreaView style={{paddingHorizontal: 10}}>
      {listTask.map((item, index) => {
        return <Task item={item} key={index} />;
      })}
    </SafeAreaView>
  );
};

export default ListTask;
