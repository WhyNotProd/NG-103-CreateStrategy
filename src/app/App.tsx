import React, { useState, useEffect } from 'react';
import { Router } from 'react-router-dom';
import NavRouter from '../navigation/router';
import ReactGA from 'react-ga';
import { Provider } from 'react-redux';
import store from '../store';
import AppContext from './AppContext';
import Auth from '../auth/Auth';

// interface AppProps {}

const App = ({}: any) => {

  return (
    <Provider store={store}>
      <Auth>
        <NavRouter />
      </Auth>
    </Provider>
  );
}

export default App;
