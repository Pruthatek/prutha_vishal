import React from "react";
import { BiSend } from "react-icons/bi";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const Contact = () => {
  return (
    <div className="">
      {/* Hero Section */}
      <div className="flex flex-col sm:flex-row md:flex-row sm:py-4 md:py-6 lg:flex-row px-5 lg:px-20 items-start justify-center lg:gap-x-10">
        <div className="lg:w-[30%] md:w-[50%] sm:w-[60%] w-[90%]">
          <img src="/img/i12.png" alt="" />
        </div>
        <div>
          <div className="">
            <h2 className="text-title md:gap-y-12 lg:text-[30px] font-semibold">
              <span className="">Have an Idea and Want to</span>
              <br />
              <span className="textborder lg:ml-32 lg:text-[30px]">
                Create App or web?
              </span>
            </h2>
            <p className="text-gray-500 max-sm:text-[15px] lg:mt-5 lg:w-[661.74px] lg:text-[20px] lg:py-4 ">
              Then Your are at right place , Pruthatek have best Experts in
              their <br /> fields so they can help you to execute your idea in
              realLife.
            </p>
          </div>
        </div>
      </div>

      {/* Client Section */}
      <div className=" lg:mt-5">
        <h2 className="flex justify-center text-[20px] items-center font-semibold lg:text-[26px] ">
          Trusted And Happy Clients
        </h2>
      </div>
      <div className=" lg:ml-20 lg:mt-10">
        <Swiper
          spaceBetween={50}
          slidesPerView={window.innerWidth > 640 ? 5 : 2}
        >
          <SwiperSlide>
            <img src="/img/i8.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/img/i6.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/img/i5.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/img/i4.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/img/i9.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/img/i7.png" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Form */}
      <div className="lg:px-20 px-4 mt-32">
        <div className="glassmorphism rounded-lg p-2">
          <div className="lg:mt-12 ">
            <h2 className="text-title lg:text-[40px] flex justify-center items-center">
              Schedule A Meeting With A Specialist.
            </h2>
          </div>
          <div className="mt-5 flex md:flex-row lg:flex-row flex-col  md:items-center md:justify-between lg:items-center justify-start lg:justify-between px-7 lg:px-20 md:px-20 py-2 lg:py-20 lg:gap-x-10">
            <div className="flex flex-col lg:gap-y-10 md:gap-y-5 gap-y-6 sm:gap-y-6 pt-3 lg:w-[40%]">
              <input
                type="text"
                placeholder="First Name*"
                className="bg-transparent border-b-2"
              />
              <input
                type="text"
                placeholder="Email*"
                className="bg-transparent border-b-2"
              />
              <input
                type="text"
                placeholder="Company Name"
                className="bg-transparent border-b-2"
              />
              <input
                type="text"
                placeholder="Subject"
                className="bg-transparent border-b-2"
              />
              <input
                type="text"
                placeholder="Message"
                className="bg-transparent border-b-2"
              />
            </div>
            <div className="flex flex-col md:pt-5 lg:pt-12 sm:gap-y-6 pt-6 sm:pt-4 md:gap-y-5 lg:gap-y-10  gap-y-6 lg:w-[40%]">
              <input
                type="text"
                placeholder="Last Name*"
                className="bg-transparent border-b-2"
              />
              <input
                type="text"
                placeholder="Phone No. (+91,+44.....)"
                className="bg-transparent border-b-2"
              />
              <div className="flex flex-row  gap-x-8">
                <h2 className=" mt-3">Upload Document</h2>
                <button className=" bg-[#B3B3B3] rounded-full px-6 py-2">
                  Choose
                </button>
              </div>
              <input
                type="text"
                placeholder="Country*"
                className="bg-transparent border-b-2"
              />
              <div className="flex justify-end pt-5">
                <div className="bg-gradient-to-r from-[#F05225] to-[#EEA820]  rounded-full  lg:w-[20%] text-center py-2">
                  <p className="flex flex-row gap-x-2 px-5 justify-center items-center">
                    Send{" "}
                    <span>
                      <BiSend />
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Circle BG */}
      <div className="circle" style={{ top: "20px" }} />
      <div
        className="circle"
        style={{
          top: "10px",
          right: "-50px",
        }}
      />
      <div
        className="circle"
        style={{
          top: "650px",
        }}
      />
    </div>
  );
};

export default Contact;
