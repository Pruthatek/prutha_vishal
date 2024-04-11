import React, { useEffect } from "react";
import Subnavbar from "./Subnavbar";
import BlogsList from "./BlogsList";
import data from "./data.json";

const Blogs = (props) => {
  useEffect(() => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }, []);

  return (
    <div className="flex flex-col items-center pt-28">
      {/*======================================first blogs image======================= */}
      <div
        style={{
          backgroundImage: "url('/img/bg_light.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="lg:px-20 px-10 lg:flex flex-row items-center lg:my-8 mb-32 mt-4">
          <a href="/blog/1">
            <div className="border-2 shadow-[0px_4px_14px_0px_rgba(0,0,0,0.25)] dark:shadow-[#000000] dark:shadow-lg w-[18.688rem] h-[12.526rem] lg:w-[50%] lg:h-[30%] rounded-2xl overflow-hidden">
              <img
                className="rounded-lg transition duration-300 ease-in-out hover:scale-105 cursor-pointer"
                src={data[0].image}
                alt="Bonnie "
              />
            </div>
          </a>
          <div
            className={
              "w-[18rem] translate-x-[2rem] translate-y-[-6rem] lg:w-[38%] h-fit border-[#F05225] border-2 absolute lg:translate-x-[36rem] lg:translate-y-[-0.3rem] rounded-xl " +
              (props.theme === "light" ? "glassmorphism-2" : "glassmorphism")
            }
          >
            <div className="p-5 flex flex-col lg:gap-y-5">
              <h1 className="font-semibold text-description lg:text-[28px] capitalize text-gradient-2">
                {data[0].title}
              </h1>
              <span
                className={
                  "lg:text-description text-[0.75rem] " +
                  (props.theme === "light" ? "text-black/50" : "text-white/70")
                }
              >
                {data[0].date}
              </span>
              <p className="lg:text-subtitle capitalize text-[0.8rem] truncate">
                {data[0].desc}
              </p>
              <a href="/blog/1">
                <h5 className="text-[18px] font-semibold text-gradient cursor-pointer">
                  Read more
                </h5>
              </a>
            </div>
            {/* Animated Square */}
            <div className="absolute -top-28 -right-20 square xl:block hidden">
              <img src="/img/square.svg" alt="" />
            </div>
            <div className="absolute -bottom-10 -right-12 square-2 xl:block hidden">
              <img src="/img/square.svg" alt="" className="w-24" />
            </div>
          </div>
        </div>
      </div>
      <Subnavbar theme={props.theme} />
      <BlogsList theme={props.theme} />
      <div className="mt-3">
        <div className="w-max border-[1px] dark:border-white border-black py-2.5 px-4 flex items-center justify-center hover:text-white gap-x-10 rounded-lg cursor-pointer transition-all duration-300 ease-in-out hover:border-transparent hover:bg-gradient-to-r from-[#F05225] to-[#EEA820]">
          <p className="">View More</p>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.2197 19.0303C13.5126 19.3232 13.9874 19.3232 14.2803 19.0303L20.5303 12.7803C20.8232 12.4874 20.8232 12.0126 20.5303 11.7197L14.2803 5.46967C13.9874 5.17678 13.5126 5.17678 13.2197 5.46967C12.9268 5.76256 12.9268 6.23744 13.2197 6.53033L18.1893 11.5L3.75 11.5C3.33579 11.5 3 11.8358 3 12.25C3 12.6642 3.33579 13 3.75 13L18.1893 13L13.2197 17.9697C12.9268 18.2626 12.9268 18.7374 13.2197 19.0303Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
