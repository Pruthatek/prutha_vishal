import React,{ useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { Autoplay, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
// import 'swiper/css/pagination';

// import './styles.css';

// import required modules
// import { Pagination } from 'swiper/modules';

const Key = () => {
  const [images, setImages] = useState("/img/squareimg.png");

  return (
    <div className="pt-4 px-10 md:px-20 ">
      <div className="xl:flex xl:flex-row  justify-center items-center mt-5">
        {/* Content */}
        {/* <div
					className="flex flex-col gap-y-3  "
				>
					{valueData.map((data, index) => {
						return (
							<div className="flex flex-row items-center gap-x-5" key={index}>
								<div className="tooltip-container w-[70%] flex flex-col gap-y-2">
									<h2
										className={
											"font-semibold  text-title xl:py-1 lg:text-[25px]  text-transparent bg-clip-text " +
											data.style
										}
									>
										{data.title}
									</h2>
									<p className="text-[15px] capitalize md:text-[16px] lg:pr-20 text-justify">
										{data.describe}
									</p>
									<div className="tooltip flex flex-row">
    <img src="./img/squareimg3.png" alt="Tooltip Image" className="tooltip-image  pl-80" />
  </div>
								</div>
								
							</div>
						);
					})}
				</div> */}

        {/* <div className="flex flex-col gap-y-3  ">
          <div className="flex flex-row items-center gap-x-5">
            <div className="tooltip-container  w-[70%] flex flex-col gap-y-2">
              <h2 className="bg-gradient-to-r from-[#0DA1DA] to-[#5DB98E]  font-semibold  text-title xl:py-1 lg:text-[25px]  text-transparent bg-clip-text ">
                Strong Project and Process Management
              </h2>
              <p className="text-[15px] capitalize md:text-[16px] lg:pr-20 text-justify">
                Our project managers act as a focal point for all your
                project-related needs. Project managers are involved in the
                entire project lifecycle to plan, organize, control and deploy
                key milestones, deliverables according to your goals. Plus all
                Pruthatek's projects are supervised by our CTO, who is
                responsible for processes audit and enforcement, as well as
                formeasurement of existing processes against established metrics
                and process improvements analysis and implementation.{" "}
              </p>
              <div className="tooltiphover flex flex-row">
                <img
                  src="./img/squareimg3.png"
                  alt="Tooltip Image"
                  className="tooltip-image  "
				  />
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center gap-x-5">
            <div className="tooltip-container w-[70%] flex flex-col gap-y-2">
              <h2 className="bg-gradient-to-r from-[#F05225] to-[#EEA820] font-semibold  text-title xl:py-1 lg:text-[25px]  text-transparent bg-clip-text ">
                In-Depth Requirements Analysis{" "}
              </h2>
              <p className="text-[15px] capitalize md:text-[16px] lg:pr-20 text-justify">
                Here at PruthaTek we pay special attention to the discovery
                phase to ensure that the final product fully meets your
                expectations. Pruthatek's Business Analysts define easier ways
                to attain what you need, while Project Managers identify the
                most suitable development methodology and cooperation model, as
                well as assemble the most effective project team, and the tech
                experts work on technical feasibility and select the most
                efficient technologies.{" "}
              </p>{" "}
              <div className="tooltiphover-2 flex flex-row">
                <img
                  src="./img/squareimg2.png"
                  alt="Tooltip Image"
                  className="tooltip-image rounded-[13px] "
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center gap-x-5">
            <div className="tooltip-container w-[70%] flex flex-col gap-y-2">
              <h2 className="bg-gradient-to-r from-[#EF32D9] to-[#3F5EFB] font-semibold  text-title xl:py-1 lg:text-[25px]  text-transparent bg-clip-text ">
                Thorough Quality
              </h2>
              <p className="text-[15px] capitalize md:text-[16px] lg:pr-20 text-justify">
                We have an independent QA department responsible for providing
                quality assurance throughout the entire Software Development
                Lifecycle of every project. Depending on the size of the latter,
                we allocate a testing team and define a QA timeframe, which
                allows us to optimize involvement and project costs. Though
                independent by virtue of their duties, our QA experts work in
                close cooperation with our development team.{" "}
              </p>
              <div className="tooltiphover-3 flex flex-row">
                <img
                  src="./img/squareimg.png"
                  alt="Tooltip Image"
                  className="tooltip-image  rounded-[13px]"
                />
              </div>
            </div>
          </div>
          </div> */}
        <div className="flex flex-row gap-y-3 items-center ">
          <div className="flex-col items-center ">
            <div onMouseEnter={()=>{setImages("/img/squareimg3.png")}} className="flex flex-col gap-y-2">
              <h2 className="bg-gradient-to-r from-[#0DA1DA] to-[#5DB98E]  font-semibold  text-title xl:py-1 lg:text-[25px]  text-transparent bg-clip-text ">
                Strong Project and Process Management
              </h2>
              <p className="pb-4 text-[15px] capitalize md:text-[16px] lg:pr-20 text-justify">
                Our project managers act as a focal point for all your
                project-related needs. Project managers are involved in the
                entire project lifecycle to plan, organize, control and deploy
                key milestones, deliverables according to your goals. Plus all
                Pruthatek's projects are supervised by our CTO, who is
                responsible for processes audit and enforcement, as well as
                formeasurement of existing processes against established metrics
                and process improvements analysis and implementation.{" "}
              </p>
            </div>
            <hr className="w-[90%] pt-3" />
            <div onMouseEnter={()=>{}} className="flex flex-col gap-y-2">
              <h2 className="bg-gradient-to-r from-[#F05225] to-[#EEA820] font-semibold  text-title xl:py-1 lg:text-[25px]  text-transparent bg-clip-text ">
                In-Depth Requirements Analysis{" "}
              </h2>
              <p className=" pb-4 text-[15px] capitalize md:text-[16px] lg:pr-20 text-justify tooltip-containe">
                Here at PruthaTek we pay special attention to the discovery
                phase to ensure that the final product fully meets your
                expectations. Pruthatek's Business Analysts define easier ways
                to attain what you need, while Project Managers identify the
                most suitable development methodology and cooperation model, as
                well as assemble the most effective project team, and the tech
                experts work on technical feasibility and select the most
                efficient technologies.{" "}
              </p>{" "}
            </div>
            <hr className="w-[90%] pt-3" />

            <div onMouseEnter={()=>{}} className="flex flex-col gap-y-2">
              <h2 className="bg-gradient-to-r from-[#EF32D9] to-[#3F5EFB] font-semibold  text-title xl:py-1 lg:text-[25px]  text-transparent bg-clip-text ">
                Thorough Quality
              </h2>
              <p className="text-[15px] capitalize md:text-[16px] lg:pr-20 text-justify tooltip-containe">
                We have an independent QA department responsible for providing
                quality assurance throughout the entire Software Development
                Lifecycle of every project. Depending on the size of the latter,
                we allocate a testing team and define a QA timeframe, which
                allows us to optimize involvement and project costs. Though
                independent by virtue of their duties, our QA experts work in
                close cooperation with our development team.{" "}
              </p>
            </div>
          </div>

          <div className="hidden  lg:flex flex-col h-full overflow-hidden max-h-[520px] rounded-lg">
            <img
              id="img1"
              src={images}
              alt="Tooltip Image"
              className=" w-[100%] rounded-lg h-full"
            />
          </div>
        </div>

        {/* <div class="tooltip-container">
  Hover over me
  <div class="tooltip">
    <img src="./img/squareimg3.png" alt="Tooltip Image" class="tooltip-image" />
    <span class="tooltip-text">Tooltip Content</span>
  </div>
</div> */}
        {/* Image */}

        {/* <div
					className="border-2 hidden lg:block lg:w-[150%] shadow-[0px_4px_14px_0px_rgba(0,0,0,0.25)] dark:shadow-[#000000] dark:shadow-lg rounded-xl overflow-hidden"
				>

				<Swiper
        // direction={'vertical'}
		autoplay={{
			delay: 5000,
			disableOnInteraction: false,
		}}
		loop={true}
		modules={[Autoplay]}
// pagination={{
        //   clickable: true,
        // }}
        // modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>				
			<img
						className="rounded-lg  cursor-pointer"
						src="./img/squareimg3.png"
						alt="Bonnie "
					/>
</SwiperSlide>
<SwiperSlide>					<img
						className="rounded-lg  cursor-pointer"
						src="./img/squareimg2.png"
						alt="Bonnie "
					/>
</SwiperSlide>
<SwiperSlide>					<img
						className="rounded-lg  cursor-pointer"
						src="./img/squareimg.png"
						alt="Bonnie "
					/>
</SwiperSlide>
      </Swiper>
					
	  </div> */}

        {/* <div
					className="border-2 hidden lg:block lg:w-[150%] shadow-[0px_4px_14px_0px_rgba(0,0,0,0.25)] dark:shadow-[#000000] dark:shadow-lg rounded-xl overflow-hidden"
				>

                    
					<img
						className="rounded-lg  cursor-pointer"
						src="./img/squareimg3.png"
						alt="Bonnie "
					/>
				</div> */}
      </div>
    </div>
  );
};

export default Key;

// Isolated Scrums
// Teams are isolated across different locations. Some teams may not be using Agile.

// Distributed Scrum of Scrums
// Cross-functional Scrum teams are isolated across locations and integrated by a Scrum-of-Scrums that meets regularly across locations.

// Totally Integrated Scrums
// Scrum team members are distributed across locations.
