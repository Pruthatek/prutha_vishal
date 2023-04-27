import React from "react";

const Sage = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between px-20 mb-20">
      <div className="border-gradient-box-8 rounded-lg lg:w-[40%]">
        <img src="/img/sage.png" alt="" />
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
