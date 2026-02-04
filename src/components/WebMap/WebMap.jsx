import React from "react";

export default function WebMap() {
  return (
    <div className={`row justify-center text-center hidden lg:flex py-12`}>
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
        <p className="lg:w-1/2 mx-auto">
          Freelance is a free to use, licensed Bootstrap theme created by Route
        </p>
      </div>
    </div>
  );
}
