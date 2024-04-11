import React from "react";
import DetailsCounterCard from "./DetailsCounterCard";

const DetailsCounter = () => {
  const data = [
    {
      title: "Projects Completed",
      count: 15,
      linearGradient: "bg-gradient-to-r from-[#0038FF] to-[#9747FF]",
    },
    {
      title: "Active Clients",
      count: 10,
      linearGradient: "bg-gradient-to-r from-[#F05225] to-[#EEA820]",
    },
    {
      title: "Cups of Coffee",
      count: 30,
      linearGradient:
        "bg-gradient-to-r from-[#FF63F9] vai-[#E41EAD] to-[#FF008D]",
    },
    {
      title: "Happy Clients",
      count: 13,
      linearGradient: "bg-gradient-to-r from-[#0DA1DA] to-[#5DB98E]",
    },
  ];

  return (
    <div className="my-[100px] px-10 sm:px-20">
      <div className="lg:bg-gradient-to-r bg-gradient-to-b from-[#0038FF] to-transparent p-[2px] w-full m-auto rounded-lg shadow-[0px_4px_14px_0px_rgba(0,0,0,0.25)] dark:shadow-[#000000] dark:shadow-lg">
        <div className="w-full h-full grid place-items-center gap-y-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 rounded-lg dark:bg-[#101010] bg-white dark:text-white text-black px-8 lg:py-10 py-10">
          {data?.map((p, index) => {
            return <DetailsCounterCard key={index} data={p} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default DetailsCounter;
