import React, { Component } from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import {Provider} from 'mobx-react';

import Header from '../components/layout/Header';
import SideNav from '../components/layout/SideNav';

import Home from './Home/Home';
import CreateLabel from './Labels/CreateLabel';
import MyLables from './Labels/MyLables';
import Login from './Access/Login';

import LabelsStore from '../stores/LabelsStore';

import './App.css';

class App extends Component {
  
  render() {
    return (
      <Provider LabelsStore={LabelsStore}>
      <BrowserRouter>
      <div className="App">
      <Header />
        <div>
          <SideNav/>
          <div className="Main">
            <Route exact path='/' component={Home}/>
            <Route exact path='/create' component={CreateLabel} />
             <Route exact path='/labels' component={MyLables} />
             <Route exact path='/login' component={Login} />
          </div>
        </div>
      </div>
      </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
