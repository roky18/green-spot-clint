import React from "react";
import Navbar from "../Pages/Navbar";
import { Outlet } from "react-router";
import Footer from "../Pages/Footer";

const HomeLayout = () => {
  return (
    <div className=" bg-amber-100 ">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default HomeLayout;
