
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

import "../EntSoftwareDev/entsoftwareslider.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

const EntSoftwareSlider = (props) => {
  const datas = [
    {
      title: `Internet Of Things`,
      des: `With rich technical skills and broad experience in Internet of Things software development, we deliver the best in the industry. We modernize with the latest technology and trends, and platforms to assist the most compelling IoT solutions.`,
      img: `/img/Rectangle 152.png`,
    },
    {
      title: `Internet Of Things`,
      des: `With rich technical skills and broad experience in Internet of Things software development, we deliver the best in the industry. We modernize with the latest technology and trends, and platforms to assist the most compelling IoT solutions.`,
      img: `/img/Rectangle 152.png`,
    },

    {
      title: `Internet Of Things`,
      des: `With rich technical skills and broad experience in Internet of Things software development, we deliver the best in the industry. We modernize with the latest technology and trends, and platforms to assist the most compelling IoT solutions.`,
      img: `/img/Rectangle 152.png`,
    },

    {
      title: `Internet Of Things`,
      des: `With rich technical skills and broad experience in Internet of Things software development, we deliver the best in the industry. We modernize with the latest technology and trends, and platforms to assist the most compelling IoT solutions.`,
      img: `/img/Rectangle 152.png`,
    },
  ];

  return (
    <>
      <div className="lg:py-7 md:py-7 py-10 ">
        <div
          className="bg-[#000000]"
          // style={{ backgroundImage: "url('/img/Rectangle 152.png')" }}
        >
          <div className="pt-20 lg:px-20 md:px-10 px-2  pb-10">
            <div className="flex  items-center justify-center ">
              <h1 className=" truncate px-2 text-[18px] md:text-[24px] lg:text-[26px]  not-italic font-semibold leading-[42.049px] capitalize text-transparent bg-clip-text bg-gradient-to-r from-[#F05225]  to-[#EEA820]">
                Trendsetting Technologies Put At Your Service
              </h1>
            </div>

            <div className="flex  items-center justify-center pt-5 ">
              <p className="px-2 text-white text-[14px] md:text-[16px] not-italic font-normal leading-[157.523%] tracking-[0.48px]">
                Staying in the vanguard of technological progress, we are always
                ready to provide our customers with enterprise solutions based
                on the latest technologies. We leverage the power of tech
                innovations and inscribe them into your enterprise context to
                help you excel in various business domains and let you stand out
                from competitors.
              </p>
            </div>

            <Swiper
              navigation={{
                nextEl: ".button-next-slide",
                prevEl: ".button-prev-slide",
              }}
              loop={true}
              modules={[Navigation, Pagination, Autoplay]}
              slidesPerView={
                window.innerWidth > 1024 ? 1 : window.innerWidth > 640 ? 1 : 1
              }
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              spaceBetween={30}
              pagination={{ el: ".swiper-paginationauto", clickable: true }}
              className="relative group"
            >
              {datas.map((data, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="pt-10 px-16 lg:px-36 md:px-24 ">
                      <div className="border border-[#fff] rounded-[10px] max-w-[240px] max-h-[300px] min-w-[240px] min-h-[300px] md:max-w-[600px] md:max-h-[300px] md:min-w-[500px] md:min-h-[300px]     lg:max-w-[900px] lg:max-h-[280px] lg:min-w-[900px] lg:min-h-[280px] ">
                        <div className="flex flex-row items-center justify-center  lg:gap-[1rem] md:gap-[1rem]">
                          <div className="lg:px-14 md:px-5 px-4">
                            <h1 className="py-5 text-[18px] lg:text-[25px] md:text-[23px] not-italic font-medium leading-normal  text-transparent bg-clip-text bg-gradient-to-r from-[#F05225]  to-[#EEA820]">
                              {data.title}
                            </h1>
                            <p className=" text-justify text-[#fff] text-[14px] lg:text-[18px] md:text-[16px] not-italic font-normal leading-[148.5%]">
                              {data.des}
                            </p>
                          </div>

                          <div className="image lg:px-4 md:px-4 md:py-5 lg:py-10 lg:pb-5 hidden md:block lg:block ">
                            <img
                              src={data.img}
                              className="lg:max-w-[350px] lg:max-h-[200px] lg:min-w-[350px] lg:min-h-[200px] md:max-w-[200px] md:max-h-[200px] md:min-w-[200px] md:min-h-[200px] rounded[10px]"
                              alt="slider-image"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <div className="top-[50%] absolute z-10 button-prev-slide left-0  duration-500 w-[50px] cursor-pointer h-[40px]  grid place-items-center text-white ">
                <BsArrowLeftCircle size={50} />
              </div>
              <div className="top-[50%] absolute z-10 button-next-slide right-0  duration-500 w-[50px] cursor-pointer h-[40px]  grid place-items-center text-white">
                <BsArrowRightCircle size={50} />
              </div>
              <div className="flex swiper-paginationauto  justify-center pt-4  text-[#FFA800] "></div>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default EntSoftwareSlider;
