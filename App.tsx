import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Provider} from 'react-redux';
import CreateTask from './src/component/CreateTask/CreateTask';
import ListTask from './src/component/ListTask/ListTask';
import Nav from './src/component/Nav/nav';
import {store} from './src/component/store/store';

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Nav />
        <ScrollView>
          <ListTask />
        </ScrollView>
        <CreateTask />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
