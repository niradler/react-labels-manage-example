import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class Header extends Component {

    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <NavLink className="navbar-brand" to="/">Shelfmint</NavLink>
                        </div>

                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                <li>
                                    <NavLink activeStyle={{
                                        fontWeight: 'bold',
                                        color: 'black'
                                    }} to={`/home`}>Home</NavLink>
                                </li>
                                <li>
                                    <NavLink activeStyle={{
                                        fontWeight: 'bold',
                                        color: 'black'
                                    }} to={`/create`}>To create</NavLink>
                                </li>
                                <li>
                                    <NavLink activeStyle={{
                                        fontWeight: 'bold',
                                        color: 'black'
                                    }} to={`/labels`}>My Labels</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;
