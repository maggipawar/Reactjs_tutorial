import React, { Component } from 'react';
export class User extends Component
{
    constructor(){
        super();
        this.state={
            data:'Ganesh'
        }
    }

    apple(){
        this.setState({data:'Pawar'});
    }
    render(){
        return(
            <div>
                <p>{this.state.data}</p>
                <button onClick={()=>this.apple()}>Click Me</button>
            </div>
        )
    }
    
}