import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const CaseStudy = () => {
  return (
    <div className="my-5">
      <div className="flex flex-col items-center justify-center mb-5">
        {/* title */}
        <div className=" font-bold text-[22px] text-center">
          <h4>Case Studies</h4>
        </div>
        {/* description */}
        <div className="my-5 font-normal hidden lg:block">
          {/* <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-[22rem] mb-[-1.4rem] lg:mb-[-1rem] hidden lg:block"
          >
            <path
              d="M23.9727 1.77441H1.97266V23.7744"
              stroke="url(#paint0_linear_260_22947)"
              stroke-width="2"
              stroke-linecap="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear_260_22947"
                x1="4.39863"
                y1="7.7581"
                x2="21.133"
                y2="17.183"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#F05225" />
                <stop offset="1" stop-color="#EEA820" />
              </linearGradient>
            </defs>
          </svg> */}
          <p className="font-semibold text-description lg:text-subtitle text-center w-[90%] lg:w-full">
            Explore how pruthatek shaped multiple businesses with creativity and
            innovative technology
          </p>

          {/* <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-[74%] mt-[-1rem] lg:mt-[-1rem] hidden lg:block"
          >
            <path
              d="M1.02728 23.8662L23.0273 23.8662L23.0273 1.86621"
              stroke="url(#paint0_linear_260_22948)"
              stroke-width="2"
              stroke-linecap="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear_260_22948"
                x1="20.6013"
                y1="17.8825"
                x2="3.86698"
                y2="8.45759"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#F05225" />
                <stop offset="1" stop-color="#EEA820" />
              </linearGradient>
            </defs>
          </svg> */}
        </div>
      </div>

      {/* Cards */}
      <div className="px-20 text-white">
        <Swiper
          spaceBetween={50}
          slidesPerView={window.innerWidth > 640 ? 3 : 1}
        >
          <SwiperSlide>
            <div className="px-6 py-10 bg-[#3A3A3A4D] border-gradient-box rounded-3xl flex flex-col items-center">
              <div className="">
                <svg width="27" height="22" viewBox="0 0 27 22" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M8.18186 0.322266C4.13741 5.23338 -2.39148 16.0956 3.84852 20.2556" stroke="white"/> <circle cx="6.4485" cy="15.9223" r="6.06667" fill="white"/> <path d="M22.0486 0.322266C18.0041 5.23338 11.4752 16.0956 17.7152 20.2556" stroke="white"/> <circle cx="20.3152" cy="15.9223" r="6.06667" fill="white"/> </svg>
                <p className="mt-3 font-normal  text-description text-justify">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                  Lorem ipsum sit amet, consectetuer adipiscing elit, Lorem
                  ipsum dolor sit amet, consectetuer adipiscing elit, Lorem
                  ipsum dolor sit amet, adi elit, Lorem ipsum dolor sit amet,
                  Lorem ipsum dolor sit amet, adi elit, Lorem ipsum dolor sit
                  amet
                </p>
              </div>
              <div className="flex flex-row items-center my-3 gap-x-3">
                <div className="w-14 h-14 border-dotted border-2 border-[#0038FF] rounded-full">
                  <img
                    className="mb-3 rounded-full shadow-lg "
                    src="/img/Ellipse 43.png"
                    alt="Bonnie "
                  />
                </div>
                <div className="flex flex-col">
                  <h5 className="mb-1 font-semibold text-subtitle ">
                    Daniel Lane,
                  </h5>

                  <span className="text-[12px]  font-normal">
                    Developer, Lorem ipsum dolor sit amet,
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="px-6 py-10 bg-[#3A3A3A4D] border-gradient-box-2 rounded-3xl flex flex-col items-center">
              <div className="">
                <svg width="27" height="22" viewBox="0 0 27 22" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M8.18186 0.322266C4.13741 5.23338 -2.39148 16.0956 3.84852 20.2556" stroke="white"/> <circle cx="6.4485" cy="15.9223" r="6.06667" fill="white"/> <path d="M22.0486 0.322266C18.0041 5.23338 11.4752 16.0956 17.7152 20.2556" stroke="white"/> <circle cx="20.3152" cy="15.9223" r="6.06667" fill="white"/> </svg>
                <p className="mt-3 font-normal  text-description text-justify">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                  Lorem ipsum sit amet, consectetuer adipiscing elit, Lorem
                  ipsum dolor sit amet, consectetuer adipiscing elit, Lorem
                  ipsum dolor sit amet, adi elit, Lorem ipsum dolor sit amet,
                  Lorem ipsum dolor sit amet, adi elit, Lorem ipsum dolor sit
                  amet
                </p>
              </div>
              <div className="flex flex-row items-center my-3 gap-x-3">
                <div className="w-14 h-14 border-dotted border-2 border-[#0038FF] rounded-full">
                  <img
                    className="mb-3 rounded-full shadow-lg "
                    src="/img/Ellipse 43.png"
                    alt="Bonnie "
                  />
                </div>
                <div className="flex flex-col">
                  <h5 className="mb-1 font-semibold text-subtitle ">
                    Daniel Lane,
                  </h5>

                  <span className="text-[12px]  font-normal">
                    Developer, Lorem ipsum dolor sit amet,
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="px-6 py-10 bg-[#3A3A3A4D] border-gradient-box-3 rounded-3xl flex flex-col items-center">
              <div className="">
                <svg width="27" height="22" viewBox="0 0 27 22" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M8.18186 0.322266C4.13741 5.23338 -2.39148 16.0956 3.84852 20.2556" stroke="white"/> <circle cx="6.4485" cy="15.9223" r="6.06667" fill="white"/> <path d="M22.0486 0.322266C18.0041 5.23338 11.4752 16.0956 17.7152 20.2556" stroke="white"/> <circle cx="20.3152" cy="15.9223" r="6.06667" fill="white"/> </svg>
                <p className="mt-3 font-normal  text-description text-justify">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                  Lorem ipsum sit amet, consectetuer adipiscing elit, Lorem
                  ipsum dolor sit amet, consectetuer adipiscing elit, Lorem
                  ipsum dolor sit amet, adi elit, Lorem ipsum dolor sit amet,
                  Lorem ipsum dolor sit amet, adi elit, Lorem ipsum dolor sit
                  amet
                </p>
              </div>
              <div className="flex flex-row items-center my-3 gap-x-3">
                <div className="w-14 h-14 border-dotted border-2 border-[#0038FF] rounded-full">
                  <img
                    className="mb-3 rounded-full shadow-lg "
                    src="/img/Ellipse 43.png"
                    alt="Bonnie "
                  />
                </div>
                <div className="flex flex-col">
                  <h5 className="mb-1 font-semibold text-subtitle ">
                    Daniel Lane,
                  </h5>

                  <span className="text-[12px]  font-normal">
                    Developer, Lorem ipsum dolor sit amet,
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="px-6 py-10 bg-[#3A3A3A4D] border-gradient-box-2 rounded-3xl flex flex-col items-center">
              <div className="">
                <svg width="27" height="22" viewBox="0 0 27 22" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M8.18186 0.322266C4.13741 5.23338 -2.39148 16.0956 3.84852 20.2556" stroke="white"/> <circle cx="6.4485" cy="15.9223" r="6.06667" fill="white"/> <path d="M22.0486 0.322266C18.0041 5.23338 11.4752 16.0956 17.7152 20.2556" stroke="white"/> <circle cx="20.3152" cy="15.9223" r="6.06667" fill="white"/> </svg>
                <p className="mt-3 font-normal  text-description text-justify">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                  Lorem ipsum sit amet, consectetuer adipiscing elit, Lorem
                  ipsum dolor sit amet, consectetuer adipiscing elit, Lorem
                  ipsum dolor sit amet, adi elit, Lorem ipsum dolor sit amet,
                  Lorem ipsum dolor sit amet, adi elit, Lorem ipsum dolor sit
                  amet
                </p>
              </div>
              <div className="flex flex-row items-center my-3 gap-x-3">
                <div className="w-14 h-14 border-dotted border-2 border-[#0038FF] rounded-full">
                  <img
                    className="mb-3 rounded-full shadow-lg "
                    src="/img/Ellipse 43.png"
                    alt="Bonnie "
                  />
                </div>
                <div className="flex flex-col">
                  <h5 className="mb-1 font-semibold text-subtitle ">
                    Daniel Lane,
                  </h5>

                  <span className="text-[12px]  font-normal">
                    Developer, Lorem ipsum dolor sit amet,
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="px-6 py-10 bg-[#3A3A3A4D] border-gradient-box-3 rounded-3xl flex flex-col items-center">
              <div className="">
                <svg width="27" height="22" viewBox="0 0 27 22" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M8.18186 0.322266C4.13741 5.23338 -2.39148 16.0956 3.84852 20.2556" stroke="white"/> <circle cx="6.4485" cy="15.9223" r="6.06667" fill="white"/> <path d="M22.0486 0.322266C18.0041 5.23338 11.4752 16.0956 17.7152 20.2556" stroke="white"/> <circle cx="20.3152" cy="15.9223" r="6.06667" fill="white"/> </svg>
                <p className="mt-3 font-normal  text-description text-justify">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                  Lorem ipsum sit amet, consectetuer adipiscing elit, Lorem
                  ipsum dolor sit amet, consectetuer adipiscing elit, Lorem
                  ipsum dolor sit amet, adi elit, Lorem ipsum dolor sit amet,
                  Lorem ipsum dolor sit amet, adi elit, Lorem ipsum dolor sit
                  amet
                </p>
              </div>
              <div className="flex flex-row items-center my-3 gap-x-3">
                <div className="w-14 h-14 border-dotted border-2 border-[#0038FF] rounded-full">
                  <img
                    className="mb-3 rounded-full shadow-lg "
                    src="/img/Ellipse 43.png"
                    alt="Bonnie "
                  />
                </div>
                <div className="flex flex-col">
                  <h5 className="mb-1 font-semibold text-subtitle ">
                    Daniel Lane,
                  </h5>

                  <span className="text-[12px]  font-normal">
                    Developer, Lorem ipsum dolor sit amet,
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default CaseStudy;
