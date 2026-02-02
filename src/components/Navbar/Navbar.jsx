import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  let [isOpen, setIsOpen] = useState(false);
  let [isDark, setIsDark] = useState(localStorage.getItem("dark") === "true");

  const toggleDarkMode = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
      localStorage.setItem("dark", "false");
    } else {
      document.documentElement.classList.add("dark");
      setIsDark(true);
      localStorage.setItem("dark", "true");
    }
  };

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-40 dark:bg-black bg-white shadow-[0_4px_12px_rgba(0,0,0,0.35)] py-6">
        <div className="container  w-[80%] mx-auto dark:text-white text-black flex flex-wrap items-center justify-between">
          <NavLink to="/" className="text-2xl font-bold w-1/2">
            Start Framework
          </NavLink>
          <ul className="hidden desktop-nav md:flex gap-5 ml-auto pe-4">
            <li className="uppercase">
              <NavLink to={"about"} className="p-2">
                about
              </NavLink>
            </li>
            <li className="uppercase">
              <NavLink to={"portfolio"} className="p-2">
                portfolio
              </NavLink>
            </li>
            <li className="uppercase">
              <NavLink to={"contact"} className="p-2">
                contact
              </NavLink>
            </li>
          </ul>

          <div className="flex gap-2">
            <button
              className="size-9 border-3 rounded-full cursor-pointer"
              onClick={() => toggleDarkMode()}
            >
              {isDark ? <i className="fa-solid fa-moon"></i> : <i className="fa-solid fa-sun"></i>}
            </button>
            <button
              className="border-3 rounded-md size-9 cursor-pointer flex items-center justify-center md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              <i className="fa-solid fa-bars dark:text-white text-black text-2xl"></i>
            </button>
          </div>
        </div>
      </nav>
      <div
        className={`mobile-nav fixed z-30  ${isOpen ? "translate-y-0" : "-translate-y-full"} dark:bg-gray-800 bg-white w-full inset-x-0 top-[72px] py-1 transition duration-300 shadow-md shadow-gray-700 md:hidden`}
      >
        <ul className=" w-[80%] mx-auto dark:text-white py-8 flex flex-col gap-5">
          <li className="uppercase">
            <NavLink to={"about"} className="p-3 font-semibold">
              about
            </NavLink>
          </li>
          <li className="uppercase">
            <NavLink to={"portfolio"} className="p-3 font-semibold">
              portfolio
            </NavLink>
          </li>
          <li className="uppercase">
            <NavLink to={"contact"} className="p-3 font-semibold">
              contact
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}
