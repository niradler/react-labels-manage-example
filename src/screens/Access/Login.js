import React, { Component } from 'react';



class Login extends Component {
  
  render() {
    return (
     <div>
    <h1>Login</h1>
<div>
  <label>
    Email:
    </label>
  <input type="email"/>
</div>
<div >
  <label>
    Password:
    </label>
  <input type="password" />
</div>
<div>
  <button type="submint">login</button>
  </div>
  </div>
    );
  }
}

export default Login;
