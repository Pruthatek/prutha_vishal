import React from "react";
import Subnavbar from "./Subnavbar";
import BlogsList from "./BlogsList";

const Blogs = () => {
  return (
    <div className="px-20 flex flex-col items-center">
      {/*======================================first blogs image======================= */}
      <div className="lg:flex flex-row items-center lg:my-5 mb-32 mt-4">
        <div className="border-2 w-[18.688rem] h-[12.526rem] lg:w-[50%] lg:h-[25%] rounded-lg overflow-hidden">
          <img
            className=" mb-3 rounded-lg transition duration-300 ease-in-out hover:scale-105 cursor-pointer"
            src="./img/blogs.png"
            alt="Bonnie "
          />
        </div>
        <div className="w-[18rem] translate-x-[2rem] translate-y-[-6rem] lg:w-[38%] h-fit border-gradient-box-4 absolute lg:translate-x-[36rem] lg:translate-y-[-0.3rem] rounded-lg backdrop-blur-md">
          <div className="p-5 flex flex-col lg:gap-y-5">
            <h1 className="font-semibold text-description lg:text-[28px] capitalize">
              Worldwide Repls, part 3: Firing Up The Engines
            </h1>
            <span className="lg:text-description text-[0.75rem]">
              Mar 22, 2023
            </span>
            <p className="lg:text-subtitle capitalize text-[0.8rem]">
              MACHINE LEARNING- the most hyped technology these days due to its
              ability to automate tasks, detect patterns.
            </p>
            <h5 className="text-subtitle text-gradient cursor-pointer">
              Read more
            </h5>
          </div>
        </div>
      </div>
      {/*=========================================SubNavbar=================================================== */}
      <Subnavbar />
      {/*=========================================End SubNavbar============================================== */}

      {/*==========================================BlogsList============================================ */}
      <BlogsList />
      {/*==========================================End ===================================================== */}
    </div>
  );
};

export default Blogs;
