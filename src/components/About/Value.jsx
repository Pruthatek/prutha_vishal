import React from "react";

const Value = () => {
  return (
    <div className="flex flex-col items-center my-10 px-20">
      <h2 className="text-title lg:text-[25px] text-center">
        Pruthatek Cornerstones
      </h2>
      <p className="text-[10px] lg:text-subtitle text-center lg:w-[74%] hidden lg:block">
        We are building solutions that create rewarding results, and as a
        knowledge-driven IT company, we offer services to our clients with
        better experience and satisfaction.
      </p>
      <div className="lg:flex lg:flex-row lg:justify-center lg:items-center mt-5 gap-x-10">
        {/* Content */}
        <div className="flex flex-col gap-y-5">
          <div className="flex flex-row items-center gap-x-10">
            <div className="lg:w-[100px] lg:h-[71px] hidden lg:block">
              <img src="/img/n1.png" alt="" />
            </div>
            <div className="flex flex-col">
              <h2 className="text-[#FF63F9] font-semibold  text-title lg:text-[25px]">
                Quality Driven
              </h2>
              <p className="text-[10px] md:text-[16px]">
                We work to deliver the best solution, and thus quality is our
                priority. <br /> PruthaTek offers unique and useful android and
                iOS development <br /> services at a rate that increases
                business and value, and revenue. <br /> Innovation
              </p>
            </div>
          </div>

          <div className="flex flex-row items-center gap-x-10">
            <div className="lg:w-[100px]  lg:h-[71px] hidden lg:block">
              <img src="/img/n2.png" alt="" />
            </div>
            <div className="flex flex-col">
              <h2 className="text-[#F05225] font-semibold text-title lg:text-[25px]">
                Well Designed Process
              </h2>
              <p className="text-[10px] md:text-[16px]">
                We work to deliver the best solution, and thus quality is our
                priority. <br /> PruthaTek offers unique and useful android and
                iOS development <br /> services at a rate that increases
                business and value, and revenue. <br /> Innovation
              </p>
            </div>
          </div>

          <div className="flex flex-row items-center gap-x-10">
            <div className="lg:w-[100px]  lg:h-[71px] hidden lg:block ">
              <img src="/img/n3.png" alt="" />
            </div>
            <div className="flex flex-col">
              <h2 className="text-[#3D7800] font-semibold text-title lg:text-[25px] ">
                Innovation
              </h2>
              <p className="text-[10px] md:text-[16px]">
                We work to deliver the best solution, and thus quality is our
                priority. <br /> PruthaTek offers unique and useful android and
                iOS development <br /> services at a rate that increases
                business and value, and revenue. <br /> Innovation
              </p>
            </div>
          </div>

          <div className="flex flex-row items-center gap-x-10">
            <div className="lg:w-[100px] lg:h-[71px] hidden lg:block  ">
              <img src="/img/n4.png" alt="" />
            </div>
            <div className="flex flex-col">
              <h2 className="text-[#FF63F9] text-title lg:text-[25px]  font-semibold">
                Creativity
              </h2>
              <p className="text-[10px] md:text-[16px]">
                We work to deliver the best solution, and thus quality is our
                priority. <br /> PruthaTek offers unique and useful android and
                iOS development <br /> services at a rate that increases
                business and value, and revenue. <br /> Innovation
              </p>
            </div>
          </div>
        </div>
        {/* Image */}
        <div className="border-2 hidden lg:block lg:w-[35%] rounded-lg overflow-hidden">
          <img
            className="rounded-lg transition duration-300 ease-in-out hover:scale-105 cursor-pointer"
            src="./img/Box.png"
            alt="Bonnie "
          />
        </div>
      </div>
    </div>
  );
};

export default Value;
