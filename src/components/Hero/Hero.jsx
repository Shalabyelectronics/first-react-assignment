import React from "react";
import avatar from "/src/assets/images/avatars.svg";
export default function Hero() {
  return (
    <div className="pt-24 lg:pb-12 text-center flex flex-col items-center">
      <img src={avatar} alt="avatar" className="size-[340px] mx-auto" />
      <h1 className="uppercase text-shadow-lg dark:text-shadow-gray-600 text-shadow-white text-center mt-5 text-3xl font-semibold dark:text-white">
        start Framework
      </h1>
      <div className="border-3 relative mt-4 flex mx-auto justify-center w-64 dark:text-white">
        <div className="absolute -translate-y-2 w-20 flex justify-center items-center rounded-full dark:bg-gray-400">
          <i className="fa-solid fa-star"></i>
        </div>
      </div>
      <p className="mt-5  text-shadow-lg dark:text-shadow-gray-600 text-shadow-white font-medium dark:text-white">
        Graphic Artist - Web Designer - Illustrator
      </p>
    </div>
  );
}
