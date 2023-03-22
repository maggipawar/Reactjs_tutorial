import React from "react";
import { User } from "./User";

export const App = () => {
  // let data = "Ganesh";
  const apple = (data) => {
    console.log(data);
    alert(data.name);
  };
  return (
    <>
      <h1>App Component</h1>
      <User alert={apple} />
    </>
  );
};
