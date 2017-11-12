import React, {Component} from 'react';

import Header from '../../components/layout/Header';
import UsersRoutes from '../../routes/UsersRoutes';


class Layout extends Component {

    render() {
        return (
            <div>
                <Header/>
                <UsersRoutes/>
            </div>
        );
    }
}

export default Layout;

