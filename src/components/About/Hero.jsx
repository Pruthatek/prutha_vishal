import React from "react";

const Hero = () => {
  return (
    <div
      className="flex flex-col md:flex-row justify-center items-center px-20 gap-x-10"
      style={{
        backgroundImage: "url('/img/squareBG.png')",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="lg:w-[50%] w-full">
        <img src="/img/Aboutus.png" alt="" className="" />
      </div>
      <div className="lg:px-8 lg:py-3 px-4 py-2 rounded-lg border-gradient-box-4 lg:w-[40%] w-full text-white">
        <h2 className="lg:text-title text-[26px] lg:font-semibold text-gradient-2">
          Our Story
        </h2>
        <div className="mt-5">
          <p className="text-justify">
            At PruthaTek, we believe in the power of technology to transform the
            world. Our company was built from the roots, with a vision to
            deliver the best web and mobile app development services to our
            clients.
            <span className="text-gradient">
              &nbsp;As the name suggests, 'Prutha' means Daughter of the Earth,
              and we take pride in our connection to nature and our commitment
              to sustainable practices.
            </span>
            Our team of experts is passionate about pushing the boundaries of
            creativity and innovation to provide our clients with cutting-edge
            solutions.
          </p>
          <p className="text-justify hidden lg:block lg:mt-3">
            We specialise in AI, ML, iOS, Cross-platform, eCommerce, UX/UI
            Designing, Graphic Designing, Web Development, Mobile Application
            Development, CRM and Marketing, and we're dedicated to staying at
            the forefront of the latest technologies and trends. At PruthaTek,
            we're not just building apps, we're shaping the future.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
