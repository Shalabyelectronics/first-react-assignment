import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router";
import WebMap from "../WebMap/WebMap";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 dark:bg-gray-400 bg-gray-200 dark:shadow-lg dark:backdrop-blur-lg dark:shadow-gray-800">
        <Outlet />
      </main>
      <WebMap />
      <Footer />
    </div>
  );
}
