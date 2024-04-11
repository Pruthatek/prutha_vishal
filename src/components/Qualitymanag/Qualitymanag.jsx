import React from "react";
import "../../index.css";
import Mangment from "./Mangment";
import Comprehensive from "./Comprehensive";
import Lifecycle from "./Lifecycle";

const Qualitymanag = () => {
  return (
    <>
      <div className="  ">
        <div className="bg-[#000000] px-2  h-[800px] md:h-[800px] pt-44 py-5 ">
          <div className=" flex items-center  justify-center text-[#FFF]/20 text-[4rem] md:text-[9rem] xl:text-[13rem] uppercase tracking-widest font-bold">
            Quality
          </div>

          <div className="  GFG  text-[40px] md:text-[50px] xl:text-[60px] uppercase tracking-[2px] md:tracking-[34.8px]  leading-[133.3%] not-italic font-medium">
            <h1 className="flex items-center  justify-center">MANAGMENT</h1>
          </div>

          <div className="px-4 md:px-6 xl:px-36 text-center pt-20 ">
            <p className="   text-[#fff] text-[14px] md:text-[18px]  not-italic font-medium tracking-[200%] capitalize ">
              PruthaTek has put in place a Quality Management System(QMS)
              comprising a complex set of engineering and managerial activities
              that ensure bespoke quality of delivered software throughout the
              entire workflow.
            </p>
          </div>
        </div>

        {/*=================================section-2=======================*/}

        <Mangment  />
        <Comprehensive />
        <Lifecycle />
      </div>
    </>
  );
};

export default Qualitymanag;
