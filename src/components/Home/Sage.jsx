import React from "react";

const Sage = () => {
  return (
    <div
      className="flex flex-col lg:flex-row items-center justify-between px-10 lg:px-20"
      data-aos="fade-up"
      data-aos-duration="600"
      data-aos-delay="0"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-center"
    >
      <div className="bg-gradient-to-br from-[#F05225] to-[#D6D6D600] rounded-3xl md:w-[60%] lg:w-[35%] w-[80%] p-[3px] drop-shadow-[0_4px_14px_rgba(0,0,0,0.25)]">
        <div className="dark:bg-[#101010] rounded-[22px] bg-white">
          <img src="/img/sage.png" alt="" />
        </div>
      </div>
      <div className="flex flex-col lg:gap-y-10 lg:w-[50%] mt-5 lg:mt-0 gap-y-3">
        <p className="uppercase text-title lg:text-[20px] dark:text-[#CFCFCF] tracking-[0.295em] font-[300]">
          Kijeka
        </p>
        <p className="text-gradient-3 text-title lg:text-[40px]">
          Lorem ipsum dolor sit amet, consectetuer
        </p>
        <p className="text-subtitle lg:text-[18px] capitalize font-[300] text-justify lg:w-[80%]">
          We at Kijeka are committed to providing you with the best possible
          online shopping experience. We offer a modern design, an easy-to-use
          shopping cart, dynamic product data, and more.(Experience our
          commitment to providing the best online shopping experience for
          material handling equipment.)
        </p>
      </div>
    </div>
  );
};

export default Sage;
