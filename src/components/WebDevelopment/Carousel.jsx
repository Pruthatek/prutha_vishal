import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import React, { useState, useRef, useEffect } from "react";


export default function Carousel({children: Data1,Data2,Data3,Data4,Data5,Data6, autoSlide=false, autoSlideInterval =3000}) {
    const [curr, setCurr] = useState(0);
    const handleLeftClick = () => 
    setCurr((curr) => (curr === 0 ? Data1.length - 1 : curr - 1))  
    // e.preventDefault();
        // console.log(carousel.current.offsetWidth);
        // carousel.current.scrollLeft -= carousel.current.offsetWidth;
      
      const handleRightClick = () => 
        setCurr((curr) => (curr ===  Data1.length - 1 ? 0 : curr + 1))  
        // e.preventDefault();
        // console.log(carousel.current.offsetWidth);
        // carousel.current.scrollLeft += carousel.current.offsetWidth;
       
        useEffect(() => {
            if(!autoSlide) return
            const slideInterval = setInterval(handleRightClick, autoSlideInterval)
            return () => clearInterval(slideInterval)
        })
    
    return(
        <div className=" overflow-hidden relative">
            <div className="flex sm:space-x-5 max-sm:space-x-3 xl:space-x-4 transition-transform ease-out duration-500" style={{transform: window.innerWidth > 640 ? `translateX(-${curr * 77}%)` : `translateX(-${curr * 81}%)`}}>{Data1}{Data2}{Data3}{Data4}{Data5}{Data6}</div>
            <div className="  right-0 left-0  lg:ml-16 py-6 mt-4">
                  <div className=" flex items-center justify-center gap-2">
                    {Data1.map((_, index) => (
                      <div
                        className={`transition-all w-3 h-3   rounded-full ${curr === index ? "bg-gradient-to-r from-[#F05225] to-[#EEA820] " : "bg-[#D9D9D9] "
                        }`}
                      />
                    ))}
                  </div>
                </div>{" "}
            <div className="flex max-sm:px-[7.5rem] sm:px-[17rem] lg:px-[19rem] space-x-6 ">
          <div
            onClick={handleLeftClick}
            className=" text-black cursor-pointer bg-slate-100  rounded-full text-[40px] "
          >
            <FiChevronLeft />
          </div>
          <div
            onClick={handleRightClick}
            className=" text-black cursor-pointer bg-slate-100  rounded-full text-[40px] "
          >
            <FiChevronRight />
          </div>
        </div>
        </div>
    )
}