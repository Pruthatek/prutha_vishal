import React from "react";

const Value = () => {
	const valueData = [
		{
			title: `Quality Driven`,
			describe: `We work to deliver the best solution, and thus quality is our
      priority. PruthaTek offers unique and useful android and iOS
      development services at a rate that increases business and
      value, and revenue. Innovation`,
			numImg: "/img/01.svg",
			style: "bg-gradient-to-r from-[#FF63F9] via-[#E41EAD] to-[#FF008D]",
		},
		{
			title: `Well Designed Process`,
			describe: `We work to deliver the best solution, and thus quality is our
      priority. PruthaTek offers unique and useful android and iOS
      development services at a rate that increases business and
      value, and revenue. Innovation`,
			numImg: "/img/02.svg",
			style: "bg-gradient-to-r from-[#f05225] to-[#eea820]",
		},
		{
			title: `Innovation`,
			describe: `We work to deliver the best solution, and thus quality is our
      priority. PruthaTek offers unique and useful android and iOS
      development services at a rate that increases business and
      value, and revenue. Innovation`,
			numImg: "/img/03.svg",
			style: "bg-gradient-to-r from-[#0DA1DA] to-[#5DB98E]",
		},
		{
			title: `Creativity`,
			describe: `We work to deliver the best solution, and thus quality is our
      priority. PruthaTek offers unique and useful android and iOS
      development services at a rate that increases business and
      value, and revenue. Innovation`,
			numImg: "/img/04.svg",
			style: "bg-gradient-to-r from-[#3D7800] to-[#7FBB42]",
		},
	];
	return (
		<div className="flex flex-col items-center my-10 px-14 overflow-hidden">
			<h2 className="text-title lg:text-[25px] text-center text-[#b3b3b3] font-bold">
				Pruthatek Cornerstones
			</h2>
			<p className="text-[10px] lg:text-subtitle text-center lg:w-[74%] hidden lg:block mt-5 text-[#b3b3b3]">
				Our values drive our growth at Pruthatek, shaping our approach to every challenge and opportunity.  These are the cornerstones of our success.      </p>
			<div className="lg:flex lg:flex-row justify-center items-center mt-5">
				{/* Content */}
				<div
					className="flex flex-col gap-y-3 "
					data-aos="fade-up"
					data-aos-duration="600"
					data-aos-delay="0"
					data-aos-easing="ease-in-out"
					data-aos-mirror="true"
					data-aos-once="false"
					data-aos-anchor-placement="top-center"
				>
					{valueData.map((data, index) => {
						return (
							<div className="flex flex-row items-center gap-x-10" key={index}>
								<div className="w-[20%] hidden lg:block">
									<img src={data.numImg} alt="" />
								</div>
								<div className="flex flex-col">
									<h2
										className={
											"font-semibold  text-title lg:text-[25px] text-transparent bg-clip-text " +
											data.style
										}
									>
										{data.title}
									</h2>
									<p className="text-[13px] md:text-[16px] lg:pr-56 text-justify">
										{data.describe}
									</p>
								</div>
							</div>
						);
					})}
				</div>
				{/* Image */}
				<div
					className="border-2 hidden lg:block lg:w-[80%] shadow-[0px_4px_14px_0px_rgba(0,0,0,0.25)] dark:shadow-[#000000] dark:shadow-lg rounded-lg overflow-hidden"
					data-aos="fade-left"
					data-aos-duration="600"
					data-aos-delay="0"
					data-aos-easing="ease-in-out"
					data-aos-mirror="true"
					data-aos-once="false"
					data-aos-anchor-placement="top-center"
				>
					<img
						className="rounded-lg transition duration-300  ease-in-out hover:scale-105 cursor-pointer"
						src="./img/Box.png"
						alt="Bonnie "
					/>
				</div>
			</div>
		</div>
	);
};

export default Value;
