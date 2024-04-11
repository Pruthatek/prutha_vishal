import React from "react";
import Model from "./Model";

const Engagement = (props) => {
  return (
<div className="md:pt-32 pt-28 px-10 md:px-10 lg:px-20">
    <div className="md:flex md:flex-row md:gap-x-10 lg:gap-x-20  justify-center items-center  ">
        <div className="flex flex-col justify-center ">
            <h1 className="md:text-[45px] text-[40px] lg:text-[60px] not-italic text-transparent    light:shadow-[10px_7px_7px_rgba(178, 178, 178, 0.50)] bg-clip-text bg-gradient-to-r from-[#D400A5] via-[#2682C3] to-[#2ED6E3] font-bold leading-[109%] uppercase dark:shadow-[#101010] textshadow ">ENGAGEMENT</h1>
            <h1 className="text-[#515151] md:text-[25px] text-[20px] lg:text-[35px] not-italic font-semibold leading-[140%] tracking-[29.925px] uppercase textshadow2 ">MODELS</h1>
            <p className="text-[#101010] dark:text-white py-2 text-justify md:text-[14px] lg:text-[18px] not-italic font-medium leading-[170%] capitalize">We offer a full spectrum of engagement options to suit your business needs, to help you enjoy the benefits of external expertise, cost management and risk mitigation.</p>
            <p className="text-[#101010] dark:text-white py-2 text-justify md:text-[14px] lg:text-[18px] not-italic font-medium leading-[170%] capitalize">Your business solution should be safe and secure with our expertise in develpoment. at Pruthatek, we deliver secure and quality IT sevices, protecting your critical data with the required technology. we will signing the NDA for all the source code's rights, which will be your after completing the projects.</p>
        </div>
        
        <div className="lg:w-[150%] md:w-[250%] w-[100%] md:py-0 py-5 ">
            <img src="/img/robotp1.png" className="   " alt=""/>
        </div>
    </div>
    <div className="flex flex-row justify-center items-center pt-5 md:pt-12 ">
        <h1 className="text-[16px] md:text-[25px] not-italic font-semibold leading-[169.3%] uppercase bg-clip-text textbg1 ">OUR BUSINESS</h1>
        <h1 className="text-[color:var(--white-theme-text-heading-color,#B3B3B3)] text-[16px] md:text-[25px] not-italic font-semibold leading-[169.3%] uppercase px-1.5">CONTINUITY</h1>
    </div>

    {/* DESKTOP DEVICE */}

    <div className="lg:flex md:hidden hidden flex-col justify-center py-7 md:py-20 items-center">
        <div className=" flex flex-col md:flex-row max-sm:space-y-7 md:space-x-7 xl:space-x-28 px-10 md:pl-8 xl:pl-10 ">
        <div class=" ">
          <div className="ui-cardbusiness md:w-[230px] xl:w-[300px] w-[250px] relative overflow-hidden transition-all rounded-full duration-[0.3s] ease-[ease-out] light:shadow-[0px_4px_21px_0px_rgba(178,178,178,0.50)] ">
            <img
              className="imagebusiness object-cover   w-[100%] "
              src="/img/Engagementimg2.png"
              alt=""
            />
            <div className="descriptionbusiness">
              <h3 className="textcirclebusiness text-[15px] md:text-[15px] xl:text-[20px] px-7 md:px-3 xl:px-7 ">
              Project-Based Engagement
                            </h3>
              <p className="textcirclesmbusiness   text-[10px] md:text-[10px] xl:text-[13px] px-4 md:px-1 lg:px-7 capitalize leading-5 md:leading-4 xl:leading-5">
              We recommend project-based engagement model for those who have a one-off/pilot project with well-defined requirements and deliverables. Employing this engagement model you'll have your project executed by a full-fledged team at Pruthatek.              </p>
            </div>
          </div>
          <h3 className="font-semibold  text-black dark:text-white text-[15px] md:text-[13px] xl:text-[20px] pt-5  text-center">
          Project-Based Engagement
              </h3>
          </div>
          <div className=" ">
          <div className="ui-cardbusiness md:w-[230px] xl:w-[300px] w-[250px] relative overflow-hidden transition-all rounded-full duration-[0.3s] ease-[ease-out] light:shadow-[0px_4px_21px_0px_rgba(178,178,178,0.50)] ">
            <img
              className="imagebusiness object-cover   w-[100%] "
              src="/img/Engagementimg3.png"
              alt=""
            />
            <div className="descriptionbusiness">
              <h3 className="textcirclebusiness text-[15px] md:text-[13px] xl:text-[20px] px-7 md:px-3 xl:px-7">
              Dedicated Development Team
                            </h3>
              <p className="textcirclesmbusiness  text-[10px] md:text-[8px] xl:text-[13px] px-3 md:px-5 lg:px-7 capitalize leading-5 md:leading-4 xl:leading-5 ">
              We offer dedicated team services to extend your in-house development resources. We complete dedicated teams with the required amount of team members, project managers, necessary equipment and infrastructure based on your requirements.              </p>
            </div>
          </div>
          <h3 className="font-semibold  text-black dark:text-white text-[15px] md:text-[13px] xl:text-[20px] pt-5  text-center">
          Dedicated Development Team
              </h3>
          </div>
          <div className=" ">
          <div className="ui-cardbusiness md:w-[230px] xl:w-[300px] w-[250px] relative overflow-hidden transition-all rounded-full duration-[0.3s] ease-[ease-out] light:shadow-[0px_4px_21px_0px_rgba(178,178,178,0.50)] ">
            <img
              className="imagebusiness object-cover   w-[100%] "
              src="/img/Engagementimg4.png"
              alt=""
            />
            <div className="descriptionbusiness">
              <h3 className="textcirclebusiness text-[15px] md:text-[15px] xl:text-[20px] px-7 pt-1 lg:pt-5 md:px-3 xl:px-7 ">
              SLA-Based Approach
                            </h3>
              <p className="textcirclesmbusiness text-[10px]  md:text-[10px] xl:text-[13px] px-4 md:px-2 lg:px-6 capitalize leading-5 md:leading-4 xl:leading-5">
              The SLA-driven model is recommended for long-term projects with clearly agreed constraints and requirements. As per terms and conditions decided between you and Iflexion, we take tull responsibility for the complete service management as well as the agreed SLAS.              </p>
            </div>
          </div>
          <h3 className="font-semibold  text-black dark:text-white text-[15px] md:text-[13px] xl:text-[20px] pt-5  text-center">
          SLA-Based Approach
              </h3>
          </div>
        </div>
      </div>
    {/* DESKTOP DEVICE END */}

      {/* SMALL DEVICE */}

      <div className="lg:hidden flex flex-col justify-center py-7 md:py-20 items-center">
        <div className=" flex flex-col md:flex-row max-sm:space-y-7 md:space-x-7 xl:space-x-28 px-10 md:pl-8 xl:pl-10 ">
        <div class=" ">
          <div className="ui-cardbusinesssm md:w-[230px] xl:w-[300px] w-[250px] relative overflow-hidden transition-all rounded-full duration-[0.3s] ease-[ease-out] light:shadow-[0px_4px_21px_0px_rgba(178,178,178,0.50)] ">
            <img
              className="imagebusinesssm object-cover   w-[100%] "
              src="/img/Engagementimg2.png"
              alt=""
            />
            <div className="descriptionbusinesssm">
              <h3 className="textcirclebusinesssm text-[15px] md:text-[15px] xl:text-[20px] px-7 md:px-3 xl:px-7 ">
              Project-Based Engagement
                            </h3>
              <p className="textcirclesmbusinesssm   text-[10px] md:text-[10px] xl:text-[13px] px-4 md:px-1 lg:px-7 capitalize leading-5 md:leading-4 xl:leading-5">
              We recommend project-based engagement model for those who have a one-off/pilot project with well-defined requirements and deliverables. Employing this engagement model you'll have your project executed by a full-fledged team at Pruthatek.              </p>
            </div>
          </div>
          <h3 className="font-semibold  text-black dark:text-white text-[15px] md:text-[13px] xl:text-[20px] pt-5  text-center">
          Project-Based Engagement
              </h3>
          </div>
          <div className=" ">
          <div className="ui-cardbusinesssm md:w-[230px] xl:w-[300px] w-[250px] relative overflow-hidden transition-all rounded-full duration-[0.3s] ease-[ease-out] light:shadow-[0px_4px_21px_0px_rgba(178,178,178,0.50)] ">
            <img
              className="imagebusinesssm object-cover   w-[100%] "
              src="/img/Engagementimg3.png"
              alt=""
            />
            <div className="descriptionbusinesssm">
              <h3 className="textcirclebusinesssm text-[15px] md:text-[13px] xl:text-[20px] md:pt-5 px-7 md:px-3 xl:px-7">
              Dedicated Development Team
                            </h3>
              <p className="textcirclesmbusinesssm  text-[10px] md:text-[8px] xl:text-[13px] px-3 md:px-5 lg:px-7 capitalize leading-5 md:leading-4 xl:leading-5 ">
              We offer dedicated team services to extend your in-house development resources. We complete dedicated teams with the required amount of team members, project managers, necessary equipment and infrastructure based on your requirements.              </p>
            </div>
          </div>
          <h3 className="font-semibold  text-black dark:text-white text-[15px] md:text-[13px] xl:text-[20px] pt-5  text-center">
          Dedicated Development Team
              </h3>
          </div>
          <div className=" ">
          <div className="ui-cardbusinesssm md:w-[230px] xl:w-[300px] w-[250px] relative overflow-hidden transition-all rounded-full duration-[0.3s] ease-[ease-out] light:shadow-[0px_4px_21px_0px_rgba(178,178,178,0.50)] ">
            <img
              className="imagebusinesssm object-cover   w-[100%] "
              src="/img/Engagementimg4.png"
              alt=""
            />
            <div className="descriptionbusinesssm">
              <h3 className="textcirclebusinesssm text-[15px] md:text-[15px] xl:text-[20px] px-7 pt-1 lg:pt-5 md:px-3 xl:px-7 ">
              SLA-Based Approach
                            </h3>
              <p className="textcirclesmbusinesssm text-[10px]  md:text-[10px] xl:text-[13px] px-4 md:px-2 lg:px-6 capitalize leading-5 md:leading-4 xl:leading-5">
              The SLA-driven model is recommended for long-term projects with clearly agreed constraints and requirements. As per terms and conditions decided between you and Iflexion, we take tull responsibility for the complete service management as well as the agreed SLAS.              </p>
            </div>
          </div>
          <h3 className="font-semibold  text-black dark:text-white text-[15px] md:text-[13px] xl:text-[20px] pt-5  text-center">
          SLA-Based Approach
              </h3>
          </div>
        </div>
      </div>
      {/* SMALL DEVICE END */}
      <div className="flex  justify-center items-center ">
        <p className="text-[color:var(--white-theme-text-heading-color,#B3B3B3)]  md:px-6 text-center text-[14px] md:text-[16px] lg:text-[25px] not-italic font-semibold leading-[169.3%] uppercase">WE ARE CAPABLE TO SATISFY YOUR DEMANDS OF HIGHER FLEXIBILITY BY CUSTOMIZING ANY ENGAGEMENT MODEL</p>
    </div>
      <Model/>
</div>
    );
};

export default Engagement;

// shadow-[0px_20px_35px_0px_rgba(0,0,0,0.29)]