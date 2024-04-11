import React, {useEffect} from "react";
// import uiux from "../../assets/images/uiux.png";
// import graphic from "../../assets/images/graphic.png";
import { DesignthatSpeaks } from "./DesignthatSpeaks";
import SliderCard from "./SliderCard";
import Designoverview from "./Designoverview";
import DesignSymbol from "./DesignSymbol";
import ScheduleMeeting from "./ScheduleMeeting";

const UiuxDesigne = () => {

  useEffect(() => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }, [])
  

  return (
    <>
      <div className=" px-3 md:px-8 xl:pt-20 pt-10">
        {/*=======================================first section========= */}

        <div className=" flex flex-col xl:flex-row md:flex-row ">
          <div className="box-border xl:ml-8 px-3 py-5 w-[21.875rem] h-[31.253rem] xl:w-[36.778rem] xl:h-[28.753rem] md:w-[36.778rem] md:h-[31.253rem]  top-[238.94px] left-[111.56px]  ">
            <div className=" xl:ml-8 ">
              <h1 className="max-sm:ml-3 text-[7rem] xl:text-[11.7rem] md:text-[10rem]    font-bold leading-[16.368rem] tracking-[5%] text-transparent  bg-clip-text bg-gradient-to-r from-[#D400A5] via-[#2682C3] to-[#2ED6E3]">
                UI/UX
              </h1>
              <h2 className="text-[#101010]  dark:text-white  font-bold not-italic uppercase text-[35px] leading-[3rem] md:mt-3 xl:leading-[3.063rem] tracking-[0.2rem] xl:tracking-[1.1rem] absolute top-[12rem] ml-14 md:top-[9.5rem] xl:mt-[3rem] -mt-8 xl:text-[3rem]  md:ml-[3rem] md:tracking-[1.1rem]">
                Designing
              </h2>

              <p className=" text-[#101010] dark:text-white text-[1rem]   md:text-[1.25rem] font-medium not-italic  leading-[165%]">
                Intuitive, engaging, and user-friendly designs that enhance your
                brand's value and create an exceptional digital experience.
              </p>

              <p className="my-5 text-[#101010] dark:text-white py-2 text-[1.125rem]  md:text-[25px] font-semibold not-italic leading-[145%]">
                Require expert UI/UX testing for flawless app performance?
              </p>
<a href="/contact">
            <div className="w-max text-white py-3 px-4 flex items-center justify-center gap-x-4 hover:gap-x-10 rounded-lg cursor-pointer transition-all duration-500 border-transparent bg-gradient-to-r from-[#D400A5] via-[#2682C3] to-[#2ED6E3]">
              <p className="">Schedule a Meeting</p>
              <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[1.5rem] h-[1.5rem] ml-6 md:ml-8 -mr-1 "
                  >
                    <path
                      d="M20 10C20 10.3788 19.786 10.725 19.4472 10.8944L1.44721 19.8944C1.10217 20.067 0.688656 20.0256 0.384588 19.7882C0.0805187 19.5508 -0.0598736 19.1597 0.0238132 18.7831L1.97561 10L0.0238132 1.21694C-0.0598736 0.840351 0.0805187 0.449212 0.384588 0.211802C0.688656 -0.0256073 1.10217 -0.0669427 1.44721 0.10558L19.4472 9.10558C19.786 9.27497 20 9.62124 20 10ZM3.80217 11L2.43195 17.166L14.7639 11L3.80217 11ZM14.7639 9.00001L2.43195 2.83402L3.80217 9.00001L14.7639 9.00001Z"
                      fill="white"
                    />
                  </svg>
            </div>
  
            </a>
              {/* <div className=" my-5 hover:gap-x-10  transition-all duration-500 md:px-0 xl:px-0 px-10 ">
                <button
                  type="button"
                  className="px-5 py-2.5 text-[1rem] text-white dark:text-white w-[241px] h-[50px] rounded-[10px] border-[#00000] bg-transparent bg-clip bg-gradient-to-r from-[#D400A5] via-[#2682C3] to-[#2ED6E3] text-center inline-flex items-center transition ease-in-out hover:-translate-y-px hover:translate-x-1 "
                >
                  Schedule a Meeting
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[1.5rem] h-[1.5rem] ml-6 md:ml-8 -mr-1 "
                  >
                    <path
                      d="M20 10C20 10.3788 19.786 10.725 19.4472 10.8944L1.44721 19.8944C1.10217 20.067 0.688656 20.0256 0.384588 19.7882C0.0805187 19.5508 -0.0598736 19.1597 0.0238132 18.7831L1.97561 10L0.0238132 1.21694C-0.0598736 0.840351 0.0805187 0.449212 0.384588 0.211802C0.688656 -0.0256073 1.10217 -0.0669427 1.44721 0.10558L19.4472 9.10558C19.786 9.27497 20 9.62124 20 10ZM3.80217 11L2.43195 17.166L14.7639 11L3.80217 11ZM14.7639 9.00001L2.43195 2.83402L3.80217 9.00001L14.7639 9.00001Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div> */}
            </div>
          </div>

          <div className="px-2 py-1 my-10 xl:my-2  hidden lg:block xl:block md:block">
            <img
              src="/img/graphic.png"
              className="    md:w-[35rem]  md:h-[40rem]  invisible xl:visible lg:visible  md:visible"
              alt="designui/ux"
            />
          </div>
        </div>
      </div>

      {/*===========================================================Second section==================== */}

      <DesignthatSpeaks />

      <SliderCard />
      {/*===========================================================End================================ */}

      {/*===========================================================forth section==================== */}
      <Designoverview />
      {/*===========================================================End ============================ */}

      {/*===========================================================forth section==================== */}
      <DesignSymbol />
      {/*===========================================================End ============================ */}

      {/*===========================================================forth section==================== */}
      <ScheduleMeeting />
      {/*===========================================================End ============================ */}
    </>
  );
};

export default UiuxDesigne;
