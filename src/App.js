// import logo from "./logo.svg";
// import "./App.css";
import React, { useState } from "react";

function App() {
  const [name, setName] = useState(null);
  const [slt, setSlt] = useState(null);
  const [tnc, setTnc] = useState(false);
  // const [clear,setClear]=useState(false);

  function getData(e) {
    e.preventDefault();
    console.log(name, slt, tnc);
  }
  return (
    <div>
      <h1>Working with form elements</h1>
      <form onSubmit={getData}>
        {/* <h2>{name} {slt} {tnc}</h2> */}
        <input
          type="text"
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
        />
        <br /> <br />
        <select onChange={(e) => setSlt(e.target.value)}>
          <option>Select Option</option>
          <option>Javascript</option>
          <option>HTML</option>
          <option>CSS</option>
        </select>
        <br /> <br />
        <input type="checkbox" onChange={(e) => setTnc(e.target.checked)} />
        <span>Accept term and conditons</span> <br /> <br />
        <button type="submit">Submit</button>
        {/* <button onClick={}>Clear</button> */}
      </form>
    </div>
  );
}

export default App;
