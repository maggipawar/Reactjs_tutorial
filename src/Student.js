import React from "react";

export function User(props) {

  return (
    <>
    <h1>Student component</h1>
    <span className="abc">{props.data.name}</span>
    <span>{props.data.email}</span>
    <span>{props.data.contact}</span>
    </>
  );
}

export default User;
