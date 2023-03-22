import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { About } from "./Components/About";
import { Home } from "./Components/Home";
export const App = () => {
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
};
