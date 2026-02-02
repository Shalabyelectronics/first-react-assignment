import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <>
      <Navbar />
      <div className=" flex items-center justify-center dark:bg-gray-400 bg-gray-200 dark:shadow-lg dark:backdrop-blur-lg dark:shadow-gray-800">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
