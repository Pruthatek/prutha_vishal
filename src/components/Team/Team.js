import React from "react";

const Team = () => {
  return (
    <div className="px-10 my-10">
      <div className="w-full flex flex-col items-center">
        <h1 className="font-bold text-title text-center mb-5">Meet Our Team</h1>
        <p className="max-w-[1200px]">
          Discover the dedicated individuals who have been instrumental in
          driving PruthaTek’s growth and success over the years, and continue to
          work tirelessly towards achieving the company's goals and objectives.
        </p>
      </div>
      <div
        className="w-full mt-10 py-14"
        style={{
          backgroundImage: "url('/img/squareBG.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <h1 className="font-bold text-title text-center mb-3">
          Meet Our Founder
        </h1>
        <p className="text-center">
          Vishal Nayak - Founder, CEO & Managing Director
        </p>
        <div className="flex items-center justify-between mt-10 px-14">
          <div className="max-w-[700px] border-gradient-box-4 p-1 rounded-lg">
            <div className="w-full rounded-lg p-8">
              <p className="text-description mb-4">
                PruthaTek is a unique development company that blends
                cutting-edge technology with personalised service, creating
                innovative solutions for businesses of all sizes.
              </p>

              <p className="text-description my-6">
                Vishal Nayak: The man behind PruthaTek’s concrete success. With
                over 12+ years of leadership and management experience in
                software and product development, He is passionate about
                providing great service to clients and partners.
              </p>

              <p className="text-description mt-4">
                Vishal Nayak’s(HE is obsessed with)  delivering exceptional
                quality permeates through the entire organisation, creating a
                culture of innovation, growth, and excellence. With his expert
                leadership, PruthaTek has become a powerhouse in the software
                and product development space, delivering cutting-edge solutions
                that drive success for businesses of all sizes.
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-[#0038FF] via-[#75B743] to-[#E10E8C] p-1 rounded-full">
            <img src="/img/vishal.png" className="h-64 w-64 " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
