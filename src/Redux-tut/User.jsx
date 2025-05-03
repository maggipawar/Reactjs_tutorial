import React from "react";

const User = (props) => {
  console.log(props.data.name);
  const { data } = props;
  return (
    <div>
      <h2>User component</h2>
      <h4>{data.name}</h4>
      <h4>{data.age}</h4>
    </div>
  );
};

export default User;
