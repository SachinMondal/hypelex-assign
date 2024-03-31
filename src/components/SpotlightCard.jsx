import React from "react";

const SpotlightCard = ({ isDarkMode, data }) => {
  return (
    <div
      className={`mx-auto mt-4 h-[35rem] w-[17rem]  ${
        isDarkMode ? "bg-[#292B32] text-white" : "bg-white text-white"
      } flex flex-col gap-3 p-2 relative`}
      style={{ boxShadow: "1px 3px 12px black" }}
    >
      <div className="h-[68%] w-full">
        <img src={data.img} alt="player" />
      </div>
      {/* {circle 1} */}
      <div
        className={`rounded-full h-[1rem] w-[1rem] flex-initial -left-2 top-[70%] absolute shadow-md ${
          isDarkMode ? "bg-[#221A2C] border-[#221A2C]" : "bg-[#F9F8FF]"
        }`}
      ></div>
      {/* {circle 2} */}
      <div
        className={`rounded-full h-[1rem] w-[1rem] flex-initial -right-2 top-[70%] absolute shadow-inner ${
          isDarkMode ? "bg-[#221A2C] border-[#221A2C]" : "bg-[#F9F8FF]"
        }`}
      ></div>
      <div className="h-[1.5rem] w-full flex items-center justify-center">
        <hr
          style={{
            borderStyle: "dashed",
            width: "90%",
            borderColor: isDarkMode ? "#818A97" : "#DFDFDF",
          }}
        />
      </div>
      <div className="flex h-[40%] w-full flex-col">
        <div className="h-[1.5rem] w-full flex flex-col items-center justify-center flex-1 flex-wrap">
          <h5
            className={`text-left text-sm mb-1 ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            {data.name}
          </h5>
          <h5
            className={`text-left text-xs ${
              isDarkMode ? "text-[#DFDFDF]" : "text-[#818A97]"
            }`}
          >
            {data.date}
          </h5>
          <h5
            className={`text-left text-xs ${
              isDarkMode ? "text-[#DFDFDF]" : "text-[#818A97]"
            }`}
          >
            {data.region}
          </h5>
        </div>

        <div>
          <button className={`bg-black w-full text-sm p-2 text-white`}>
            {data.button}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpotlightCard;
