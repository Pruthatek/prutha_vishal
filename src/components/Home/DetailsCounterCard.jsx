import React from "react";
import CountUp from "react-countup";

const DetailsCounterCard = ({ data }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-0">
      <span
        className={`lg:text-[50px] text-[40px] font-semibold text-transparent bg-clip-text ${data.linearGradient}`}
      >
        {/* {data.count}&nbsp;+ */}
        <CountUp end={data.count} enableScrollSpy duration={5} />+
      </span>
      <span className="text-subtitle lg:text-[16px]">{data.title}</span>
    </div>
  );
};

export default DetailsCounterCard;
