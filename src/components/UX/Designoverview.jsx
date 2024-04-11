import React from "react";
// import Maskgroup from "../../assets/images/Maskgroup.png";

const Designoverview = (props) => {
  return (
    <>
      
      <div className="z-40 px-4 md:px-6  relative">
        <div
          className={ 
            " bg-[#D9D9D9]/50 dark:bg-[#3a3a3a4d] dark:border-none w-[95%] md:w-[100%] xl:w-[95%] h-auto mx-auto p-4  xl:p-6  my-20 border shadow-[#1E1E1E] rounded-[0.625rem] flex flex-col justify-center items-center xl:flex xl:flex-row md:flex-col " +
            (props.theme === "light" ? "glassmorphism-2" : "glassmorphism")
          }
        >
          {/* main code */}
          <div className="flex flex-col justify-center items-center">
            <div className="flex items-center justify-center ">
              <h1 className=" text-black dark:text-white text-[18px]  md:text-[20px] font-bold not-italic leading-[2.188rem]  text-transparent bg-clip-text bg-gradient-to-r from-[#EF32D9] to-[#3F5EFB]">
                Elevate User Engagement with Pruthatek's Expert UI/UX Designers.
              </h1>
            </div>
            <div className="hidden lg:block xl:block md:block">
              <img
                src="/img/Maskgroup.png"
                className="w-[25rem] xl:h-[30rem] md:h-[25rem]"
                alt="Designoverview"
              />
            </div>
          </div>

          {/*=========================================================== */}

          <div className="ml-8 pb-6 pt-5 w-[20rem] xl:ml-[8rem] xl:space-y-4 xl:w-[50rem] xl:my-[1rem] md:ml-10">
            <div className="xl:space-y-1.5">
              <h1 className="text-[#101010] dark:text-white text-[18px]  md:text-[20px] font-semibold not-italic leading-[1.585rem]">
                Responsive Design
              </h1>
              <svg
                width="103"
                height="3"
                viewBox="0 0 103 3"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M101.852 1.50537H1.85156"
                  stroke="url(#paint0_linear_1970_48977)"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1970_48977"
                    x1="1.85156"
                    y1="2.14651"
                    x2="98.6986"
                    y2="-15.3432"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#0038FF" />
                    <stop offset="1" stop-color="#9747FF" />
                  </linearGradient>
                </defs>
              </svg>
              <p className="text-[color:var(--white-theme-text-heading-color,#B3B3B3)] py-2 text-justify mr-5 text-[#B3B3B3] dark:text-white text-[14px] md:text-[16px] font-medium not-italic leading-[140%] text-base ">
                Our designers create responsive designs that adapt to different
                screen sizes and devices, ensuring that your software is
                accessible and functional across a wide range of platforms and
                devices.
              </p>
            </div>

            <div className="xl:space-y-1.5">
              <h1 className="text-[#101010] dark:text-white text-[18px]  md:text-[20px] font-semibold not-italic leading-[1.585rem]  ">
                Rapid Prototyping
              </h1>
              <svg
                width="103"
                height="3"
                viewBox="0 0 103 3"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M101.852 1.52295H1.85156"
                  stroke="url(#paint0_linear_1970_48981)"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1970_48981"
                    x1="1.75681"
                    y1="2.02293"
                    x2="101.591"
                    y2="2.02293"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#0DA1DA" />
                    <stop offset="1" stop-color="#5DB98E" />
                  </linearGradient>
                </defs>
              </svg>
              <p className="text-[color:var(--white-theme-text-heading-color,#B3B3B3)] py-2 text-justify mr-5 text-[#B3B3B3] dark:text-white text-[14px] md:text-[16px] font-medium not-italic leading-[140%] text-base ">
                Our designers use rapid prototyping tools to create interactive
                and clickable prototypes, allowing you to test and refine your
                software's design and functionality before development.
              </p>
            </div>

            {/*========================================================== */}
            <div className="xl:space-y-1.5">
              <h1 className="text-[#101010] dark:text-white text-[18px]  md:text-[20px] font-semibold not-italic leading-[1.585rem] ">
                Data-Driven Design
              </h1>
              <svg
                width="103"
                height="2"
                viewBox="0 0 103 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M101.852 1H1.85156"
                  stroke="url(#paint0_linear_1970_48985)"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1970_48985"
                    x1="-3.26655"
                    y1="0.97151"
                    x2="-3.2402"
                    y2="3.20931"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FF63F9" />
                    <stop offset="0.568846" stop-color="#E41EAD" />
                    <stop offset="1" stop-color="#FF008D" />
                  </linearGradient>
                </defs>
              </svg>

              <div className="para">
              <p className="text-[color:var(--white-theme-text-heading-color,#B3B3B3)] py-2 text-justify mr-5 text-[#B3B3B3] dark:text-white text-[14px] md:text-[16px] font-medium not-italic leading-[140%] text-base ">
                  Our designers use data and analytics to inform their design
                  decisions, ensuring that your software is optimised for user
                  engagement and conversions.
                </p>
              </div>
            </div>

            {/*============================================================== */}

            {/*========================================================== */}
            <div className="xl:space-y-1.5">
              <h1 className="text-[#101010] dark:text-white text-[18px]  md:text-[20px] font-semibold not-italic leading-[1.585rem] ">
                Accessibility Compliance
              </h1>
              <svg
                width="103"
                height="3"
                viewBox="0 0 103 3"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M101.852 1.55859H1.85156"
                  stroke="url(#paint0_linear_1970_48989)"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1970_48989"
                    x1="12.8787"
                    y1="1.83058"
                    x2="12.9103"
                    y2="3.60899"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#F05225" />
                    <stop offset="1" stop-color="#EEA820" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="para">
              <p className="text-[color:var(--white-theme-text-heading-color,#B3B3B3)] py-2 text-justify mr-5 text-[#B3B3B3] dark:text-white text-[14px] md:text-[16px] font-medium not-italic leading-[140%] text-base ">
                  Our designers are well-versed in accessibility guidelines and
                  standards, ensuring that your software is accessible to users
                  with disabilities and compliant with legal requirements.
                </p>
              </div>
            </div>

            {/*============================================================== */}

            {/*========================================================== */}
            <div className="xl:space-y-1.5">
              <h1 className="text-[#101010] dark:text-white text-[18px]  md:text-[20px] font-semibold not-italic leading-[1.585rem] ">
                Design System Creation
              </h1>
              <svg
                width="103"
                height="3"
                viewBox="0 0 103 3"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M101.852 1.81299H1.85156"
                  stroke="url(#paint0_linear_1970_48993)"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1970_48993"
                    x1="36.6447"
                    y1="2.42649"
                    x2="36.6212"
                    y2="0.914725"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#0038FF" />
                    <stop offset="0.526042" stop-color="#3A86FF" />
                    <stop offset="1" stop-color="#6DCCFF" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="para">
                <p className=" text-justify mr-5 text-[#B3B3B3] py-2 dark:text-white text-[14px]  md:text-[16px] font-medium not-italic leading-[1.4rem]">
                  Our designers can create a design system for your software,
                  ensuring consistency and coherence across different interfaces
                  and functionalities.
                </p>
              </div>
            </div>

            {/*============================================================== */}
          </div>
        </div>
        {/* square  */}
        <div className="contact-square-1 absolute top-[-4%] right-[3%] hidden xl:block z-20 h-[5rem] w-[5rem]" />
        <div className="contact-square-2 absolute -bottom-[5%] left-[3%] hidden xl:block -z-50 h-[5rem] w-[5rem]" />
      </div>
    </>
  );
};

export default Designoverview;
