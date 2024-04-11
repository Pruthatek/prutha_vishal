import React from "react";
// import UIUXVECTORE from "../../assets/images/UIUXVECTORE.png";
// import BACKGROUND from "../../assets/images/BACKGROUND.png";
export const DesignthatSpeaks = () => {
  return (
    <>
      <div className="bg-white dark:bg-[#101010] h-full w-full my-10">
        <div className="flex  items-center justify-center  ">
          <h1 className="text-[18px]  md:text-[20px] font-bold leading-[3rem] py-5   dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-[#F05225] dark:to-[#EEA820] text-[#B3B3B3]">
            Design that Speaks:
          </h1>
        </div>

        <div className="  flex flex-col   xl:flex xl:flex-row bg-contain" style={{ backgroundImage: "url('/img/BACKGROUND.png')" }}>
          <div className="px-8 md:px-20 py-2 xl:px-20 xl:py-10  items-center justify-center  hidden  md:block">
            <img
              src="/img/UIUXVECTORE.png"
              className="w-[38.293rem] h-[26.739rem] z-20 invisible xl:visible lg:visible  md:visible"
              alt="Design that Speaks"
            />
          </div>

          <div className="px-8 md:px-20 py-5 md:py-20  xl:w-[38.293rem] z-20">
            <p className="flex items-center justify-center text-justify text-[#101010] dark:text-white text-[16px]  md:text-[18px] font-medium not-italic leading-[152.523%] tracking-[0.54px]">
              At Pruthatek, we are passionate about crafting UI/UX designs that
              resonate with users and drive business growth. Our team of skilled
              designers combines aesthetic creativity with user-centric design
              principles to deliver solutions that are both visually appealing
              and functional.
            </p>
            <p className="flex items-center justify-center  text-justify text-[#101010] dark:text-white my-5 text-[16px]  md:text-[18px] font-medium not-italic  leading-[152.523%] tracking-[0.54px]">
              We believe that excellent UI/UX design should be accessible to all
              users, which is why we place emphasis on designing for inclusivity
              and ease of use. Our team is well-versed in the latest industry
              standards and best practices, ensuring that your application not
              only looks great but also performs optimally.
            </p>
            <p className="flex items-center justify-center  text-justify text-[#101010] dark:text-white my-5 text-[16px]  md:text-[18px]  font-medium not-italic leading-[152.523%] tracking-[0.54px]">
              From wireframes to final design, we strive to deliver exceptional
              experiences that exceed expectations.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
