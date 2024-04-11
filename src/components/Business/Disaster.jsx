import React,{ useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { Autoplay, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
// import 'swiper/css/pagination';

// import './styles.css';

// import required modules
// import { Pagination } from 'swiper/modules';

const Disaster = () => {

  return (
      <div className="md:flex md:flex-row md:gap-x-5 lg:gap-x-10 md:py-7 pt-5 lg:pt-10 ">
          <div class=" md:w-[400%] lg:w-[230%]  w-[100%] rounded-[15px] border-2 dark:border-[#101010] border-[#FFFFFF]  overflow-hidden bg-cover bg-no-repeat ">
            <img src="/img/businessimg.png" className=" md:w-[400%] lg:w-[230%] w-[100%] h-[100%] transition duration-300 ease-in-out hover:scale-110  " alt=""/>
          </div>
          <div className="flex-col items-center  lg:py-5 ">
            <div  className="flex flex-col gap-y-2 py-4 ">
                <div className="flex flex-row justify-start items-center ">
                    <div className="md:w-[3%] w-[8%] relative top-7 ">
                    <img src="/img/icon1.png" className="" alt=""/>
                    </div>
                            </div>
              <p className=" capitalize text-[#101010] dark:text-[#fff] md:text-[14px] lg:text-[18px] text-justify not-italic font-normal leading-[140%] tracking-[0.32px] pl-9 ">
              PruthaTek implements a disaster recovery program at all of its data  premises which includes a set of data protection and other security-related activities and embraces data recovery scenarios for each  potential data loss situation (e.g., hardware or software failure,  computer virus, human factor, etc.). This program comprises multiple  components to minimize the risk of any single point of failure,  including the following:          
              </p>
  </div>
            <div  className="flex flex-col gap-y-2 py-4">
            <div className="flex flex-row justify-start items-center ">
                    <div className="md:w-[3%] w-[8%] relative top-8">
                    <img src="/img/icon4.png" className="" alt=""/>
                    </div>
                            </div>
              <p className="dark:text-[#fff] text-[#101010] text-justify md:text-[14px] lg:text-[18px] not-italic font-normal leading-[140%] tracking-[0.32px] pl-9">
              All application data is replicated to multiple systems within a data center and to remote data centers.     </p>
                     </div>

            <div  className="flex flex-col gap-y-2 py-4">
            <div className="flex flex-row justify-start items-center gap-x-4">
                    <div className="md:w-[3%] w-[8%] relative top-8">
                    <img src="/img/tick3.png" className="" alt=""/>
                    </div>
                            </div>
              <p className="dark:text-[#fff] text-[#101010] md:text-[14px] lg:text-[18px] text-justify not-italic font-normal leading-[140%] tracking-[0.32px] pl-9">
              PruthaTek operates a geographically distributed set of data centers that are designed to maintain service continuity in the event of a disaster or other incident in a single region     
              </p>
       </div>
          </div>
          </div>

         
  );
};

export default Disaster;

