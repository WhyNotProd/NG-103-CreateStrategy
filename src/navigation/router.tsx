import React from 'react';
import { Route, Switch, BrowserRouter as Router, Redirect} from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Home from '../features/home';
import Social from '../features/social';
import HeatMap from '../features/heatmap';
import Trends from '../features/trends';



const Routes = (props) => {
    // const user = "Test";
    // const ProtectedRoute = ({component: Component, ...rest}) => (
    //     user ? <Component {...rest} /> : <Redirect from="" to="login" />
    // );

    // const PublicRoute = ({component: Component, ...rest}) => (
    //     <Component {...rest} />
    // );

    // const history = createMemoryHistory();
    return (
        <Router>
            <Switch>
                <Route path='/social'><Social/></Route>
                <Route path='/trends'><Trends/></Route>
                <Route path='/heatmap'><HeatMap/></Route>
                <Route exact path='/'><Home/></Route>
            </Switch>
        </Router>
    )
}

export default Routes;