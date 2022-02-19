import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';

import {useSelector} from 'react-redux';
import {selectIsLogin} from '../../app/UserProvider/User.selector';
import {Home} from '../Home/home';
import LoginPage from '../Login/Login';
import SignUp from '../SignUp/SignUp';
export type RootStackParamList = {
  LoginPage: undefined;
  Home: undefined;
  Profile: {name: string};
  SignUp: undefined;
};
export const Stack = createNativeStackNavigator<RootStackParamList>();
const Auth = () => {
  const [token, setToken] = useState('');
  const isLogin = useSelector(selectIsLogin);

  useEffect(() => {
    AsyncStorage.getItem('token').then(res => {
      console.log(res);
      setToken(res as string);
    });
  }, [token, isLogin]);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="LoginPage">
        {!token ? (
          <>
            <Stack.Screen name="LoginPage" component={LoginPage} />
            <Stack.Screen name="SignUp" component={SignUp} />
          </>
        ) : (
          <>
            <Stack.Screen name="Home" component={Home} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Auth;
