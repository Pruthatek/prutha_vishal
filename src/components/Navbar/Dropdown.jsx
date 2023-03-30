import React from "react";

const DropdownMenu = () => {
  return (
    <div className="flex bg-[#3A3A3A4D] p-20 items-center justify-between backdrop-blur-md absolute top-24 w-full">
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

export default DropdownMenu;
