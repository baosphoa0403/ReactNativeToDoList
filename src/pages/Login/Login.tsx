/* eslint-disable react-native/no-inline-styles */
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {
  Alert,
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {fetchLoginAsyncAction} from '../../app/UserProvider/User.action';
import {
  selectMessageLoginUser,
  selectStatusLoginUser,
} from '../../app/UserProvider/User.selector';
import {login, resetMessage} from '../../app/UserProvider/User.slice';
import {RootStackParamList} from '../Auth/Auth';

type Props = NativeStackScreenProps<RootStackParamList, 'LoginPage'>;

const LoginPage = ({navigation}: Props) => {
  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const dispatch = useDispatch();
  const messageLogin = useSelector(selectMessageLoginUser);
  const statusLogin = useSelector(selectStatusLoginUser);
  const submit = async () => {
    dispatch(await fetchLoginAsyncAction({username: userName, password}));
  };
  useEffect(() => {
    if (messageLogin) {
      console.log('run useffect login');
      if (statusLogin === 'success') {
        Alert.alert(messageLogin);
        dispatch(login(true));
      } else if (statusLogin === 'failed') {
        Alert.alert(messageLogin);
      }
      dispatch(resetMessage());
    }
  }, [messageLogin, navigation, statusLogin, dispatch]);
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
              setUserName(text);
            }}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{marginTop: 30, marginRight: 10}}>Password</Text>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            textContentType="password"
            placeholder="Password"
            value={password}
            onChangeText={text => {
              setPassword(text);
            }}
          />
        </View>
      </View>
      <Button title="Submit" onPress={() => submit()} />
      <TouchableOpacity
        onPress={() => {
          navigation.push('SignUp');
        }}>
        <Text style={{fontSize: 20, marginLeft: 10, marginTop: 10}}>
          Do you have account ?
        </Text>
      </TouchableOpacity>
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
