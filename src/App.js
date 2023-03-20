// import logo from "./logo.svg";
// import "./App.css";
import React from "react";
function App() {
  const students = [
    { name: "Ganesh", email: "pawar@gmail.com", contact: 555 },
    { name: "Laxmi", email: "laxmi@gmail.com", contact: 222 },
    { name: "Vaishali", email: "Vaishali@gmail.com", contact: 333 },
    { name: "pawar", email: "pawar@gmail.com", contact: 444 },
  ];

  return (
    <table border="1">
      {students.map((data, i) => {
        return (
          <tr>
            <td key={i}>{i + 1}</td>
            <td>{data.name} </td>
            <td>{data.email} </td>
            <td>{data.contact}</td>
          </tr>
        );
      })}
    </table>
  );
}

export default App;
