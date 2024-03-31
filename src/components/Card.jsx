import React from "react";

const Card = ({ isDarkMode, data }) => {
  return (
    <div
      className={`mx-auto mt-4 h-full lg:w-[14.6rem] xl:w-[18rem] shadow-2xl mb-3 ${
        isDarkMode
          ? "bg-[#3B3E47] text-white shadow-lg outline-1 outline-gray-500"
          : "bg-white text-gray-800"
      } flex flex-col gap-4 p-2`}
      style={{ boxShadow: "1px 3px 8px black" }}
    >
      <div className="h-[75%] w-full">
        <img
          src={data.img}
          alt="player"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="h-[1.5rem] w-full">
        <h5
          className={`${
            isDarkMode ? "text-white" : "text-gray-800"
          } font-semibold text-left`}
        >
          {data.name}
        </h5>
      </div>
      <div
        className={`${
          isDarkMode ? "bg-gray-700" : "bg-[#F7F7F8]"
        } h-[54px] w-full flex flex-row gap-1 rounded-sm p-2`}
      >
        <div className="w-1/2">
          <h6
            className={`${
              isDarkMode ? "text-gray-300" : "text-gray-500"
            } text-xs`}
          >
            Total Events
          </h6>
          <h6
            className={`${isDarkMode ? "text-white" : "text-gray-800"} text-sm`}
          >
            {data.events} Events
          </h6>
        </div>
        <div className="w-1/2">
          <h6
            className={`${
              isDarkMode ? "text-gray-300" : "text-gray-500"
            } text-xs`}
          >
            Sport
          </h6>
          <h6
            className={`${isDarkMode ? "text-white" : "text-gray-800"} text-sm`}
          >
            {data.sport}
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Card;
