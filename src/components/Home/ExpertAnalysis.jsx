import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";

// Components
import ExpertAnalysisCard from "./ExpertAnalysisCard";

import data from "../Blog/data.json";

const ExpertAnalysis = () => {
  return (
    <div className="overflow-hidden lg:py-20 py-10 px-10 lg:px-20">
      <div className="flex flex-col justify-center items-center gap-4 mb-10">
        <p className="text-title lg:text-[22px] font-bold text-center text-[#B3B3B3] dark:text-[#ffffff]">
          Expert Analysis
        </p>
      </div>
      <div className="">
        <Swiper
          spaceBetween={50}
          slidesPerView={
            window.innerWidth > 1024 ? 4 : window.innerWidth > 640 ? 2 : 1
          }
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay]}
        >
          {data.map((item, index) => {
            return (
              <SwiperSlide className="max-w-[360px] lg:mx-5 my-4" key={index}>
                <ExpertAnalysisCard data={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default ExpertAnalysis;
