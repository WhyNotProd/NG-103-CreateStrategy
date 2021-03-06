import React from 'react';
import { Route, Switch, BrowserRouter as Router, Redirect} from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Home from '../features/home';
import Social from '../features/social';
import HeatMap from '../features/heatmap';
import Trends from '../features/trends';
import Strategy from '../features/strategy';
import CreateStrategy from '../features/strategy/create';
import EditStrategy from '../features/strategy/edit';


const Routes = (props) => {
    const user = "Test";
    const ProtectedRoute = ({component: Component, ...rest}) => (
        user ? <Component {...rest} /> : <Redirect from="" to="login" />
    );

    const PublicRoute = ({component: Component, ...rest}) => (
        <Component {...rest} />
    );

    // const history = createMemoryHistory();
    return (
        <Router>
            <Switch>
                <ProtectedRoute path='/social' component={Social}></ProtectedRoute>
                <ProtectedRoute path='/strategy' component={Strategy}></ProtectedRoute>
                <ProtectedRoute exact path='/strategy/:id' component={Strategy}></ProtectedRoute>
                <ProtectedRoute path='/strategy/:id/edit' component={EditStrategy}></ProtectedRoute>
                <ProtectedRoute path='/strategy/create' component={CreateStrategy}></ProtectedRoute>
                <ProtectedRoute path='/trends' component={Trends}></ProtectedRoute>
                <ProtectedRoute path='/heatmap' component={HeatMap}></ProtectedRoute>
                <PublicRoute exact path='/' component={Home}></PublicRoute>
            </Switch>
        </Router>
    )
}

export default Routes;