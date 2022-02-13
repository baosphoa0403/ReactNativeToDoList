import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import CreateTask from '../../component/CreateTask/CreateTask';
import ListTask from '../../component/ListTask/ListTask';
import Nav from '../../component/Nav/nav';

const Home = () => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <View style={styles.container}>
        <Nav />
        <ScrollView>
          <ListTask />
        </ScrollView>
        <CreateTask />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default Home;
