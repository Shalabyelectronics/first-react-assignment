import React, { useEffect } from "react";

export default function Overlay({ image, closeDisplay }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    window.scrollTo(0, 0);

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);
  return (
    <div
      className=" overlay-container lg:pt-24  fixed inset-0 bg-black/50 z-[999] flex pt-35 lg:items-center justify-center overflow-y-hidden"
      onClick={(e) => {
        e.stopPropagation();

        closeDisplay(false);
      }}
    >
      <div className="px-4 lg:w-[40%] rounded-lg overflow-hidden">
        <img className="object-cover" src={image} alt={image} />
      </div>
    </div>
  );
}
