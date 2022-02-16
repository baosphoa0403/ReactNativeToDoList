import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {Fragment, useEffect, useState} from 'react';
import {Provider} from 'react-redux';
import {store} from './src/component/store/store';
import LoginPage from './src/pages/Login/Login';
import {Home} from './src/pages/home/home';

const Stack = createNativeStackNavigator();

const App = () => {
  const [token, setToken] = useState('');
  useEffect(() => {
    AsyncStorage.getItem('token').then(res => {
      setToken(res as string);
    });
  }, [token]);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="LoginPage">
          {!token ? (
            <>
              <Stack.Screen name="LoginPage" component={LoginPage} />
            </>
          ) : (
            <>
              <Stack.Screen name="Home" component={Home} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
