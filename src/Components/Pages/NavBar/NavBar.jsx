import React from "react";
import { Route, Routes, BrowserRouter, useLocation } from "react-router";
import Nav from "./Nav";
import Men from "../../Collection/Men";
import Women from "../../Collection/Women";
import Home from "../Home";
import Address from "../../CRUD/Address";
import Edit from "../../CRUD/Edit";
import Footer from "../Footer";
import Electronics from "../../Collection/Electronics";
// import NewAddress from "../../CRUD/NewAddress";
import Jewelery from "../../Collection/Jewelery";
import Cart from "../../CRUD/Cart";
import Profile from "../Profile";
import Modall from "../../Loading/Modall";
import Register from "../Register";
import Login from "../Login";

const NavBar = () => {

  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/address" element={<Address />} />
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/jewelery" element={<Jewelery />} />
          <Route path="/address" element={<Address />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/electronics" element={<Electronics />} />
          {/* <Route path="/newaddress" element={<NewAddress />} /> */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default NavBar;
