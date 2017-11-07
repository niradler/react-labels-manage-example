import React, { Component } from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import {Provider} from 'mobx-react';

import Header from './components/layout/Header';
import SideNav from './components/layout/SideNav';

import Home from './components/pages/Home';
import CreateLabel from './components/pages/CreateLabel';
import MyLables from './components/pages/MyLables';

import LabelsStore from './store/LabelsStore';

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
          </div>
        </div>
      </div>
      </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
