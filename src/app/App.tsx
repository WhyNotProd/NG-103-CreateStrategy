import React from 'react';
import { Provider } from 'react-redux';
import NavRouter from '../navigation/router';
import store from '../store';
import Auth from '../auth/Auth';

// interface AppProps {}

const App = ({}: any) => (
  <Provider store={store}>
    <Auth>
      <NavRouter />
    </Auth>
  </Provider>
);

export default App;
