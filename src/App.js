import React, { Component } from "react";
import { Student } from "./Student";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 1,
    };
  }
  render() {
    return (
      <>
        <Student count={this.state.count} />
        <button onClick={() => this.setState({ count: 1 })}>
          Update State
        </button>
      </>
    );
  }
}
