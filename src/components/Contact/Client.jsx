import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";
import { Link } from "react-router-dom";

const Client = () => {
  const ClientImage = [
    {
      src: "/img/aerofusion.png",
    },
    {
      src: "/img/archfin.png",
    },
    {
      src: "/img/aurum.png",
    },
    {
      src: "/img/ashok.png",
    },
    {
      src: "/img/biorganics.png",
    },
    {
      src: "/img/hexabyte.png",
    },
    {
      src: "/img/pti.png",
    },
    {
      src: "/img/kijeka.png",
      link: "https://www.kijeka.com"
    },
    {
      src: "/img/nike.png",
    },
    {
      src: "/img/pramukh.png",
    },
    {
      src: "/img/rk.png",
    },
    {
      src: "/img/asklogo.webp",
      link: "https://ask4wholesale.com"
    },
    {
      src: "/img/icolor_us_logo.jpeg",
      link: "https://icolorus.com"
    },
    {
      src: "/img/Kavlogo.png",
      link: "https://www.kavimports.com",
    },
    {
      src: "/img/poojaPlasticsLogo.png",
      link: "https://www.poojaplastics.com",
    },
    {
      src: "/img/viteusLogo.jpeg",
      link: "https://aviteushealthcare.co.uk",
    },
    {
      src: "/img/planteLogo.jpeg",
      link: "https://www.plantex.in"
    },
  ];
  return (
    <>
      <div className="mt-5">
        <h2 className="flex text-[#B3B3B3] text-title xl:px-0 px-10 lg:text-[20px] max-sm:text-[16px] dark:text-[#ffffff] justify-center  items-center font-semibold">
          Trusted And Happy Clients
        </h2>
      </div>
      <div className="xl:px-14 mt-5 lg:mx-auto lg:mt-10">
        <Swiper
          slidesPerView={window.innerWidth > 640 ? 5 : 2}
          spaceBetween={20}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          loop={true}
        >
          {ClientImage.map((item, index) => {
            return (
              <SwiperSlide
                key={index}
                className="lg:grayscale cursor-pointer hover:grayscale-0"
              >
                <Link to={item.link} target="_blank">
                <img src={item.src} alt="." className="w-full h-[108px] object-contain" />
                </Link>
               
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default Client;
