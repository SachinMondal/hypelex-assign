import React from "react";
import image from "../assets/add.png";

const Advertisement = ({ isDarkMode }) => {
  return (
    <div
      className={`mx-auto mt-4 h-[35rem] lg:w-[14.6rem] lg:h-full ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      } flex flex-col gap-4 p-2 justify-center items-center shadow-lg border border-[#006555]`}
    >
      <div className="h-[45%] lg:w-full relative">
        <div
          className={`h-[1rem] w-[2rem] absolute right-0 top-0 text-white text-xs text-center bg-black`}
        >
          Ad
        </div>
        <img src={image} alt="player" className="object-cover w-full h-full" />
      </div>
      <div className="h-[50%] lg:h-auto w-full">
        <h1
          className={`${
            isDarkMode ? "text-white" : "text-gray-800"
          } font-semibold text-center`}
        >
          Advertisement Title
        </h1>
        <p
          className={`${
            isDarkMode ? "text-gray-300" : "text-gray-600"
          } text-left text-sm`}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
};

export default Advertisement;
