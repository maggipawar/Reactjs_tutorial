import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { About } from "./Components/About";
import { Home } from "./Components/Home";
import { NavBar } from "./Components/Navbar";
import { Page404 } from "./Components/Page404";
import { User } from "./Components/User";
import { Filter } from "./Components/Filter";
import { Contact } from "./Components/Contact";
import { Channel } from "./Components/Channel";
import { Other } from "./Components/Other";
import { Company } from "./Components/Company";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* it redirect on page 404 */}
          {/* <Route path="/*" element={<Page404 />} />
          {/* it redirect on Home page */}
          <Route path="/*" element={<Navigate to={"/"} />} />
          <Route path="/user/:name" element={<User />} />
          <Route path="/filter" element={<Filter />} />
          <Route path="/contact/" element={<Contact />}>
            <Route path="company" element={<Company />} />
            <Route path="channel" element={<Channel />} />
            <Route path="other" element={<Other />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
