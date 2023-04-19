import React from "react";
import Subnavbar from "./Subnavbar";
import BlogsList from "./BlogsList";

const Blogs = () => {
  return (
    <div className="px-20 flex flex-col items-center">
      {/*======================================first blogs image======================= */}
      <div className="flex flex-row items-center my-5">
        <img
          className="w-[50%] h-[25%] mb-3 rounded-lg transition duration-300 ease-in-out hover:scale-105 cursor-pointer"
          src="./img/blogs.png"
          alt="Bonnie "
        />
        <div className=" w-[38%] h-fit border-gradient-box-4 absolute translate-x-[36rem] translate-y-[-0.3rem] rounded-lg backdrop-blur-md">
          <div className="text-white p-5 flex flex-col gap-y-5">
            <h1 className="font-semibold text-[28px] capitalize">
              Worldwide Repls, part 3: Firing Up The Engines
            </h1>
            <span className="text-description">Mar 22, 2023</span>
            <p className="text-subtitle capitalize">
              MACHINE LEARNING- the most hyped technology these days due to its
              ability to automate tasks, detect patterns and learn from the
              data. It is becoming the most rapidly growing field…
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
