import React, { PureComponent } from "react";

export class Student extends PureComponent {
  render() {
    console.log("Student component re-rendering");
    return (
      <>
        <h1>Student component</h1>
        <h1> {this.props.count}</h1>
      </>
    );
  }
}

// export default Student;
