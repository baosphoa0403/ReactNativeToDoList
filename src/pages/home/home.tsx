/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Alert,
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
// import ImageToDo from '../../img/todo.png';
const Home = ({navigation}) => {
  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  return (
    <View style={{flex: 1, alignItems: 'center', paddingHorizontal: 50}}>
      <Image
        source={require('../../img/todo.png')}
        style={{width: 300, height: 300}}
      />
      <View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{marginTop: 30}}>UserName</Text>
          <TextInput
            style={styles.input}
            placeholder="UserName"
            value={userName}
            onChangeText={text => {
              console.log(text);
              setUserName(text);
            }}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{marginTop: 30, marginRight: 10}}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={text => {
              console.log(text);
              setPassword(text);
            }}
          />
        </View>
      </View>
      <Button
        title="Submit"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    borderColor: 'gray',
    width: '60%',
    borderWidth: 1,
    borderRadius: 10,
    padding: 20,
    margin: 15,
    // borderColor: '#7a42f4',
    // borderWidth: 1,
  },
});
export default Home;
