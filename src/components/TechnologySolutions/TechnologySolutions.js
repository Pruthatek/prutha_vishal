import React, { useState } from "react";

// Components
import TabNavItem from "../TabNavItem/TabNavItem";
import TabContent from "../TabContent/TabContent";

const TechnologySolutions = (props) => {
  const serviceData = [
    {
      img: "/img/SI1.png",
      title: "App development",
      subtitle: "Maintenance Services",
    },
    {
      img: "/img/SI2.png",
      title: "Digital Strategy and",
      subtitle: "transformation",
    },
    {
      img: "/img/SI3.png",
      title: "Digital Marketing",
      subtitle: "",
    },
    {
      img: "/img/SI4.png",
      title: "Ecommerce",
      subtitle: "",
    },
    {
      img: "/img/SI5.png",
      title: "Graphics Design",
      subtitle: "",
    },
    {
      img: "/img/SI6.png",
      title: "Insight and Data",
      subtitle: "",
    },
    {
      img: "/img/SI7.png",
      title: "Infrastructure Services",
      subtitle: "",
    },
    {
      img: "/img/SI8.png",
      title: "Intelligent Automation",
      subtitle: "",
    },
    {
      img: "/img/SI9.png",
      title: "Smart Operations",
      subtitle: "",
    },
    {
      img: "/img/SI10.png",
      title: "Smart Products",
      subtitle: "",
    },
    {
      img: "/img/SI11.png",
      title: "Testing Services",
      subtitle: "",
    },
    {
      img: "/img/SI12.png",
      title: "UI/UX Design",
      subtitle: "",
    },
  ];

  const industryData = [
    {
      img: "/img/II1.png",
      title: "Banking",
      subtitle: "",
    },
    {
      img: "/img/II2.png",
      title: "Capital Markets",
      subtitle: "",
    },
    {
      img: "/img/II3.png",
      title: "Consumer Goods And",
      subtitle: "Distribution",
    },
    {
      img: "/img/II4.png",
      title: "Communications",
      subtitle: "",
    },
    {
      img: "/img/II5.png",
      title: "Healthcare",
      subtitle: "",
    },
    {
      img: "/img/II6.png",
      title: "High Tech Insurance",
      subtitle: "Life Sciences",
    },
    {
      img: "/img/II7.png",
      title: "Media And Information",
      subtitle: "Services Education Energy",
    },
    {
      img: "/img/II8.png",
      title: "Manufacturing",
      subtitle: "",
    },
    {
      img: "/img/II9.png",
      title: "Pubic Services",
      subtitle: "",
    },
    {
      img: "/img/II10.png",
      title: "Resources &  Utilities ",
      subtitle: "",
    },
    {
      img: "/img/II11.png",
      title: "Retail",
      subtitle: "",
    },
    {
      img: "/img/II12.png",
      title: "Travel and Logistics",
      subtitle: "",
    },
  ];

  const toolsData = [
    "/img/TI1.png",
    "/img/TI2.png",
    "/img/TI3.png",
    "/img/TI4.png",
    "/img/TI5.png",
    "/img/TI6.png",
    "/img/TI7.png",
    "/img/TI8.png",
    "/img/TI9.png",
    "/img/TI10.png",
    "/img/TI11.png",
    "/img/TI12.png",
    "/img/TI13.png",
    "/img/TI14.png",
    "/img/TI15.png",
    "/img/TI16.png",
    "/img/TI17.png",
    "/img/TI18.png",
    "/img/TI19.png",
    "/img/TI20.png",
  ];

  const [activeTab, setActiveTab] = useState("tab1");
  return (
    <div className="w-full px-10 lg:px-20 lg:my-0 my-10">
      <p className="font-bold text-center text-[#B3B3B3] dark:text-[#ffffff] lg:text-[22px]">
        Explore the power of transformation with Pruthatek's cutting-edge
        technology solutions.
      </p>
      <div className="bg-gradient-to-r from-[#0038FF] via-transparent to-transparent w-full overflow-x-scroll md:w-fit mx-auto p-[1px] my-10 lg:mt-20 lg:mb-5 rounded-full noscrollbar shadow-[0px_4px_14px_0px_#00000040]">
        <ul className="flex items-center justify-between md:justify-start dark:bg-[#101010] bg-white rounded-full py-1">
          <TabNavItem
            title="Process"
            id="tab1"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <TabNavItem
            title="Services"
            id="tab2"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <TabNavItem
            title="Tools"
            id="tab3"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <TabNavItem
            title="Industries"
            id="tab4"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </ul>
      </div>
      <div className="relative">
        <div
          className="circle hidden xl:block -top-40 -left-20"
          style={{
            background: "linear-gradient(130.35deg, #0066FF33, #3F5EFB33)",
          }}
        />
        <div
          className="circle hidden xl:block -top-10 -right-20"
          style={{
            background: "linear-gradient(130.35deg, #FF5C004D, #3F5EFB33)",
            width: "500px",
            height: "500px",
          }}
        />
        <div
          className={
            "py-3 pb-5 rounded-xl w-full md:min-w-[80%] md:mx-auto relative md:min-h-[450px] xl:min-h-[550px] " +
            (props.theme === "light" ? "glassmorphism-3" : "glassmorphism")
          }
        >
          <div className="flex items-center gap-3 w-full dark:border-[#4f4f4f] border-[#8b8b8b] border-b-[2px] border-opacity-50 dark:border-opacity-30 px-3 pb-3">
            <div className="bg-gradient-to-r from-[#F05225] to-[#EEA820] rounded-full lg:h-5 h-4 lg:w-5 w-4"></div>
            <div className="bg-gradient-to-r from-[#3D7800] to-[#7FBB42] rounded-full lg:h-5 h-4 lg:w-5 w-4"></div>
            <div className="bg-gradient-to-r from-[#0DA1DA] to-[#5DB98E] rounded-full lg:h-5 h-4 lg:w-5 w-4"></div>
          </div>
          <TabContent id="tab1" activeTab={activeTab}>
            <div className="mx-auto my-10 w-full">
              <img
                src={
                  props.theme === "light"
                    ? "/img/processLight.svg"
                    : "/img/process.svg"
                }
                className="w-[80%] h-full mx-auto lg:block hidden"
                alt=""/>
              <img
                src={
                  props.theme === "light"
                    ? "/img/processmobilelight.svg"
                    : "/img/processmobile.svg"
                }
                className="w-[80%] h-full mx-auto lg:hidden block"
                alt=""/>
            </div>
          </TabContent>
          <TabContent id="tab2" activeTab={activeTab}>
            <div
              className={
                "px-3 pt-5 md:pl-9 grid md:grid-flow-col md:grid-rows-3 md:gap-x-[2rem] xl:gap-x-[5rem] gap-y-[3rem] lg:mt-24 mx-auto h-fit grid-rows-" +
                serviceData.length
              }
            >
              {serviceData.map((item, index) => (
                <div className="flex items-center gap-3" key={index}>
                  <img
                    src={item.img}
                    alt=""
                    className="w-10 h-10 object-contain"
                  />
                  <div>
                    <p className="text-subtitle font-bold md:text-[14px] capitalize">
                      {item.title}
                    </p>
                    {item.subtitle != "" ? (
                      <p className="capitalize">{item.subtitle}</p>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </TabContent>
          <TabContent id="tab3" activeTab={activeTab}>
            <div className="md:px-9 pt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-10 md:gap-x-[3rem] lg:mt-10 mx-auto">
              {toolsData.map((item, index) => (
                <div
                  className="bg-white md:w-44 md:h-16 w-28 h-12 rounded-xl overflow-hidden p-2 md:p-3"
                  key={index}
                >
                  <img
                    src={item}
                    className="w-full h-full object-contain"
                    alt=""
                  />
                </div>
              ))}
            </div>
          </TabContent>
          <TabContent id="tab4" activeTab={activeTab}>
            <div
              className={
                "px-3 pt-5 md:pl-9 grid md:grid-flow-col md:grid-rows-3 xl:gap-x-[5rem] gap-x-[2rem] gap-y-[3rem] mx-auto lg:mt-24 grid-rows-" +
                industryData.length
              }
            >
              {industryData.map((item, index) => (
                <div className="flex items-center gap-3" key={index}>
                  <img
                    src={item.img}
                    alt=""
                    className="w-10 h-10 object-contain"
                  />
                  <div>
                    <p className="text-subtitle font-bold md:text-[14px] capitalize">
                      {item.title}
                    </p>
                    {item.subtitle != "" ? (
                      <p className="capitalize">{item.subtitle}</p>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </TabContent>
        </div>
      </div>
    </div>
  );
};

export default TechnologySolutions;
