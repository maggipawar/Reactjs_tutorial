// import logo from "./logo.svg";
// import "./App.css";
import React, { useState } from 'react';
import { User } from "./User";

function App() {
  const [name,setName]=useState('Ganesh');
  const apple = ()=> {
    alert('function called from parent');
  }
  return (
    <div>
      <User
        Name={name}
        email="pawargyany@gmail.com"
        other={{ address: "pune", mobileNo: "000" }}
      />
      <button onClick={()=> setName('Pawar')}>Update Name</button>
    </div>
  );
}

export default App;
