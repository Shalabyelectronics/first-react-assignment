import React from "react";

export default function Contact() {
  return (
    <>
      <div className="pt-28 section-header text-center">
        <h1 className="dark:text-white text-2xl font-semibold">Contact Page</h1>
        <div className="border-3 relative mt-4 flex mx-auto justify-center w-64 dark:text-white ">
          <div className="absolute -translate-y-2 w-20 flex justify-center items-center rounded-full dark:bg-gray-400 bg-gray-200">
            <i className="fa-solid fa-star"></i>
          </div>
        </div>
      </div>
      <div className="w-[80%] pb-16 mx-auto text-center">
        <div className="dark:bg-black dark:text-white bg-white mt-8 rounded-lg p-2 lg:w-[60%] mx-auto">
          <form className="flex flex-col gap-8">
            <input
              type="text"
              placeholder="User name"
              className="placeholder:dark:text-white/50 p-2 focus:border-b-2 focus:dark:border-white focus:border-black focus:outline-none"
            />
            <input
              type="text"
              placeholder="User age"
              className="placeholder:dark:text-white/50 p-2 focus:border-b-2 focus:dark:border-white focus:border-black focus:outline-none"
            />
            <input
              type="email"
              placeholder="User email"
              className="placeholder:dark:text-white/50 p-2 focus:border-b-2 focus:dark:border-white focus:border-black focus:outline-none"
            />
            <input
              type="email"
              placeholder="User password"
              className="placeholder:dark:text-white/50 p-2 focus:border-b-2 focus:dark:border-white focus:border-black focus:outline-none"
            />
            <button
              className="dark:bg-white dark:text-black bg-black text-white rounded-lg cursor-pointer py-2 font-semibold"
              onClick={(e) => e.preventDefault()}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
