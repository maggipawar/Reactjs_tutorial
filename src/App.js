import React from "react";
import Create from "./CRUD/Create";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Read from "./CRUD/Read";
import Update from "./CRUD/Update";
// import User from "./Redux-tut/User";

import HomeContainers from "./Redux-tut/Containers/HomeContainers";

const App = () => {
  return (
    <>
      {/* <User data={{ name: "maggie", age: 30 }} /> */}
      <HomeContainers />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Create />}></Route>
          <Route path="/read" element={<Read />}></Route>
          <Route path="/update" element={<Update />}></Route>
          {/* <Route path="/user" element={<User />}> </Route> */}
          {/* <Route path="/home" element={<HomeContainers />}></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
