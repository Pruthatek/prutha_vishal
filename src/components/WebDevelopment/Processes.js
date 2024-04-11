import React from "react";

const Processes = () => {
  const Data1 = [
    {
      text: "1",
      title: "Concept Development",
      content:
        "To make sure the concept satisfies market needs, we conduct research and understand the target audience's pain points beginning with the project planning phase.",
      linearGradient:
        "bg-gradient-to-r from-[#FF63F9] via-[#E41EAD] to-[#FF008D]",
    },
    {
      text: "2",
      title: "Market Analysis",
      content:
        "As soon as you have a product idea, we solicit input from your intended audience to confirm its viability. We examine the behaviours, demographics, and objectives of your marketing goals.",
      linearGradient: "bg-gradient-to-r from-[#0DA1DA] to-[#5DB98E]",
    },
    {
      text: "3",
      title: "Technical Assessment",
      content:
        "Our business analyst assists you in selecting the appropriate technological stack, defining the deliverables, and projecting the resources and timetable.",
      linearGradient:
        "bg-gradient-to-r from-[#FF63F9] via-[#E41EAD] to-[#FF008D]",
    },
    {
      text: "4",
      title: "Prototyping",
      content:
        "Our business analyst assists you in selecting the appropriate Before developing your programme, you may test your notion using a prototype. In order to reuse the prototype in the actual development, we prefer to create it using the technology that our analyst recommended.",
      linearGradient:
        "bg-gradient-to-r from-[#D400A4] via-[#1F7ECB] to-[#2ED6E3]",
    },
    {
      text: "5",
      title: "Development on the Front & Back Ends",
      content:
        "Our business analyst assists you in selecting the appropriate With years of planning and execution expertise, Pruthatek’s  web development process is dependable and easy. Based on research findings, user comments, and technical analyst suggestions, we begin creating an application's front end and back end.",
      linearGradient: "bg-gradient-to-r from-[#F05225] to-[#EEA820]",
    },
    {
      text: "6",
      title: "Deployment And Upkeep",
      content:
        "Our business analyst assists you in selecting the appropriate We advise you on the best hosting options for your app at a reasonable price. We are aware that a well-maintained web application keeps users for a longer length of time. As a result, we continuously maintain and improve your apps.",
      linearGradient: "bg-gradient-to-r from-[#0DA1DA] to-[#5DB98E]",
    },
  ];
  return (
    <>
<div className=" max-sm:grid-cols-1 xl:grid  xl:grid-rows-3 xl:grid-flow-col px-10 xl:px-20 gap-x-16 gap-y-10 my-7 xl:my-16 ">
    {Data1.map((item, index) => (
      <div
        key={index}
        className="overflow-x-hidden  first-of-type:mt-0 last-of-type:mb-0"
      >
        <div className="flex items-center ">
          <div
            className={`text-[25px] p-[2px] rounded-full   ${item.linearGradient}`}
          >
            <h2 className="  rounded-full bg-white px-3 dark:bg-black   ">
              {item.text}
            </h2>
          </div>
          <p
            data-growth={item.title}
            className={`growthTitles px-3 xl:px-7 font-medium text-title xl:text-[24px] text-transparent bg-clip-text ${item.linearGradient}`}
          >
            {item.title}
          </p>
        </div>
        <div className="flex flex-col  items-start">
          <p className=" xl:ml-[70px] py-5 px-2 capitalize font-normal  dark:text-white text-justify  text-[#101010] leading-[210%] ">
            {item.content}
          </p>
        </div>
      </div>
    ))}
  </div>

    
    </>
  );
};

export default Processes;

{/* <div className="flex flex-col px-10 lg:px-20 sm:gap-[250px] py-5 xl:py-16">
<div className="flex w-full sm:flex-col max-sm:flex-col lg:flex-row sm:space-x-0 lg:space-x-20 items-start sm:gap-0 ">
  <div className="flex flex-col lg:w-[45%] xl:gap-y-16 ">
    {Data1.map((item, index) => (
      <div
        key={index}
        className="overflow-x-hidden lg:my-8 my-5 first-of-type:mt-0 last-of-type:mb-0"
      >
        <div className="flex items-center ">
          <div
            className={`text-[25px] p-[1.5px] rounded-full   ${item.linearGradient}`}
          >
            <h2 className="  rounded-full bg-white px-3 dark:bg-black   ">
              {item.text}
            </h2>
          </div>
          <p
            data-growth={item.title}
            className={`growthTitles  px-7 font-medium text-title lg:text-[24px] text-transparent bg-clip-text ${item.linearGradient}`}
          >
            {item.title}
          </p>
        </div>
        <div className="flex flex-col  items-start">
          <p className=" ml-[70px] py-5 px-2 capitalize font-normal  dark:text-white text-justify  text-[#101010] leading-[210%] ">
            {item.content}
          </p>
        </div>
      </div>
    ))}
  </div>
  <div className="flex flex-col sm:py-4 xl:py-0 xl:gap-y-[2.5rem] max-sm:py-5 lg:w-[45%]">
    {Data2.map((item, index) => (
      <div
        key={index}
        className="overflow-x-hidden  my-5 first-of-type:mt-0 last-of-type:mb-0"
      >
        <div className="flex items-center  mb-4">
          <div
            className={`text-[25px] p-[1.5px] rounded-full   ${item.linearGradient}`}
          >
            <h2 className="  rounded-full bg-white px-3 dark:bg-black">
              {item.text}
            </h2>
          </div>
          <p
            data-growth={item.title}
            className={`growthTitles px-7 font-medium text-title lg:text-[24px] text-transparent bg-clip-text ${item.linearGradient}`}
          >
            {item.title}
          </p>
        </div>
        <div className="flex flex-col  items-start">
          <p className=" ml-[70px]  dark:text-white capitalize font-normal  text-justify  text-[#101010] leading-[210%] ">
            {item.content}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>
</div> */}