import React from "react";
import data from "./data.json";

const BlogsList = () => {
  return (
    <div className="  items-center ml-[1rem] my-5 grid grid-cols-3 gap-3">
      {data.map((record) => {
        return (
          <div key={record.index}>
            {/*==================================data================================ */}

            {/*======================================cards1 ================================== */}
            <div className="ml-8">
              <div class="w-[360px] h-[480px] p-6 mr-5 my-2 bg-[#3a3a3a4d] border  rounded-[1.536rem] shadow-[#1E1E1E] lg:mr-2">
                <div className="flex space-x-4 items-center">
                  <img
                    className="w-[10%] h-[10%]   rounded-full "
                    src={record.proimage}
                    alt="owner"
                  />

                  <div className="text-white font-normal text-[13px] ">
                    <h1>{record.name}</h1>
                  </div>
                  <div className=" w-[40%] h-[7vh]  border-2  rounded-[14px]">
                    <h5 className="p-2  text-white flex items-center font-normal text-[13px]">
                      {record.date}
                    </h5>
                  </div>
                </div>

                {/*===================================image =========================== */}

                <div className="flex items-center my-2">
                  <img
                    className="w-[325px] h-[180px] mb-1  rounded-[5.84px] transition duration-300 ease-in-out hover:scale-110"
                    src={record.image}
                    alt="Bonnie "
                  />
                </div>

                <div className="text-white flex items-center">
                  <h1 className="p-1 text-[15px] not-italic font-medium leading-[145.3%] capitalize">
                    {record.title}
                  </h1>
                </div>
                <div className="text-white flex items-center">
                  <p className="p-1 text-[13px] not-italic font-light leading-[142.8%] capitalize">
                    {record.disc}
                  </p>
                </div>

                <div className="text-transparent  bg-clip-text bg-gradient-to-r from-[#F05225] to-[#EEA820]">
                  <h1 className="not-italic font-normal text-[18px] leading-[25px]">
                    {record.more}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/*=============================end ======================================= */}

      {/*=====================================pagination and view more============== */}
      <div className="text-white ml-[70rem] my-5">
        <button className="bg-[#3a3a3a4d] w-[10rem] h-[5vh]">View More</button>
      </div>

      {/*===================================end ===================================== */}
    </div>
  );
};

export default BlogsList;
