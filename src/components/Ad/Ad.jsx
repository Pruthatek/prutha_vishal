import React, { useState } from "react";

function Ad(props) {
  return (
    <div className="flex flex-col items-center px-10 lg:px-20 pt-20 relative">
      <div
        className="circle hidden xl:block top-10 right-0"
        style={{
          background: "linear-gradient(130.35deg, #FC466B33, #3F5EFB33",
        }}
      />
      <div className="max-w-4xl w-full flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
        {/* Contact Form */}
        <div
          className={
            props.theme === "light"
              ? "p-8 rounded-lg glassmorphism-3 flex-1 z-40"
              : "p-8 rounded-lg glassmorphism flex-1 z-40"
          }
        >
          <h2 className="text-2xl font-semibold mb-4 text-xl">Contact Form</h2>
          <form className="flex flex-col justify-center gap-y-10">
            <div className="w-[100%] relative">
              <input
                type="text"
                id="name"
                className="peer block w-max lg:w-[70%] border-b dark:border-white border-black bg-transparent px-2.5 pb-2.5 pt-5 text-sm focus:border-black dark:focus:border-white focus:outline-none focus:ring-0"
                placeholder=" "
              />
              <label
                htmlFor="name"
                className="absolute left-0 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75"
              >
                Name
              </label>
            </div>
            <div className="w-[100%] relative">
              <input
                type="email"
                id="email"
                className="peer block w-max lg:w-[70%] border-b dark:border-white border-black bg-transparent px-2.5 pb-2.5 pt-5 text-sm focus:border-black dark:focus:border-white focus:outline-none focus:ring-0"
                placeholder=" "
              />
              <label
                htmlFor="email"
                className="absolute left-0 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75"
              >
                Email
              </label>
            </div>
            <div className="w-[100%] relative">
              <textarea
                id="message"
                className="peer block w-max lg:w-[70%] border-b dark:border-white border-black bg-transparent px-2.5 pb-2.5 pt-5 text-sm focus:border-black dark:focus:border-white focus:outline-none focus:ring-0"
                placeholder=" "
              ></textarea>
              <label
                htmlFor="message"
                className="absolute left-0 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75"
              >
                Message
              </label>
            </div>
            <div className="flex flex-row items-center">
              <div className="bg-gradient-to-r from-[#F05225] to-[#EEA820] rounded-full w-[7rem] px-5 text-center py-2 flex flex-row items-center justify-center gap-x-5 cursor-pointer">
                <button type="submit" className="flex flex-row space-x-5">
                  <p className="text-white">Send</p>
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.7554 12.5C22.7554 12.8788 22.5414 13.225 22.2026 13.3944L4.20259 22.3944C3.85754 22.567 3.44403 22.5256 3.13996 22.2882C2.83589 22.0508 2.6955 21.6597 2.77918 21.2831L4.73098 12.5L2.77918 3.71694C2.6955 3.34035 2.83589 2.94921 3.13996 2.7118C3.44403 2.47439 3.85754 2.43306 4.20259 2.60558L22.2026 11.6056C22.5414 11.775 22.7554 12.1212 22.7554 12.5ZM6.55754 13.5L5.18732 19.666L17.5193 13.5L6.55754 13.5ZM17.5193 11.5L5.18732 5.33402L6.55754 11.5L17.5193 11.5Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Services Section */}
        <div
          className={
            props.theme === "light"
              ? "p-8 rounded-lg glassmorphism-3 flex-1 z-40"
              : "p-8 rounded-lg glassmorphism flex-1 z-40"
          }
        >
          <h2 className="text-2xl font-semibold mb-4 text-xl">Our Services</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Digital Marketing</li>
            <li>Digital Strategy and Transformation</li>
            <li>UI/UX Design</li>
            <li>Graphics Design</li>
            <li>Insight and Data</li>
            <li>Smart Operations</li>
            <li>Smart Products</li>
            <li>Infrastructure Services</li>
            <li>App Development Maintenance Services</li>
            <li>Testing Services</li>
            <li>Intelligent Automation</li>
            <li>Ecommerce</li>
            <li>Custom Software</li>
          </ul>
        </div>
      </div>
      <div
        className="circle hidden lg:block top-[40%] left-0 z-30"
        style={{
          background: "linear-gradient(130.35deg, #FC466B33, #3F5EFB33",
        }}
      />
    </div>
  );
}

export default Ad;
