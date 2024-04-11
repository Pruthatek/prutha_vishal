import React from "react";
import data from "./data.json";

const BlogsList = (props) => {
  return (
    <div className="my-10 flex flex-row flex-wrap items-center justify-center gap-x-10 gap-y-5 lg:px-20 px-10 w-full">
      {data.map((record) => {
        return (
          <div
            className="hover:bg-gradient-to-br hover:from-[#F05225] hover:to-[#eea820] bg-white dark:bg-[#101010] p-[2px] rounded-lg shadow-[0px_4px_14px_0px_rgba(0,0,0,0.25)] dark:shadow-[#000000] dark:shadow-lg transition-all duration-300 dark:border dark:border-white/50 dark:hover:border-transparent"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="0"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
          >
            <div
              key={record.id}
              className={
                "bg-white dark:bg-[#101010] rounded-lg cursor-pointer "
              }
            >
              <div class="w-[326px] h-fit p-6 rounded-md">
                {/* <div className="flex flex-row justify-center gap-x-5 items-center">
                  <img
                    className="w-[13%] h-[13%] rounded-full "
                    src={record.proimage}
                    alt="owner"
                  />
                  <div className=" font-normal text-[13px] ">
                    <h1>{record.name}</h1>
                  </div>
                  <div className="border-[1px] rounded-full py-1 px-3">
                    <h5 className=" flex items-center font-normal lg:text-description text-[10px]">
                      {record.date}
                    </h5>
                  </div>
                </div> */}
                <a href={"/blog/" + record.id}>
                  <div className="">
                    <h1 className="p-1 text-subtitle not-italic font-semibold capitalize descriptionTruncate-2">
                      {record.title}
                    </h1>
                  </div>
                </a>
                <a href={"/blog/" + record.id}>
                  <div className="my-6 min-h-[170px] h-[170px] max-h-[170px] w-full overflow-hidden rounded-lg">
                    <img
                      className="w-full h-full rounded-md transition duration-300 ease-in-out hover:scale-105"
                      src={record.image}
                      alt={record.title}
                    />
                  </div>
                </a>
                <div className="">
                  <p className="p-1 text-[12px] not-italic font-light capitalize descriptionTruncate-3">
                    {record.desc}
                  </p>
                </div>
                <div className="flex flex-row justify-between items-center mt-2">
                  {/* <img
                    className="w-[13%] h-[13%] rounded-full "
                    src=""
                    alt="owner"
                  /> */}
                  <div className="flex items-center gap-x-3">
                    <div className="p-1 px-3 rounded-full flex items-center justify-center border border-[#F05225]">
                      <p className="font-bold">{record.name[0]}</p>
                    </div>
                    <div>
                      <div className="font-semibold text-subtitle max-w-[130px]">
                        <h1 className="truncate">{record.name}</h1>
                      </div>
                      <div className="">
                        <h5 className="flex items-center font-thin lg:text-description">
                          {record.date}
                        </h5>
                      </div>
                    </div>
                  </div>
                  <a href={"/blog/" + record.id}>
                    <div className="text-gradient flex justify-end">
                      <h1 className="text-subtitle font-bold whitespace-nowrap">
                        Read More
                      </h1>
                    </div>
                  </a>
                </div>
                {/* <a href={"/blog/" + record.id}>
                  <div className="">
                    <h1 className="p-1 text-subtitle not-italic font-semibold capitalize descriptionTruncate-2">
                      {record.title}
                    </h1>
                  </div>
                </a> */}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BlogsList;
