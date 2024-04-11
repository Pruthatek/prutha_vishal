import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";

const HappyClient = (props) => {
  const ClientData = [
    {
      title: `PTI Global`,
      describe: `PruthaTek has been an outstanding partner for us at PTIGLOBAL. Their team's expertise and dedication to delivering high-quality projects on time have been impressive. It's been a pleasure working with them, and we look forward to continuing our successful collaboration in the future.`,
      style: `bg-gradient-to-r from-[#F05225] to-[#EEA820]`,
      imgSrc: `/img/pti.png`,
      border_color: "border-[#F05225]",
    },
    {
      title: `RK Paint`,
      describe: `PruthaTek's collaboration with RK Paint Company has been nothing short of remarkable. Their innovative solutions and prompt project delivery have greatly enhanced our operations. We highly value their partnership and look forward to continued success together.`,
      style: `bg-gradient-to-r from-[#FF63F9] via-[#E41EAD] to-[#FF008D]`,
      imgSrc: `/img/rk.png`,
      border_color: "border-[#E41EAD]",
    },
    {
      title: `Pramukh Avenue`,
      describe: `Pramukh Avenue is delighted to have PruthaTek as our software development partner. Their team's expertise and efficient project execution have been instrumental in elevating our services. We highly recommend PruthaTek for their exceptional IT solutions.`,
      style: `bg-gradient-to-r from-[#3D7800] to-[#7FBB42]`,
      imgSrc: `/img/pramukh.png`,
      border_color: "border-[#3D7800]",
    },
    {
      title: `Biorganics`,
      describe: `Biorganics is extremely satisfied with PruthaTek's services. Their team's technical proficiency and prompt support have been crucial in enhancing our digital infrastructure. We appreciate their dedication to excellence and would gladly recommend PruthaTek to other businesses seeking top-tier IT solutions.`,
      style: `bg-gradient-to-r from-[#0038FF] to-[#9747FF]`,
      imgSrc: `/img/biorganics.png`,
      border_color: "border-[#0038FF]",
    },
    {
      title: `Ashok Pan House`,
      describe: `Ashok Pan House is impressed with PruthaTek's exceptional software development skills. Their team's professionalism and quick turnaround have been instrumental in improving our business operations. Highly recommended for their top-notch IT solutions!`,
      style: `bg-gradient-to-r from-[#0DA1DA] to-[#5DB98E]`,
      imgSrc: `/img/ashok.png`,
      border_color: "border-[#0DA1DA]",
    },
    {
      title: `Aurum`,
      describe: `Aurum is thrilled with PruthaTek's outstanding IT services. Their team's expertise and seamless project execution have been vital in achieving our business goals. PruthaTek is a reliable and valuable partner, highly recommended!`,
      style: `bg-gradient-to-r from-[#E10E8C] to-[#520C43]`,
      border_color: "border-[#E10E8C]",
      imgSrc: `/img/aurum.png`,
    },
  ];

  return (
    <div className="mb-12">
      <div className="font-bold lg:mb-0 text-center">
        <h2 className="text-[#B3B3B3] dark:text-[#ffffff] text-[22px]">
          Delighted Testimonials
        </h2>
      </div>

      {/* Cards */}
      <div className="px-10 lg:px-20 bg-[url('/public/img/line_bg.png')] bg-no-repeat bg-cover">
        <Swiper
          // spaceBetween={50}
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
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          loop={true}
        >
          {ClientData.map((data, index) => {
            return (
              <SwiperSlide key={index} className="my-14 lg:mx-5">
                <div
                  className={
                    "min-h-[345px] rounded-[12px] px-6 pt-10 pb-6 shadow-[0px_4px_14px_0px_rgba(30,30,30,0.25)] lg:shadow-none lg:hover:shadow-[0px_4px_14px_0px_rgba(30,30,30,0.25)] border-2 lg:border-transparent border-white lg:hover:border-white dark:border-white/50 lg:dark:border-transparent lg:dark:hover:border-white/50 transition-all duration-300 " +
                    (props.theme === "light"
                      ? "glassmorphism-4"
                      : "glassmorphism")
                  }
                >
                  <div className="">
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
                    <p className="mt-3 font-[300] text-description text-justify">
                      {data.describe}
                    </p>
                    <div className="flex justify-end font-[500] mt-3">
                      <p>- &nbsp; {data.title}</p>
                    </div>
                  </div>
                  <div className="flex flex-row items-center mb-0 mt-[45px] absolute bottom-5">
                    <img
                      className="w-20 lg:w-[150px]"
                      src={data.imgSrc}
                      alt="Bonnie"
                    />
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

export default HappyClient;
