import React from 'react'
import '../../Academy/academy.css'
const OurExpertsMembers = ({ item, setdetails, theme }) => {
  return (
    <div
    className={
      "w-full md:w-[40%] lg:w-[20%] min-h-[120px] h-[120px] rounded-[15px] p-[2px] transition-all duration-300 dark:shadow-[#000000] dark:shadow-lg max-lg:bg-gradient-to-t lg:bg-white lg:dark:bg-[#101010] lg:hover:bg-gradient-to-t " +
      item.gradientBorder
    }
    onClick={() => {
      setdetails(item);
      document
        .getElementById("teamMemberPopup")
        .classList.remove("scale-0", "opacity-0");
      document.getElementsByTagName("BODY")[0].style.overflowY = "hidden";
    }}
    // data-aos="fade-up"
    // data-aos-duration="600"
    // data-aos-delay="0"
    // data-aos-easing="ease-in-out"
    // data-aos-once="false"
    // data-aos-anchor-placement="top-center"
  >
    <div
      className={
        "bordershadowmember  w-full h-full rounded-[15px] py-5 px-4 cursor-pointer " +
        (theme === "light" ? "bg-[#000]" : "bg-[#FFF]")
      }
    >

        <div className="">

            <img 
            src={item.img}
            className="w-20 h-20 mx-auto -mt-14  p-1 rounded-full flex items-center justify-center"
            alt="rahul"
            />
        </div>
      {/* <div
        className={
          "w-14 h-14 mx-auto -mt-14 bg-gradient-to-r p-1 rounded-full flex items-center justify-center " +
          item.gradientBorder
        }
      >
        <p className="text-[20px] text-white dark:text-[#FFFF] font-[500] text-center capitalize">
          {item.name[0] + item.lastName[0]}
        </p>
      </div> */}
      <p className="font-Euclid mt-2 text-[16px] font-medium text-[#000] dark:text-[#000] not-italic capitalize">{item.name}</p>
      <p className="font-Euclid text-[12px] text-[#000] dark:text-[#000] not-italic font-light">{item.role}</p>
    </div>
  </div>
  )
}

export default OurExpertsMembers