import React from "react";

const TabNavItem = ({ id, title, activeTab, setActiveTab }) => {
  const handleClick = () => {
    setActiveTab(id);
  };

  return (
    <li
      onClick={handleClick}
      className={
        "py-2 md:px-5 px-2 md:mx-7 mx-0 first-of-type:ml-1.5 last-of-type:mr-1.5 md:text-subtitle text-[12px] font-medium cursor-pointer z-10 " +
        (activeTab === id ? "bg-[rgba(254,254,254,0.148)] rounded-full" : "")
      }
    >
      <p
        className={
          activeTab === id
            ? "text-transparent bg-clip-text bg-gradient-to-r from-[#f05225] to-[#eea820] font-bold"
            : ""
        }
      >
        {title}
      </p>
    </li>
  );
};

export default TabNavItem;
