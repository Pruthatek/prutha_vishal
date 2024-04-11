import React from "react";
// import GrothCard from "./GrothCard";

// const data = [
// 	{
// 		no: 1,
// 		title: "Method Management",
// 		content: "At PruthaTek, we have a standardized and reliable methodology for efficient project management. We combine our technical expertise with proven project management methods to deliver exceptional results and build long-term relationships with our clients.",
// 		img: "/img/imgCard1.svg",
// 		bg: "/img/cardBg1.svg",
// 		linearGradient: "bg-gradient-to-r from-[#FF63F9] via-[#E41EAD] to-[#FF008D]",
// 	},
// 	{
// 		no: 2,
// 		title: "Quality Management",
// 		content: "At PruthaTek, we prioritize quality in all aspects of our work. We ensure the safety and security of our web and mobile solutions by rigorously testing and validating our products. Our focus on quality extends to usability, performance, and security, so that our clients can trust in the reliability of our solutions.",
// 		img: "/img/imgCard2.svg",
// 		bg: "/img/cardBg2.svg",
// 		linearGradient: "bg-gradient-to-r from-[#0DA1DA] to-[#5DB98E]",
// 	},
// 	{
// 		no: 3,
// 		title: "Business Continuity",
// 		content: "At PruthaTek, we are committed to helping your business grow and succeed with our reliable IT solutions. Our team of experts works closely with you to understand your unique business needs and develop customized strategies to achieve your goals. Trust us to be your partner in success.",
// 		img: "/img/imgCard3.svg",
// 		bg: "/img/cardBg3.svg",
// 		linearGradient: "bg-gradient-to-r from-[#FF63F9] via-[#E41EAD] to-[#FF008D]",
// 	},
// 	{
// 		no: 4,
// 		title: "Engagement Models",
// 		content: "Choose the perfect engagement model for your business needs with PruthaTek. Our tailored and flexible engagement models ensure that we align with your goals and requirements to deliver optimal results.",
// 		img: "/img/imgCard4.svg",
// 		bg: "/img/cardBg4.svg",
// 		linearGradient: "bg-gradient-to-r from-[#D400A5] via-[#1F7ECB] to-[#2ED6E3]",
// 	},
// ];

const growthData = [
  {
    path:"/",
    title: "Method Management",
    content:
      "At PruthaTek, we have a standardized and reliable methodology for efficient project management. We combine our technical expertise with proven project management methods to deliver exceptional results and build long-term relationships with our clients.",
    linearGradient:
      "bg-gradient-to-r from-[#FF63F9] via-[#E41EAD] to-[#FF008D]",
  },
  {
    path:"/",
    title: "Quality Management",
    content:
      "At PruthaTek, we prioritize quality in all aspects of our work. We ensure the safety and security of our web and mobile solutions by rigorously testing and validating our products. Our focus on quality extends to usability, performance, and security, so that our clients can trust in the reliability of our solutions.",
    linearGradient: "bg-gradient-to-r from-[#0DA1DA] to-[#5DB98E]",
  },
  {
    path:"/",
    title: "Business Continuity",
    content:
      "At PruthaTek, we are committed to helping your business grow and succeed with our reliable IT solutions. Our team of experts works closely with you to understand your unique business needs and develop customized strategies to achieve your goals. Trust us to be your partner in success.",
    linearGradient:
      "bg-gradient-to-r from-[#FF63F9] via-[#E41EAD] to-[#FF008D]",
  },
  {
    path:"/engagement",
    title: "Engagement Models",
    content:
      "Choose the perfect engagement model for your business needs with PruthaTek. Our tailored and flexible engagement models ensure that we align with your goals and requirements to deliver optimal results.",
    linearGradient:
      "bg-gradient-to-r from-[#D400A5] via-[#1F7ECB] to-[#2ED6E3]",
  },
];

const growthImages = [
  ["/img/imgCard1.svg", "/img/cardBg1.svg", "my-32"],
  ["/img/imgCard2.svg", "/img/cardBg2.svg", "my-10"],
  ["/img/imgCard3.svg", "/img/cardBg3.svg", "my-20"],
  ["/img/imgCard4.svg", "/img/cardBg4.svg", "my-28"],
];

