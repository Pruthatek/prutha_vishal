import React from "react";

const Subnavbar = () => {
  return (
    <>
      <div className="w-full h-[50%] border-gradient-box-5 rounded-lg py-2 ">
        <div className="flex flex-row items-center justify-center gap-x-3">
          <ul className=" flex flex-row items-center pl-3 lg:px-14 w-[75%] overflow-auto whitespace-nowrap noscrollbar">
            <li className="mr-8 font-normal text-subtitle">All</li>
            <li className="mr-8 font-normal text-subtitle">Cloud</li>
            <li className="mr-8 font-normal text-subtitle">Products</li>
            <li className="mr-8 font-normal text-subtitle">Mobile</li>
            <li className="mr-8 font-normal text-subtitle">Java</li>
            <li className="mr-8 font-normal text-subtitle">Big data & Bi</li>
            <li className="mr-8 font-normal text-subtitle">
              Software Devlopment
            </li>
            <li className="mr-8 font-normal text-subtitle">Ai</li>
            <li className="mr-8 font-normal text-subtitle">Other</li>
          </ul>
          <div className="border-gradient-box-6 text-lg px-0 lg:px-3 py-1 flex items-center justify-center gap-x-10 rounded-lg w-[20%]">
            <div className="hidden lg:block">
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent w-full outline-none"
              />
            </div>
            <div>
              {/* Search icon svg */}
              <svg
                width="22"
                height="21"
                viewBox="0 0 22 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="8.65871"
                  cy="7.92366"
                  r="6.76271"
                  stroke="url(#paint0_linear_1148_5902)"
                  stroke-width="2"
                />
                <path
                  d="M15.4214 14.6865L20.896 19.839"
                  stroke="url(#paint1_linear_1148_5902)"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1148_5902"
                    x1="6.60191"
                    y1="9.45887"
                    x2="-2.70468"
                    y2="3.4708"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#0038FF" />
                    <stop offset="0.526042" stop-color="#3A86FF" />
                    <stop offset="1" stop-color="#6DCCFF" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_1148_5902"
                    x1="17.3262"
                    y1="17.8476"
                    x2="13.6962"
                    y2="15.366"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#0038FF" />
                    <stop offset="0.526042" stop-color="#3A86FF" />
                    <stop offset="1" stop-color="#6DCCFF" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subnavbar;
