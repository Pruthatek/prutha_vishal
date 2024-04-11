import React from "react";

const Discover = () => {
  return (
    <div className="px-10 lg:px-20 lg:mb-20 mb-4">
      <h2 className="text-[18px] lg:text-[22px] text-center text-[#b3b3b3] font-bold">
        Discover Pruthatek
      </h2>
      <div className="flex flex-col gap-y-5 mt-10 pr-10">
        <h2 className="text-[18px]  lg:text-title text-gradient tracking-[0.5px]">
          Our mission is to deliver exceptional IT services without compromising
          on quality, ensuring we build robust and reliable solutions for our
          clients.
        </h2>
        <p className="text-subtitle font-[300] tracking-[1.1px]">
          Are you looking to build custom software or mobile/web applications
          that match your unique business needs? Let us show you how our
          development services can take your vision from concept to reality.
        </p>
      </div>

      {/* card */}
      <div className="bg-gradient-to-r from-[#0DA1DA]  to-[#5DB98E] shadow-[0px_4px_14px_0px_rgba(0,0,0,0.25)] dark:shadow-[#000000] dark:shadow-lg rounded-lg mt-20 p-[2px]">
        <div className="rounded-md dark:bg-[#101010] bg-white p-10 flex flex-col gap-y-10">
          <h2 className="lg:text-[22px] font-semibold text-[18px] text-gradient capitalize">
            A One-of-a-Kind Approach to Each Client
          </h2>
          <p className="lg:text-justify lg:pl-16 lg:pr-20">
            At Pruthatek, we believe in the power of dedication and
            collaboration. With years of experience, we have earned a reputation
            as a top-rated provider of custom software, web, and mobile app
            development services WORLDWIDE. Our strong foundation is built on
            long-term partnerships, which allow us to focus on delivering
            solutions that stand the test of time. Our experienced team
            specialises in creating robust applications and providing a range of
            IT services, including custom software, web and mobile app
            development, eCommerce solutions, and more. Our commitment to using
            the latest technologies, industry best practices, and standards
            means we deliver solutions that meet your unique business needs.
            Partner with Pruthatek today and let us help you turn your vision
            into reality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Discover;
