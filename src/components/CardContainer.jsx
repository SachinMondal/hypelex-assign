import React, { useState } from "react";
import Card from "./Card";
import Advertisement from "./Advertisenet";
import { data } from "./data";

const CardContainer = ({ isDarkMode }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <div
        className={`h-full lg:h-full w-full flex flex-col gap-3 justify-center items-center ${
          isDarkMode ? "bg-[#292B32] text-white" : "bg-[#F7F7F8] text-gray-800"
        }`}
      >
        <h1 className="font-semibold mx-auto lg:w-[90%] underline underline-offset-[0.5rem]">
          Sports
        </h1>
        <div className="flex flex-col w-full lg:flex-row">
          <div
            className={`flex flex-col md:flex-row w-full lg:w-4/5 mx-auto ${
              expanded ? "overflow-y-scroll" : "overflow-hidden"
            }`}
          >
            {data?.map((item) => (
              <Card key={item.id} isDarkMode={isDarkMode} data={item.data} />
            ))}
          </div>
          <div className="w-full lg:w-1/5 mx-auto">
            <Advertisement isDarkMode={isDarkMode} />
          </div>
        </div>
      </div>
      <div className="flex w-full h-full justify-center items-center m-4">
        <button
          onClick={toggleExpanded}
          className={`h-[3rem] w-[6rem] text-white bg-blue-500`}
        >
          {expanded ? "See Less" : "See More"}
        </button>
      </div>
    </>
  );
};

export default CardContainer;
