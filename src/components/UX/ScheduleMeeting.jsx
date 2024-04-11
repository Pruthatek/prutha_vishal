import React from "react";
// import Ellipse124 from "../../assets/images/Ellipse124.png";
const ScheduleMeeting = () => {
  return (
    <>
      <div className="px-4 md:px-6 relative ">
        {/* svg subtract  */}

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="41"
          height="22"
          viewBox="0 0 41 22"
          fill="none"
          className=" absolute  inset-x-0 -top-[3.5%] max-sm:left-[46%] md:-top-[3.6%] xl:-top-[6.1%] left-[48%]   "
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M40.6856 21.1468C40.7147 21.1123 40.7147 21.0618 40.6856 21.0272L24.4514 1.77663C22.4537 -0.592209 18.8045 -0.59221 16.8068 1.77663L0.57263 21.0272C0.543498 21.0618 0.543498 21.1123 0.57263 21.1468C0.590254 21.1677 0.616201 21.1798 0.643539 21.1798H40.6147C40.642 21.1798 40.668 21.1677 40.6856 21.1468Z"
            fill="url(#paint0_linear_2190_62292)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_2190_62292"
              x1="-1.50448"
              y1="-0.603412"
              x2="19.738"
              y2="33.6103"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#EF32D9" />
              <stop offset="1" stop-color="#3F5EFB" />
            </linearGradient>
          </defs>
        </svg>

        <div className=" shadow-[0px_4px_14px_0px_rgba(0,0,0,0.25)] dark:shadow-[#000000] dark:shadow-lg bg-gradient-to-r from-[#F65E83] to-[#6B82FB]  p-[1.5px]  mt-20 w-[95%] xl:w-[70%] rounded-lg mx-auto ">
          <div className="rounded-lg p-[3px] bg-[#ffffff] dark:bg-[#101010] ">
            <div className="rounded-md p-10 flex flex-col gap-y-10 ">
              <div className="flex flex-col xl:flex xl:flex-row ">
                <div className="flex items-center justify-center">
                  <img
                    src="/img/Ellipse124.png"
                    className="w-[13.125rem] h-[13.125rem] rounded-full"
                    alt="Designoverview"
                  />
                </div>

                <div className="w-[260px] md:w-[580px] ">
                  <div className="-mr-3  md:px-[3rem] flex flex-col ">
                    <h5 className=" flex items-center   text-[18px]   md:text-[20px] xl:ml-[2.5rem] md:ml-[2.5rem] font-bold leading-[3rem] text-transparent  bg-clip-text bg-gradient-to-r from-[#EF32D9] to-[#3F5EFB]">
                      Request a Complimentary Consultation.
                    </h5>

                    <p className="text-justify mr-10 text-black dark:text-white  text-[16px]  md:text-[18px] xl:ml-[2.5rem] md:ml-[2.5rem]">
                      Our team of experienced UI/UX designers will collaborate
                      with you to create engaging and intuitive interfaces that
                      enhance user satisfaction and drive business growth.
                    </p>

                    <div className=" my-5 xl:ml-[2.2rem] md:ml-[9rem]">
                      <button
                        type="button"
                        className="text-[14px] tracking-[2%] leading-[17.75px] text-white dark:text-white w-[241px] h-[40px] rounded-[10px] border-[#00000] bg-transparent bg-clip bg-gradient-to-r from-[#EF32D9] to-[#3F5EFB]"
                      >
                        Schedule Meeting
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScheduleMeeting;
