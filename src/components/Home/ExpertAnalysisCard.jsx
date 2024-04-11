import React from "react";

const ExpertAnalysisCard = ({ data }) => {
  return (
    <div className="p-[3px] h-fit rounded-2xl bg-gradient-to-t from-[#F05225] to-[#EEA82000] group shadow-[0px_4px_14px_0px_rgba(0,0,0,0.25)] dark:shadow-[#000000] dark:shadow-lg transition-all duration-300">
      <div className="dark:bg-[#101010] bg-white w-full h-full rounded-2xl p-4 flex flex-col gap-2">
        <a href={"/blog/" + data.id}>
          <p className="text-sm font-semibold truncate">{data.title}</p>
        </a>
        <div className="relative rounded-lg overflow-hidden">
          <a href={"/blog/" + data.id}>
            <img src={data.image} alt="." />
          </a>
          <a href={"/blog/" + data.id}>
            <div className="absolute top-full group-hover:top-0 left-0 glassmorphism-2 dark:glassmorphism w-full h-full p-3 transition-all duration-300">
              <p className="text-[12px] font-thin descriptionTruncate-5">
                {data.desc}
              </p>
            </div>
          </a>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <div>
              {/* <img src={data.proimage} alt="." className="w-10 h-10" /> */}
              <div className="w-10 h-10 rounded-full flex items-center justify-center border border-[#F05225]">
                <p className="font-bold">{data.name[0]}</p>
              </div>
            </div>
            <div className="max-w-[80px]">
              <p className="text-[10px] capitalize truncate font-bold">
                {data.name}
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <p className="border-[1px] text-[12px] border-[#ffffff80] rounded-full px-2">
              {data.date}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertAnalysisCard;
