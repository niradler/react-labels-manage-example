import React, {Component} from 'react';
import { Route, Switch} from 'react-router-dom';

import Home from '../screens/Home/Home';
import CreateLabel from '../screens/Labels/CreateLabel';
import MyLables from '../screens/Labels/MyLables';

import AuthCheck from '../components/AuthCheck';

class UsersRoutes extends Component {

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/home' component={AuthCheck(Home)}/>
                    <Route exact path='/create' component={AuthCheck(CreateLabel)}/>
                    <Route exact path='/labels' component={AuthCheck(MyLables)}/>
                </Switch>
            </div>
        );
    }
}

export default UsersRoutes;