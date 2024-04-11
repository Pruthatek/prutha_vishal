import React, { useEffect } from "react";
import Key from "./Key";

const Methodology = (props) => {
  useEffect(() => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }, []);

  return (
    <div className="pt-[5.6rem]">
      <div className="flex flex-row space-x-1 px-14  ">
        <h2 className="md:text-[27px]  text-[#B3B3B3] dark:text-white font-semibold ">
          New Project Process
        </h2>
        <h2 className="md:my-4  md:text-[12px] text-[#B3B3B3] dark:text-white font-semibold ">
          Pruthatek
        </h2>
      </div>
      <div className="xl:pt-[6.3rem] xl:block md:hidden hidden ">
        <div className="flex justify-center items-center">
          <img
            src="/img/lineimg.png"
            className="w-[70%] pt-24 flex justify-center items-center "
            alt=""
          />
        </div>

        <div className="">
          <div>
            <div className="">
              <img
                src="/img/cardg5.png"
                className=" absolute w-[17%] top-[16rem] left-[5rem]"
                alt=""
              />
              <div id="" className="tooltip">
                <div
                  id=""
                  className={
                    "tooltipText1  flex flex-col w-[290px] h-[156px] rounded-md   p-4    " +
                    (props.theme === "light"
                      ? "glassmorphism-4"
                      : "glassmorphism")
                  }
                >
                  <h2 className="  text-[#44C4FF]   text-title ">CONCEPT</h2>
                  <span className="linegradienthover"></span>
                  <p className="text-black text-[13px]  dark:text-white leading-[148.023%] tracking-[1.3px] text-justify">
                    There are many variations of passages of Lorem
                    ipsumavailable, but the majority have suffered alteration in
                    some form, by injected humour, or
                  </p>
                </div>
                <img
                  src="/img/card5.png"
                  className="absolute w-[16%] top-[15.4rem] left-[6rem] cursor-pointer "
                  alt=""
                />
                <img
                  id=""
                  src="/img/Dline.svg"
                  className="tooltipline1  absolute w-[85.5px] h-[108px]   "
                  alt=""
                />
              </div>
            </div>
            <div className="  ">
              <img
                src="/img/cardg1.png"
                className="absolute w-[16%] top-[24.5rem] left-[20.3rem] "
                alt=""
              />
              <div id="" className="tooltip">
                <div
                  id=""
                  className={
                    "tooltipText2  flex flex-col w-[290px] h-[156px] rounded-md   p-3    " +
                    (props.theme === "light"
                      ? "glassmorphism-4"
                      : "glassmorphism")
                  }
                >
                  <h2 className="bg-gradient-to-r from-[#F05225] to-[#EEA820] text-transparent bg-clip-text   text-title ">
                    COMMUNICATION
                  </h2>
                  <p className="text-black text-[13px] dark:text-white leading-[148.023%] tracking-[1.3px] text-justify">
                    There are many variations of passages of Lorem
                    ipsumavailable, but the majority have suffered alteration in
                    some form, by injected humour, or
                  </p>
                </div>
                <img
                  src="/img/card1.png"
                  className="absolute w-[12%] top-[23.5rem] left-[22.3rem] cursor-pointer "
                  alt=""
                />
                <img
                  id=""
                  src="/img/Dline.svg"
                  className="tooltipline2 absolute   "
                  alt=""
                />
              </div>
            </div>
          </div>
          <div>
            <div>
              <img
                src="/img/cardg3.png"
                className="absolute w-[16%] top-[17.4rem] left-[34.6rem] "
                alt=""
              />
              <div id="" className="tooltip">
                <div
                  id=""
                  className={
                    "tooltipText3  flex flex-col w-[290px] h-[156px] rounded-md   p-3    " +
                    (props.theme === "light"
                      ? "glassmorphism-4"
                      : "glassmorphism")
                  }
                >
                  <h2 className=" text-[#852DEE]    text-title  ">BUDGET</h2>
                  <p className="text-black text-[13px] dark:text-white leading-[148.023%] tracking-[1.3px] text-justify">
                    There are many variations of passages of Lorem
                    ipsumavailable, but the majority have suffered alteration in
                    some form, by injected humour, or
                  </p>
                </div>
                <img
                  src="/img/card3.png"
                  className="absolute w-[12%] top-[16.4rem] left-[36.6rem] cursor-pointer"
                  alt=""
                />
                <img
                  id=""
                  src="/img/Dline.svg"
                  className="tooltipline3 absolute   "
                  alt=""
                />
              </div>
            </div>
          </div>
          <div>
            <div>
              <img
                src="/img/cardg2.png"
                className="absolute w-[16%] top-[24.4rem] left-[49.6rem] "
                alt=""
              />
              <div id="" className="tooltip">
                <div
                  id=""
                  className={
                    "tooltipText4  flex flex-col w-[290px] h-[156px] rounded-md   p-3    " +
                    (props.theme === "light"
                      ? "glassmorphism-4"
                      : "glassmorphism")
                  }
                >
                  <h2 className=" text-[#FF44A0]   text-title  ">
                    DEVELOPMENT
                  </h2>
                  <p className="text-black text-[13px] dark:text-white leading-[148.023%] tracking-[1.3px] text-justify">
                    There are many variations of passages of Lorem
                    ipsumavailable, but the majority have suffered alteration in
                    some form, by injected humour, or
                  </p>
                </div>
                <img
                  src="/img/card2.png"
                  className="absolute w-[12%] top-[23.4rem] left-[51.6rem] cursor-pointer"
                  alt=""
                />
                <img
                  id=""
                  src="/img/Dline.svg"
                  className="tooltipline4 absolute   "
                  alt=""
                />
              </div>
            </div>
            <div>
              <img
                src="/img/cardg4.png"
                className="absolute w-[16%] top-[17.2rem] left-[65rem] "
                alt=""
              />
              <div id="" className="tooltip">
                <div
                  id=""
                  className={
                    "tooltipText5  flex flex-col w-[290px] h-[156px] rounded-md   p-3    " +
                    (props.theme === "light"
                      ? "glassmorphism-4"
                      : "glassmorphism")
                  }
                >
                  <h2 className="  text-[#FF445B]     text-title ">RESULTS</h2>
                  <p className="text-black text-[13px] dark:text-white leading-[148.023%] tracking-[1.3px] text-justify">
                    There are many variations of passages of Lorem
                    ipsumavailable, but the majority have suffered alteration in
                    some form, by injected humour, or
                  </p>
                </div>
                <img
                  src="/img/card4.png"
                  className=" absolute w-[12%] top-[16.2rem] left-[66rem] cursor-pointer"
                  alt=""
                />
                <img
                  id=""
                  src="/img/Dline.svg"
                  className="tooltipline5 absolute  "
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="xl:pt-44">
        <p className="text-[#101010] dark:text-white xl:text-[18px] md:text-[10px] md:px-20 px-7 text-[10px] not-italic font-normal leading-[180%] capitalize text-justify xl:px-[8.5rem] ">
          PruthaTek's development methodology promotes a result-driven
          interactive approach and guarantees better customer service in terms
          of quality and cost. If PruthaTek continuously improves our
          methodology to meet customer expectations through accelerated
          development schedules and high quality results. We have refined our
          business processes by blending leading industry practices spanning
          from classical Waterfall to modern Agile methodologies.
        </p>
      </div>

      {/* Images */}
      <div className="flex flex-col justify-center py-20 items-center">
        <div className=" flex flex-col md:flex-row max-sm:space-y-7 md:space-x-7 xl:space-x-28 px-10 md:pl-8 xl:pl-10 ">
        <div class=" ">
          <div className="ui-card md:w-[225px] xl:w-[300px] w-[250px] relative overflow-hidden transition-all rounded-full duration-[0.3s] ease-[ease-out]  ">
            <img
              className="image object-cover   w-[100%] "
              src="/img/circleimg3.png"
              alt=""
            />
            <div className="description">
              <h3 className="textcircle text-[15px] md:text-[15px] xl:text-[20px] px-7 md:px-3 xl:px-7 ">
                Isolated Scrums
              </h3>
              <p className="textcirclesm text-[10px] md:text-[10px] xl:text-[13px] px-9 capitalize leading-5 md:leading-4 xl:leading-5">
                Teams are isolated across different locations. Some teams may
                not be using Agile.
              </p>
            </div>
          </div>
          <h3 className="font-semibold  text-black dark:text-white text-[15px] md:text-[13px] xl:text-[20px] pt-5  text-center">
          Isolated Scrums
              </h3>
          </div>
          <div className=" ">
          <div className="ui-card md:w-[225px] xl:w-[300px] w-[250px] relative overflow-hidden transition-all rounded-full duration-[0.3s] ease-[ease-out]  ">
            <img
              className="image object-cover   w-[100%] "
              src="/img/circleimg2.png"
              alt=""
            />
            <div className="description">
              <h3 className="textcircle text-[15px] md:text-[13px] xl:text-[20px] px-7 md:px-3 xl:px-7">
                Distributed Scrum of Scrums
              </h3>
              <p className="textcirclesm text-[10px] md:text-[8px] xl:text-[13px] px-9 capitalize leading-5 md:leading-4 xl:leading-5 ">
                Cross-functional Scrum teams are isolated across locations and
                integrated by a Scrum-of-Scrums that meets regularly across
                locations.
              </p>
            </div>
          </div>
          <h3 className="font-semibold  text-black dark:text-white text-[15px] md:text-[13px] xl:text-[20px] pt-5  text-center">
          Distributed Scrum of Scrums
              </h3>
          </div>
          <div className=" ">
          <div className="ui-card md:w-[225px] xl:w-[300px] w-[250px] relative overflow-hidden transition-all rounded-full duration-[0.3s] ease-[ease-out]  ">
            <img
              className="image object-cover   w-[100%] "
              src="/img/circleimg.png"
              alt=""
            />
            <div className="description">
              <h3 className="textcircle text-[15px] md:text-[15px] xl:text-[20px] px-7 md:px-3 xl:px-7 ">
                Totally Integrated Scrums
              </h3>
              <p className="textcirclesm text-[10px]  md:text-[10px] xl:text-[13px] px-9 capitalize leading-5 md:leading-4 xl:leading-5">
                Scrum team members are distributed across locations.
              </p>
            </div>
          </div>
          <h3 className="font-semibold  text-black dark:text-white text-[15px] md:text-[13px] xl:text-[20px] pt-5  text-center">
          Totally Integrated Scrums
              </h3>
          </div>
        </div>
        {/* <div className="flex flex-row py-6 space-x-[12rem] pl-5 ">
          <h3 className="textcircle font-semibold text-[15px] md:text-[15px] xl:text-[20px] xl:pl-10  ">
            Isolated Scrums
          </h3>
          <h3 className="textcircle font-semibold text-[15px] md:text-[15px] xl:text-[20px]   ">
          Distributed Scrum of Scrums
          </h3>
          <h3 className="textcircle font-semibold text-[15px] md:text-[15px] xl:text-[20px]   ">
          Totally Integrated Scrums
          </h3>
        </div> */}
      </div>

      {/* Key Benefits */}
      <div className="py-3 px-10">
        <div className="flex items-center justify-center gap-x-5 hover:gap-x-10 w-full transition-all duration-500 group cursor-pointer">
          <h2 className="md:block hidden font-semibold capitalize tracking-[2.5px] md:text-[30px] text-[16px] lg:text-[35px] opacity-0 group-hover:opacity-100 transition-all duration-500 key_font_stroke">
            Key Benefits You Get
          </h2>
          <h2 className="font-semibold bg-gradient-to-r from-[#F05225] to-[#EEA820] md:text-[30px] text-transparent bg-clip-text capitalize tracking-[0.02em] text-[16px] lg:text-[35px]">
            Key Benefits You Get
          </h2>
          <h2 className="md:block hidden font-semibold capitalize tracking-[2.5px] text-[16px] md:text-[30px] lg:text-[35px] opacity-0 group-hover:opacity-100 transition-all duration-500 key_font_stroke">
            Key Benefits You Get
          </h2>
        </div>
      </div>
      <Key />
    </div>
  );
};

export default Methodology;
