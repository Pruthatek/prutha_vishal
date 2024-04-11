import React, { useEffect, useRef } from "react";
import HappyClient from "./HappyClient/HappyClient";
import CaseStudy from "./CaseStudy/CaseStudy";
import Kijeka from "./Kijeka";
import Faq from "./Faq";
import Client from "../Contact/Client";
import GrowthJourney from "./GrowthJourney";
import ExpertAnalysis from "./ExpertAnalysis";
import DetailsCounter from "./DetailsCounter";
import TechnologySolutions from "../TechnologySolutions/TechnologySolutions";
import Typed from "typed.js";
import Spline from "@splinetool/react-spline";

const Home = (props) => {
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Design...", "Code..."],
      typeSpeed: 300,
      loop: "true",
    });

    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    return () => {
      typed.destroy();
    };
  }, []);

  const el = useRef(null);

  return (
    <div className="">
      {/* Home Hero Section */}
      <div className="px-10 py-10 pt-20 lg:pt-20 lg:px-20 flex items-center justify-between bg-[#fff] dark:bg-[#101010] dark:text-white lg:h-screen lg:mt-0 gap-x-10 overflow-hidden">
        <div className="lg:w-1/2 flex flex-col gap-y-10">
          <div className="flex items-center gap-x-5">
            <p className="lg:text-[40px] sm:text-[30px] text-[27px] font-[300]">
              Your Idea Our{" "}
              <span
                ref={el}
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#F05225] to-[#EEA820] font-bold"
              />
            </p>
          </div>
          <p className="text-justify font-[300] text-description lg:text-subtitle tracking-wider leading-[23px] lg:leading-[30px] opacity-80">
            We are a global company that offers top-notch and superior online
            and mobile app development. By providing customers with distinctive
            and feature-rich applications that meticulously address business
            needs, Pruthatek supplies them with cutting-edge technology in order
            to help them reach their goals. We are a full-cycle online and
            mobile application development firm developing the best solutions
            for mobile applications, web applications, and more.
          </p>
          <a href="/contact">
            <div className="w-max text-white py-2.5 px-4 flex items-center justify-center gap-x-8 hover:gap-x-10 rounded-lg cursor-pointer transition-all duration-500 border-transparent bg-gradient-to-r from-[#F05225] to-[#EEA820]">
              <p className="font-semibold">Get In Touch</p>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.2197 19.0303C13.5126 19.3232 13.9874 19.3232 14.2803 19.0303L20.5303 12.7803C20.8232 12.4874 20.8232 12.0126 20.5303 11.7197L14.2803 5.46967C13.9874 5.17678 13.5126 5.17678 13.2197 5.46967C12.9268 5.76256 12.9268 6.23744 13.2197 6.53033L18.1893 11.5L3.75 11.5C3.33579 11.5 3 11.8358 3 12.25C3 12.6642 3.33579 13 3.75 13L18.1893 13L13.2197 17.9697C12.9268 18.2626 12.9268 18.7374 13.2197 19.0303Z"
                  fill="white"
                />
              </svg>
            </div>
          </a>
        </div>
        <div className="hidden md:block w-1/2 h-full">
          <div
            className="circle rounded-lg hidden lg:block"
            style={{ top: "150px", background: "rgba(63, 94, 251, 0.2)" }}
          />
          <div className="scale-100 w-full h-full cursor-pointer">
            <Spline
              scene="https://prod.spline.design/nJzl5CHzmG4k8nXl/scene.splinecode"
              style={{ width: "100%", height: "100%", scale: "1.7" }}
            />
          </div>
        </div>
      </div>

      {/* Client */}
      <div className="lg:px-20 px-10 lg:mb-20 mb-10">
        <Client />
      </div>

      {/* Product */}
      <div className="flex flex-col gap-y-10 lg:mb-20 mb-10 px-10 lg:px-20">
        <Kijeka />
        {/* <Sage /> */}
      </div>

      <HappyClient theme={props.theme} />
      <TechnologySolutions theme={props.theme} />
      <CaseStudy />
      <GrowthJourney theme={props.theme} />
      <ExpertAnalysis />
      <Faq theme={props.theme} />
      <DetailsCounter />
    </div>
  );
};

export default Home;
