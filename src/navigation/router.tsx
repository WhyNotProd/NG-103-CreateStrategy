import React from 'react';
import {
  Route, Switch, BrowserRouter as Router,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Home from '../features/home';
import Social from '../features/social';
import HeatMap from '../features/heatmap';
import Trends from '../features/trends';
import shutsTheme from '../app/theme';

const Routes = (): any => (
  <ThemeProvider theme={shutsTheme}>
    <Router>
      <Switch>
        <Route path="/social">
          <Social />
        </Route>
        <Route path="/trends"><Trends /></Route>
        <Route path="/heatmap"><HeatMap /></Route>
        <Route exact path="/"><Home /></Route>
      </Switch>
    </Router>
  </ThemeProvider>
);

export default Routes;
