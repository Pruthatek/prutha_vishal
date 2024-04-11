import React from "react";
//import Innovative from "../../assets/images/Innovative.png";

// import Attention from "../../assets/images/Attention.png";
// import Multi from "../../assets/images/Multi.png";
// import brand4 from "../../assets/images/brand4.jpg";

// import { Navigation, Scrollbar, A11y } from "swiper";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import "../../index.css";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

SwiperCore.use([Autoplay, Pagination]);

const SliderCard = () => {
	const CaseStudyData = [
		{
			img:`/img/cards1.png`,
			title:`Innovative Design Solutions`,
			description1:`Pruthatek offers innovative UI/UX design solutions that are
			tailored to meet the unique needs of our clients.`,
			description2:`Pruthatek offers innovative UI/UX design solutions that are
			tailored to meet the unique needs of our clients.`,
			style: `bg-gradient-to-r from-[#F05225] to-[#EEA820]`,
		},
		{
			img:`/img/cards2.png`,
			title:`Attention to Detail`,
			description1:`We believe that the key to successful UI/UX design is in the details.`,
			description2:`That's why we pay meticulous attention to every aspect of the
			design process, from concept to implementation, ensuring that
			every detail is carefully considered and executed to
			perfection.`,
			style: `bg-gradient-to-r from-[#0DA1DA] to-[#5DB98E]`,
		},
		{
			img:`/img/cards3.png`,
			title:`Multi-Platform Design`,
			description1:`Our UI/UX design services cater to a range of digital
			platforms, including web, mobile, and desktop.`,
			description2:`We use responsive design techniques to ensure that your design is optimised for all devices and screen sizes.`,
			style: `bg-gradient-to-r from-[#EF32D9] to-[#3F5EFB]`,
		},
		{
			img:`/img/cards4.png`,
			title:`Brand Consistency`,
			description1:`We understand the importance of maintaining brand consistency
			in UI/UX design.`,
			description2:`That's why we work closely with our clients to ensure that
			their brand identity is reflected in every aspect of the
			design, from colour schemes to typography.`,
			style: `bg-gradient-to-r from-[#9100FF] to-[#FF00FF]`,
		},
	];

	return (
		<>
			<div className="flex  items-center justify-center  my-10">
				<h1 className=" text-[16px]   md:text-[20px]  font-bold leading-[3rem] py-7  p-5 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-[#0DA1DA] dark:to-[#5DB98E] text-[#B3B3B3]">
					How Pruthatek Can Make it Work for You?
				</h1>
			</div>

			<div className="px-10 lg:px-20">
				<Swiper

breakpoints={{
	 					0: {
						slidesPerView: 1,
					},
					400: {
						slidesPerView: 1,
	 					},
	 					639: {
 						slidesPerView: 2,
						},
						865: {
						slidesPerView: 2,
					},
					1000: {
							slidesPerView: 3.2,
						},
					}}
					//spaceBetween={30}
					//slidesPerView={window.innerWidth > 1024 ? 3 : window.innerWidth > 640 ? 2 : 1}
					autoplay={{
						delay: 1000,
						disableOnInteraction: false,
					}}
					loop={true}
					modules={[Autoplay]}
				>
				{CaseStudyData.map((data, index) => {
						return(
						<SwiperSlide key={index} className="lg:my-14 my-5 lg:mx-1">
							<div className={"p-[2px] max-w-[280px] max-h-[400px] min-w-[280px] min-h-[400px] md:max-w-[320px] md:max-h-[420px] md:min-w-[310px] md:min-h-[420px] shadow-[0px_4px_14px_0px_rgba(30,30,30,0.25)] dark:shadow-[#000000] dark:shadow-lg transition-all duration-300 rounded-[10px] -z-10    block " + data.style }>
				{/*===================================image =========================== */}
								<div className="w-full    max-h-[400px] min-h-[395px] md:max-h-[420px] md:min-h-[415px] dark:bg-[#101010] bg-white rounded-lg  ">
									<div className="flex  items-center justify-center pb-1  ">
										<div className=" w-[8.125rem] h-[8.125rem]  pt-6 ">
											<img
												className=""
												src={data.img}
												alt="Innovative "
											/>
										</div>
									</div>

									<div className="flex  items-center justify-center">
									<h5 className={"text-[18px]   md:text-[20px] pt-6 font-semibold not-italic leading-[30.5px] tracking-[3%] text-transparent bg-clip-text " + data.style}>{data.title}</h5>
									</div>

									<div className="px-8 md:px-6 py-1  ">

										<ul className=" style-image  " >
											<li className=" text-[#B3B3B3] dark:text-white text-[12px]   md:text-[14px] leading-[1.334rem] font-medium not-italic tracking-[3%] text-justify">
												{data.description1}
											</li>
											<li className="text-justify  text-[#B3B3B3] dark:text-white py-2 text-[12px]   md:text-[14px] font-medium not-italic leading-[1.334rem] tracking-[3%]">
												{data.description2}
											</li>
										</ul>

									</div>
								</div>
								</div>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>
		</>
	);
};

export default SliderCard;



// <Swiper
// 				breakpoints={{
// 					0: {
// 						slidesPerView: 1,
// 					},
// 					400: {
// 						slidesPerView: 1,
// 					},
// 					639: {
// 						slidesPerView: 2,
// 					},
// 					865: {
// 						slidesPerView: 2,
// 					},
// 					1000: {
// 						slidesPerView: 3.2,
// 					},
// 				}}
// 				// install Swiper modules
// 				//modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
// 				//spaceBetween={50}
// 				//slidesPerView={3}
// 				//navigation
// 				autoplay={{
// 					delay: 2500,
// 					disableOnInteraction: false,
// 				}}

// 			>
// 				<div className="flex  items-center justify-center  md:items-center  ">
// 					<SwiperSlide className=" px-8 md:px-10 ">
// 						{/*======================================svg card1 for squer================================== */}

// 						{/*===============================================end svg================================================================== */}

						// <div className="  max-w-[310px] shadow-xl shadow-slate-300  max-h-[410px] min-w-[310px] min-h-[410px] md:max-w-[320px] md:max-h-[420px] md:min-w-[310px] md:min-h-[420px]   px-2     dark:bg-[#3a3a3a4d] bg-[#fffff]  dark:border dark:border-[#D9D9D9] border border-[#D9D9D9] rounded-[10px] -z-10  block">
// 							{/*===================================image =========================== */}
// 							<div className="flex  items-center justify-center pb-1  ">
// 								<div className=" w-[8.125rem] h-[8.125rem]  pt-6 ">
// 									<img
// 										className="   shadow-lg "
// 										src="/img/cards1.png"
// 										alt="Innovative "
// 									/>
// 								</div>
// 							</div>

// 							<div className="flex  items-center justify-center">
// 								<h1 className="text-[18px]   md:text-[20px] pt-6 font-semibold not-italic leading-[30.5px] tracking-[3%] text-transparent  bg-clip-text bg-gradient-to-r from-[#F05225] to-[#EEA820]">
// 									Innovative Design Solutions
// 								</h1>
// 							</div>

// 							<div className="px-8 md:px-6 py-1  ">

// 								<ul className="style-image  ">
// 									<li className=" text-[#B3B3B3] dark:text-white text-[12px]   md:text-[14px] leading-[1.334rem] font-medium not-italic tracking-[3%] text-justify">
// 										Pruthatek offers innovative UI/UX design solutions that are
// 										tailored to meet the unique needs of our clients.
// 									</li>
// 									<li className="text-justify  text-[#B3B3B3] dark:text-white py-2 text-[12px]   md:text-[14px] font-medium not-italic leading-[1.334rem] tracking-[3%]">
// 										Pruthatek offers innovative UI/UX design solutions that are
// 										tailored to meet the unique needs of our clients.
// 									</li>
// 								</ul>

// 							</div>


// 							{/*===================================end============================= */}
// 						</div>
// 					</SwiperSlide>
// 					<SwiperSlide className="px-8 md:px-10 ">
// 						{/*======================================svg card2 for squer ================================== */}

// 						{/*===============================================end svg================================================================== */}

// 						<div class=" max-w-[310px] shadow-xl shadow-slate-300 max-h-[410px] min-w-[310px] min-h-[410px] md:max-w-[320px] md:max-h-[420px] md:min-w-[310px] md:min-h-[420px]  px-2     dark:bg-[#3a3a3a4d] bg-[#fffff] border border-[#D9D9D9] rounded-[10px]  ">
// 							{/*===================================image =========================== */}
// 							<div className="flex  items-center justify-center pb-1  ">
// 								<div className=" w-[8.125rem] h-[8.125rem] pt-6  md:pt-6 ">
// 									<img
// 										className=" mb-2  shadow-lg "
// 										src="/img/cards2.png"
// 										alt="Innovative "
// 									/>
// 								</div>
// 							</div>

// 							<div className="flex  items-center justify-center">
// 								<h1 className="font-semibold not-italic text-[18px]  md:text-[20px]  pt-6  leading-[30.5px] tracking-[3%] text-transparent  bg-clip-text bg-gradient-to-r from-[#0DA1DA] to-[#5DB98E]">
// 									Attention to Detail
// 								</h1>
// 							</div>



// 							<div className="px-8 md:px-6 py-1 ">

// 								<ul className="style-image">
// 									<li className=" text-[#B3B3B3] dark:text-white text-[12px]   md:text-[14px] leading-[1.334rem] font-medium not-italic tracking-[3%] text-justify">
// 										We believe that the key to successful UI/UX design is in the
// 										details.
// 									</li>
// 									<li className="text-justify  text-[#B3B3B3] dark:text-white py-2 text-[12px]   md:text-[14px] font-medium not-italic leading-[1.334rem] tracking-[3%]">
										// That's why we pay meticulous attention to every aspect of the
										// design process, from concept to implementation, ensuring that
										// every detail is carefully considered and executed to
										// perfection.
// 									</li>
// 								</ul>

// 							</div>

// 							{/*===================================end============================= */}
// 						</div>
// 					</SwiperSlide>

// 					<SwiperSlide className="px-8 md:px-10 ">
// 						{/*======================================svg card3 for squer ================================== */}



// 						{/*===============================================end svg================================================================== */}

// 						<div class="max-w-[310px] shadow-xl shadow-slate-300  max-h-[410px] min-w-[310px] min-h-[410px] md:max-w-[320px] md:max-h-[420px] md:min-w-[310px] md:min-h-[420px]   px-2     dark:bg-[#3a3a3a4d] bg-[#fffff] border border-[#D9D9D9] rounded-[10px]    ">
// 							{/*===================================image =========================== */}
							// <div className="flex  items-center justify-center pb-1  ">
							// 	<div className=" w-[8.125rem] h-[8.125rem]  pt-6 ">
							// 		<img
							// 			className=" mb-2  shadow-lg "
							// 			src="/img/cards3.png"
							// 			alt="Innovative "
							// 		/>
							// 	</div>
							// </div>

							// <div className="flex  items-center justify-center">
							// 	<h1 className="font-semibold not-italic text-[16px]   md:text-[20px] pt-6 leading-[30.5px] tracking-[3%] text-transparent  bg-clip-text bg-gradient-to-r from-[#34A0DA] to-[#2682C3]">
							// 		Multi-Platform Design
							// 	</h1>
							// </div>


							// <div className="px-8 md:px-6 py-1">
							// 	<ul className="  style-image ">
							// 		<li className=" text-[#B3B3B3] dark:text-white text-[12px]   md:text-[14px] leading-[1.334rem] font-medium not-italic tracking-[3%] text-justify">
										// Our UI/UX design services cater to a range of digital
										// platforms, including web, mobile, and desktop.
							// 		</li>
							// 		<li className="text-justify  text-[#B3B3B3] dark:text-white py-2 text-[12px]   md:text-[14px] font-medium not-italic leading-[1.334rem] tracking-[3%]">
							// 			We use responsive design techniques to ensure that your design is optimised for all devices and screen sizes.
							// 		</li>
							// 	</ul>


							// </div>

// 							{/*===================================end============================= */}
// 						</div>
// 					</SwiperSlide>

// 					<SwiperSlide className="px-8 md:px-10 ">
// 						{/*======================================cards4 ================================== */}

// 						{/*========================================svg card4 for squer=================================== */}
// 						{/* 
            
            
//             {/*===============================================end svg================================================================== */}

// 						<div class="max-w-[310px] shadow-xl shadow-slate-300 max-h-[410px] min-w-[310px] min-h-[410px] md:max-w-[320px] md:max-h-[420px] md:min-w-[310px] md:min-h-[420px]   px-2     dark:bg-[#3a3a3a4d] bg-[#fffff] border border-[#D9D9D9] rounded-[10px]   ">
// 							{/*===================================image =========================== */}
							// <div className="flex  items-center justify-center pb-1 pt-1 ">
							// 	<div className=" w-[8.125rem] h-[8.125rem]  pt-6 ">
							// 		<img
							// 			className=" mb-2  shadow-lg "
							// 			src="/img/cards4.png"
							// 			alt="Innovative "
							// 		/>
							// 	</div>
							// </div>

							// <div className="flex  items-center justify-center">
							// 	<h1 className="font-semibold not-italic not text-[18px]  md:text-[20px] pt-6 leading-[30.5px] tracking-[3%] text-transparent  bg-clip-text bg-gradient-to-r from-[#9100FF] to-[#FF00FF]">
							// 		Brand Consistency
							// 	</h1>
							// </div>


							// <div className="px-8 md:px-6 py-1  ">
							// 	<ul className="  style-image ">
							// 		<li className=" text-[#B3B3B3] dark:text-white text-[12px]   md:text-[14px] leading-[1.334rem] font-medium not-italic tracking-[3%] text-justify">
										// We understand the importance of maintaining brand consistency
										// in UI/UX design.
							// 		</li>
							// 		<li className="text-justify  text-[#B3B3B3] dark:text-white py-2 text-[12px]   md:text-[14px] font-medium not-italics leading-[1.334rem] tracking-[3%]">
										// That's why we work closely with our clients to ensure that
										// their brand identity is reflected in every aspect of the
										// design, from colour schemes to typography.
							// 		</li>
							// 	</ul>

							// </div>

// 							{/*===================================end============================= */}
// 						</div>
// 					</SwiperSlide>
// 				</div>
// 			</Swiper>