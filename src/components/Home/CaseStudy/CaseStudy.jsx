import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";

const CaseStudy = () => {
  const CaseStudyData = [
    {
      title: `Billing Management System`,
      subtitle: `Developer, Lorem ipsum dolor sit amet`,
      describe: `It Helps The Business Owner's In A Comprehensive Manner To Keep A Track Of Multiple Invoices And Accounts Just By A Few Clicks On The Mouse. It Helps In Managing Chain Of Stores As Well As Multiple Company Billing Systems. It Also Provides Recurring Service And Renting Business Billing Solution.`,
      style: `bg-gradient-to-r from-[#F05225] to-[#EEA820]`,
      imgSrc: `/img/Bill.png`,
    },
    {
      title: `Travel and Hospitality`,
      subtitle: `Developer, Lorem ipsum dolor sit amet`,
      describe: `The Travel And Hospitality Industry Includes A Broad Range Of Companies: Tour Operators, Travel Consolidators, Tourist Boards, Airlines, Cruise Lines, Railroads, Private Transportation Providers, Car Rental Services, Hotels, Resorts, Lodging, Restaurants And Other Real-Estate Intensive Consumer Businesses.`,
      style: `bg-gradient-to-r from-[#FF63F9] via-[#E41EAD] to-[#FF008D]`,
      imgSrc: `/img/Travel.png`,
    },
    {
      title: `Lawyer Management System`,
      subtitle: `Developer, Lorem ipsum dolor sit amet`,
      describe: `It Is An Integrated Digital Workspace From Where You Can Run Your Operations, Manage Your Project And Matters, And Collaborate With The Client From Anywhere. It Gives You Instant Authorized Access From Any Device, To Assign And Manage Tasks, Monitor Workflow, Documents, Dates, Notifications.`,
      style: `bg-gradient-to-r from-[#D400A5] via-[#1F7ECB] to-[#2ED6E3]`,
      imgSrc: `/img/Lawyer.png`,
    },
    {
      title: `E-commerce Management System`,
      subtitle: `Developer, Lorem ipsum dolor sit amet`,
      describe: `An Ecommerce Content Management System (CMS) Is Software That Enables Ecommerce Shop Owners To Create, Edit And Publish Digital Website Content Without Writing Any Code. It Comes With Some Crucial Ecommerce Capabilities Like Product Inventory Management, Shopping Cart, Shipping And Payment Gateway Integrations.`,
      style: `bg-gradient-to-r from-[#0DA1DA] to-[#5DB98E]`,
      imgSrc: `/img/Ecom.png`,
    },
    {
      title: `Hospital Management System`,
      subtitle: `Developer, Lorem ipsum dolor sit amet`,
      describe: `Hospital Management System Is A Computer System That Helps Manage The Information Related To Health Care And Aids In The Job Completion Of Health Care Providers Effectively. They Manage The Data Related To All Departments Of Healthcare Such As Clinical`,
      style: `bg-gradient-to-r from-[#F05225] to-[#EEA820]`,
      imgSrc: `/img/Hospital.png`,
    },
    {
      title: `Media and Entertainment`,
      subtitle: `Developer, Lorem ipsum dolor sit amet`,
      describe: `Media And Entertainment Includes Movies, Television Shows, Radio Shows, News, Music, Magazines And Books.`,
      style: `bg-gradient-to-r from-[#7A4199] via-[#8A408B] to-[#AC3F6D]`,
      imgSrc: `/img/Media.png`,
    },
    {
      title: `ERP Management System`,
      subtitle: `Developer, Lorem ipsum dolor sit amet`,
      describe: `ERP Stands For Enterprise Resource Planning , It's Software That Manages A Company's Financials, Supply Chain, Opearations, Commerce, Reporting ,  Manufacturing,And Human Resource Activities`,
      style: `bg-gradient-to-r from-[#E10E8C] to-[#520C43]`,
      imgSrc: `/img/ERP.png`,
    },
  ];
  return (
    <div className="py-5 pt-20" id="innovationInsights">
      <div className="flex flex-col items-center justify-center mb-5">
        {/* title */}
        <div className="text-[#B3B3B3] dark:text-[#ffffff] font-bold text-[22px] text-center">
          <h4>Innovation Insights</h4>
        </div>
        {/* description */}
        <div className="my-5 font-normal hidden lg:block">
          <p className="text-subtitle font-light text-center text-[#B3B3B3] dark:text-[#ffffff]">
            Explore how pruthatek shaped multiple businesses with creativity and
            innovative technology
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className="px-10 lg:px-20">
        <Swiper
          // spaceBetween={30}
          // slidesPerView={
          //   window.innerWidth > 1024 ? 3 : window.innerWidth > 640 ? 2 : 1
          // }
          breakpoints={{
            300: {
                slidesPerView: 1,
                spaceBetween: 50,
              },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
           
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay]}
        >
          {CaseStudyData.map((data, index) => {
            return (
              <SwiperSlide key={index} className="lg:my-14 my-5 lg:mx-5">
                <div
                  className={
                    "p-[2px] rounded-2xl flex flex-col items-center w-full xl:min-h-[300px] xl:h-[300px] md:min-h-[300px] md:h-[300px] min-h-[320px] h-[320px] hover:shadow-[0px_4px_14px_0px_rgba(30,30,30,0.25)] transition-all duration-300 dark:shadow-[#000000] dark:shadow-lg " +
                    data.style
                  }
                >
                  <div className="dark:bg-[#101010] rounded-2xl bg-white p-5 lg:px-6 lg:py-10 h-full w-full">
                    <div className="flex flex-row items-center my-3 gap-x-3">
                      <div>
                        <img
                          className="rounded-full shadow-lg w-16 lg:w-50"
                          src={data.imgSrc}
                          alt="Bonnie"
                        />
                      </div>
                      <div className="flex flex-col">
                        <h5
                          className={
                            "font-semibold text-[18px] text-transparent bg-clip-text " +
                            data.style
                          }
                        >
                          {data.title}
                        </h5>
                        <span
                          className={
                            data.style + " w-[60%] h-[3px] rounded-full mt-3"
                          }
                        />
                      </div>
                    </div>
                    <div>
                      <p className="mt-3 font-normal text-justify lg:text-left text-[12px] tracking-wider leading-5">
                        {data.describe}
                      </p>
                    </div>
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

export default CaseStudy;
