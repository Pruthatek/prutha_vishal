import React, {useEffect} from "react";
import Client from "../Contact/Client";
import Cards from "./Cards";
import Processes from "./Processes";

const WebDevelopment = (props) => {

  useEffect(() => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }, [])
  

  const webDevInfo = [
    {
      title: "Real-Time Communication for Effective Collaboration",
      content:
        "Our team of web developers prioritises effective communication to ensure a smooth collaboration process. We use real-time communication tools to stay in constant contact with our clients, provide regular updates, and address any concerns promptly. Our transparent and collaborative approach to communication helps us deliver the best possible results and exceed our clients' expectations.",
      linearGradient: "bg-gradient-to-r from-[#F05225] to-[#EEA820]",
    },
    {
      title: "Complete Code Ownership for Your Website",
      content:
        "At our web design company, we prioritise our clients' ownership and control over the code we create for their website. This means that you have complete authority to modify the code after handover and own the intellectual property rights. Our team of skilled web developers ensures that the code is easy to understand and modify, even for those without a technical background. With our commitment to complete code ownership and transparency, you can trust that your website is in good hands.",
      linearGradient: "bg-gradient-to-r from-[#0DA1DA] to-[#5DB98E]",
    },
    {
      title: "Scalable development teams",
      content:
        "Our software development company offers a flexible resource scaling model to meet the unique needs of your project. You can customise a dedicated team of developers and easily adjust their size and focus as needed. This ensures that you always have the right resources at every stage of your project. Our development model is designed to provide maximum flexibility and ensure that your project is a success.",
      linearGradient: "bg-gradient-to-r from-[#F05225] to-[#EEA820]",
    },
    {
      title: "High-Value Custom Development",
      content:
        "We offer cost-effective custom software development services that are tailored to meet the unique needs of our clients. By using a flexible and customised approach, we provide the most value for your investment. Our team works closely with you to understand your requirements and develop a solution that fits your specific needs. Our user-friendly UI/UX design ensures that your software is not only functional but also easy to use. Trust us to provide the custom software development you require within your budget.",
      linearGradient:
        "bg-gradient-to-r from-[#FF63F9] via-[#E41EAD] to-[#FF008D]",
    },
  ];

  const webDevImg = [
    ["/img/WDI1.svg", "/img/WDIBG1.svg", "my-20"],
    ["/img/WDI2.svg", "/img/WDIBG2.svg", "my-10"],
    ["/img/WDI3.svg", "/img/WDIBG3.svg", "mb-20"],
    ["/img/WDI4.svg", "/img/WDIBG4.svg", "my-28"],
  ];

  window.addEventListener("scroll", () => {
    let growthTitles = document.getElementsByClassName("growthTitles");
    for (let i = 0; i < growthTitles.length; i++) {
      var rect = growthTitles[i].getBoundingClientRect();
      let project = growthTitles[i].getAttribute("data-growth");
      if (rect.top < 300 && rect.top > 0) {
        console.log(project, rect.top);
        let images = document.getElementsByClassName("growthImage");
        for (let j = 0; j < images.length; j++) {
          if (!images[j].classList.contains("opacity-0")) {
            images[j].classList.add("opacity-0");
          }
          images[j].classList.remove("opacity-100");
          images[j].classList.remove("translate-y-0");
          if (!images[j].classList.contains("translate-y-32")) {
            images[j].classList.add("translate-y-32");
          }
        }
        document
          .getElementById("growthImage" + i)
          .classList.remove("opacity-0");
        if (
          !document
            .getElementById("growthImage" + i)
            .classList.contains("opacity-100")
        ) {
          document
            .getElementById("growthImage" + i)
            .classList.add("opacity-100");
        }
        document
          .getElementById("growthImage" + i)
          .classList.remove("translate-y-32");
        if (
          !document
            .getElementById("growthImage" + i)
            .classList.contains("translate-y-0")
        ) {
          document
            .getElementById("growthImage" + i)
            .classList.add("translate-y-0");
        }
      }
    }
  });

  return (
    <div className="pt-36">
      {/* Hero section */}
      <div className="mb-[6rem]">
        <div
          className="circle hidden xl:block right-10 -bottom-[8rem]"
          style={{
            background:
              "linear-gradient(130.35deg, rgba(252, 70, 107, 0.2) -4.08%, rgba(63, 94, 251, 0.2) 98.72%)",
          }}
        ></div>

        <div className="lg:px-20 px-10 lg:flex flex-row items-center lg:my-5 mb-32 mt-4">
          <img
            src="/img/bg_light.png"
            alt=""
            className="w-[100%] h-[100%] absolute object-cover top-0 left-0 move"
            data-value="-2"
          />
          <div
            data-value="2"
            className="move border-2 shadow-[0px_4px_14px_0px_rgba(0,0,0,0.25)] dark:shadow-[#000000] dark:shadow-lg max-sm:w-[18.688rem] max-sm:h-[12.526rem] sm:w-[30rem]  lg:w-[50%] lg:h-[25%] rounded-2xl overflow-hidden"
          >
            <img
              className="rounded-lg transition  duration-300 ease-in-out hover:scale-105 cursor-pointer"
              src="./img/webdev.png"
              alt="Bonnie "
            />
          </div>
          <div
            className={
              "max-sm:w-[18rem] sm:w-[25rem]  max-sm:translate-x-[2rem] max-sm:translate-y-[-6rem] sm:translate-x-[18rem] sm:translate-y-[-11rem] lg:w-[38%] max-sm:h-fit border-[#F05225] border-2 absolute lg:translate-x-[36rem] lg:translate-y-[-0.3rem] rounded-xl lg:py-[2.8rem] sm:py-[3rem] " +
              (props.theme === "light" ? "glassmorphism-3" : "glassmorphism")
            }
          >
            <div className="p-5 flex flex-col lg:gap-y-5">
              <h1 className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#F05225] to-[#EEA820] text-description lg:text-[28px] capitalize mb-4">
                Web Development With Pruthatek
              </h1>
              <p className="lg:text-subtitle capitalize text-[0.8rem]">
                Our web development services are designed to provide businesses
                with personalised solutions that perfectly align with their
                unique needs.
              </p>
            </div>
            {/* Animated Square */}
            <div className="absolute -top-20 -right-16 square xl:block hidden">
              <img src="/img/square.svg" alt="" className="w-32" />
            </div>
            <div className="absolute -bottom-10 -right-14 square-2 xl:block hidden">
              <img src="/img/square.svg" alt="" className="w-24" />
            </div>
          </div>
        </div>
      </div>

      {/* Client Section */}
      <Client />

      <div className="mt-14">
        <div className="py-3">
          <h2 className="xl:px-0 px-10 text-title  py-2 text-semibold  text-[#B3B3B3] text-center font-semibold capitalize tracking-[0.02em] max-sm:text-[16px] lg:text-[20px] dark:text-[#ffffff] ">
            Achieve Your Objectives Faster With Our Web Development Services
          </h2>
          <h2 className="py-3 text-semibold  text-[#B3B3B3] max-sm:text-[16px] text-title text-center  capitalize tracking-[0.02em] xl:px-0 px-10 lg:text-[13px] ">
            Our Services Have Been Utilised By Both Established Industry Giants
            And Innovative Startups.
          </h2>
        </div>
        <div className="flex xl:justify-between">
          <div className="flex sm:flex-col sm:ml-10 lg:flex-row sm:py-5 lg:py-14 sm:space-x-7 lg:space-x-20">
            <img
              src="/img/fly.png"
              alt=""
              className="max-md:hidden max-sm:hidden sm:w-[45%] sm:ml-48 lg:ml-0 xl:w-[40%] xl:h-[90%] "
            />
            <Cards />
          </div>
        </div>
      </div>

      {/* Process section */}
      <div
        className={
          "sm:my-2 p-10 mb-3 " +
          (props.theme === "light" ? "glassmorphism-3" : "glassmorphism")
        }
      >
        <p className="text-center max-sm:text-[16px] text-title xl:px-0 px-10 font-semibold text-[#B3B3B3] capitalize tracking-[0.02em]  lg:text-[20px] dark:text-[#ffffff] mb-[3rem]">
          Phases of Web Development
        </p>
        <div className="mx-auto my-10 w-full">
          <img
            src={
              props.theme === "light"
                ? "/img/processLight.svg"
                : "/img/process.svg"
            }
            className="w-[80%] h-full mx-auto"
            alt=""/>
        </div>
      </div>

      {/* Info section */}
      <div className="flex flex-col px-10 lg:px-20 sm:gap-[250px] gap-20 lg:py-20 py-6">
        <div className="flex w-full sm:flex-row flex-col justify-between items-start sm:gap-0 gap-20">
          <div className="flex flex-col lg:w-[50%]">
            {webDevInfo.map((item, index) => (
              <div
                key={index}
                className="overflow-x-hidden lg:my-20 my-5 first-of-type:mt-0 last-of-type:mb-0"
                data-aos={window.innerWidth > 640 ? "fade-left" : "fade-up"}
                data-aos-duration="600"
                data-aos-delay="0"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
              >
                <div className="flex items-center gap-6 mb-4">
                  <p
                    data-growth={item.title}
                    className={`growthTitles  font-medium text-title lg:text-[35px] text-transparent bg-clip-text ${item.linearGradient}`}
                  >
                    {item.title}
                  </p>
                </div>
                <div className="flex flex-col gap-6 items-start">
                  <p className="text-justify capitalize max-sm:text-[13px] text-lg leading-8">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="sticky top-[20%] hidden  lg:block h-96 w-[35%]">
            <div className="h-full relative ">
              {webDevImg.map((item, index) => (
                <div
                  id={"growthImage" + index}
                  key={index}
                  className={
                    "growthImage absolute  top-0 left-0 sm:flex hidden justify-center items-center first-of-type:mt-0 last-of-type:mb-0 translate-y-0 opacity-100 transition-all duration-700 " +
                    item[2]
                  }
                >
                  <div
                    className={
                      "absolute top-[-200px]   right-[-125px] w-[175%] h-[175%] hidden lg:block z-[-999] " +
                      (props.theme === "light" ? "lg:hidden " : "block")
                    }
                  >
                    <img src={item[1]} alt="." />
                  </div>
                  <img
                    className="z-1 sm:w-[80%]  w-[100%]"
                    src={item[0]}
                    alt="."
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Development Stack */}
      <div className="flex max-sm:px-10 flex-col xl:flex-row sm:py-10 lg:py-14 justify-between sm:space-x-0 lg:space-x-10">
        <div className="lg:py-32 sm:py-3 sm:px-10 lg:px-3 rounded-lg   flex flex-col gap-y-3 xl:gap-y-5 ">
          <p className="font-semibold sm:px-0 lg:px-20 lg:text-title   text-[25px] text-gradient">
            Development Stack
          </p>
          <p className=" sm:text-[20px] max-sm:text-[16px] text-justify lg:text-[20px] sm:px-0 lg:px-20 text-title capitalize ">
            Hire a web developer with expertise in custom web app development to
            bring your vision to life{" "}
          </p>
          <div className="xl:py-0 py-5 xl:px-0 px-12 sm:px-0 ">
            <div className="xl:ml-20  text-white  w-max py-2.5  px-4 flex items-center justify-center gap-x-4 hover:gap-x-10 rounded-full cursor-pointer transition-all duration-500 border-transparent bg-gradient-to-r from-[#F05225] to-[#EEA820]">
              <p className="">Hire Developers</p>
              <div className=" hover:gap-x-10  transition-all duration-500 ">
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
              </div>
            </div>
          </div>
        </div>

        <div className="xl:px-16  sm:px-12 relative z-30">
          <div
            className={
              "xl:w-[570px] xl:h-[450px]  justify-center border-[2px] border-[#F05225] sm:px-5 max-sm:px-4 rounded-md flex flex-row  " +
              (props.theme === "light" ? "glassmorphism-3" : "glassmorphism")
            }
          >
            <div className="flex flex-col">
              <h2 className="xl:px-10 max-sm:px-2 sm:px-7 mt-5 py-2 xl:text-[20px] font-bold ">
                Languages
              </h2>
              <div className="py-4 xl:px-8 max-sm:px-3 sm:px-5">
                <img
                  src="/img/L1.png"
                  className="xl:xl:w-[200px] max-sm:w-[180px]  "
                  alt=""/>
              </div>
              <div className="py-4 xl:px-8 max-sm:px-3 sm:px-5">
                <img
                  src="/img/L2.png"
                  className="xl:w-[200px] max-sm:w-[180px]"
                  alt=""/>
              </div>
              <div className="py-4 xl:px-8 max-sm:px-3 sm:px-5">
                <img
                  src="/img/L3.png"
                  className="xl:w-[200px] max-sm:w-[180px]"
                  alt=""/>
              </div>
              <div className="py-4 xl:px-8 max-sm:px-3 sm:px-5">
                <img
                  src="/img/L4.png"
                  className="xl:w-[200px] max-sm:w-[180px]"
                  alt=""/>
              </div>
            </div>
            <div className="flex flex-col ">
              <h2 className="xl:px-8 max-sm:px-4  mt-5 sm:px-3 py-2 xl:text-[20px] font-bold ">
                Frameworks
              </h2>
              <div className="xl:py-4 max-sm:py-4 xl:px-6 sm:px-3 sm:py-4  max-sm:px-5">
                <img
                  src="/img/F1.png"
                  className="xl:w-[200px] max-sm:w-[180px]"
                  alt=""/>
              </div>
              <div className="xl:py-4 max-sm:py-4 xl:px-6 sm:px-3 sm:py-3 max-sm:px-4">
                <img
                  src="/img/F2.png"
                  className="xl:w-[200px] max-sm:w-[180px]"
                  alt=""/>
              </div>
              <div className="xl:py-4 max-sm:py-4 xl:px-6 sm:py-3 sm:px-3 max-sm:px-4">
                <img
                  src="/img/F3.png"
                  className="xl:w-[200px] max-sm:w-[180px]"
                  alt=""/>
              </div>
              <div className="xl:py-4 max-sm:py-4 xl:px-6 sm:py-3 sm:px-3 max-sm:px-4">
                <img
                  src="/img/F4.png"
                  className="xl:w-[200px] max-sm:w-[180px]"
                  alt=""/>
              </div>
            </div>
          </div>
          <div className=" max-sm:hidden absolute w-[150%] -z-30  lg:block  -right-[2px] -top-[30px] ">
            <img src="/img/Vector.png" alt="" />
          </div>
        </div>

        {/* <div>
          <img src="/img/language.png" className="sm:w-[900px] max-sm:py-2 max-sm:px-5 lg:w-[1250px] sm:px-10 lg:px-20 " />
        </div> */}
      </div>

      {/* Processes     */}
      <div>
        <div>
          <h2 className=" mt-7 py-2 xl:px-0 px-10 max-sm:text-[16px] text-semibold  text-[#B3B3B3] text-center font-semibold capitalize tracking-[0.02em] text-title lg:text-[20px] dark:text-[#ffffff] ">
            Excellence through Proven Processes:
          </h2>
        </div>
        <Processes />
      </div>

      {/* Explore Languages */}

      <div className="xl:space-y-2 space-y-5 py-4">
        <h1 className="px-10 xl:px-0 max-sm:text-[16px] font-semibold text-center  text-title capitalize sm:text-[18px]  xl:text-[20px] text-gradient">
          From front-end to back-end, these languages cover every aspect of web
          development.
        </h1>
        <h2 className="px-10 xl:px-0  text-semibold max-sm:text-[16px]  text-[#B3B3B3] text-center  font-semibold capitalize tracking-[0.02em] sm:text-[18px] lg:text-[23px] dark:text-[#ffffff] ">
          Explore how to alter your web projects with the use of :
        </h2>
      </div>
      <div>
        <div className="flex xl:flex-col max-sm:flex-row  sm:flex-col max-sm:space-x-5 justify-center max-sm:py-0 lg:py-14 items-center">
          <div className="flex  max-sm:flex-col lg:flex-row max-sm:space-x-0 sm:flex-row sm:space-x-7 max-sm:space-y-7 lg:space-x-10 py-5">
            <div
              data-value="-1"
              className=" sm:w-[100px] sm:h-[100px] max-sm:w-[100px] max-sm:h-[100px]   hover:transition-[5] lg:w-[100px]   shadow-lg shadow-slate-300 lg:h-[100px] rounded-3xl flex justify-center items-center border-[0.5px] dark:border-[0.6px] bg-gradient-to-tl from-[#ffffff]/10 to-[#ffffff00]   dark:shadow-[-18.35673713684082px_18.35673713684082px_18.35673713684082px_0px_rgba(255,255,255,0.10)_inset,18.35673713684082px_-18.35673713684082px_18.35673713684082px_0px_rgba(194,194,194,0.10)_inset]  dark:backdrop-blur-[18.35673713684082px]   "
            >
              <div className="hover:bg-[#E44D26]/70 hover:blur-[27px]  hover:duration-1000 w-[90px] h-[90px]  shadow-slate-300 rounded-3xl absolute  "></div>
              <img src="/img/p1a.png" className="p1a  w-[60%] h-[60%] " alt=""/>
            </div>
            <div className=" sm:w-[100px] sm:h-[100px] max-sm:w-[100px] max-sm:h-[100px]   hover:transition-[5] lg:w-[100px]   shadow-lg shadow-slate-300 lg:h-[100px] rounded-3xl flex justify-center items-center border-[0.5px] dark:border-[0.6px] bg-gradient-to-tl from-[#ffffff]/10 to-[#ffffff00]   dark:shadow-[-18.35673713684082px_18.35673713684082px_18.35673713684082px_0px_rgba(255,255,255,0.10)_inset,18.35673713684082px_-18.35673713684082px_18.35673713684082px_0px_rgba(194,194,194,0.10)_inset]  dark:backdrop-blur-[18.35673713684082px]   ">
              <div className="hover:bg-[#2965F1]/70 hover:blur-2xl  hover:duration-1000 w-[90px] h-[90px]  shadow-slate-300 rounded-3xl absolute "></div>
              <img src="/img/p1.png" className=" w-[40%] h-[60%] " alt=""/>
            </div>
            <div className=" sm:w-[100px] sm:h-[100px] max-sm:w-[100px] max-sm:h-[100px]   hover:transition-[5] lg:w-[100px]   shadow-lg shadow-slate-300 lg:h-[100px] rounded-3xl flex justify-center items-center border-[0.5px] dark:border-[0.6px] bg-gradient-to-tl from-[#ffffff]/10 to-[#ffffff00]   dark:shadow-[-18.35673713684082px_18.35673713684082px_18.35673713684082px_0px_rgba(255,255,255,0.10)_inset,18.35673713684082px_-18.35673713684082px_18.35673713684082px_0px_rgba(194,194,194,0.10)_inset]  dark:backdrop-blur-[18.35673713684082px]   ">
              <div className="hover:bg-[#F0BE25]/70 hover:blur-2xl  hover:duration-1000 w-[90px] h-[90px]  shadow-slate-300 rounded-3xl absolute "></div>
              <img src="/img/p0.png" className=" w-[100%] h-[60%] " alt=""/>
            </div>
            <div className=" sm:w-[100px] sm:h-[100px] max-sm:w-[100px] max-sm:h-[100px]   hover:transition-[5] lg:w-[100px]   shadow-lg shadow-slate-300 lg:h-[100px] rounded-3xl flex justify-center items-center border-[0.5px] dark:border-[0.6px] bg-gradient-to-tl from-[#ffffff]/10 to-[#ffffff00]   dark:shadow-[-18.35673713684082px_18.35673713684082px_18.35673713684082px_0px_rgba(255,255,255,0.10)_inset,18.35673713684082px_-18.35673713684082px_18.35673713684082px_0px_rgba(194,194,194,0.10)_inset]  dark:backdrop-blur-[18.35673713684082px]   ">
              <div className="dark:hover:bg-[#FDFDFD]/70 hover:bg-[#38BDF8] hover:blur-2xl  hover:duration-1000 w-[90px] h-[90px]  shadow-slate-300 rounded-3xl absolute "></div>
              <img src="/img/p2.png" className=" w-[40%] h-[30%] " alt=""/>
            </div>
            <div className=" sm:w-[100px] sm:h-[100px] max-sm:w-[100px] max-sm:h-[100px]   hover:transition-[5] lg:w-[100px]   shadow-lg shadow-slate-300 lg:h-[100px] rounded-3xl flex justify-center items-center border-[0.5px] dark:border-[0.6px] bg-gradient-to-tl from-[#ffffff]/10 to-[#ffffff00]   dark:shadow-[-18.35673713684082px_18.35673713684082px_18.35673713684082px_0px_rgba(255,255,255,0.10)_inset,18.35673713684082px_-18.35673713684082px_18.35673713684082px_0px_rgba(194,194,194,0.10)_inset]  dark:backdrop-blur-[18.35673713684082px]   ">
              <div className="hover:bg-[#00A9D8]/70 hover:blur-2xl  hover:duration-1000 w-[90px] h-[90px]  shadow-slate-300 rounded-3xl absolute "></div>
              <img src="/img/p3.png" className=" w-[60%] h-[60%] " alt=""/>
            </div>
          </div>
          <div className="flex max-sm:flex-col lg:flex-row max-sm:space-x-0 sm:flex-row sm:space-x-7 lg:space-x-10 max-sm:py-0 max-sm:space-y-7 lg:py-5">
            <div className=" sm:w-[100px] sm:h-[100px] max-sm:w-[100px] max-sm:h-[100px]   hover:transition-[5] lg:w-[100px]   shadow-lg shadow-slate-300 lg:h-[100px] rounded-3xl flex justify-center items-center border-[0.5px] dark:border-[0.6px] bg-gradient-to-tl from-[#ffffff]/10 to-[#ffffff00]   dark:shadow-[-18.35673713684082px_18.35673713684082px_18.35673713684082px_0px_rgba(255,255,255,0.10)_inset,18.35673713684082px_-18.35673713684082px_18.35673713684082px_0px_rgba(194,194,194,0.10)_inset]  dark:backdrop-blur-[18.35673713684082px]   ">
              <div className="dark:hover:bg-[#FDFDFD]/70 hover:bg-[#CA3132] hover:blur-2xl  hover:duration-1000 w-[90px] h-[90px]  shadow-slate-300 rounded-3xl absolute "></div>
              <img src="/img/p4.png" className=" w-[80%] h-[80%] " alt=""/>
            </div>
            <div className=" sm:w-[100px] sm:h-[100px] max-sm:w-[100px] max-sm:h-[100px]   hover:transition-[5] lg:w-[100px]   shadow-lg shadow-slate-300 lg:h-[100px] rounded-3xl flex justify-center items-center border-[0.5px] dark:border-[0.6px] bg-gradient-to-tl from-[#ffffff]/10 to-[#ffffff00]   dark:shadow-[-18.35673713684082px_18.35673713684082px_18.35673713684082px_0px_rgba(255,255,255,0.10)_inset,18.35673713684082px_-18.35673713684082px_18.35673713684082px_0px_rgba(194,194,194,0.10)_inset]  dark:backdrop-blur-[18.35673713684082px]   ">
              <div className="hover:bg-[#4685B7]/70  hover:blur-2xl  hover:duration-1000 w-[90px] h-[90px]  shadow-slate-300 rounded-3xl absolute "></div>
              <img src="/img/p5.png" className=" w-[60%] h-[60%] " alt=""/>
            </div>
            <div className=" sm:w-[100px] sm:h-[100px] max-sm:w-[100px] max-sm:h-[100px]   hover:transition-[5] lg:w-[100px]   shadow-lg shadow-slate-300 lg:h-[100px] rounded-3xl flex justify-center items-center border-[0.5px] dark:border-[0.6px] bg-gradient-to-tl from-[#ffffff]/10 to-[#ffffff00]   dark:shadow-[-18.35673713684082px_18.35673713684082px_18.35673713684082px_0px_rgba(255,255,255,0.10)_inset,18.35673713684082px_-18.35673713684082px_18.35673713684082px_0px_rgba(194,194,194,0.10)_inset]  dark:backdrop-blur-[18.35673713684082px]   ">
              <div className="hover:bg-[#404E89]/70 hover:blur-2xl  hover:duration-1000 w-[90px] h-[90px]  shadow-slate-300 rounded-3xl absolute "></div>
              <img src="/img/p6.png" className=" w-[50%] h-[60%] " alt=""/>
            </div>
            <div className=" sm:w-[100px] sm:h-[100px] max-sm:w-[100px] max-sm:h-[100px]   hover:transition-[5] lg:w-[100px]   shadow-lg shadow-slate-300 lg:h-[100px] rounded-3xl flex justify-center items-center border-[0.5px] dark:border-[0.6px] bg-gradient-to-tl from-[#ffffff]/10 to-[#ffffff00]   dark:shadow-[-18.35673713684082px_18.35673713684082px_18.35673713684082px_0px_rgba(255,255,255,0.10)_inset,18.35673713684082px_-18.35673713684082px_18.35673713684082px_0px_rgba(194,194,194,0.10)_inset]  dark:backdrop-blur-[18.35673713684082px]   ">
              <div className="  hover:bg-[#5BAC47]/70 hover:blur-2xl  hover:duration-1000 w-[90px] h-[90px]  shadow-slate-300 rounded-3xl absolute "></div>
              <img
                className=" w-[80%] h-[30%] "
                src={
                  props.theme === "light"
                    ? "/img/p7.png"
                    : "/img/nodejswhite.png"
                }
                alt=""/>
            </div>
            <div className=" sm:w-[100px] sm:h-[100px] max-sm:w-[100px] max-sm:h-[100px]   hover:transition-[5] lg:w-[100px]   shadow-lg shadow-slate-300 lg:h-[100px] rounded-3xl flex justify-center items-center border-[0.5px] dark:border-[0.6px] bg-gradient-to-tl from-[#ffffff]/10 to-[#ffffff00]   dark:shadow-[-18.35673713684082px_18.35673713684082px_18.35673713684082px_0px_rgba(255,255,255,0.10)_inset,18.35673713684082px_-18.35673713684082px_18.35673713684082px_0px_rgba(194,194,194,0.10)_inset]  dark:backdrop-blur-[18.35673713684082px]   ">
              <div className="hover:bg-[#00AB48]/70 hover:blur-2xl  hover:duration-1000 w-[90px] h-[90px]  xl:shadow-slate-300 rounded-3xl absolute "></div>
              <img src="/img/p8.png" className=" w-[30%] h-[80%] " alt=""/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDevelopment;
