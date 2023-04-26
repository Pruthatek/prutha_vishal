import React from "react";
import Hero from "./Hero";
import Value from "./Value";
import OurTeam from "./OurTeam";

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center">
      <Hero />
      <Value />
      <OurTeam />
    </div>
  );
};

export default AboutUs;
