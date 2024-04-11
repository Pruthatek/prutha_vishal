import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const [isRoleDropdownMenuSelected, setIsRoleDropdownMenuSelected] =
    useState("Overview");
  const [isDefineDropdownMenuSelected, setIsDefineDropdownMenuSelected] =
    useState("Overview");
  const [IsCareerDropdownMenuSelected, setIsCareerDropdownMenuSelected] =
    useState("Let’s Join With we");
  const [isHomePage, setIsHomePage] = useState(false);

  useEffect(() => {
    if (window.location.pathname === "/") {
      setIsHomePage(true);
    } else {
      setIsHomePage(false);
    }
  }, []);

  const roleDropdownMenus = [
    {
      title: "Overview",
      link: "",
      data: `<div class="w-full mx-auto">
        <p class="text-[30px] font-bold">
          “Empowering your business through cutting edge technology is
          what we do best at Pruthatek.”
        </p>
        <p class="mt-5">
          Our company offers a range of services, and here is a simple
          description of what we provide.
        </p>
      </div>`,
    },
    {
      title: "Offerings & Advancements",
      link: "",
      data: `<ul class="list-disc grid grid-cols-2 gap-8 gap-x-10 w-full mx-auto ml-5">
        <li class="cursor-pointer">Enterprise Software Development</li>
        <li class="cursor-pointer">
        <a href='web-development'>
        Web Application Development
        </a>
        </li>
        <li class="cursor-pointer">Mobile Application Development</li>
        <li class="cursor-pointer">E-commerce / Retail</li>
        <li class="cursor-pointer">Artificial Intelligence</li>
        <li class="cursor-pointer">Machine Learning</li>
        <li class="cursor-pointer">DevOps</li>
        <li class="cursor-pointer">E-commerce</li>
        <li class="cursor-pointer">Product Engineering</li>
        <li class="cursor-pointer">QA Testing</li>
      </ul>`,
    },
    {
      title: "Products",
      link: "",
      data: `<div class="mx-auto w-fit">
          <div class="w-max max-w-[700px]">
            <p class="text-transparent text-[18px] bg-clip-text bg-gradient-to-r from-[#f05225] to-[#eea820] font-extrabold">
              Kijeka
          <hr class="h-[2px] w-full border-none bg-gradient-to-r from-[#BFBFBF] to-transparent" />
            </p>
            <p class="my-2 text-[15px]">We At Kijeka Are Committed To Providing You With The Best Possible Online Shopping Experience. We Offer A Modern Design, An Easy-To-Use Shopping Cart, Dynamic Product Data, And More.(Experience Our Commitment To Providing The Best Online Shopping Experience For Material Handling Equipment.)</p>
          </div>
          <div class="w-max max-w-[700px] my-5">
            <p class="text-transparent text-[18px] bg-clip-text bg-gradient-to-r from-[#f05225] to-[#eea820] font-extrabold">
              Sage
          <hr class="h-[2px] w-full border-none bg-gradient-to-r from-[#BFBFBF] to-transparent" />
            </p>
            <p class="my-2 text-[15px]">The Ultimate Music App For All Your Needs! With Our Cross-Platform Capabilities, You Can Enjoy With Your Partner With Favourite Tunes Anywhere. Organise Your Songs With Ease And Create The Perfect Playlists. Plus, Our Account Collect Feature Lets You Share Music With Friends And Family. And With Gift Vouchers Available, Sage Is The Perfect Present For Any Music Lover.</p>
          </div>
          <div class="w-max max-w-[700px]">
            <p class="text-transparent text-[18px] bg-clip-text bg-gradient-to-r from-[#f05225] to-[#eea820] font-extrabold">
            Samyati
        <hr class="h-[2px] w-full border-none bg-gradient-to-r from-[#BFBFBF] to-transparent" />
            </p>
            <p class="my-2 text-[15px]">Track Your Health Progress With Samyati. Our App Counts Your Workouts And Steps, Giving You Valuable Insight Into Your Fitness Journey. With A One-Time Login System, Your Account Is Valid Across All Devices. Start Your Wellness Journey With Samyati.</p>
          </div>
        </div>`,
    },
    {
      title: "Technologies",
      link: "",
      data: `<div class="flex gap-10">
        <div class='w-1/2'>
        <div class="w-fit h-fit">
          <p class="text-transparent bg-clip-text bg-gradient-to-r from-[#f05225] to-[#eea820] font-extrabold">
          Design
          <hr class="h-[2px] w-full border-none bg-gradient-to-r from-[#BFBFBF] to-transparent" />
          </p>
          <p class="my-3">Figma, Adobe illustrator, Blender 3D.</p>
        </div>
        <div class="my-6">
          <p class="text-transparent bg-clip-text bg-gradient-to-r from-[#f05225] to-[#eea820] font-extrabold">
          Development
          <hr class="h-[2px] w-full border-none bg-gradient-to-r from-[#BFBFBF] to-transparent" />
          </p>
          <div class="mt-3">
          <p class="text-transparent bg-clip-text bg-gradient-to-r from-[#0DA1DA] to-[#5DB98E] font-extrabold">
            Front - End :
          </p>
          <p class="my-2">
            React Js ,React Native,HTML,CSS, Java Script, Flutter,
            Tailwind, Three.Js, GSAP.
          </p>
          </div>
          <div>
          <p class="text-transparent bg-clip-text bg-gradient-to-r from-[#0DA1DA] to-[#5DB98E] font-extrabold">
            Backend:
          </p>
          <p class="my-2">Python-Django, Node Js</p>
          </div>
        </div>
        <div class="">
          <p class="text-transparent bg-clip-text bg-gradient-to-r from-[#f05225] to-[#eea820] font-extrabold">
          Data Analysis
          <hr class="h-[2px] w-full border-none bg-gradient-to-r from-[#BFBFBF] to-transparent" />
          </p>
          <p class="my-3">Machine Learning</p>
          <p class="">Artificial Intelligence</p>
        </div>
        </div>
        <div class="1/2">
        <p class="text-transparent bg-clip-text bg-gradient-to-r from-[#f05225] to-[#eea820] font-extrabold">
          Testing
          <hr class="h-[2px] w-full border-none bg-gradient-to-r from-[#BFBFBF] to-transparent" />
        </p>
        <p class="my-3">Enterprise Software Development</p>
        <p class="my-3"><a href='web-development'>
        Web Application Development
        </a></p>
        <p class="">Mobile Applications Developments</p>
        </div>
      </div>`,
    },
    {
      title: "Sectors",
      link: "",
      data: `<ul class="list-disc w-[60%] mx-auto">
        <li class="">Banking</li>
        <li class=" my-8">Capital Markets</li>
        <li class=" my-8">Consumer Goods and Distribution</li>
        <li class=" my-8">Communications</li>
        <li class=" my-8">Media, and Information Services Education Energy,</li>
        <li class="">Resources, and Utilities Healthcare High Tech Insurance Life Sciences Manufacturing Public Services Retail Travel and Logistics</li>
      </ul>`,
    },
  ];

  const defineDropdownMenus = [
    {
      title: "Overview",
      link: "",
      data: `<div class="w-full mx-auto">
        <p class="text-[30px] font-bold">
        “We are focused on delivering long-term, sustainable benefits for our customers and the community at large.”
        </p>
        <p class="mt-5">
        “Our team of experts is driven by a shared commitment to excellence, putting our values into practice to achieve extraordinary results.”
        </p>
        </div>`,
    },
    {
      title: "About Us",
      link: "",
      data: `<div class="w-[90%] mx-auto">
        <p class="font-normal leading-[30px]">
        PruthaTek is a top web and mobile app development company
        founded with a vision to deliver the best to its
        clients.(Pruthatek is the best app development company that has
        a greater understanding of all app development modules and comes
        with much-needed expertise to deliver the best to its clients.)
        The company is named after the daughter of its CEO, Vishal
        Nayak. The company has a team of technical experts who
        specialise in Visual Communication Design UX/UI Designing, Web
        Development, Mobile Application Development, AI, ML Strategic
        Marketing. They analyse their clients' businesses and come up
        with innovative and creative strategies to help them achieve
        their goals.
        </p>
        <a href="/aboutus">
        <div
          class="bg-gradient-to-br from-[#F05225] to-[#EEA820] p-[2px] rounded-lg overflow-hidden w-fit my-5 cursor-pointer group"
        >
          <div class="w-full h-full p-2 px-4 rounded-lg flex items-center gap-2 bg-white dark:bg-[#101010] group-hover:bg-transparent" id="exploreMoreBtn">
          <p class="m-0 text-subtitle text-black dark:text-white">Explore More</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="currentColor"
            class="text-black dark:text-white"
            viewBox="0 0 16 16"
          >
            <path
            fillRule="evenodd"
            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
            />
          </svg>
          </div>
        </div>
        </a>
      </div>`,
    },
    {
      title: "Meet Our team",
      link: "",
      data: `<div class="w-[90%] mx-auto">
      <p class="font-normal leading-[30px]">
      Discover the dedicated individuals who have been instrumental in driving PruthaTek’s growth and success over the years, and continue to work tirelessly towards achieving the company's goals and objectives.
      </p>
      <a href="/team">
      <div
        class="bg-gradient-to-br from-[#F05225] to-[#EEA820] p-[2px] rounded-lg overflow-hidden w-fit my-5 cursor-pointer group"
      >
        <div class="w-full h-full p-2 px-4 rounded-lg flex items-center gap-2 bg-white dark:bg-[#101010] group-hover:bg-transparent" id="exploreMoreBtn">
        <p class="m-0 text-subtitle text-black dark:text-white">View More</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          fill="currentColor"
          class="text-black dark:text-white"
          viewBox="0 0 16 16"
        >
          <path
          fillRule="evenodd"
          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
          />
        </svg>
        </div>
      </div>
      </a>
    </div>`,
    },
    {
      title: "Case Studies",
      link: "",
      data: `<div class="flex gap-10">
        <div class='w-1/2'>
          <div class="w-fit h-fit">
          <p class="text-transparent bg-clip-text bg-gradient-to-r from-[#f05225] to-[#eea820] font-extrabold">
            Design
            <hr class="h-[2px] w-full border-none bg-gradient-to-r from-[#BFBFBF] to-transparent" />
          </p>
          <p class="my-3">Figma, Adobe illustrator, Blender 3D.</p>
          </div>
          <div class="my-6">
          <p class="text-transparent bg-clip-text bg-gradient-to-r from-[#f05225] to-[#eea820] font-extrabold">
            Development
            <hr class="h-[2px] w-full border-none bg-gradient-to-r from-[#BFBFBF] to-transparent" />
          </p>
          <div class="mt-3">
            <p class="text-transparent bg-clip-text bg-gradient-to-r from-[#0DA1DA] to-[#5DB98E] font-extrabold">
            Front - End :
            </p>
            <p class="my-2">
            React Js ,React Native,HTML,CSS, Java Script, Flutter,
            Tailwind, Three.Js, GSAP.
            </p>
          </div>
          <div>
            <p class="text-transparent bg-clip-text bg-gradient-to-r from-[#0DA1DA] to-[#5DB98E] font-extrabold">
            Backend:
            </p>
            <p class="my-2">Python-Django, Node Js</p>
          </div>
          </div>
          <div class="">
          <p class="text-transparent bg-clip-text bg-gradient-to-r from-[#f05225] to-[#eea820] font-extrabold">
            Data Analysis
            <hr class="h-[2px] w-full border-none bg-gradient-to-r from-[#BFBFBF] to-transparent" />
          </p>
          <p class="my-3">Machine Learning</p>
          <p class="">Artificial Intelligence</p>
          </div>
        </div>
        <div class="1/2">
          <p class="text-transparent bg-clip-text bg-gradient-to-r from-[#f05225] to-[#eea820] font-extrabold">
          Testing
          <hr class="h-[2px] w-full border-none bg-gradient-to-r from-[#BFBFBF] to-transparent" />
          </p>
          <p class="my-3">Enterprise Software Development</p>
          <p class="my-3"><a href='web-development'>
		Web Application Development
		</a></p>
          <p class="">Mobile Applications Developments</p>
        </div>
        </div>`,
    },
  ];

  const careerDropdownMenus = [
    {
      title: "Let’s Join With we",
      link: "",
      data: `<div class="w-full mx-auto">
        <p class="text-[30px] font-bold"> “Join our team and be a part of a global movement that is driving positive change.” </p>
        <p class="mt-5"> “We are committed to attracting and developing top talent from diverse backgrounds, because we believe that exceptional work is driven by exceptional people.” </p>
        <a href="/">
          <div class="bg-gradient-to-br from-[#F05225] to-[#EEA820] p-[2px] rounded-lg overflow-hidden w-fit my-5 cursor-pointer group">
            <div class="w-full h-full p-2 px-4 rounded-lg flex items-center gap-2 group-hover:bg-transparent" id="letsJoinBtn">
              <p class="m-0 text-subtitle">Let’s Join</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16"><path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/></svg>
            </div>
          </div>
        </a>
      </div>`,
    },
  ];

  return (
    <div
      className="!z-50 fixed w-full top-0 left-0"
      onMouseMove={() => {
        if (window.location.pathname === "/") {
          setIsHomePage(true);
        } else {
          setIsHomePage(false);
        }
      }}
    >
      {/* subCategoryDropdown */}
      <div
        id="subCategoryDropdown"
        className="absolute top-14 py-5 w-full transition-all scale-y-0 opacity-0 duration-300 origin-top overflow-hidden z-50"
        onMouseLeave={() => {
          document
            .getElementById("subCategoryDropdown")
            .classList.add("scale-y-0");
          document
            .getElementById("subCategoryDropdown")
            .classList.add("opacity-0");
        }}
      >
        <div
          className={
            "w-full py-10 flex flex-row items-center justify-center gap-x-10 shadow-lg " +
            (isHomePage
              ? "bg-white text-black dark:bg-[#101010] dark:text-white"
              : "bg-white text-black dark:bg-[#101010] dark:text-white")
          }
        >
          <ul className="flex flex-col gap-y-6 min-w-[25%]">
            {roleDropdownMenus.map((item, index) => (
              <li
                className={
                  "text-[17px] font-[500] cursor-pointer border-b pb-4 transition-all duration-300 " +
                  (isHomePage
                    ? isRoleDropdownMenuSelected === item.title
                      ? " text-transparent bg-clip-text bg-gradient-to-r from-[#f05225] to-[#eea820] border-orange-500 tracking-widest "
                      : " dark:text-white dark:border-white text-black border-black "
                    : isRoleDropdownMenuSelected === item.title
                    ? " text-transparent bg-clip-text bg-gradient-to-r from-[#f05225] to-[#eea820] border-orange-500 tracking-widest "
                    : " dark:text-white dark:border-white text-black border-black ")
                }
                key={index}
                onMouseMove={() => {
                  setIsRoleDropdownMenuSelected(item.title);
                  document.getElementById("roleContentDiv").innerHTML =
                    item.data;
                }}
              >
                {item.title}
              </li>
            ))}
          </ul>
          <div className="max-w-[60%] min-w-[60%]" id="roleContentDiv">
            <div className="w-full mx-auto">
              <p className="text-[30px] font-bold">
                “Empowering your business through cutting edge technology is
                what we do best at Pruthatek.”
              </p>
              <p className="mt-5">
                Our company offers a range of services, and here is a simple
                description of what we provide.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* whatDefinesUsDropdown */}
      <div
        id="whatDefinesUsDropdown"
        className="absolute top-14 py-5 w-full transition-all scale-y-0 opacity-0 duration-300 origin-top overflow-hidden z-50"
        onMouseLeave={() => {
          document
            .getElementById("whatDefinesUsDropdown")
            .classList.add("scale-y-0");
          document
            .getElementById("whatDefinesUsDropdown")
            .classList.add("opacity-0");
        }}
      >
        <div
          className={
            "w-full py-10 flex flex-row items-center justify-center gap-x-10 shadow-lg " +
            (isHomePage
              ? "bg-white text-black dark:bg-[#101010] dark:text-white"
              : "bg-white text-black dark:bg-[#101010] dark:text-white")
          }
        >
          <ul className="flex flex-col gap-y-6 min-w-[20%]">
            {defineDropdownMenus.map((item, index) => (
              <li
                className={
                  "text-[17px] font-[500] cursor-pointer border-b pb-4 transition-all duration-300 " +
                  (isHomePage
                    ? isDefineDropdownMenuSelected === item.title
                      ? " text-transparent bg-clip-text bg-gradient-to-r from-[#f05225] to-[#eea820] border-orange-500 tracking-widest "
                      : " dark:text-white dark:border-white text-black border-black "
                    : isDefineDropdownMenuSelected === item.title
                    ? " text-transparent bg-clip-text bg-gradient-to-r from-[#f05225] to-[#eea820] border-orange-500 tracking-widest "
                    : " dark:text-white dark:border-white text-black border-black ")
                }
                key={index}
                onMouseMove={() => {
                  setIsDefineDropdownMenuSelected(item.title);
                  document.getElementById("defineUsContentDiv").innerHTML =
                    item.data;
                  if (window.location.pathname === "/") {
                    if (document.getElementById("exploreMoreBtn") != null) {
                      document
                        .getElementById("exploreMoreBtn")
                        .classList.add("bg-black");
                    }
                  } else {
                    if (document.getElementById("exploreMoreBtn") != null) {
                      document
                        .getElementById("exploreMoreBtn")
                        .classList.add("dark:bg-[#101010]", "bg-white");
                    }
                  }
                }}
              >
                {item.title}
              </li>
            ))}
          </ul>
          <div className="max-w-[60%] min-w-[60%]" id="defineUsContentDiv">
            <div className="w-full mx-auto">
              <p className="text-[30px] font-bold">
                “We are focused on delivering long-term, sustainable benefits
                for our customers and the community at large.”
              </p>
              <p className="mt-5">
                “Our team of experts is driven by a shared commitment to
                excellence, putting our values into practice to achieve
                extraordinary results.”
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* careersDropdown */}
      <div
        id="careersDropdown"
        className="absolute top-14 py-5 w-full transition-all scale-y-0 opacity-0 duration-300 origin-top overflow-hidden z-50"
        onMouseLeave={() => {
          document.getElementById("careersDropdown").classList.add("scale-y-0");
          document.getElementById("careersDropdown").classList.add("opacity-0");
        }}
      >
        <div
          className={
            "w-full py-10 flex flex-row items-center justify-center gap-x-10 shadow-lg " +
            (isHomePage
              ? "bg-white text-black dark:bg-[#101010] dark:text-white"
              : "bg-white text-black dark:bg-[#101010] dark:text-white")
          }
        >
          <ul className="flex flex-col gap-y-14 min-w-[20%]">
            {careerDropdownMenus.map((item, index) => (
              <li
                className={
                  "text-[19px] font-[500] cursor-pointer border-b pb-3 transition-all duration-300 " +
                  (isHomePage
                    ? IsCareerDropdownMenuSelected === item.title
                      ? " text-transparent bg-clip-text bg-gradient-to-r from-[#f05225] to-[#eea820] border-orange-500 tracking-widest "
                      : " dark:text-white dark:border-white text-black border-black "
                    : IsCareerDropdownMenuSelected === item.title
                    ? " text-transparent bg-clip-text bg-gradient-to-r from-[#f05225] to-[#eea820] border-orange-500 tracking-widest "
                    : " dark:text-white dark:border-white text-black border-black ")
                }
                key={index}
                onClick={() => {
                  setIsCareerDropdownMenuSelected(item.title);
                  document.getElementById("careerContentDiv").innerHTML =
                    item.data;
                  if (window.location.pathname === "/") {
                    if (document.getElementById("letsJoinBtn") != null) {
                      document
                        .getElementById("letsJoinBtn")
                        .classList.add("bg-black");
                    }
                  } else {
                    if (document.getElementById("letsJoinBtn") != null) {
                      document
                        .getElementById("letsJoinBtn")
                        .classList.add("dark:bg-[#101010]", "bg-white");
                    }
                  }
                }}
              >
                {item.title}
              </li>
            ))}
          </ul>
          <div className="max-w-[60%] min-w-[60%]" id="careerContentDiv">
            <div className="w-full mx-auto">
              <p className="text-[30px] font-bold">
                “Join our team and be a part of a global movement that is
                driving positive change.”
              </p>
              <p className="mt-5">
                “We are committed to attracting and developing top talent from
                diverse backgrounds, because we believe that exceptional work is
                driven by exceptional people.”
              </p>
              <a href="/">
                <div className="bg-gradient-to-br from-[#F05225] to-[#EEA820] p-[2px] rounded-lg overflow-hidden w-fit my-5 cursor-pointer group">
                  <div
                    className={
                      "w-full h-full p-2 px-4 rounded-lg flex items-center gap-2 group-hover:bg-transparent " +
                      (isHomePage
                        ? "bg-[#101010] text-white"
                        : "dark:bg-[rgb(0,0,0)] bg-white")
                    }
                  >
                    <p className="m-0 text-subtitle">Let’s Join</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      fill="currentColor"
                      className="bi bi-arrow-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* nav */}
      <nav
        className={
          "flex items-center justify-between lg:px-10 p-3 lg:py-5 " +
          (isHomePage
            ? "bg-white text-black dark:bg-[#101010] dark:text-white"
            : "bg-white text-black dark:bg-[#101010] dark:text-white")
        }
      >
        {/* left */}
        <div className="flex items-center gap-x-20">
          {/* Nav-Logo */}
          <div>
            <Link to="/" className="cursor-pointer">
              <img
                src="/img/Pruthateknew.png"
                alt=""
                className="lg:w-44 w-32"
              />
            </Link>
          </div>
          {/* Nav Links */}
          <div className="hidden lg:block">
            <ul
              className={
                "flex items-center w-full justify-between gap-x-5 " +
                (isHomePage ? "" : "")
              }
            >
              <li
                className="text-subtitle cursor-pointer relative after:content-[''] after:w-0 after:h-[2px] after:absolute after:-bottom-[5px] after:left-0 after:bg-gradient-to-r after:from-[#f05225] after:to-[#eea820] after:transition-all after:duration-300 hover:after:w-full"
                onMouseEnter={() => {
                  document
                    .getElementById("subCategoryDropdown")
                    .classList.remove("scale-y-0");
                  document
                    .getElementById("subCategoryDropdown")
                    .classList.remove("opacity-0");
                  if (
                    !document
                      .getElementById("whatDefinesUsDropdown")
                      .classList.contains("scale-y-0")
                  ) {
                    document
                      .getElementById("whatDefinesUsDropdown")
                      .classList.add("scale-y-0");
                    document
                      .getElementById("whatDefinesUsDropdown")
                      .classList.add("opacity-0");
                  }
                  if (
                    !document
                      .getElementById("careersDropdown")
                      .classList.contains("scale-y-0")
                  ) {
                    document
                      .getElementById("careersDropdown")
                      .classList.add("scale-y-0");
                    document
                      .getElementById("careersDropdown")
                      .classList.add("opacity-0");
                  }
                }}
              >
                What is our role?
                <div className="absolute top-6 w-full h-5"></div>
              </li>
              <li
                className="text-subtitle cursor-pointer relative after:content-[''] after:w-0 after:h-[2px] after:absolute after:-bottom-[5px] after:left-0 after:bg-gradient-to-r after:from-[#f05225] after:to-[#eea820] after:transition-all after:duration-300 hover:after:w-full"
                onMouseEnter={() => {
                  document
                    .getElementById("whatDefinesUsDropdown")
                    .classList.remove("scale-y-0");
                  document
                    .getElementById("whatDefinesUsDropdown")
                    .classList.remove("opacity-0");
                  if (
                    !document
                      .getElementById("subCategoryDropdown")
                      .classList.contains("scale-y-0")
                  ) {
                    document
                      .getElementById("subCategoryDropdown")
                      .classList.add("scale-y-0");
                    document
                      .getElementById("subCategoryDropdown")
                      .classList.add("opacity-0");
                  }
                  if (
                    !document
                      .getElementById("careersDropdown")
                      .classList.contains("scale-y-0")
                  ) {
                    document
                      .getElementById("careersDropdown")
                      .classList.add("scale-y-0");
                    document
                      .getElementById("careersDropdown")
                      .classList.add("opacity-0");
                  }
                }}
              >
                What defines us?
                <div className="absolute top-6 w-full h-5"></div>
              </li>
              {/* <Link
								to="/"
								className="text-subtitle cursor-pointer relative after:content-[''] after:w-0 after:h-[2px] after:absolute after:-bottom-[5px] after:left-0 after:bg-gradient-to-r after:from-[#f05225] after:to-[#eea820] after:transition-all after:duration-300 hover:after:w-full"
								onMouseEnter={() => {
									document.getElementById("careersDropdown").classList.remove("scale-y-0");
									document.getElementById("careersDropdown").classList.remove("opacity-0");
									if (!document.getElementById("whatDefinesUsDropdown").classList.contains("scale-y-0")) {
										document.getElementById("whatDefinesUsDropdown").classList.add("scale-y-0");
										document.getElementById("whatDefinesUsDropdown").classList.add("opacity-0");
									}
									if (!document.getElementById("subCategoryDropdown").classList.contains("scale-y-0")) {
										document.getElementById("subCategoryDropdown").classList.add("scale-y-0");
										document.getElementById("subCategoryDropdown").classList.add("opacity-0");
									}
								}}
							>
								Careers
								<div className="absolute top-6 w-full h-5"></div>
							</Link> */}
              <Link
                to="/blogs"
                className="text-subtitle cursor-pointer relative after:content-[''] after:w-0 after:h-[2px] after:absolute after:-bottom-[5px] after:left-0 after:bg-gradient-to-r after:from-[#f05225] after:to-[#eea820] after:transition-all after:duration-300 hover:after:w-full"
              >
                Blogs
              </Link>
              {/* <a
								href="#innovationInsights"
								className="text-subtitle cursor-pointer relative after:content-[''] after:w-0 after:h-[2px] after:absolute after:-bottom-[5px] after:left-0 after:bg-gradient-to-r after:from-[#f05225] after:to-[#eea820] after:transition-all after:duration-300 hover:after:w-full"
							>
								Case Studies
							</a> */}
            </ul>
          </div>
        </div>

        {/* right */}
        <div className="flex items-center lg:gap-x-5 gap-x-3">
          {/* Search Input */}
          {/* <div
            id="searchBoxNavbar"
            className={
              "p-[2px] text-lg rounded-lg hidden lg:block shadow-lg " +
              (props.theme === "light" ? "glassmorphism-3" : "glassmorphism")
            }
            // bg-gradient-to-r from-[#0038ff] via-[#3a86ff] to-[#6dccff]
          >
            <div className="dark:bg-black bg-white lg:bg-transparent dark:lg:bg-transparent rounded-md px-1 lg:px-3 py-1 flex items-center justify-center gap-x-5">
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent rounded-lg pl-2 pr-10 py-1 w-full outline-none"
                value={inputValue}
                onChange={onChange}
              />
              <div className="hidden lg:block cursor-pointer">
                <svg
                  className="lg:w-6 lg:h-6"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1255_35140)">
                    <path
                      d="M13.9789 2.49954C20.3153 2.49954 25.4578 7.64208 25.4578 13.9784C25.4578 20.3148 20.3153 25.4573 13.9789 25.4573C7.6426 25.4573 2.50006 20.3148 2.50006 13.9784C2.50006 7.64208 7.6426 2.49954 13.9789 2.49954ZM13.9789 22.9064C18.911 22.9064 22.9069 18.9105 22.9069 13.9784C22.9069 9.04505 18.911 5.0504 13.9789 5.0504C9.04557 5.0504 5.05092 9.04505 5.05092 13.9784C5.05092 18.9105 9.04557 22.9064 13.9789 22.9064ZM24.801 22.997L28.4092 26.6039L26.6044 28.4086L22.9975 24.8004L24.801 22.997Z"
                      fill={
                        isHomePage
                          ? "gray"
                          : props.theme === "light"
                          ? "black"
                          : "white"
                      }
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1255_35140">
                      <rect
                        width="30"
                        height="30"
                        fill={
                          isHomePage
                            ? "white"
                            : props.theme === "light"
                            ? "black"
                            : "white"
                        }
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <CgClose
                className="absolute right-3 top-2 cursor-pointer block lg:hidden"
                size={25}
                color={props.theme === "light" ? "black" : "white"}
                // color="white"
                onClick={() => {
                  document
                    .getElementById("searchBoxNavbar")
                    .setAttribute("class", "hidden");
                }}
              />
            </div>
          </div> */}
          {/* Search Icon */}
          {/* <div
            className="cursor-pointer block lg:hidden"
            onClick={() => {
              document
                .getElementById("searchBoxNavbar")
                .setAttribute(
                  "class",
                  "block bg-gradient-to-r from-[#0038ff] via-[#3a86ff] to-[#6dccff] p-[2px] rounded-lg absolute top-16 lg:top-[1px] lg:right-[23.5%] w-[90%] right-5 lg:w-[15%]"
                );
            }}
          >
            <svg
              className="w-6 h-6 lg:w-7 lg:h-7"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1255_35140)">
                <path
                  d="M13.9789 2.49954C20.3153 2.49954 25.4578 7.64208 25.4578 13.9784C25.4578 20.3148 20.3153 25.4573 13.9789 25.4573C7.6426 25.4573 2.50006 20.3148 2.50006 13.9784C2.50006 7.64208 7.6426 2.49954 13.9789 2.49954ZM13.9789 22.9064C18.911 22.9064 22.9069 18.9105 22.9069 13.9784C22.9069 9.04505 18.911 5.0504 13.9789 5.0504C9.04557 5.0504 5.05092 9.04505 5.05092 13.9784C5.05092 18.9105 9.04557 22.9064 13.9789 22.9064ZM24.801 22.997L28.4092 26.6039L26.6044 28.4086L22.9975 24.8004L24.801 22.997Z"
                  fill={
                    isHomePage
                      ? "gray"
                      : props.theme === "light"
                      ? "black"
                      : "white"
                  }
                />
              </g>
              <defs>
                <clipPath id="clip0_1255_35140">
                  <rect
                    width="30"
                    height="30"
                    fill={
                      isHomePage
                        ? "white"
                        : props.theme === "light"
                        ? "black"
                        : "white"
                    }
                  />
                </clipPath>
              </defs>
            </svg>
          </div> */}

          {/* Theme */}
          <div
            className="cursor-pointer flex items-center justify-center"
            onClick={props.handleThemeSwitch}
          >
            {props.theme === "light" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill={
                  isHomePage
                    ? "gray"
                    : props.theme === "light"
                    ? "black"
                    : "white"
                }
                className="w-5 h-5 lg:w-5 lg:h-5"
                viewBox="0 0 16 16"
              >
                <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill={
                  isHomePage
                    ? "white"
                    : props.theme === "light"
                    ? "black"
                    : "white"
                }
                className="w-6 h-6 lg:w-6 lg:h-6"
                viewBox="0 0 16 16"
              >
                <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
              </svg>
            )}
          </div>

          {/* Language Icon */}
          <div>
            <svg
              className="w-6 h-6 lg:w-7 lg:h-7"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1255_35192)">
                <path
                  d="M23.125 12.5L28.625 26.25H25.9313L24.43 22.5H19.3175L17.8188 26.25H15.1262L20.625 12.5H23.125ZM12.5 2.5V5H20V7.5H17.54C16.5758 10.4026 15.0368 13.0813 13.015 15.3762C13.9166 16.1808 14.8946 16.8954 15.935 17.51L14.9963 19.8575C13.6531 19.0957 12.397 18.19 11.25 17.1562C9.01698 19.1772 6.37255 20.6902 3.49875 21.5913L2.82875 19.18C5.29104 18.3949 7.56003 17.0992 9.4875 15.3775C8.06086 13.7624 6.87258 11.9516 5.95875 10H8.75875C9.45544 11.2861 10.2908 12.492 11.25 13.5962C12.8126 11.7951 14.0441 9.73163 14.8875 7.50125L2.5 7.5V5H10V2.5H12.5ZM21.875 16.1063L20.3162 20H23.4313L21.875 16.1063Z"
                  fill={
                    isHomePage
                      ? "gray"
                      : props.theme === "light"
                      ? "black"
                      : "white"
                  }
                />
              </g>
              <defs>
                <clipPath id="clip0_1255_35192">
                  <rect
                    width="30"
                    height="30"
                    fill={
                      isHomePage
                        ? "gray"
                        : props.theme === "light"
                        ? "black"
                        : "white"
                    }
                  />
                </clipPath>
              </defs>
            </svg>
          </div>

          {/* Contact */}
          <Link
            to="/contact"
            className="cursor-pointer text-white lg:flex flex-row items-center justify-between gap-x-4 bg-gradient-to-r from-[#F05225] to-[#EEA820] rounded-lg py-1.5 px-3 drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] hidden"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.0001 4C20.657 4 22.0001 5.34315 22.0001 7V17C22.0001 18.6569 20.657 20 19.0001 20H5.00012C3.34327 20 2.00012 18.6569 2.00012 17V7C2.00012 5.34315 3.34327 4 5.00012 4H19.0001ZM20.0001 7.328L12.6586 13.7526C12.313 14.055 11.8112 14.0802 11.4395 13.8282L11.3416 13.7526L4.00012 7.329V17C4.00012 17.5523 4.44784 18 5.00012 18H19.0001C19.5524 18 20.0001 17.5523 20.0001 17V7.328ZM18.4801 6H5.51812L12.0001 11.6712L18.4801 6Z"
                fill="white"
              />
            </svg>
            <p className="text-subtitle">Get In Touch</p>
          </Link>

          {/* Hamburger Menu */}
          <div
            className="block lg:hidden cursor-pointer"
            onClick={() => {
              document
                .getElementById("mobileNavbarOverlay")
                .classList.remove("left-full");
              document
                .getElementById("mobileNavbarOverlay")
                .classList.add("left-0");
              document.body.style.overflow = "hidden";
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill={
                isHomePage
                  ? "gray"
                  : props.theme === "light"
                  ? "black"
                  : "white"
              }
              className="w-7 h-7"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
