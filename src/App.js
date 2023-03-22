import React from "react";
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import { About } from "./Components/About";
import { Home } from "./Components/Home";
import { NavBar } from "./Components/Navbar";
import {Page404} from './Components/Page404';

export const App = () => {
  return(
    <>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          {/* <Route path="/*" element={<Page404 />}></Route> */} // it redirect on page 404
          <Route path="/*" element={<Navigate to={'/'}/>}></Route>  // it redirect on Home page
        </Routes>
      </BrowserRouter>
    </>
  )
};
