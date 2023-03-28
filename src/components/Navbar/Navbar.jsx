import React from "react";
import { MdOutlineLanguage } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="text-white bg-transparent">
      <Dropdown />
      <nav className="flex items-center justify-between px-10 py-5">
        {/* Nav-Logo */}
        <div className="cursor-pointer">
          <img src="./logo.png" alt="" className="w-40" />
        </div>
        {/* Nav Links */}
        <div>
          <ul className="flex items-center w-full justify-between px-20 gap-x-5">
            <li
              className="border-gradient-orange text-subtitle cursor-pointer"
              // onClick={document.getElementById('dropdown').classList.remove('hidden')}
            >
              What is our role?
            </li>
            <li className="border-gradient-orange text-subtitle cursor-pointer">
              What defines us?
            </li>
            <li className="border-gradient-orange text-subtitle cursor-pointer">
              Careers
            </li>
            <li className="border-gradient-orange text-subtitle cursor-pointer">
              Blogs
            </li>
            <li className="border-gradient-orange text-subtitle cursor-pointer">
              Case Studies
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-between px-10 gap-x-5">
          {/* search */}
          <div
            style={{
              borderImage: "linear-gradient(to right, #f05225, #eea820) 1",
              borderRadius: "20px",
              border: 2px solid;
            }}
            className="text-lg relative px-3 py-1 rounded-lg w-[50%] border-white flex items-center justify-between"
          >
            <div>
              <input
                type="text"
                placeholder="Search"
                className="pr-3 bg-transparent rounded-lg w-full outline-none"
              />
            </div>
            <div>
              {/* Search icon svg */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
              >
                <circle
                  cx="7.76271"
                  cy="7.92372"
                  r="6.76271"
                  stroke="url(#paint0_linear_169_18024)"
                  stroke-width="2"
                />
                <path
                  d="M14.5255 14.6866L20.0001 19.8391"
                  stroke="url(#paint1_linear_169_18024)"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_169_18024"
                    x1="2.49147"
                    y1="4.83973"
                    x2="12.7796"
                    y2="10.6341"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#F05225" />
                    <stop offset="1" stop-color="#EEA820" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_169_18024"
                    x1="15.1292"
                    y1="16.088"
                    x2="19.1681"
                    y2="18.5049"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#F05225" />
                    <stop offset="1" stop-color="#EEA820" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          {/* Contact */}
          <div>
            <p className="border-gradient-orange text-subtitle cursor-pointer">
              Contact Us
            </p>
          </div>
          {/* Language */}
          <div>
            <MdOutlineLanguage size={25} className="cursor-pointer" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

const Dropdown = () => {
  return (
    <div
      className="flex bg-[#3A3A3A4D] p-20 items-center justify-between backdrop-blur-md absolute top-24 w-full hidden"
      id="dropdown"
    >
      <div>
        <ul className="flex flex-col gap-y-14">
          <li className="border-b-[1px] border-[#CFCFCF] text-xl hover:border-b-orange-500 hover:text-orange-500">
            Overview
          </li>
          <li className="border-b-[1px] border-[#CFCFCF] text-xl hover:border-b-orange-500 hover:text-orange-500">
            Offerings & Advancements
          </li>
          <li className="border-b-[1px] border-[#CFCFCF] text-xl hover:border-b-orange-500 hover:text-orange-500">
            Products
          </li>
          <li className="border-b-[1px] border-[#CFCFCF] text-xl hover:border-b-orange-500 hover:text-orange-500">
            Technologies
          </li>
          <li className="border-b-[1px] border-[#CFCFCF] text-xl hover:border-b-orange-500 hover:text-orange-500">
            Sectors
          </li>
        </ul>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          ipsum eum, a?
        </p>
      </div>
    </div>
  );
};
