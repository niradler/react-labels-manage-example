import React, {Component} from 'react';
import Validator from '../../components/Validator';

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
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleLogin}>
          <div>
            <label>
              Email:
            </label>
            <input type="text" name="email" onChange={this.onChange}/>
          </div>
          <div >
            <label>
              Password:
            </label>
            <input type="password" name="password" onChange={this.onChange}/>
          </div>
          <div>
            <button type="submint">login</button>
          </div>
        </form>
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
    console.log(validatorRes);
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
