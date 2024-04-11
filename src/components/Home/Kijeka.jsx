import React from "react";

const Kijeka = () => {
  window.addEventListener("scroll", () => {
    let projectTitles = document.getElementsByClassName("projectTitles");
    for (let i = 0; i < projectTitles.length; i++) {
      var rect = projectTitles[i].getBoundingClientRect();
      let project = projectTitles[i].getAttribute("data-project");
      if (rect.top < 380 && rect.top > 0) {
        console.log(project, rect.top);
        let images = document.getElementsByClassName("projectImage");
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
          .getElementById(project + "Image")
          .classList.remove("opacity-0");
        if (
          !document
            .getElementById(project + "Image")
            .classList.contains("opacity-100")
        ) {
          document
            .getElementById(project + "Image")
            .classList.add("opacity-100");
        }
        if (
          !document
            .getElementById(project + "Image")
            .classList.contains("translate-y-0")
        ) {
          document
            .getElementById(project + "Image")
            .classList.add("translate-y-0");
        }
        document
          .getElementById(project + "Image")
          .classList.remove("translate-y-32");
      }
    }
  });
  return (
    <div
      className="flex flex-col lg:flex-row items-start justify-between"
      data-aos="fade-up"
      data-aos-duration="600"
      data-aos-delay="0"
      data-aos-easing="ease-in-out"
      data-aos-once="false"
      data-aos-anchor-placement="top-center"
    >
      <div className="bg-gradient-to-br sticky top-[30%] hidden lg:block from-[#0038ff] to-[#D6D6D600] rounded-3xl h-96 md:w-[60%] lg:w-[35%] w-full p-[3px] drop-shadow-[0_4px_14px_rgba(0,0,0,0.25)]">
        {/* image */}
        <div className="dark:bg-[#101010] rounded-[23px] h-full bg-white overflow-hidden relative">
          <img
            id="kijekaImage"
            src="/img/kijeka_product.png"
            className="projectImage absolute top-0 left-10 w-full h-full object-contain transition-all duration-700 translate-y-0 opacity-100"
            alt=""
          />
          <img
            id="sageImage"
            src="/img/sage.png"
            className="projectImage absolute top-0 left-16 w-auto h-full object-contain transition-all duration-700 translate-y-32 opacity-0"
            alt=""
          />
          <img
            id="sage2Image"
            src="/img/samyati.png"
            className="projectImage absolute top-0 left-10 w-full h-full object-contain transition-all duration-700 translate-y-32 opacity-0"
            alt=""
          />
        </div>
      </div>
      {/* content */}
      <div className="flex flex-col lg:gap-y-4 lg:w-[50%] mt-0 lg:mt-0 gap-y-3">
        {/* kijeka */}
        <p
          data-project="kijeka"
          className="projectTitles uppercase text-title lg:text-[20px] dark:text-[#CFCFCF] tracking-[0.295em] font-[300] lg:mt-10"
        >
          Kijeka
        </p>
        <p className="text-gradient-3 text-title lg:text-[40px]">
          E-Commerce Platform
        </p>
        <p className="text-subtitle lg:text-[18px] capitalize font-[300] text-justify lg:w-[80%]">
          We at Kijeka are committed to providing you with the best possible
          online shopping experience. We offer a modern design, an easy-to-use
          shopping cart, dynamic product data, and more.(Experience our
          commitment to providing the best online shopping experience for
          material handling equipment.)
        </p>
        <div className="lg:mt-20"></div>
        {/* sage */}
        <p
          data-project="sage"
          className="projectTitles uppercase text-title lg:text-[20px] dark:text-[#CFCFCF] tracking-[0.295em] font-[300]"
        >
          Sage
        </p>
        <p className="text-gradient text-title lg:text-[40px]">Music App</p>
        <p className="text-subtitle lg:text-[18px] capitalize font-[300] text-justify lg:w-[80%]">
          the ultimate music app for all your needs! With our cross-platform
          capabilities, you can enjoy with your partner with favourite tunes
          anywhere. Organise your songs with ease and create the perfect
          playlists. Plus, our account collect feature lets you share music with
          friends and family. And with gift vouchers available, Sage is the
          perfect present for any music lover.
        </p>
        <div className="lg:mt-20"></div>
        {/* Samyati */}
        <p
          data-project="sage2"
          className="projectTitles uppercase text-title lg:text-[20px] dark:text-[#CFCFCF] tracking-[0.295em] font-[300]"
        >
          Samyati
        </p>
        <p className="text-gradient-2 text-title lg:text-[40px]">Fitness App</p>
        <p className="text-subtitle lg:text-[18px] capitalize font-[300] text-justify lg:w-[80%] lg:mb-20">
          Track your health progress with Samyati. Our app counts your workouts
          and steps, giving you valuable insight into your fitness journey. With
          a one-time login system, your account is valid across all devices.
          Start your wellness journey with Samyati.
        </p>
      </div>
    </div>
  );
};

export default Kijeka;
