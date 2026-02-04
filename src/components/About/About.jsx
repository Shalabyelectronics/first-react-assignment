import React from "react";

export default function About() {
  return (
    <div className="pt-36  lg:pb-12">
      <div className="section-header text-center ">
        <h1 className="text-2xl font-semibold dark:text-white uppercase text-shadow-lg dark:text-shadow-gray-600 text-shadow-white">
          about component
        </h1>
        <div className="border-3 relative my-4 flex mx-auto justify-center w-48 dark:text-white ">
          <div className="absolute -translate-y-2 w-20 flex justify-center items-center rounded-full dark:bg-gray-400 bg-gray-200">
            <i className="fa-solid fa-star"></i>
          </div>
        </div>
      </div>
      <div className=" text-center">
        <div className="content lg:w-[50%] lg:mx-auto">
          <p className="mb-5 w-[80%] mx-auto text-start lg:text-[20px] dark:text-white text-shadow-lg dark:text-shadow-gray-600 text-shadow-white">
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
          <p className="text-start w-[80%] mx-auto lg:text-[20px] dark:text-white text-shadow-lg dark:text-shadow-gray-600 text-shadow-white ">
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
        </div>
      </div>
    </div>
  );
}
