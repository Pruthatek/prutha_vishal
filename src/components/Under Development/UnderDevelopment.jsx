import React from "react";

const UnderDevelopment = (props) => {
  return (
    <div className="pt-20">
      <div className="lg:px-20 lg:py-10 py-4 lg:mt-10 z-30 relative flex items-center justify-center">
        <div
          className={
            "py-6 rounded-xl lg:pb-5 w-[70%] " +
            (props.theme === "light" ? "glassmorphism-3" : "glassmorphism")
          }
        >
          {/* title */}
          <div className="xl:py-10 xl:px-10 flex flex-col items-center justify-center gap-5">
            <h2
              id="schedule_p"
              className="xl:text-[22px] md:text-[21px] text-[15px] pl-4 font-bold flex justify-center items-center"
            >
              This Page Is Under Development Sorry for Inconvenience.
            </h2>
            <img
              src="/img/underdev.jpg"
              alt=""
              className="rounded-lg w-[70%]"
            />
            <div className="flex flex-col items-center justify-center gap-5">
              {/* <p>Go To</p> */}
              <img src="/img/down-arrow.gif" alt="" className="w-20" />
              <div className="flex items-center justify-center gap-5">
                <a href="/" className="font-semibold text-[18px] text-gradient">
                  <p>Home</p>
                </a>
                <a
                  href="/contact"
                  className="font-semibold text-[18px] text-gradient"
                >
                  <p>Contact</p>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Square BG */}
        <div className="contact-square-1 absolute top-[0%] right-[15%] hidden xl:block z-[41] h-[8rem] w-[8rem]" />
        <div className="contact-square-2 absolute -bottom-[3%] left-[15%] hidden xl:block -z-20 h-[8rem] w-[8rem]" />
        {/* bg Circle */}
        <div
          className="circle hidden lg:block top-[10%] left-0"
          style={{
            background: "linear-gradient(130.35deg, #FC466B33, #3F5EFB33",
          }}
        />
        <div
          className="circle hidden lg:block top-[10%] right-0"
          style={{
            background: "linear-gradient(130.35deg, #FC466B33, #3F5EFB33",
          }}
        />
      </div>
    </div>
  );
};

export default UnderDevelopment;
