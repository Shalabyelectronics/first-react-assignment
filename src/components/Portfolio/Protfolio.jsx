import React, { useEffect, useState } from "react";
import proImage1 from "../../assets/images/port1.png";
import proImage2 from "../../assets/images/port2.png";
import proImage3 from "../../assets/images/port3.png";
import proImage4 from "../../assets/images/port1.png";
import proImage5 from "../../assets/images/port2.png";
import proImage6 from "../../assets/images/port3.png";
import Overlay from "./../Overlay/Overlay";

export default function Protfolio() {
  const images = [
    proImage1,
    proImage2,
    proImage3,
    proImage4,
    proImage5,
    proImage6,
  ];
  let [isDisplayed, setIsDisplayed] = useState(false);
  let [displayImage, setDisplayImage] = useState(null);
  const displayImageOverlay = (imageToDisplay) => {
    setIsDisplayed(true);
    setDisplayImage(imageToDisplay);
  };

  useEffect(() => {
    if (isDisplayed) {
      document.body.classList.add("overlay-open");
    } else {
      document.body.classList.remove("overlay-open");
    }
  }, [isDisplayed]);

  return (
    <>
      <div className="section-header pt-24">
        <h1 className="uppercase text-center mt-5 text-3xl font-semibold dark:text-white">
          Portfolio
        </h1>
        <div className="border-3 relative mt-4 flex mx-auto justify-center w-64 dark:text-white">
          <div className="absolute -translate-y-2 w-20 flex justify-center items-center rounded-full dark:bg-gray-400 bg-gray-200">
            <i className="fa-solid fa-star"></i>
          </div>
        </div>
      </div>

      <div className=" relative flex items-center justify-center">
        <div className="row py-8 w-[80%] mx-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className="md:w-1/2 lg:w-1/3 p-2"
              onClick={() => displayImageOverlay(image)}
            >
              <div className="group relative rounded-2xl overflow-hidden cursor-pointer w-[80%] mx-auto">
                <img
                  className="block w-full"
                  src={image}
                  alt="projext image 1"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-emerald-500/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <i className="fa-solid fa-plus text-white text-6xl"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {isDisplayed ? (
        <Overlay image={displayImage} closeDisplay={setIsDisplayed} />
      ) : (
        ""
      )}
    </>
  );
}
