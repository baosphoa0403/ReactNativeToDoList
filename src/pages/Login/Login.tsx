/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  Alert,
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchLoginAsyncAction} from '../../app/UserProvider/User.action';
import {
  selectMessageLoginUser,
  selectStatusLoginUser,
} from '../../app/UserProvider/User.selector';
// import ImageToDo from '../../img/todo.png';
const LoginPage = ({navigation}) => {
  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const dispatch = useDispatch();
  const messageLogin = useSelector(selectMessageLoginUser);
  const statusLogin = useSelector(selectStatusLoginUser);
  const submit = async () => {
    // console.log();
    dispatch(await fetchLoginAsyncAction({username: userName, password}));
  };
  useEffect(() => {
    if (messageLogin) {
      Alert.alert(messageLogin);
      if (statusLogin === 'success') {
        navigation.replace('ListTask');
      }
    }
  }, [messageLogin, navigation, statusLogin]);
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
      <Button title="Submit" onPress={() => submit()} />
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
  },
});
export default LoginPage;
