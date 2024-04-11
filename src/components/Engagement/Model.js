import React,{ useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { Autoplay, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
// import 'swiper/css/pagination';

// import './styles.css';

// import required modules
// import { Pagination } from 'swiper/modules';

const Model = () => {

  return (
      <div className="md:flex md:flex-row gap-x-10 py-7 md:pt-12 ">
          <div className="lg:flex md:hidden  lg:w-[250%]  md:w-[500%]  rounded-[15px] border-2 dark:border-[#101010] border-[#FFFFFF]  overflow-hidden bg-cover bg-no-repeat ">
            <img src="/img/Eimgp1.png" className="h-[100%] lg:w-[250%] md:w-[500%] shadow-[0px_20px_35px_0px_rgba(0,0,0,0.29)]  transition duration-300 ease-in-out hover:scale-110 " alt=""/>
          </div>
          <div className="flex-col items-center max-sm:pt-10  ">
            <div  className="flex flex-col gap-y-2  ">
                <div className="flex flex-row justify-start items-center gap-x-4">
                    <div className="md:w-[3%] w-[8%] ">
                    <img src="/img/icon1.png" className="" alt=""/>
                    </div>
              <h2 className="bg-clip-text bg-gradient-to-r from-[#0DA1DA]  to-[#5DB98E] text-transparent text-[24px] not-italic font-semibold text-justify leading-[200%] tracking-[0.24px] capitalize ">
              Fixed Price
                            </h2>
                            </div>
              <p className="dark:text-white text-[#101010] md:text-[14px] lg:text-[18px] text-justify not-italic font-normal leading-[140%] tracking-[0.32px] pl-9 ">
              PruthaTek offers customers a fixed price/fixed scope model when the scope and specifications of the project are reasonably clear. Under this low-risk model, we define expected deliverables and timelines as to settle a mutually agreed fixed price. This pricing model is applicable for Agile projects as well. The scope is broken down into short user stories. We are paid the price based on the story size determined during the planning session upon completion of this story regardless of its size.              </p>
            </div>
            <div  className="flex flex-col gap-y-2 max-sm:pt-5 ">
            <div className="flex flex-row justify-start items-center gap-x-4">
                    <div className="md:w-[3%] w-[8%]">
                    <img src="/img/icon4.png" className="" alt=""/>
                    </div>
              <h2 className="bg-clip-text bg-gradient-to-r from-[#F05225]  to-[#EEA820] text-transparent text-[24px] not-italic font-semibold text-justify leading-[200%] tracking-[0.24px] capitalize ">
              Time & Material
                            </h2>
                            </div>
              <p className="dark:text-white text-[#101010] text-justify md:text-[14px] lg:text-[18px] not-italic font-normal leading-[140%] tracking-[0.32px] pl-9">
              We opt for the Time &amp; Material Model as to provide you with greater flexibility that allows you to alter project requirements on an ongoing basis mirroring upcoming market trends. This model is perfect for complex projects with inevitable changes in specification and design. This model envisages payments at an hourly rate, which is agreed upon when the agreement is concluded. The team size may be changed at any time, thus, optimizing the cost and duration of the project.              </p>{" "}
            </div>

            <div  className="flex flex-col gap-y-2 max-sm:pt-5">
            <div className="flex flex-row justify-start items-center gap-x-4">
                    <div className="md:w-[3%] w-[8%]">
                    <img src="/img/tick3.png" className="" alt=""/>
                    </div>
              <h2 className="bg-clip-text bg-gradient-to-r from-[#FF63F9]  to-[#E41EAD] text-transparent text-[24px] not-italic font-semibold text-justify leading-[200%] tracking-[0.24px] capitalize">
              Milestone Billing
                            </h2>
                            </div>
              <p className="dark:text-white text-[#101010] md:text-[14px] lg:text-[18px] text-justify not-italic font-normal leading-[140%] tracking-[0.32px] pl-9">
              We recommend this option for complex long-lasting projects with clearly identified phases where either time or milestone-based payment schedules are preferred. As each and every milestone is properly accomplished the client is expensed either a portion of the whole project expense or simply a pre-defined sum decided upon ahead of the project. This model provides for better progress monitoring and reduces risks associated with large-scale software endeavors.              </p>
            </div>
          </div>
          </div>

         
  );
};

export default Model;

