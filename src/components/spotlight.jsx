import React, { useState, useRef } from "react";
import SpotlightCard from "./SpotlightCard";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { spot } from "./data";

const Spotlight = ({ isDarkMode }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? spot.length - 1 : prevIndex - 1
    );
    scrollCards(-1);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === spot.length - 1 ? 0 : prevIndex + 1
    );
    scrollCards(1);
  };

  const scrollCards = (direction) => {
    const container = containerRef.current;
    if (container) {
      const cardWidth = container.offsetWidth / 2; // Adjust this value as needed
      container.scrollLeft += direction * cardWidth;
    }
  };

  return (
    <div
      className="h-auto sm:h-[50rem] w-full sm:w-[90%] flex flex-col justify-center items-center relative"
      style={{
        background: isDarkMode
          ? "linear-gradient(to bottom, #18282A , #221A2C)"
          : "linear-gradient(to bottom, #F9F8FF, #F3F9FF)",
      }}
    >
      <div className="w-full sm:w-[90%] h-auto sm:h-[5rem] flex flex-col items-center justify-center gap-1">
        <h1
          className={`text-[2rem] font-semibold mt-[5rem] ${
            isDarkMode ? "text-white" : "text-black"
          } text-center`}
        >
          Collection Spotlight
        </h1>
        <h6
          className={`${
            isDarkMode ? "text-gray-300" : "text-gray-700"
          } text-sm text-center`}
        >
          Discover extraordinary moments with our Spotlight Collection
          metatickets—exclusive access to premium events for an unforgettable
          experience. Grab yours today!
        </h6>
      </div>
      <div
        className="w-full sm:w-[90%] h-auto sm:h-[90%] flex justify-center items-center relative overflow-x-auto"
        ref={containerRef}
      >
        <button
          className="absolute top-1/2 left-0 transform py-1 -translate-y-1/2 bg-transparent border border-blue-500"
          onClick={handlePrev}
        >
          <ChevronRightIcon className="rotate-180" style={{ color: "blue" }} />
        </button>

        <button
          className="absolute top-1/2 right-0 transform py-1 -translate-y-1/2 bg-transparent border border-blue-500"
          onClick={handleNext}
        >
          <ChevronRightIcon style={{ color: "blue" }} />
        </button>
        <div className="flex flex-col sm:flex-row gap-10">
          {spot?.map((item, index) => {
            return (
              <SpotlightCard
                key={item.id}
                currentIndex={currentIndex}
                isDarkMode={isDarkMode}
                data={item.data}
                index={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Spotlight;
