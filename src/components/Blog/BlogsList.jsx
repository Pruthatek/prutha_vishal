import React from "react";
import data from "./data.json";

const BlogsList = () => {
  return (
    <div className="my-5 flex flex-row flex-wrap items-center justify-center gap-x-10 gap-y-5">
      {data.map((record) => {
        return (
          <div
            key={record.index}
            className="border-gradient-box-7 rounded-lg bg-transparent"
          >
            {/*======================================card================================== */}
            <div class="w-[326px] h-fit p-6 glassmorphism rounded-lg">
              <div className="flex flex-row justify-center gap-x-5 items-center">
                <img
                  className="w-[10%] h-[10%] rounded-full "
                  src={record.proimage}
                  alt="owner"
                />
                <div className="text-white font-normal text-[13px] ">
                  <h1>{record.name}</h1>
                </div>
                <div className="border-[1px] rounded-full py-1 px-3">
                  <h5 className="text-white flex items-center font-normal text-description">
                    {record.date}
                  </h5>
                </div>
              </div>

              <div className="flex items-center my-6 h-fit">
                <img
                  className="w-[325px] h-[180px] mb-1 rounded-md transition duration-300 ease-in-out hover:scale-105"
                  src={record.image}
                  alt="Bonnie "
                />
              </div>

              <div className="text-white flex items-center">
                <h1 className="p-1 text-subtitle not-italic font-medium capitalize">
                  {record.title}
                </h1>
              </div>
              <div className="text-white flex items-center">
                <p className="p-1 text-description not-italic font-light capitalize">
                  {record.disc}
                </p>
              </div>

              <div className="text-gradient">
                <h1 className="text-subtitle">Read More</h1>
              </div>
            </div>
          </div>
        );
      })}
      {/*=============================end ======================================= */}
    </div>
  );
};

export default BlogsList;
