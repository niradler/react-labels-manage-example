import React, { Component } from 'react';
import { Link} from 'react-router-dom'

class SideNav extends Component {
  
  render() {
    return (
  <div className="App-SideNav">
          <ul>
             <li>
              <Link to={`/home`}>Home</Link>
            </li>
            <li>
              <Link to={`/create`}>To create</Link>
            </li>
              <li>
              <Link to={`/labels`}>My Labels</Link>
            </li>
          </ul>
        </div>
    );
  }
}

export default SideNav;
