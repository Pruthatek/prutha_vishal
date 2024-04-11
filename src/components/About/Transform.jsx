import React from "react";
import SwiperCore, { Autoplay, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

SwiperCore.use([Autoplay, Pagination]);

const Transform = (props) => {
  const transformData = [
    {
      title: "Extensive Screening and Exceptional Talent",
      describe: `Our rigorous screening process ensures we only work with exceptional talent, delivering high-quality technology solutions for our clients. Trust Pruthatek for a team of experts to bring your vision to life.`,
      style: "bg-gradient-to-r from-[#f05225] to-[#eea820]",
    },
    {
      title: "Elite Tech",
      describe: `We boast a track record of satisfied customers who trusted us with their sophisticated software needs. Our expertise is recognized by third-party marketplace websites, further affirming our capabilities in delivering high-quality solutions.`,
      style: "bg-gradient-to-r from-[#f05225] to-[#eea820]",
    },
    {
      title: "Communication in the Professional Environment",
      describe: `We make every effort to ensure that our clients are happy. We are
      open and honest with our clientele. We express our concerns, offer
      frequent updates, and solicit constructive input from our clients`,
      style: "bg-gradient-to-r from-[#f05225] to-[#eea820]",
    },
    {
      title: "Project Collaborator",
      describe: `Our project leads have over seven years of experience in managing diverse projects. They provide valuable insights on developing best practices, offer support on critical tasks, and help resolve communication issues, ensuring your project is on track and successful.`,
      style: "bg-gradient-to-r from-[#0DA1DA] to-[#5DB98E]",
    },
    {
      title: "Development Partner",
      describe: `Our Business Executive is a part of the senior leadership team. You may reach them via Team, Skype, WhatsApp to communicate and other platforms. In reality, things do not always go as planned. Anyone may make a mistake. The question is, how quickly can we give a solution?`,
      style: "bg-gradient-to-r from-[#0DA1DA] to-[#5DB98E]",
    },
  ];
  return (
    <div className="mb-20 lg:px-20 px-10 pt-10 ">
      <div>
        <h2 className="text-[17px] lg:text-[22px] text-center font-bold text-[#b3b3b3]">
          Ready To Transform Your Business ?
        </h2>
      </div>
      <div className="my-10 flex flex-col gap-y-5">
        <h2 className="text-[18px] lg:text-title text-gradient">
          A One-of-a-Kind Approach to Each Client
        </h2>
        <p className="text-subtitle lg:pr-20 tracking-[1.1px] font-[300]">
          At Pruthatek, We Understand That Every Client Is Unique, And We Take
          Pride In Our One-of-a-kind Approach To Technology Solutions. Our Team
          Is Dedicated To Delivering Customised Services That Meet Your Specific
          Business Needs, Ensuring Your Success.
        </p>
      </div>

      {/* Card */}
      <div className="capitalize xl:flex flex-row gap-x-10 flex-wrap items-center px-2 lg:px-0 justify-center gap-y-10 hidden lg:block ">
        {transformData.map((data, index) => {
          return (
            <div
              key={index}
              className={`hover:${data.style} min-h-[350px] shadow-[0px_4px_14px_0px_rgba(0,0,0,0.25)] dark:shadow-[#000000] dark:shadow-lg lg:w-[30%] h-[30%] rounded-lg p-[2px]  hover:shadow-none`}
            >
              <div
                key={index}
                className={
                  "group px-10 lg:py-12 flex flex-col gap-y-10 rounded-lg py-4 cursor-pointer transition duration-300 ease-in-out min-h-[350px] dark:bg-[#101010] bg-white"
                }
              >
                <h2
                  className={`font-semibold text-[20px] text-transparent bg-clip-text ${data.style}`}
                >
                  {data.title}
                </h2>
                <p className="lg:text-justify">{data.describe}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Small */}
      <div className="capitalize items-center px-2  justify-center gap-y-5  xl:hidden ">
        <Swiper
          spaceBetween={10}
          centeredSlides={false}
          loop={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
        >
          {transformData.map((data, index) => {
            return (
              <SwiperSlide key={index}>
                <div
                  key={index}
                  className={`${data.style} w-[100%] h-[80%] rounded-lg p-[2px]  hover:shadow-none`}
                >
                  <div
                    key={index}
                    className={
                      "group  px-10  flex flex-col gap-y-10 rounded-lg py-4 cursor-pointer transition duration-300 ease-in-out dark:bg-[#101010] bg-white"
                    }
                  >
                    <h2
                      className={`font-semibold text-[20px] text-transparent bg-clip-text ${data.style}`}
                    >
                      {data.title}
                    </h2>
                    <p className="lg:text-justify">{data.describe}</p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Transform;
