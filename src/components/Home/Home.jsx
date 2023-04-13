import React from "react";
import Home_img from "./Home_img";

const Home = () => {
  return (
    <div className="text-white px-20 mt-32 flex items-center justify-between mb-20">
      <div className="w-[60%]">
        <p className="text-[40px]">Your Idea Our Code</p>
        <p className="mt-10 w-[65%] text-justify">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Lorem ipsum
          sit amet, consectetuer adipiscing elit, Lorem ipsum dolor sit amet,
          consectetuer adipiscing elit, Lorem ipsum dolor sit amet, consectetuer
          adipiscing elit
        </p>
      </div>
      <div className="bg-blue-900/30 rounded-full">
        <div className="backdrop-blur-3xl">
          <Home_img />
        </div>
      </div>
    </div>
  );
};

export default Home;
