import React from "react";
import { Link } from "react-router-dom";

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
        {/* left */}
        <div className="flex items-center gap-x-5">
          {/* Nav-Logo */}
          <div>
            <Link to="/" className="cursor-pointer">
              <img src="/img/Logo.png" alt="" className="w-40" />
            </Link>
          </div>
          {/* Nav Links */}
          <div>
            <ul className="flex items-center w-full justify-between gap-x-5">
              <li className="border-gradient-orange text-subtitle cursor-pointer">
                What is our role?
              </li>
              <li className="border-gradient-orange text-subtitle cursor-pointer">
                What defines us?
              </li>
              <Link
                to="/"
                className="border-gradient-orange text-subtitle cursor-pointer"
              >
                Careers
              </Link>
              <Link
                to="/blogs"
                className="border-gradient-orange text-subtitle cursor-pointer"
              >
                Blogs
              </Link>
              <Link
                to="/"
                className="border-gradient-orange text-subtitle cursor-pointer"
              >
                Case Studies
              </Link>
            </ul>
          </div>
        </div>
        {/* right */}
        <div className="flex items-center justify-between gap-x-5">
          {/* Search Icon */}
          <div>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1255_35140)">
                <path
                  d="M13.9789 2.49954C20.3153 2.49954 25.4578 7.64208 25.4578 13.9784C25.4578 20.3148 20.3153 25.4573 13.9789 25.4573C7.6426 25.4573 2.50006 20.3148 2.50006 13.9784C2.50006 7.64208 7.6426 2.49954 13.9789 2.49954ZM13.9789 22.9064C18.911 22.9064 22.9069 18.9105 22.9069 13.9784C22.9069 9.04505 18.911 5.0504 13.9789 5.0504C9.04557 5.0504 5.05092 9.04505 5.05092 13.9784C5.05092 18.9105 9.04557 22.9064 13.9789 22.9064ZM24.801 22.997L28.4092 26.6039L26.6044 28.4086L22.9975 24.8004L24.801 22.997Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_1255_35140">
                  <rect width="30" height="30" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          {/* Theme */}
          <div>
            <svg
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.50778 3.9054C5.50778 9.02215 9.65573 13.1701 14.7725 13.1701C15.1483 13.1701 15.5191 13.1477 15.8838 13.104C14.566 15.2614 12.189 16.6999 9.47837 16.6999C5.33623 16.6999 1.97837 13.3421 1.97837 9.19995C1.97837 6.48951 3.41673 4.11272 5.57379 2.79482C5.53019 3.15925 5.50778 3.52989 5.50778 3.9054ZM7.03599 2.10623C6.90209 2.68432 6.83131 3.28659 6.83131 3.9054C6.83131 8.29119 10.3867 11.8466 14.7725 11.8466C15.3915 11.8466 15.994 11.7757 16.5723 11.6417C16.5738 11.6414 16.5753 11.641 16.5768 11.6407C16.6265 11.6291 16.6761 11.6171 16.7254 11.6047C16.9077 11.5586 17.0875 11.5062 17.2645 11.4477C17.6111 11.3333 17.9701 11.6329 17.8552 11.9793C17.7888 12.1796 17.7154 12.3768 17.6353 12.5704C17.6127 12.625 17.5896 12.6794 17.5659 12.7334C17.5646 12.7364 17.5633 12.7394 17.562 12.7424C16.1974 15.8517 13.0915 18.0235 9.47837 18.0235C4.60527 18.0235 0.654837 14.073 0.654837 9.19995C0.654837 5.58705 2.82626 2.48131 5.93524 1.11662C5.93824 1.1153 5.94124 1.11399 5.94424 1.11267C5.99828 1.08902 6.05261 1.0659 6.10721 1.04331C6.30087 0.963181 6.498 0.88975 6.69831 0.823304C7.04469 0.708405 7.34439 1.06743 7.22999 1.41398C7.17154 1.59101 7.11916 1.7708 7.07307 1.95309C7.0606 2.00244 7.04859 2.05197 7.03704 2.10168C7.03669 2.1032 7.03634 2.10471 7.03599 2.10623Z"
                fill="white"
              />
            </svg>
          </div>
          {/* Language Icon */}
          <div>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1255_35192)">
                <path
                  d="M23.125 12.5L28.625 26.25H25.9313L24.43 22.5H19.3175L17.8188 26.25H15.1262L20.625 12.5H23.125ZM12.5 2.5V5H20V7.5H17.54C16.5758 10.4026 15.0368 13.0813 13.015 15.3762C13.9166 16.1808 14.8946 16.8954 15.935 17.51L14.9963 19.8575C13.6531 19.0957 12.397 18.19 11.25 17.1562C9.01698 19.1772 6.37255 20.6902 3.49875 21.5913L2.82875 19.18C5.29104 18.3949 7.56003 17.0992 9.4875 15.3775C8.06086 13.7624 6.87258 11.9516 5.95875 10H8.75875C9.45544 11.2861 10.2908 12.492 11.25 13.5962C12.8126 11.7951 14.0441 9.73163 14.8875 7.50125L2.5 7.5V5H10V2.5H12.5ZM21.875 16.1063L20.3162 20H23.4313L21.875 16.1063Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_1255_35192">
                  <rect width="30" height="30" fill="white" />
                </clipPath>
              </defs>
            </svg>
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

// onMouseEnter={() => {
//   document
//     .getElementById("subCategoryDropdown")
//     .classList.remove("scale-y-0");
//   document
//     .getElementById("subCategoryDropdown")
//     .classList.remove("opacity-0");
// }}
// onMouseLeave={() => {
//   document
//     .getElementById("subCategoryDropdown")
//     .classList.add("scale-y-0");
//   document
//     .getElementById("subCategoryDropdown")
//     .classList.add("opacity-0");
// }}
{
  /* <div className="border-gradient-box text-lg relative px-3 py-1 w-[50%] flex items-center justify-between rounded-md">
<div>
  <input
    type="text"
    placeholder="Search"
    className="pr-3 bg-transparent w-full outline-none"
  />
</div>
<div>
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
</div> */
}
