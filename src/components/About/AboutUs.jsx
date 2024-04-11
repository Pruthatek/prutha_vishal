import React, { useState, useEffect } from "react";
import Hero from "./Hero";
import Value from "./Value";
import Mission from "./Mission";
import Transform from "./Transform";
import Discover from "./Discover";
import TechnologySolutions from "../TechnologySolutions/TechnologySolutions";
import TeamMembers from "../TeamMembers/TeamMembers";
import TeamMemberPopup from "../TeamMemberPopup/TeamMemberPopup";
import { teamMembersData } from "../Data/TeamMembersData";
import HappyClient from "../Home/HappyClient/HappyClient";

const AboutUs = (props) => {
  useEffect(() => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }, []);

  const [details, setdetails] = useState([]);

  return (
    <div className="pt-20">
      <TeamMemberPopup data={details} />
      <Hero theme={props.theme} />
      <div
        style={{
          backgroundImage: "url('/img/bg_pattern.svg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Mission />
        {/* <Aproch theme={props.theme} /> */}
        <HappyClient theme={props.theme} />
        <Value />
      </div>
      {/* Make it Happen */}
      <div className="flex md:gap-y-10 xl:gap-y-0 lg:flex-row flex-col lg:gap-x-20 justify-center items-center my-20 px-20">
        {/* card */}
        <div className="w-[130%] md:w-[100%] lg:w-[60%] ">
          <div
            className={
              "py-5 px-4 rounded-lg shadow-[0px_4px_14px_0px_rgba(0,0,0,0.25)] dark:shadow-[#000000] dark:shadow-lg border-[1px] border-[#F05225] flex flex-col gap-y-5 " +
              (props.theme === "light" ? "glassmorphism-2" : "glassmorphism")
            }
          >
            <p className="font-semibold lg:text-title text-[18px] text-gradient">
              Let's Make It Happen! Get Started Today With Pruthatek.
            </p>
            <p className="text-subtitle">
              Ready To Take Your Business To The Next Level? Contact Pruthatek
              Today And Let's Start Building Your Dream Project Together!
            </p>
            <a href="/contact">
              <div className="text-white cursor-pointer flex flex-row justify-center items-center lg:gap-x-6 gap-x-5 bg-gradient-to-r from-[#F05225] to-[#EEA820] rounded-full w-max px-3 py-2">
                <p className="">Get in Touch</p>
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.7554 12.5C22.7554 12.8788 22.5414 13.225 22.2026 13.3944L4.20259 22.3944C3.85754 22.567 3.44403 22.5256 3.13996 22.2882C2.83589 22.0508 2.6955 21.6597 2.77918 21.2831L4.73098 12.5L2.77918 3.71694C2.6955 3.34035 2.83589 2.94921 3.13996 2.7118C3.44403 2.47439 3.85754 2.43306 4.20259 2.60558L22.2026 11.6056C22.5414 11.775 22.7554 12.1212 22.7554 12.5ZM6.55754 13.5L5.18732 19.666L17.5193 13.5L6.55754 13.5ZM17.5193 11.5L5.18732 5.33402L6.55754 11.5L17.5193 11.5Z"
                    fill="white"
                  />
                </svg>
              </div>
            </a>
          </div>
        </div>
        <div className="relative sm:max-w-[45%] sm:flex hidden justify-center items-center">
          <div
            className={
              "absolute top-[-400px] right-[15rem] w-[140%] h-[140%] hidden lg:block " +
              (props.theme === "light" ? "lg:hidden" : "block")
            }
          >
            {/* <img src="/img/CardBg1.svg" alt="." /> */}
          </div>
          <img
            className="z-1 sm:w-[60%] w-[100%]"
            src="/img/work.png"
            alt="."
          />
        </div>
      </div>
      <Transform theme={props.theme} />
      <Discover theme={props.theme} />
      <TechnologySolutions theme={props.theme} />
      {/* <OurTeam /> */}
      <div className="max-w-screen-lg my-10 mx-auto px-10">
        <h1 className="font-bold text-title text-center mb-3 text-[#b3b3b3]">
          Meet Our Team
        </h1>
        <p className="text-center text-[#b3b3b3]">
          People from various origins,cultures,and personalities make up our
          team. This blend makes it a powerful team.
        </p>
        <div className="flex flex-row flex-wrap justify-center items-center gap-10 gap-y-[6rem] text-center mt-28">
          {teamMembersData.slice(0, 5).map((item, index) => (
            <TeamMembers
              item={item}
              key={index}
              setdetails={setdetails}
              theme={props.theme}
            />
          ))}
        </div>
        <a
          href="/team"
          className="flex lg:pt-0 items-center lg:justify-end pt-7 justify-center"
        >
          <div class="bg-gradient-to-br from-[#F05225] to-[#EEA820] p-[2px] rounded-lg overflow-hidden w-fit my-5 cursor-pointer group">
            <div class="dark:bg-[rgb(0,0,0)] bg-white w-full h-full p-2 px-4 rounded-lg flex items-center gap-2 group-hover:bg-transparent">
              <p class="m-0 text-subtitle">View More</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="currentColor"
                class="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default AboutUs;
