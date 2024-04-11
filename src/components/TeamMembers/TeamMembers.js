import React from "react";

const TeamMembers = ({ item, setdetails, theme }) => {
  return (
    <div
      className={
        "w-full md:w-[40%] lg:w-[30%] min-h-[120px] h-[120px] rounded-lg p-[2px] transition-all duration-300 dark:shadow-[#000000] dark:shadow-lg max-lg:bg-gradient-to-t lg:bg-white lg:dark:bg-[#101010] lg:hover:bg-gradient-to-t " +
        item.gradientBorder
      }
      onClick={() => {
        setdetails(item);
        document
          .getElementById("teamMemberPopup")
          .classList.remove("scale-0", "opacity-0");
        document.getElementsByTagName("BODY")[0].style.overflowY = "hidden";
      }}
      data-aos="fade-up"
      data-aos-duration="600"
      data-aos-delay="0"
      data-aos-easing="ease-in-out"
      data-aos-once="false"
      data-aos-anchor-placement="top-center"
    >
      <div
        className={
          "shadow-xl w-full h-full rounded-lg py-5 px-4 cursor-pointer " +
          (theme === "light" ? "bg-white" : "bg-[#101010]")
        }
      >
        <div
          className={
            "w-14 h-14 mx-auto -mt-14 bg-gradient-to-r p-1 rounded-full flex items-center justify-center " +
            item.gradientBorder
          }
        >
          <p className="text-[20px] text-white font-[500] text-center capitalize">
            {item.name[0] + item.lastName[0]}
          </p>
        </div>
        <p className="mt-2 font-semibold">{item.name}</p>
        <p className="text-[12px]">{item.role}</p>
      </div>
    </div>
  );
};

export default TeamMembers;
