import React from 'react';
import { Provider } from 'react-redux';
import Nav from '../navigation/router';
import store from '../store';
import Auth from '../auth/Auth';
import { GlobalStyles } from '../app/GlobalStyles';
import {StyledAppWrapper} from './App.styled';

// interface AppProps {}

const App = ({}: any) => (
  <Provider store={store}>
      <Auth>
        <GlobalStyles />
          <StyledAppWrapper>
            <Nav />
          </StyledAppWrapper>
      </Auth>
  </Provider>
);

export default App;
