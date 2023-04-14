import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const CaseStudy = () => {
  return (
    <div className="my-5">
      <div className="flex flex-col items-center justify-center mb-5">
        {/* title */}
        <div className="text-white font-bold text-[22px] text-center">
          <h4>Case Studies</h4>
        </div>
        {/* description */}
        <div className="my-5 text-white font-normal hidden lg:block">
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
      <div className="px-20">
        <Swiper
          spaceBetween={50}
          slidesPerView={window.innerWidth > 640 ? 3 : 1}
        >
          <SwiperSlide>
            <div className="px-6 py-10 bg-[#3A3A3A4D] border-gradient-box rounded-3xl flex flex-col items-center">
              <div className="">
                <svg
                  width="20"
                  height="16"
                  viewBox="0 0 20 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.870758 8.71408L5.9122 0.753906H9.40583L6.22176 7.47583C6.95882 7.77065 7.57794 8.30133 8.07914 9.06786C8.60981 9.80492 8.87515 10.6304 8.87515 11.5444C8.87515 12.7826 8.44766 13.8292 7.59268 14.6842C6.7377 15.5392 5.69108 15.9667 4.45284 15.9667C3.21459 15.9667 2.16797 15.5392 1.31299 14.6842C0.458008 13.8292 0.0305176 12.7826 0.0305176 11.5444C0.0305176 10.5715 0.310598 9.62803 0.870758 8.71408ZM11.0421 8.71408L16.0835 0.753906H19.5772L16.3931 7.47583C17.1301 7.77065 17.7493 8.30133 18.2505 9.06786C18.7811 9.80492 19.0465 10.6304 19.0465 11.5444C19.0465 12.7826 18.619 13.8292 17.764 14.6842C16.909 15.5392 15.8624 15.9667 14.6242 15.9667C13.3859 15.9667 12.3393 15.5392 11.4843 14.6842C10.6293 13.8292 10.2018 12.7826 10.2018 11.5444C10.2018 10.5715 10.4819 9.62803 11.0421 8.71408Z"
                    fill="white"
                  />
                </svg>
                <p className="mt-3 font-normal text-white text-description text-justify">
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
                  <h5 className="mb-1 font-semibold text-subtitle text-white">
                    Daniel Lane,
                  </h5>

                  <span className="text-[12px] text-white font-normal">
                    Developer, Lorem ipsum dolor sit amet,
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="px-6 py-10 bg-[#3A3A3A4D] border-gradient-box-2 rounded-3xl flex flex-col items-center">
              <div className="">
                <svg
                  width="20"
                  height="16"
                  viewBox="0 0 20 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.870758 8.71408L5.9122 0.753906H9.40583L6.22176 7.47583C6.95882 7.77065 7.57794 8.30133 8.07914 9.06786C8.60981 9.80492 8.87515 10.6304 8.87515 11.5444C8.87515 12.7826 8.44766 13.8292 7.59268 14.6842C6.7377 15.5392 5.69108 15.9667 4.45284 15.9667C3.21459 15.9667 2.16797 15.5392 1.31299 14.6842C0.458008 13.8292 0.0305176 12.7826 0.0305176 11.5444C0.0305176 10.5715 0.310598 9.62803 0.870758 8.71408ZM11.0421 8.71408L16.0835 0.753906H19.5772L16.3931 7.47583C17.1301 7.77065 17.7493 8.30133 18.2505 9.06786C18.7811 9.80492 19.0465 10.6304 19.0465 11.5444C19.0465 12.7826 18.619 13.8292 17.764 14.6842C16.909 15.5392 15.8624 15.9667 14.6242 15.9667C13.3859 15.9667 12.3393 15.5392 11.4843 14.6842C10.6293 13.8292 10.2018 12.7826 10.2018 11.5444C10.2018 10.5715 10.4819 9.62803 11.0421 8.71408Z"
                    fill="white"
                  />
                </svg>
                <p className="mt-3 font-normal text-white text-description text-justify">
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
                  <h5 className="mb-1 font-semibold text-subtitle text-white">
                    Daniel Lane,
                  </h5>

                  <span className="text-[12px] text-white font-normal">
                    Developer, Lorem ipsum dolor sit amet,
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="px-6 py-10 bg-[#3A3A3A4D] border-gradient-box-3 rounded-3xl flex flex-col items-center">
              <div className="">
                <svg
                  width="20"
                  height="16"
                  viewBox="0 0 20 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.870758 8.71408L5.9122 0.753906H9.40583L6.22176 7.47583C6.95882 7.77065 7.57794 8.30133 8.07914 9.06786C8.60981 9.80492 8.87515 10.6304 8.87515 11.5444C8.87515 12.7826 8.44766 13.8292 7.59268 14.6842C6.7377 15.5392 5.69108 15.9667 4.45284 15.9667C3.21459 15.9667 2.16797 15.5392 1.31299 14.6842C0.458008 13.8292 0.0305176 12.7826 0.0305176 11.5444C0.0305176 10.5715 0.310598 9.62803 0.870758 8.71408ZM11.0421 8.71408L16.0835 0.753906H19.5772L16.3931 7.47583C17.1301 7.77065 17.7493 8.30133 18.2505 9.06786C18.7811 9.80492 19.0465 10.6304 19.0465 11.5444C19.0465 12.7826 18.619 13.8292 17.764 14.6842C16.909 15.5392 15.8624 15.9667 14.6242 15.9667C13.3859 15.9667 12.3393 15.5392 11.4843 14.6842C10.6293 13.8292 10.2018 12.7826 10.2018 11.5444C10.2018 10.5715 10.4819 9.62803 11.0421 8.71408Z"
                    fill="white"
                  />
                </svg>
                <p className="mt-3 font-normal text-white text-description text-justify">
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
                  <h5 className="mb-1 font-semibold text-subtitle text-white">
                    Daniel Lane,
                  </h5>

                  <span className="text-[12px] text-white font-normal">
                    Developer, Lorem ipsum dolor sit amet,
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="px-6 py-10 bg-[#3A3A3A4D] border-gradient-box-2 rounded-3xl flex flex-col items-center">
              <div className="">
                <svg
                  width="20"
                  height="16"
                  viewBox="0 0 20 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.870758 8.71408L5.9122 0.753906H9.40583L6.22176 7.47583C6.95882 7.77065 7.57794 8.30133 8.07914 9.06786C8.60981 9.80492 8.87515 10.6304 8.87515 11.5444C8.87515 12.7826 8.44766 13.8292 7.59268 14.6842C6.7377 15.5392 5.69108 15.9667 4.45284 15.9667C3.21459 15.9667 2.16797 15.5392 1.31299 14.6842C0.458008 13.8292 0.0305176 12.7826 0.0305176 11.5444C0.0305176 10.5715 0.310598 9.62803 0.870758 8.71408ZM11.0421 8.71408L16.0835 0.753906H19.5772L16.3931 7.47583C17.1301 7.77065 17.7493 8.30133 18.2505 9.06786C18.7811 9.80492 19.0465 10.6304 19.0465 11.5444C19.0465 12.7826 18.619 13.8292 17.764 14.6842C16.909 15.5392 15.8624 15.9667 14.6242 15.9667C13.3859 15.9667 12.3393 15.5392 11.4843 14.6842C10.6293 13.8292 10.2018 12.7826 10.2018 11.5444C10.2018 10.5715 10.4819 9.62803 11.0421 8.71408Z"
                    fill="white"
                  />
                </svg>
                <p className="mt-3 font-normal text-white text-description text-justify">
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
                  <h5 className="mb-1 font-semibold text-subtitle text-white">
                    Daniel Lane,
                  </h5>

                  <span className="text-[12px] text-white font-normal">
                    Developer, Lorem ipsum dolor sit amet,
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="px-6 py-10 bg-[#3A3A3A4D] border-gradient-box-3 rounded-3xl flex flex-col items-center">
              <div className="">
                <svg
                  width="20"
                  height="16"
                  viewBox="0 0 20 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.870758 8.71408L5.9122 0.753906H9.40583L6.22176 7.47583C6.95882 7.77065 7.57794 8.30133 8.07914 9.06786C8.60981 9.80492 8.87515 10.6304 8.87515 11.5444C8.87515 12.7826 8.44766 13.8292 7.59268 14.6842C6.7377 15.5392 5.69108 15.9667 4.45284 15.9667C3.21459 15.9667 2.16797 15.5392 1.31299 14.6842C0.458008 13.8292 0.0305176 12.7826 0.0305176 11.5444C0.0305176 10.5715 0.310598 9.62803 0.870758 8.71408ZM11.0421 8.71408L16.0835 0.753906H19.5772L16.3931 7.47583C17.1301 7.77065 17.7493 8.30133 18.2505 9.06786C18.7811 9.80492 19.0465 10.6304 19.0465 11.5444C19.0465 12.7826 18.619 13.8292 17.764 14.6842C16.909 15.5392 15.8624 15.9667 14.6242 15.9667C13.3859 15.9667 12.3393 15.5392 11.4843 14.6842C10.6293 13.8292 10.2018 12.7826 10.2018 11.5444C10.2018 10.5715 10.4819 9.62803 11.0421 8.71408Z"
                    fill="white"
                  />
                </svg>
                <p className="mt-3 font-normal text-white text-description text-justify">
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
                  <h5 className="mb-1 font-semibold text-subtitle text-white">
                    Daniel Lane,
                  </h5>

                  <span className="text-[12px] text-white font-normal">
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
