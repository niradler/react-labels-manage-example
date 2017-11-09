import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from '../../components/layout/Header';
import SideNav from '../../components/layout/SideNav';
import AuthCheck from '../../components/AuthCheck';

import UsersRoutes from '../../routes/UsersRoutes';


class Layout extends Component {

    render() {
        return (
            <div>
                <Header/>
                <SideNav/>
<UsersRoutes />
            </div>
        );
    }
}

export default Layout;

