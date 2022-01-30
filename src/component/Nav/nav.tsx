import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './style';

const Nav = () => {
  return (
    <View style={styles.tasksWrapper}>
      <Text style={styles.text}>Today's Task</Text>
    </View>
  );
};

export default Nav;
