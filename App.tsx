import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/component/store/store';
import Detail from './src/pages/detail/Detail';
import Home from './src/pages/home/home';
import ListTaskToDo from './src/pages/listTask/ListTask';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login Page">
          <Stack.Screen name="Login Page" component={Home} />
          <Stack.Screen name="Detail" component={Detail} />
          <Stack.Screen name="ListTask" component={ListTaskToDo} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
