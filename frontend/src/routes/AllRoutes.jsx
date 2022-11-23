import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import About from "../pages/saurabh/About";
import Address from "../pages/sufiyan/Address";
import Orders from "../pages/sufiyan/Orders";
import Profile from "../pages/sufiyan/Profile";


const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />

        <Route path="/profile" element={<Profile/>} >
             <Route index element={<Orders/>} />
             <Route path="address" element={<Address/>} />
        </Route>

       


     
      </Routes>
    </div>
  );
};

export default AllRoutes;
