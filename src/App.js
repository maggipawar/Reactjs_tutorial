// import logo from "./logo.svg";
// import "./App.css";
import React, { useState } from "react";

function App() {
  const [login, setLogin] = useState(1);
  return (
    <div>
      <h1>Working with Conditional rendering</h1>

      {login == 1 ? (
        <h1>Welcome Ganesh</h1>
      ) : login == 2 ? (
        <h1>Welcome Guest</h1>
      ) : (
        <h1>Welcome User</h1>
      )}
    </div>
  );
}

export default App;
