import React from "react";
import { BiSend } from "react-icons/bi";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import i1 from "./i1.png";
import i2 from "./i2.png";
import i3 from "./i3.png";
import i4 from "./i4.png";
import i5 from "./i5.png";
import i6 from "./i6.png";
import i7 from "./i7.png";
import i8 from "./i8.png";
import i9 from "./i9.png";
import i10 from "./i10.png";
import i11 from "./i11.png";
import i12 from "./i12.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
// import { Link } from "react-scroll";

const Contact = () => {
  return (
    <div className="bg-black lg:py-12">
      {/* Hero Section */}
      <div className="flex flex-col sm:flex-row md:flex-row sm:py-4 md:py-6 lg:flex-row px-5 lg:px-20 items-start justify-center lg:gap-x-10">
        <div className="lg:w-[30%] md:w-[50%] sm:w-[60%] w-[90%]">
          <img src={i12} alt="" />
        </div>
        <div>
          <div className="">
            <h2 className="lg:text-title  text-[25px] md:gap-y-12 lg:text-[30px] font-semibold">
              <span className="text-white">Have an Idea and Want to</span>
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
        <h2 className="flex justify-center text-[20px] items-center font-semibold lg:text-[26px] text-white">
          Trusted And Happy Clients
        </h2>
      </div>
      <div className=" lg:ml-20 lg:mt-10">
        <Swiper
          spaceBetween={50}
          slidesPerView={window.innerWidth > 640 ? 5 : 2}
        >
          <SwiperSlide>
            <img src={i8} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={i6} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={i5} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={i4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={i9} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={i7} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="lg:px-20 px-4 lg:py-5 py-4  bg_circle">
        <div className="glass">
          <div className="lg:mt-12 ">
            <h2 className="text-white lg:text-[40px] flex justify-center items-center">
              Schedule A Meeting With A Specialist.
            </h2>
          </div>
          <div className="flex md:flex-row lg:flex-row flex-col  md:items-center md:justify-between lg:items-center justify-start lg:justify-between px-7 lg:px-20 md:px-20 py-2 lg:py-20  lg:gap-x-10">
            <div className="flex flex-col lg:gap-y-10 md:gap-y-5 gap-y-6 sm:gap-y-6 pt-3  lg:w-[50%]">
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
            <div className="flex flex-col md:pt-5 lg:pt-12 sm:gap-y-6 pt-6 sm:pt-4 md:gap-y-5 lg:gap-y-10  gap-y-6 lg:w-[50%]">
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
                <h2 className="text-white mt-3">Upload Document</h2>
                <button className="text-white bg-[#B3B3B3] rounded-full px-6 py-2">
                  Choose
                </button>
              </div>
              <input
                type="text"
                placeholder="Country*"
                className="bg-transparent border-b-2"
              />
              <div className="flex justify-end pt-5">
                <div className="bg-gradient-to-r from-[#F05225] to-[#EEA820]  rounded-full text-white lg:w-[20%] text-center py-2">
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
    </div>
  );
};

export default Contact;
