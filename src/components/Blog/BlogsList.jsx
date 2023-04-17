import React from "react";
import data from "./data.json";

const BlogsList = () => {
  return (
    <div className="my-5 grid grid-cols-3 gap-3">
      {data.map((record) => {
        return (
          <div key={record.index}>
            {/*==================================data================================ */}

            {/*======================================card================================== */}
            <div class="w-[80%] h-fit p-6 mr-5 my-2 bg-[#3a3a3a4d] border-gradient-box-7 rounded-lg">
              <div className="flex flex-row justify-center gap-x-5 items-center">
                <img
                  className="w-[10%] h-[10%] rounded-full "
                  src={record.proimage}
                  alt="owner"
                />
                <div className="text-white font-normal text-[13px] ">
                  <h1>{record.name}</h1>
                </div>
                <div className="border-2 rounded-lg py-1 px-3">
                  <h5 className="text-white flex items-center font-normal text-description">
                    {record.date}
                  </h5>
                </div>
              </div>

              <div className="flex items-center my-2 h-fit">
                <img
                  className="w-[325px] h-[180px] mb-1 rounded-[5.84px] transition duration-300 ease-in-out hover:scale-110"
                  src={record.image}
                  alt="Bonnie "
                />
              </div>

              <div className="text-white flex items-center">
                <h1 className="p-1 text-subtitle not-italic font-medium leading-[145.3%] capitalize">
                  {record.title}
                </h1>
              </div>
              <div className="text-white flex items-center">
                <p className="p-1 text-description not-italic font-light leading-[142.8%] capitalize">
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

      {/*=====================================pagination and view more============== */}
      <div className="text-white ml-[70rem] my-5 rounded-lg">
        <button className="bg-[#3a3a3a4d] w-[10rem] h-[5vh]">View More</button>
      </div>

      {/*===================================end ===================================== */}
    </div>
  );
};

export default BlogsList;
