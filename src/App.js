// import logo from "./logo.svg";
// import "./App.css";
import { User } from "./User";
import React, { useState } from "react";

function App() {
  const [login, setLogin] = useState(1);
  return (
    <div>
    <h1>App Component</h1>
    <User />
    </div>
  );
}

export default App;
