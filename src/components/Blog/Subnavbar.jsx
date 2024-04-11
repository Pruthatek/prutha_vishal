import React from "react";
import { CgClose } from "react-icons/cg";

const Subnavbar = (props) => {
  const [inputValue, setInputValue] = React.useState("");
  const onChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  return (
    <div className="lg:px-0 shadow-[0px_4px_14px_0px_rgba(0,0,0,0.25)] dark:shadow-[#000000] dark:shadow-lg px-0 flex items-center justify-center overflow-hidden rounded-lg w-[80%]  ">
      <div className="w-full  bg-gradient-to-r from-[#0038ff] to-[#D9D9D900] p-[2px] rounded-lg">
        <div className="w-full flex flex-row items-center justify-center lg:gap-x-20 gap-x-5  dark:bg-[#101010] bg-white rounded-md py-2.5">
          <ul className="flex flex-row items-center lg:px-2 px-2 overflow-auto whitespace-nowrap noscrollbar">
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
          <div className="hover:bg-gradient-to-r  bg-gray-400 hover:from-[#F05225] hover:to-[#EEA820] p-[1.5px] text-lg rounded-lg">
            <div className=" dark:bg-[#101010] bg-white rounded-md px-1 lg:px-3 py-1 flex items-center justify-center gap-x-5">
              <div className="hidden lg:block" id="searchBox">
                <input
                  type="text"
                  placeholder="Search"
                  className="lg:bg-transparent dark:bg-[#101010] bg-white rounded-lg pl-2 pr-10 lg:p-0 py-1 lg:py-1 w-full outline-none"
                  value={inputValue}
                  onChange={onChange}
                />
                <CgClose
                  className="lg:hidden absolute right-3 top-1.5"
                  size={25}
                  color={props.theme === "light" ? "black" : "white"}
                  onClick={() => {
                    document
                      .getElementById("searchBox")
                      .setAttribute("class", "hidden");
                  }}
                />
              </div>
              {/* Search icon svg */}
              <div
                className="cursor-pointer"
                onClick={() => {
                  if (window.innerWidth < 640) {
                    document
                      .getElementById("searchBox")
                      .setAttribute(
                        "class",
                        "block flex items-center justify-center gap-x-3 absolute top-[74.5%] right-[5%] -translate-x-[35%] cursor-pointer p-[3px] rounded-lg bg-gradient-to-r from-[#0038ff] via-[#3a86ff] to-[#6dccff]"
                      );
                  } else {
                    document
                      .getElementById("searchBox")
                      .setAttribute("class", "block");
                  }
                }}
              >
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
      </div>
    </div>
  );
};

export default Subnavbar;
