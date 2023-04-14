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
      {/* nav */}
      <nav className="flex items-center justify-between px-10 py-5">
        {/* Nav-Logo */}
        <div className="cursor-pointer">
          <img src="/img/Logo.png" alt="" className="w-40" />
        </div>
        {/* Nav Links */}
        <div>
          <ul className="flex items-center w-full justify-between gap-x-5">
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
              onMouseLeave={() => {
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
        <div className="flex items-center justify-between gap-x-5">
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
          <div className="flex flex-row items-center justify-between gap-x-4 bg-gradient-to-r from-[#F05225] to-[#EEA820] rounded-lg py-1.5 px-3 drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19.0001 4C20.657 4 22.0001 5.34315 22.0001 7V17C22.0001 18.6569 20.657 20 19.0001 20H5.00012C3.34327 20 2.00012 18.6569 2.00012 17V7C2.00012 5.34315 3.34327 4 5.00012 4H19.0001ZM20.0001 7.328L12.6586 13.7526C12.313 14.055 11.8112 14.0802 11.4395 13.8282L11.3416 13.7526L4.00012 7.329V17C4.00012 17.5523 4.44784 18 5.00012 18H19.0001C19.5524 18 20.0001 17.5523 20.0001 17V7.328ZM18.4801 6H5.51812L12.0001 11.6712L18.4801 6Z"
                fill="white"
              />
            </svg>
            <p className="text-subtitle cursor-pointer">Get In Touch</p>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
