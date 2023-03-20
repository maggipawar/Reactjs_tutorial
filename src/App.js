// import logo from "./logo.svg";
// import "./App.css";
// import { User } from "./User";
import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  useEffect(()=>{
    console.log('useEffect called');
  },[count])
  return (
    <div>
    <h1>App {count}</h1>
    {/* <User /> */}
    <button onClick={()=> setCount(count+1)}>Update Data</button>
    </div>
  );
}

export default App;
