import React from "react";

const Kijeka = () => {
  return (
    <div className="flex items-center justify-between px-20 mb-20">
      <div className="border-gradient-box-8 rounded-lg w-[40%]">
        <img src="/img/kijeka.png" alt="" />
      </div>
      <div className="flex flex-col gap-y-10 w-[50%]">
        <p className="uppercase text-title lg:text-[20px] dark:text-[#CFCFCF] tracking-[0.295em] font-[300]">
          Kijeka
        </p>
        <p className="text-gradient-3 text-title lg:text-[40px]">
          Lorem ipsum dolor sit amet, consectetuer
        </p>
        <p className="text-subtitle lg:text-[18px] capitalize font-[300] text-justify w-[80%]">
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

export default Kijeka;
