import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// import Carousel from "./Carousel";

SwiperCore.use([Autoplay]);

const Cards = () => {
  const handleLeftClick = () => {
    setCurr((curr) => (curr === 0 ? Data.length - 1 : curr - 1));
    swiperRef.current?.slidePrev();
  };

  const handleRightClick = () => {
    setCurr((curr) => (curr === Data.length - 1 ? 0 : curr + 1));
    swiperRef.current?.slideNext();
  };

  useEffect(() => {});

  const swiperRef = useRef(null);

  const Data = [
    {
      title: `E-Commerce Website`,
      text: "Development :",
      subtitle: `Developer, Lorem ipsum dolor sit amet`,
      describe: `We specialise in creating e-commerce websites that are optimised for sales and provide a seamless shopping experience for customers, helping businesses to expand their online reach and maximise revenue.`,
      style: `bg-gradient-to-r from-[#F05225] to-[#EEA820]`,
      myclass: "orange",
    },
    {
      title: `Custom Web Application`,
      text: "Development :",
      subtitle: `Developer, Lorem ipsum dolor sit amet`,
      describe: `We develop custom web applications that are tailored to meet the unique requirements of businesses, ensuring that they can efficiently manage their operations and provide exceptional user experiences.`,
      style: `bg-gradient-to-r from-[#0DA1DA] to-[#5DB98E]`,
      myclass: "blue",
    },
    {
      title: `Content Management`,
      text: "System Development :",
      subtitle: `Developer, Lorem ipsum dolor sit amet`,
      describe: `We Provide Content Management System Development Services That Enable Businesses To Easily Manage Their Website Content,Ensuring That It Is Always Up-To-Date And Relevant To Their Audience`,
      style: `bg-gradient-to-r from-[#F05225] to-[#EEA820]`,
      myclass: "orange",
    },
    {
      title: `Responsive Website`,
      text: "Development :",
      subtitle: `Developer, Lorem ipsum dolor sit amet`,
      describe: `Our Responsive Website Design Services Ensure That Businesses Have A Website That Is Optimed For All Devices, From Desktops To Smartphones,Providing A Seamless User Experience Across All Platforms.`,
      style: `bg-gradient-to-r from-[#0DA1DA] to-[#5DB98E]`,
      myclass: "blue",
    },
    {
      title: `API Development And`,
      text: "Integration",
      subtitle: `Developer, Lorem ipsum dolor sit amet`,
      describe: `We Offer API Development And Integration Services That Enable Businesses To Seamlessly Connect Their Web Application And Systems,Ensuring That They Can Efficiently Exchange Data Streamline Their Operations.`,
      style: `bg-gradient-to-r from-[#F05225] to-[#EEA820]`,
      myclass: "orange",
    },
    {
      title: `Web Portal`,
      text: "Development",
      subtitle: `Developer, Lorem ipsum dolor sit amet`,
      describe: `Our Web Portal Development Services Are Aimed At Businesses With A Centralised platform For Managing Their Operations, Streamlining Workflows, And Providing Personalised User Experiences.`,
      style: `bg-gradient-to-r from-[#0DA1DA] to-[#5DB98E]`,
      myclass: "blue",
    },
    {
      title: `Front-End`,
      text: "Development",
      subtitle: `Developer, Lorem ipsum dolor sit amet`,
      describe: `We Specialise In Front-End Develoment, Ensuring That Businesses Have A Website That Is Visually Appealing, User-Friendly, And Optimised For Maximum Engagement. `,
      style: `bg-gradient-to-r from-[#F05225] to-[#EEA820]`,
      myclass: "orange",
    },
    {
      title: `Back-End`,
      text: "Development",
      subtitle: `Developer, Lorem ipsum dolor sit amet`,
      describe: `Our Back-End Development Services Are Focused On Building Scalable, Secure, And Robust Systems That Support The Seamless Functioning Of Web Applications And Systems.`,
      style: `bg-gradient-to-r from-[#0DA1DA] to-[#5DB98E]`,
      myclass: "blue",
    },
    {
      title: `Mobile-Friendly Website`,
      text: "Development",
      subtitle: `Developer, Lorem ipsum dolor sit amet`,
      describe: `We Develop Mobile-Friendly Websites That Provide A Seamless User Experience On All Devices, Helping Business To Reach Customers Who Use Smartphones And Tablets To Browser The Web.`,
      style: `bg-gradient-to-r from-[#F05225] to-[#EEA820]`,
      myclass: "orange",
    },
    {
      title: `Website Maintenance And`,
      text: "Support",
      subtitle: `Developer, Lorem ipsum dolor sit amet`,
      describe: `We Offer Website Maintenance And Support Services That Ensure That Businesses Have A Website That Is Always Up-To-Date,Secure,And Optimised For Performance, Providing Peace Of Mind And Freeing Up Time For Care Business Activities.`,
      style: `bg-gradient-to-r from-[#0DA1DA] to-[#5DB98E]`,
      myclass: "blue",
    },
  ];

  const carousel = useRef(null);
  const [curr, setCurr] = useState(0);

  return (
    <>
      <div className="lg:py-10 sm:py-0 max-sm:ml-5 sm:ml-0 sm:max-w-[43rem] lg:max-w-[48vw] max-sm:max-w-[21rem]">
        <div
          ref={carousel}
          className="App carousel scroll-smooth overflow-x-auto   flex flex-row  "
        >
          <Swiper
            spaceBetween={10}
            slidesPerView={window.innerWidth < 810 ? 1 : 2}
            centeredSlides={false}
            loop={true}
            autoplay={{
              el: ".swiper-pagination",
              delay: 2500,
              disableOnInteraction: false,
            }}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            pagination={{ el: ".swiper-pagination", clickable: true }}
          >
            {Data.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  className={
                    "group cursor-pointer  max-sm:px-20 rounded-2xl xl:ml-2  flex flex-col  dark:shadow-none shadow-md shadow-slate-300 items-center mb-2 w-full"
                  }
                >
                  <div
                    className={
                      "dark:bg-[#0a0a0a] mt-1 min-h-[250px] h-[250px] max-h-[250px] w-[89.9vw]  sm:min-h-[250px] sm:h-[250px] sm:max-h-[250px] sm:w-[41.5vw] xl:min-h-[240px] xl:h-[240px] xl:max-h-[240px]  xl:min-w-[21vw] rounded-2xl bg-white  py-3 px-6  xl:w-full " +
                      item.myclass
                    }
                  >
                    <div className=" flex flex-row items-center  gap-x-3">
                      <div className="flex flex-col bluetext font-['Euclid_Circular_A',sans-serif]">
                        <h5
                          className={` flex flex-col  py-2 font-semibold text-subtitle bg-clip-text max-sm:text-[20px] group-hover:bg-white group-hover:text-white text-transparent ${item.style} `}
                        >
                          {item.title}
                          <span> {item.text}</span>
                        </h5>
                      </div>
                    </div>
                    <div className="font-['Euclid_Circular_A',sans-serif]  ">
                      <p className="dark:group-hover:text-white group-hover:text-white text-[#B3B3B3] font-normal max-sm:text-[13px] py-2 text-description text-justify  ">
                        {item.describe}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="swiper-pagination -"></div>
        <div className="right-0 left-0 max-sm:px-20 sm:px-60 xl:px-60 py-7 xl:py-6 mt-4 ">
          <div className="swiper-pagination flex items-center justify-center gap-2">
            {Data.map((_, index) => (
              <div
                className={`transition-all w-3 h-3 rounded-full ${
                  curr === index
                    ? "bg-gradient-to-r from-[#F05225] to-[#EEA820] "
                    : "bg-[#D9D9D9] "
                }`}
              />
            ))}
          </div>
        </div>{" "}
        <div className="flex max-sm:px-[8rem] sm:px-[18rem] sm:py-4  xl:py-2 xl:px-[18rem] space-x-6 ">
          <div
            onClick={handleLeftClick}
            className="swiper-prev-button text-black cursor-pointer bg-slate-100  rounded-full "
          >
            <FiChevronLeft size={35} />
          </div>
          <div
            onClick={handleRightClick}
            className="swiper-next-button text-black cursor-pointer bg-slate-100  rounded-full  "
          >
            <FiChevronRight size={35} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
