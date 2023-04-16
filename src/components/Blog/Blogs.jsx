import React from "react";
import Subnavbar from "./Subnavbar";
import BlogsList from "./BlogsList";

const Blogs = () => {
  return (
    <>
      {/*======================================first blogs image======================= */}

      <div>
        <div className="flex flex-row ml-20 my-5">
          <img
            className="w-[58%] h-[40%] mb-3 border-2 rounded-[15px] "
            src="./img/blogs.png"
            alt="Bonnie "
          />

          <div className=" w-[570px] h-[379.57px] border-2 absolute translate-x-[40rem] translate-y-[2rem] rounded-[15px] backdrop-blur-sm">
            <div className="text-white">
              <h1 className="p-5 not-italic font-semibold text-[30px] capitalize">
                Worldwide Repls, part 3: Firing Up The Engines
              </h1>
            </div>

            <div className="text-white">
              <span className="p-5 not-italic font-normal text-[16px]">
                Mar 22, 2023
              </span>
            </div>

            <div className="text-white">
              <p className="p-5 not-italic font-normal text-[17px] capitalize">
                MACHINE LEARNING- the most hyped technology these days due to
                its ability to automate tasks, detect patterns and learn from
                the data. It is becoming the most rapidly growing field…
              </p>
            </div>
            <div>
              <h5 className="p-5 not-italic font-normal text-[18px] text-gradient">
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
    </>
  );
};

export default Blogs;
