import React, { useState } from "react";
import { db } from "../../database/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

const FooterLinks = () => {
  const servicesData = [
    { title: "Digital Marketing", link: "/digitalmarketing" },
    { title: "Digital Strategy and transformation", link: "/underdevelopment" },
    { title: "UI/UX Design", link: "/ui-ux" },
    { title: "Graphics Design", link: "/underdevelopment" },
    { title: "Insight and Data", link: "/underdevelopment" },
    { title: "Smart Operations", link: "/underdevelopment" },
    { title: "Smart Products", link: "/underdevelopment" },
    { title: "Infrastructure Services", link: "/underdevelopment" },
    {
      title: "App Development Maintenance Services",
      link: "/underdevelopment",
    },
    { title: "Testing Services", link: "/underdevelopment" },
    { title: "Intelligent Automation", link: "/underdevelopment" },
    { title: "Ecommerce", link: "/underdevelopment" },
  ];
  const expertisData = [
    { title: "Web Application Developments", link: "/web-development" },
    { title: "Mobile Application Developments", link: "/underdevelopment" },
    { title: "Enterprise Software Developments", link: "/enterprise" },
    {
      title: "Cross Platform Software Developments",
      link: "/crossplatform",
    },
    { title: "Application Integration", link: "/underdevelopment" },
    { title: "QA And Testing", link: "/underdevelopment" },
    { title: "Dedicated Development Centers", link: "/underdevelopment" },
    { title: "Artificial Intelligence", link: "/underdevelopment" },
    { title: "Machine Learning", link: "/underdevelopment" },
    { title: "DevOps", link: "/underdevelopment" },
  ];
  const aboutUsData = [
    { title: "About", link: "/aboutus" },
    { title: "Blogs", link: "/blogs" },
    { title: "Clients", link: "/underdevelopment" },
    { title: "Portfolio", link: "/underdevelopment" },
    { title: "Career", link: "/underdevelopment" },
  ];

  const [mailSubscribe, setMailSubscribe] = useState("");

  function validate() {
    const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    if (mailSubscribe === "") {
      alert("Please enter your email");
      return false;
    } else if (!emailRegex.test(mailSubscribe)) {
      alert("Please enter valid email");
      return false;
    }

    return true;
  }

  const onSubscribe = (e) => {
    e.preventDefault();
    if (mailSubscribe !== "") {
      let gifContainer = document.getElementById("GIF");
      gifContainer.classList.remove("opacity-0");
      gifContainer.classList.remove("scale-0");
      gifContainer.classList.add("opacity-100");
      gifContainer.classList.add("scale-100");
      setTimeout(() => {
        gifContainer.classList.remove("opacity-100");
        gifContainer.classList.remove("scale-100");
        gifContainer.classList.add("opacity-0");
        gifContainer.classList.add("scale-0");
      }, 2000);
    }

    if (!validate()) {
      return;
    }

    addDoc(collection(db, "subscribe"), {
      mailSubscribe: mailSubscribe,
    })
      .then(() => {
        setMailSubscribe("");
      })
      .catch((err) => {
        console.log(err.messages);
      });
  };

  return (
    <div className="sm:px-0 px-0 py-10 grid xl:grid-cols-[auto_auto] grid-cols-1 md:gap-0 gap-6">
      <div className="sm:flex sm:justify-between flex-wrap gap-2.5">
        {/* SERVICES */}
        <div className="py-6 flex flex-col gap-6">
          <div>
            <span className="font-bold bg-gradient-to-r from-[#F05225] to-[#EEA820] text-transparent bg-clip-text">
              SERVICES
            </span>
          </div>
          {/* separator line */}
          <div className="w-full h-[1px] bg-gradient-to-r dark:from-white dark:to-[#fff0]"></div>
          <div className="p-2">
            <ul className="list-disc list-outside flex flex-col gap-4 pl-3">
              {servicesData.map((p, index) => {
                return (
                  <li
                    key={index}
                    className="text-[16px] font-medium sm:hover:opacity-70 duration-300"
                  >
                    <a href={p.link}>{p.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        {/* EXPERTISE */}
        <div className="py-6 flex flex-col gap-6">
          <div>
            <span className="font-bold bg-gradient-to-r from-[#F05225] to-[#EEA820] text-transparent bg-clip-text">
              EXPERTISE
            </span>
          </div>
          {/* separator line */}
          <div className="w-full h-[1px] bg-gradient-to-r from-white to-[#fff0]"></div>
          <div className="p-2">
            <ul className="list-disc list-outside flex flex-col gap-4 pl-3">
              {expertisData.map((p, index) => {
                return (
                  <li
                    key={index}
                    className="text-[16px] font-medium sm:hover:opacity-70 duration-300"
                  >
                    <a href={p.link}>{p.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        {/* ABOUT US */}
        <div className="py-6 flex flex-col gap-6 mx-auto">
          <div>
            <span className="font-bold bg-gradient-to-r from-[#F05225] to-[#EEA820] text-transparent bg-clip-text">
              ABOUT US
            </span>
          </div>
          {/* separator line */}
          <div className="min-w-[170px] h-[1px] bg-gradient-to-r from-white to-[#fff0]"></div>
          <div className="p-2">
            <ul className="list-disc list-outside flex flex-col gap-4 pl-3">
              {aboutUsData.map((p, index) => {
                return (
                  <li
                    key={index}
                    className="text-[16px] font-medium sm:hover:opacity-70 duration-300"
                  >
                    <a href={p.link}>{p.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      {/* CONNECT */}
      <div className="flex flex-col gap-10 lg:mt-5">
        {/* container 1 heading*/}
        <div className="flex flex-col gap-8">
          {/* row 1 heading*/}
          <div className="flex items-center gap-1">
            <div>
              <span className="font-light text-description">
                Let’s Connect with
              </span>
            </div>
            <div className="sm:w-auto w-[60%]">
              <img
                className="lg:w-40 w-32"
                src="/img/Pruthateknew.png"
                alt="Pruthatek"
              />
            </div>
          </div>
          {/* row 2 input */}
          <form onSubmit={onSubscribe}>
            <div className="bg-gradient-to-r from-[#505050CC] to-transparent p-[1px] rounded-lg w-[85%] hover:w-[90%] hover:from-[#F05225] hover:to-transparent duration-300">
              <div className="flex items-center justify-between rounded-lg bg-white dark:bg-[#101010]">
                <input
                  className="bg-transparent w-full p-3 pr-10 outline-none cursor-pointer"
                  type="text"
                  placeholder="Type Your Email here..."
                  onChange={(event) => {
                    setMailSubscribe(event.currentTarget.value);
                  }}
                  id="mailSubscribe"
                  name="mailSubscribe"
                  value={mailSubscribe}
                />
                {/* connect button */}
                <div className="relative">
                  <button
                    id="button_div"
                    className="rounded-md bg-gradient-to-r from-[#F05225] to-[#EEA820] py-1 px-2 text-white"
                  >
                    Connect
                  </button>
                  {/* submit animation */}
                  <div
                    className="bg-white dark:bg-white scale-0 opacity-0 top-0 left-0 absolute w-full h-full flex items-center transition-all duration-300 rounded-md z-40"
                    id="GIF"
                  >
                    <div
                      className="w-20 h-20 mx-auto object-contain bg-blend-screen overflow-visible rounded-lg"
                      style={{
                        backgroundImage: "url(/img/subscribe.gif)",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        {/* container 2 Follow on */}
        <div className="flex flex-col gap-5">
          {/* row 1 */}
          <div>
            <span className="font-medium text-[20px] bg-gradient-to-r from-[#D400A5] via-[#1F7ECB] to-[#2ED6E3] text-transparent bg-clip-text">
              Follow Us
            </span>
          </div>
          {/* row 2 */}
          <div className="flex items-center justify-center lg:justify-start gap-5">
            <div className="">
              <a href="https://www.facebook.com/pruthatek" target="_blank">
                <img
                  src="/img/facebook.svg"
                  alt="Facebook"
                  className="w-[80%] hover:rotate-180 duration-300"
                />
              </a>
            </div>
            <div>
              <a
                href="https://api.whatsapp.com/send?phone=919909918930&text=Hey%2C%20Glad%20to%20hear%20from%20you.%20%0ACan%20you%20share%20the%20following%20details%0A-Your%20Full%20Name%0A-Contact%20number%0A-Email%20ID%0A-Your%20Requirement%0A-File%0AOur%20team%20will%20get%20in%20touch%20with%20you."
                target="_blank"
                className="cursor-pointer"
              >
                <img
                  src="/img/whatsapp.svg"
                  alt="wp"
                  className="w-[45px] hover:rotate-180 duration-300"
                />
              </a>
            </div>
            {/* <div className="hover:rotate-180 duration-300">
							<a href="/" target="_blank">
								<img src="/img/insta.svg" alt="Instagram" />
							</a>
						</div> */}
            <div className="">
              <a
                href="https://www.linkedin.com/company/pruthatek/"
                target="_blank"
              >
                <img
                  src="/img/linkedin.svg"
                  alt="Linkedin"
                  className="w-[80%] hover:rotate-180 duration-300"
                />
              </a>
            </div>
            <div className="">
              <a href="https://twitter.com/pruthatek" target="_blank">
                <img
                  src="/img/twitter.svg"
                  alt="Twitter"
                  className="w-[80%] hover:rotate-180 duration-300"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;
