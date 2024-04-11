import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";

const Aproch = (props) => {
  const ClientData = [
    {
      title: `Daniel Lane`,
      subtitle: `Developer, Lorem ipsum dolor sit amet`,
      describe: ` Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
      Lorem ipsum sit amet, consectetuer adipiscing elit, Lorem
      ipsum dolor sit amet, consectetuer adipiscing elit, Lorem
      ipsum dolor sit amet, adi elit, Lorem ipsum dolor sit amet,
      Lorem ipsum dolor sit amet, adi elit, Lorem ipsum dolor sit
      amet`,
      style: `bg-gradient-to-r from-[#F05225] to-[#EEA820]`,
      imgSrc: `/img/Ellipse 43.png`,
      border_color: "border-[#F05225]",
    },
    {
      title: `Daniel Lane`,
      subtitle: `Developer, Lorem ipsum dolor sit amet`,
      describe: ` Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
      Lorem ipsum sit amet, consectetuer adipiscing elit, Lorem
      ipsum dolor sit amet, consectetuer adipiscing elit, Lorem
      ipsum dolor sit amet, adi elit, Lorem ipsum dolor sit amet,
      Lorem ipsum dolor sit amet, adi elit, Lorem ipsum dolor sit
      amet`,
      style: `bg-gradient-to-r from-[#FF63F9] via-[#E41EAD] to-[#FF008D]`,
      imgSrc: `/img/Ellipse 43.png`,
      border_color: "border-[#E41EAD]",
    },
    {
      title: `Daniel Lane`,
      subtitle: `Developer, Lorem ipsum dolor sit amet`,
      describe: ` Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
      Lorem ipsum sit amet, consectetuer adipiscing elit, Lorem
      ipsum dolor sit amet, consectetuer adipiscing elit, Lorem
      ipsum dolor sit amet, adi elit, Lorem ipsum dolor sit amet,
      Lorem ipsum dolor sit amet, adi elit, Lorem ipsum dolor sit
      amet`,
      style: `bg-gradient-to-r from-[#3D7800] to-[#7FBB42]`,
      imgSrc: `/img/Ellipse 43.png`,
      border_color: "border-[#3D7800]",
    },
    {
      title: `Daniel Lane`,
      subtitle: `Developer, Lorem ipsum dolor sit amet`,
      describe: ` Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
      Lorem ipsum sit amet, consectetuer adipiscing elit, Lorem
      ipsum dolor sit amet, consectetuer adipiscing elit, Lorem
      ipsum dolor sit amet, adi elit, Lorem ipsum dolor sit amet,
      Lorem ipsum dolor sit amet, adi elit, Lorem ipsum dolor sit
      amet`,
      style: `bg-gradient-to-r from-[#0038FF] to-[#9747FF]`,
      imgSrc: `/img/Ellipse 43.png`,
      border_color: "border-[#0038FF]",
    },
    {
      title: `Daniel Lane`,
      subtitle: `Developer, Lorem ipsum dolor sit amet`,
      describe: ` Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
      Lorem ipsum sit amet, consectetuer adipiscing elit, Lorem
      ipsum dolor sit amet, consectetuer adipiscing elit, Lorem
      ipsum dolor sit amet, adi elit, Lorem ipsum dolor sit amet,
      Lorem ipsum dolor sit amet, adi elit, Lorem ipsum dolor sit
      amet`,
      style: `bg-gradient-to-r from-[#0DA1DA] to-[#5DB98E]`,
      imgSrc: `/img/Ellipse 43.png`,
      border_color: "border-[#0DA1DA]",
    },
    {
      title: `Daniel Lane`,
      subtitle: `Developer, Lorem ipsum dolor sit amet`,
      describe: ` Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
      Lorem ipsum sit amet, consectetuer adipiscing elit, Lorem
      ipsum dolor sit amet, consectetuer adipiscing elit, Lorem
      ipsum dolor sit amet, adi elit, Lorem ipsum dolor sit amet,
      Lorem ipsum dolor sit amet, adi elit, Lorem ipsum dolor sit
      amet`,
      style: `bg-gradient-to-r from-[#E10E8C] to-[#520C43]`,
      border_color: "border-[#E10E8C]",
      imgSrc: `/img/Ellipse 43.png`,
    },
  ];
  return (
    <div className="mt-12 mb-20">
      <div className="mb-10 text-center">
        <h3 className="text-title lg:text-[25px] font-bold text-[#b3b3b3]">
          Our Approach to Excellence: The Pruthatek Way
        </h3>
        <p className="text-[10px] lg:text-subtitle px-5 mt-5 text-[#b3b3b3]">
          We build custom software, on-premises, and handheld applications with
          a dedication to user experience.{" "}
        </p>
      </div>

      {/* Cards */}
      <div className="px-10 lg:px-20 bg-[url('/public/img/line_bg.png')] bg-no-repeat bg-cover">
        <Swiper
          spaceBetween={50}
          slidesPerView={
            window.innerWidth > 1024 ? 3 : window.innerWidth > 640 ? 2 : 1
          }
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay]}
        >
          {ClientData.map((data, index) => {
            return (
              <SwiperSlide key={index} className="my-14 lg:mx-5">
                <div
                  className={
                    "rounded-[12px] px-6 pt-10 pb-6 hover:shadow-[0px_4px_14px_0px_rgba(30,30,30,0.25)] border-2 border-transparent hover:border-white dark:hover:border-white/50 transition-all duration-300 " +
                    (props.theme === "light"
                      ? "glassmorphism-3"
                      : "glassmorphism")
                  }
                >
                  <div>
                    <svg
                      width="27"
                      height="22"
                      viewBox="0 0 27 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.18186 0.322266C4.13741 5.23338 -2.39148 16.0956 3.84852 20.2556"
                        stroke={props.theme === "light" ? "black" : "white"}
                      />
                      <circle
                        cx="6.4485"
                        cy="15.9223"
                        r="6.06667"
                        fill={props.theme === "light" ? "black" : "white"}
                      />
                      <path
                        d="M22.0486 0.322266C18.0041 5.23338 11.4752 16.0956 17.7152 20.2556"
                        stroke={props.theme === "light" ? "black" : "white"}
                      />
                      <circle
                        cx="20.3152"
                        cy="15.9223"
                        r="6.06667"
                        fill={props.theme === "light" ? "black" : "white"}
                      />
                    </svg>
                    <p className="mt-3 font-normal text-description text-justify">
                      {data.describe}
                    </p>
                  </div>
                  <div className="flex flex-row items-center mb-0 gap-x-3 mt-[45px]">
                    <div
                      className={
                        "rounded-full p-[3px] border-dashed border-[2px] " +
                        data.border_color
                      }
                    >
                      <img
                        className="rounded-full shadow-lg w-20 lg:w-[68px]"
                        src={data.imgSrc}
                        alt="Bonnie"
                      />
                    </div>
                    <div className="flex flex-col">
                      <h5 className="mb-1 font-semibold text-subtitle ">
                        {data.title}
                      </h5>
                      <span className="text-[12px]  font-normal">
                        {data.subtitle}
                      </span>
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

export default Aproch;
