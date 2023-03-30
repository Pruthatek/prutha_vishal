import React from "react";
import { MdOutlineLanguage } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="text-white bg-transparent">
      {/* subCategoryDropdown */}
      <div
        id="subCategoryDropdown"
        className="absolute top-10 pt-5 px-20 w-full transition-all duration-300 scale-y-0 opacity-0 origin-top shadow-xl rounded-lg overflow-hidden"
      >
        <div className="bg-black/30 backdrop-blur w-full py-10 flex flex-row items-center justify-center gap-x-10 rounded-lg">
          <ul className="flex flex-col gap-y-14">
            <li className="text-gradient border-gradient-box text-xl cursor-pointer border-gradient-bottom-orange">
              Overview
            </li>
            <li className="text-gradient border-gradient-box text-xl cursor-pointer border-gradient-bottom-orange">
              Offerings & Advancements
            </li>
            <li className="text-gradient border-gradient-box text-xl cursor-pointer border-gradient-bottom-orange">
              Products
            </li>
            <li className="text-gradient border-gradient-box text-xl cursor-pointer border-gradient-bottom-orange">
              Technologies
            </li>
            <li className="text-gradient border-gradient-box text-xl cursor-pointer border-gradient-bottom-orange">
              Sectors
            </li>
          </ul>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              ipsum eum, a?
            </p>
          </div>
        </div>
      </div>
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
              onMouseEnter={() => {
                document
                  .getElementById("subCategoryDropdown")
                  .classList.remove("scale-y-0");
                document
                  .getElementById("subCategoryDropdown")
                  .classList.remove("opacity-0");
              }}
              onClick={() => {
                document
                  .getElementById("subCategoryDropdown")
                  .classList.add("scale-y-0");
                document
                  .getElementById("subCategoryDropdown")
                  .classList.add("opacity-0");
              }}
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
          <div className="border-gradient-box text-lg relative px-3 py-1 w-[50%] flex items-center justify-between rounded-md">
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
