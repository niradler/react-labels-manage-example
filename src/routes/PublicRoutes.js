import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import Login from '../screens/Login/Login';
import Layout from '../screens/Layout/Layout';

class PublicRoutes extends Component {

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/login' component={Login}/>
                    <Route path='/' component={Layout}/>
                </Switch>
            </div>
        );
    }
}

export default PublicRoutes;