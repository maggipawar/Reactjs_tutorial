import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { About } from "./Components/About";
import { Home } from "./Components/Home";
import { NavBar } from "./Components/Navbar";
import { Page404 } from "./Components/Page404";
import { User } from "./Components/User";
import { Filter } from "./Components/Filter";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          {/* it redirect on page 404 */}
          {/* <Route path="/*" element={<Page404 />}></Route> */}
          {/* it redirect on Home page */}
          <Route path="/*" element={<Navigate to={"/"} />}></Route>
          <Route path="/user/:name" element={<User />}></Route>
          <Route path="/filter" element={<Filter />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
