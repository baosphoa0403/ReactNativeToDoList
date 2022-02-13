import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import CreateTask from '../../component/CreateTask/CreateTask';
import ListTask from '../../component/ListTask/ListTask';
import Nav from '../../component/Nav/nav';

const ListTaskToDo = () => {
  return (
    <View style={styles.container}>
      <Nav />
      <ScrollView>
        <ListTask />
      </ScrollView>
      <CreateTask />
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
