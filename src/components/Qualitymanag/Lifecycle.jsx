import React from "react";

function Lifecycle() {
  const datas = [
    {
      img: `/img/Icon1.png`,
      title: "Initiation and Planning",
      desc: " Project specification analysis, test plan elaboration and team assignment ",
    },
    {
      img: `/img/tick3.png`,
      title: "Iteration Audits",
      desc: "Ongoing testing of intermediate iterations builds",
    },
    {
      img: `/img/Icon3.png`,
      title: "First Review",
      desc: "Initial testing of first development deliverables, refining the test plan and test items (if necessary).",
    },
    {
      img: `/img/Icon4.png`,
      title: "Final Verification and Validation",
      desc: "Final product testing to ensure bespoke quality and readiness for deployment.",
    },
  ];
  return (
    <>
      <div className="pt-20  px-14  md:px-6">
        <h1 className="flex justify-center items-center text-[18px] md:text-[20px] not-italic  font-semibold leading-[169.3%] capitalize text-transparent  bg-clip-text bg-gradient-to-r from-[#0DA1DA] to-[#5DB98E]">
          Qa That is Weaved into The Development Lifecycle
        </h1>
      </div>
      <div className="pt-14  pb-5 px-6 ">
        <div className="flex flex-col  xl:flex xl:flex-row md:px-6 xl:px-8  justify-center items-center">
          {/* Renctangle image */}

          <div class="relative w-[100%] h-[250px] md:w-[100%] md:h-[450px]  xl:w-[95%] xl:h-[450px] rounded-[15px] border-2 border-[#FFFFFF]  overflow-hidden bg-cover bg-no-repeat ">
            <img
              src="/img/Lifecycle.png"
              class="object-cover w-[100%] h-[250px] md:w-[100%] md:h-[450px]  xl:w-[100%] xl:h-[450px] rounded-[15px] transition duration-300 ease-in-out hover:scale-110"
              alt="Louvre"
            />
          </div>

          <div className="pt-5 md:pt-5">
            {datas.map((data, i) => {
              return (
                <ul className=" md:px-8 xl:px-12">
                  <img
                    src={data.img}
                    className="absolute w-5 h-5 hidden md:block xl:block  mt-[4.2%] md:mt-[4%] xl:mt-[2.4%] rounde-full border-none"
                 alt="" />
                  <li className="truncate px-2 md:px-8  pt-4 text-justify text-[#101010] dark:text-[#FFFFFF] text-[20px] md:text-[20px] not-italic  font-semibold leading-[48.25px] tracking-[2%]">
                    {data.title}
                  </li>
                  <li className="px-2 md:px-8 text-[#B3B3B3] dark:text-[#FFFFFF] text-[16px] md:text-[18px] text-justify font-medium leading-[23.85px] ">
                    {data.desc}
                  </li>
                </ul>
              );
            })}
          </div>
        </div>
      </div>

      {/* 

      <div class="flex flex-row min-h-screen justify-center items-center">
  I am centered
</div>
*/}
    </>
  );
}

export default Lifecycle;
