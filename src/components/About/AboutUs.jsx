import React from "react";
import Hero from "./Hero";
import Value from "./Value";

const AboutUs = () => {
  const techs = [
    {
      id: 1,
      src: "/img/pic1.png",
      title: "Vishal Nayak",
      Worker: "Founder & Managing Director ",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: "/img/pic2.png",
      title: "Nita Nayak",
      Worker: "Co-Founder & Managing Director",
      style: "shadow-pink-500",
    },
    {
      id: 3,
      src: "/img/pic3.png",
      title: "Krupa Nayak",
      Worker: "Marketing Adviser",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: "/img/pic4.png",
      title: "Jagrat Patel",
      Worker: "Develpoers",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: "/img/pic5.png",
      title: "Rahul Keshwala",
      Worker: "UI/UX Designer",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: "/img/pic6.png",
      title: "Shubham",
      Worker: "Fronted Develper",
      style: "shadow-gray-400",
    },
  ];
  return (
    <div className="flex flex-col items-center">
      <Hero />
      <Value />

      <div className="  flex flex-col justify-center items-center">
        <h2 className="  font-bold  lg:mt-7 text-[25px]  ">Meet Our Team</h2>
        <p className=" mt-5 px-4   lg:text-[20px]">
          People from various origins,cultures,and personalities make up our
          team. This blend makes it a powerful team
        </p>
      </div>

      <div className="bg-gradient-to-b lg:mt-10 flex  justify-center  items-center py-10">
        <div className="max-w-screen-lg">
          <div className=" grid lg:grid-cols-3 md:gap-7  md:grid-cols-3  grid-cols-1  lg:gap-44 gap-4 text-center lg:py-3  gap-y-14 lg:gap-y-14   ">
            {techs.map(({ id, src, title, style, Worker }) => (
              <div
                key={id}
                className={`shadow-md hover:scale-105 bg-[#1E1E1E] duration-500 py-2 lg:w-72 lg:h-36 rounded-lg ${style}`}
              >
                <img
                  src={src}
                  alt=""
                  className="w-20 bg-transparent mx-auto -mt-10"
                />
                <p className="mt-2 bg-[#1E1E1E]">{title}</p>
                <p className="mt-7 bg-[#1E1E1E]">{Worker}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
