import React from "react";
import Create from "./CRUD/Create";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Read from "./CRUD/Read";
import Update from "./CRUD/Update";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Create />}></Route>
          <Route path="/read" element={<Read />}></Route>
          <Route path="/update" element={<Update />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
