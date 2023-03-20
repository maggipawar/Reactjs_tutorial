import React, { Component } from 'react';
export class User extends Component{
  constructor(){
    super();
    this.state={
      email:'Laxmi@gmail.com'
    }
  }
  render(){
    console.log(`Render with State', ${this.state.email}`);
    return(
      <div>
        <h1>User component </h1>
        <button onClick={()=> this.setState({email:'Ganesh@gmail.com'})}>Update State</button> 
      </div>
    )
  }
}