import React, {Component} from 'react';
import Validator from '../../components/Validator';
import './style.css';

class Login extends Component {
    constructor(props) {
        super();
        this.state = {
            email: "",
            password: ""
        };
        this.handleLogin = this
            .handleLogin
            .bind(this);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className='loginScreenHolder'>
                        <div className='loginScreenWrapper'>
                            <h1 className='text-center'>Login</h1>

                            <form className="form-horizontal" onSubmit={this.handleLogin}>
                                <div className="form-group">
                                    <label htmlFor="InputEmail">Email address</label>
                                    <input type="email" className="form-control" id="InputEmail" placeholder="Email" onChange={this.onChange}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={this.onChange}/>
                                </div>
                                <div className="form-group">
                                    <div className="checkbox">
                                        <label>
                                            <input type="checkbox"/> Remember me
                                        </label>
                                    </div>
                                    <br/>
                                    <button type="submit" className="btn btn-default btn-block">Login</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        );
    }


    onChange = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    handleLogin(e) {
        e.preventDefault();
        const validatorRes = Validator.test(this.state);
        // console.log(validatorRes);
        if (!validatorRes.isValid) {
            alert('Fields Error!');
            return;
        }
        const loggedIn = (this.state.email === "shelfmint@yahoo.com" && this.state.password === "a12345")
            ? true
            : false;
        localStorage.setItem('loggedIn', loggedIn);
        if (loggedIn) {
            this
                .props
                .history
                .push(`/home`)
        } else {
            alert('incorrect login details!')
        }
    }
}

export default Login;
