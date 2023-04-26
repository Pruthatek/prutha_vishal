import React from "react";

const OurTeam = () => {
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
    {
      id: 7,
      src: "/img/pic6.png",
      title: "Ansh Modi",
      Worker: "Fronted Develper",
      style: "shadow-green-400",
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <h2 className="font-bold text-title lg:text-[25px] text-center">
          Meet Our Team
        </h2>
        <p className="text-[10px] lg:text-subtitle px-5 text-center">
          People from various origins,cultures,and personalities make up our
          team. This blend makes it a powerful team
        </p>
      </div>
      <div
        className="max-w-screen-lg mt-10"
        style={{
          backgroundImage: "url('/img/squareBG.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-row flex-wrap justify-center items-center gap-10 text-center">
          {techs.map(({ id, src, title, style, Worker }) => (
            <div
              key={id}
              className={`shadow hover:scale-105 glassmorphism duration-500 w-[50%] lg:w-[30%] h-fit rounded-lg py-5 px-4 ${style}`}
            >
              <img
                src={src}
                alt=""
                className="w-20 bg-transparent mx-auto -mt-10"
              />
              <p className="mt-2">{title}</p>
              <p className="">{Worker}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
