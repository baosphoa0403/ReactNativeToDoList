/* eslint-disable react-native/no-inline-styles */
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import axios from 'axios';
import React, {useState} from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {RootStackParamList} from '../Auth/Auth';
type Props = NativeStackScreenProps<RootStackParamList, 'LoginPage'>;
const SignUp = ({navigation}: Props) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const submit = () => {
    console.log(userName, password, name, phone);
    const data = {
      username: userName,
      password: password,
      name: name,
      phone: phone,
    };
    axios({
      url: 'http://localhost:3000/user/signup',
      method: 'POST',
      data,
    })
      .then(res => {
        console.log(res.data);
        Alert.alert('SignUp Successfully');
        setUserName('');
        setPhone('');
        setName('');
        setPassword('');
        navigation.navigate('LoginPage');
      })
      .catch(err => {
        Alert.alert('Sorry SomeThing Wrong');
        console.log(err);
      });
  };
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 30}}>Sign Up</Text>
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
        <Text style={{marginTop: 30}}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={text => {
            setPassword(text);
          }}
        />
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={{marginTop: 30, marginRight: 25}}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={text => {
            setName(text);
          }}
        />
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={{marginTop: 30, marginRight: 20}}>Phone</Text>
        <TextInput
          style={styles.input}
          placeholder="Phone"
          keyboardType="numeric"
          value={phone}
          onChangeText={text => {
            setPhone(text);
          }}
        />
      </View>
      <TouchableOpacity
        onPress={submit}
        style={{backgroundColor: '#55BCF6', padding: 20, borderRadius: 20}}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    paddingHorizontal: 50,
    paddingVertical: 150,
  },
  input: {
    borderColor: 'gray',
    width: '60%',
    borderWidth: 1,
    borderRadius: 10,
    padding: 20,
    margin: 15,
  },
});

export default SignUp;
