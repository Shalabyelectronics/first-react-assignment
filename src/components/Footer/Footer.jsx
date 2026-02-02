import React, { useEffect, useState } from "react";

export default function Footer() {
  let [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <footer className="fixed bottom-0 z-50 inset-x-0 dark:bg-gray-700 dark:text-white bg-gray-100">
        <div className="dark:bg-gray-800 bg-gray-250 text-center py-5">
          <div className={`row justify-center hidden lg:flex`}>
            <div className="w-full md:w-1/2 text-center lg:w-1/3 my-3">
              <h3 className="font-semibold text-2xl mb-2">LOCATION</h3>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>
            <div className="w-full md:w-1/2 text-center lg:w-1/3 my-3">
              <h3 className="font-semibold text-2xl mb-2">AROUND THE WEB</h3>
              <div className="socail flex justify-center gap-1.5 mt-2">
                <div className="size-8 border-2 rounded-full flex items-center justify-center cursor-pointer">
                  <i className="fa-brands fa-facebook"></i>
                </div>
                <div className="size-8 border-2 rounded-full flex items-center justify-center">
                  <i className="fa-brands fa-twitter"></i>
                </div>
                <div className="size-8 border-2 rounded-full flex items-center justify-center cursor-pointer">
                  <i className="fa-brands fa-linkedin-in"></i>
                </div>
                <div className="size-8 border-2 rounded-full flex items-center justify-center cursor-pointer">
                  <i className="fa-solid fa-earth-americas"></i>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 md:mx-auto lg:w-1/3 text-center my-3">
              <h3 className="font-semibold text-2xl mb-2">ABOUT FREELANCER</h3>
              <p>
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </div>
       
        </div>
           <div className="dark:bg-gray-700 bg-gray-500 text-white text-center py-2">
            <p>Copyright © Your Website 2021</p>
          </div>
      </footer>
      <div
        className={`row justify-center fixed inset-x-0 bottom-0 z-40  mb-15 ${isOpen ? "translate-y-0" : "translate-y-[85%]"} transition duration-300 dark:bg-gray-400 bg-white lg:hidden`}
      >
        <div className="flex justify-center dark:bg-gray-700 bg-white w-full pb-4">
          <button
            className="cursor-pointer animate-bounce"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <i className="fa-solid fa-angles-down dark:text-white"></i>
            ) : (
              <i className="fa-solid fa-angles-up dark:text-white"></i>
            )}
          </button>
        </div>
        <div className="w-full md:w-1/2 text-center lg:w-1/3 my-3">
          <h3 className="font-semibold text-2xl mb-2">LOCATION</h3>
          <p>2215 John Daniel Drive</p>
          <p>Clark, MO 65243</p>
        </div>
        <div className="w-full md:w-1/2 text-center lg:w-1/3 my-3">
          <h3 className="font-semibold text-2xl mb-2">AROUND THE WEB</h3>
          <div className="socail flex justify-center gap-1.5 mt-2">
            <div className="size-8 border-2 rounded-full flex items-center justify-center cursor-pointer">
              <i className="fa-brands fa-facebook"></i>
            </div>
            <div className="size-8 border-2 rounded-full flex items-center justify-center">
              <i className="fa-brands fa-twitter"></i>
            </div>
            <div className="size-8 border-2 rounded-full flex items-center justify-center cursor-pointer">
              <i className="fa-brands fa-linkedin-in"></i>
            </div>
            <div className="size-8 border-2 rounded-full flex items-center justify-center cursor-pointer">
              <i className="fa-solid fa-earth-americas"></i>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 md:mx-auto lg:w-1/3 text-center my-3">
          <h3 className="font-semibold text-2xl mb-2">ABOUT FREELANCER</h3>
          <p className="px-3">
            Freelance is a free to use, licensed Bootstrap theme created by
            Route
          </p>
        </div>
      </div>
    </>
  );
}
