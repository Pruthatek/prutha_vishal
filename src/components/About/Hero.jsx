import React from "react";

const Hero = (props) => {
  return (
    <>
      <div
        className="flex flex-col md:flex-row justify-center items-center px-20 gap-x-10"
        // style={{
        //   backgroundImage: "url('/img/squareBG.png')",
        //   backgroundPosition: "center",
        //   backgroundSize: "cover",
        // }}
      >
        <img
          src="/img/bg_light.png"
          alt=""
          className="w-[100%] h-[100%] absolute object-cover top-0 left-0 move"
          data-value="-2"
        />
        <div className="xl:w-[50%] hidden lg:block w-full move" data-value="2">
          <img src="/img/Aboutus.png" alt="" className="  " />
        </div>
        <div
          className="rounded-lg bg-gradient-to-br from-[#F05225] to-[#EEA82000] shadow-[0px_4px_14px_0px_rgba(0,0,0,0.25)] dark:shadow-[#000000] dark:shadow-lg p-[2px] lg:w-[40%] w-[150%] move"
          data-value="-1"
        >
          <div className="bg-white dark:bg-[#101010] p-8 rounded-lg relative">
            <h2 className="lg:text-title text-[26px] lg:font-semibold text-gradient-2">
              Where does the name Prutha come from?
            </h2>
            <div className="mt-5 ">
              <p className="text-justify">
                At PruthaTek, we believe in the power of technology to transform
                the world. Our company was built from the roots, with a vision
                to deliver the best web and mobile app development services to
                our clients.
                <span className="text-gradient">
                  &nbsp; As the name suggests, 'Prutha' means Daughter of the
                  Earth, and we take pride in our connection to nature and our
                  commitment to sustainable practices.
                </span>
                Our team of experts is passionate about pushing the boundaries
                of creativity and innovation to provide our clients with
                cutting-edge solutions.
              </p>
              <p className="text-justify hidden lg:block lg:mt-3">
                We specialise in AI, ML, iOS, Cross-platform, eCommerce, UX/UI
                Designing, Web Development, Mobile Application Development, CRM
                and Consultancy, and we're dedicated to staying at the forefront
                of the latest technologies and trends. At PruthaTek, we're not
                just building apps, we're shaping the future.
              </p>
            </div>
            {/* animate square */}
            <div className="absolute -top-24 -right-20 square hidden lg:block">
              <img src="/img/square.svg" alt="" />
            </div>
            <div className="absolute -bottom-16 -right-16 square-2 hidden lg:block">
              <img src="/img/square.svg" alt="" className="w-32" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
