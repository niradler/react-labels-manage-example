import React, { Component } from 'react';


export default function(ComposedClass){
  class AuthenticationCheck extends Component{
     constructor(props) {
    super();
  }
    componentWillMount(){
const  loggedIn = localStorage.getItem("loggedIn");
      if(!loggedIn){
           this
        .props
        .history
        .push(`/login`)
      }
    }
    
    render(){
      return <ComposedClass {...this.props}/>
    }
    
  }
return AuthenticationCheck;
}