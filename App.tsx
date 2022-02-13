import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/component/store/store';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/pages/home/home';
import Login from './src/pages/Login/Login';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />{' '}
          <Stack.Screen name="Login" component={Login} />{' '}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
