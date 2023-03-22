import React from "react";
export const User = (Props) => {
  let data = { name: "Ganesh", email: "pawar@gmail.com" };
  return (
    <>
      <h1>User Component: </h1>
      <button onClick={() => Props.alert(data)}>Update Prop</button>
    </>
  );
};
