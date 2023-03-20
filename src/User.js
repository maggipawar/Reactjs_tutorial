import React from "react";

export const User = (props) => {
  return (
    <div style={{ background: "green", padding: "10px" }}>
      <h1>User Name is:{props.Name} </h1>
      <h2>Email is:{props.email} </h2>
      <h4>Address is:{props.other.address}</h4>
    </div>
  );
};
