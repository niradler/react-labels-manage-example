import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Provider} from 'mobx-react';

import PublicRoutes from '../routes/PublicRoutes';

import AuthCheck from '../components/AuthCheck';

import Layout from './Layout/Layout';
import Login from './Login/Login';

import LabelsStore from '../stores/LabelsStore';

import './App.css';

class App extends Component {

    render() {
        return (
            <Provider LabelsStore={LabelsStore}>
                <BrowserRouter>
                    <div>
                        <PublicRoutes/>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;