const GrowthJourney = ({ theme }) => {
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
    <>
      <div
        className={
          "flex flex-col justify-center items-center gap-4 lg:py-20 py-10 px-10 lg:px-20"
        }
      >
        <p className="text-tittle lg:text-[22px] font-bold text-center text-[#B3B3B3] dark:text-[#ffffff]">
          {" "}
          The Growth Journey: Navigating the Path from Idea to Success{" "}
        </p>
        <p className="text-subtitle font-light text-center text-[#B3B3B3] dark:text-[#ffffff]">
          {" "}
          From Method to Engagement: Comprehensive Solutions for BusinessSuccess{" "}
        </p>
      </div>
      <div className="flex flex-col px-10 lg:px-20 sm:gap-[250px] gap-20 lg:py-20 py-6">
        <div className="flex w-full sm:flex-row flex-col justify-between items-start sm:gap-0 gap-20">
          <div className="flex flex-col lg:w-[50%]">
            {growthData.map((item, index) => (
              <div
                key={index}
                className="overflow-x-hidden lg:my-20 my-5 first-of-type:mt-0 last-of-type:mb-0"
                data-aos={window.innerWidth > 640 ? "fade-left" : "fade-up"}
                data-aos-duration="600"
                data-aos-delay="0"
                data-aos-easing="ease-in-out"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
              >
                <div className="flex items-center gap-6 mb-4">
                  <div
                    className={`box-border rounded-[50%] flex items-center justify-center text-center ${item.linearGradient} p-[1px]`}
                  >
                    <span className="box-border font-medium text-subtitle sm:text-[35px] sm:w-[62px] sm:min-w-[62px] sm:h-[62px] sm:min-h-[62px] w-[30px] h-[30px] flex justify-center items-center dark:bg-[#101010] bg-white rounded-[50%] dark:text-white">
                      {index + 1}
                    </span>
                  </div>
                  <p
                    data-growth={item.title}
                    className={`growthTitles font-medium text-title lg:text-[35px] text-transparent bg-clip-text ${item.linearGradient} ${item.path} `}
                  >
                    {item.title}
                  </p>
                </div>
                <div className="flex flex-col gap-6 items-start">
                  <p className="text-justify capitalize text-lg leading-8">
                    {item.content}
                  </p>
                  {/* <button
                    className={`w-max border-[1px] border-black dark:border-white dark:text-white text-black py-2.5 px-5 flex items-center justify-center gap-x-10 rounded-lg cursor-pointer transition duration-300 ease-in-out origin-right hover:border-transparent hover:${item.linearGradient} hover:text-white`}
                  >
                    <span className="font-medium">Explore</span>
                    <span>
                      <svg
                        width="18"
                        height="15"
                        viewBox="0 0 18 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10.2197 14.0303C10.5126 14.3232 10.9874 14.3232 11.2803 14.0303L17.5303 7.78033C17.8232 7.48744 17.8232 7.01256 17.5303 6.71967L11.2803 0.46967C10.9874 0.176777 10.5126 0.176777 10.2197 0.46967C9.92678 0.762563 9.92678 1.23744 10.2197 1.53033L15.1893 6.5L0.75 6.5C0.335786 6.5 0 6.83579 0 7.25C0 7.66421 0.335786 8 0.75 8L15.1893 8L10.2197 12.9697C9.92678 13.2626 9.92678 13.7374 10.2197 14.0303Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  </button> */}
                </div>
              </div>
            ))}
          </div>
          <div className="sticky top-[20%] hidden lg:block h-96 w-[35%]">
            <div className="h-full relative">
              {growthImages.map((item, index) => (
                <div
                  id={"growthImage" + index}
                  key={index}
                  className={
                    "growthImage absolute top-0 left-0 sm:flex hidden justify-center items-center first-of-type:mt-0 last-of-type:mb-0 translate-y-0 opacity-100 transition-all duration-700 " +
                    item[2]
                  }
                >
                  <div
                    className={
                      "absolute top-[-200px] right-[-125px] w-[175%] h-[175%] hidden lg:block " +
                      (theme === "light" ? "lg:hidden" : "block")
                    }
                  >
                    <img src={item[1]} alt="." className="" />
                  </div>
                  <img
                    className="z-1 sm:w-[80%] w-[100%]"
                    src={item[0]}
                    alt="."
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GrowthJourney;
