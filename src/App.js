// import logo from "./logo.svg";
// import "./App.css";
import React, { useState } from 'react';

function App() {
  const [data,setData]=useState(null);
  const [print,setPrint]=useState(false);
  function getData(event){
    setData(event.target.value);
    setPrint(false);
    console.log(event.target.value);
  }
  return (
    <div>
    {

      print? <h1>{data}</h1>: null
    }
      <input type='text' onChange={getData}/>
      <button onClick={()=> setPrint(true)}>Print Data</button>
    </div>
  );
}

export default App;
