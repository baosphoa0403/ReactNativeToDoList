import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/component/store/store';
import Auth from './src/pages/Auth/Auth';

const App = () => {
  return (
    <Provider store={store}>
      <Auth />
    </Provider>
  );
};

export default App;
