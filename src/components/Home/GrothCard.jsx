import React from "react";

const GrothCard = ({ data, theme }) => {
	return (
		<div className="flex w-full sm:flex-row flex-col justify-between items-center sm:gap-0 gap-20">
			<div
				className="sm:w-[50%] grid grid-flow-col sm:grid-cols-[64.14px_auto] grid-cols-[35px_auto] sm:gap-6 gap-2 overflow-x-hidden"
				data-aos={window.innerWidth > 640 ? "fade-left" : "fade-up"}
				data-aos-duration="600"
				data-aos-delay="0"
				data-aos-easing="ease-in-out"
				data-aos-once="false"
				data-aos-anchor-placement="top-center"
			>
				<div className="sm:w-[64.14px] sm:h-[64.14px] w-[35px] h-[35px]">
					<div
						className={`box-border rounded-[50%] flex items-center justify-center text-center ${data.linearGradient} p-[1px]`}
					>
						<span className="box-border font-medium text-title sm:text-[35px] sm:w-[62px] sm:h-[62px] w-full h-full flex justify-center items-center dark:bg-[#101010] bg-white rounded-[50%] dark:text-white">
							{data.no}
						</span>
					</div>
				</div>
				<div className="flex flex-col gap-6 items-start">
					<p
						className={`font-medium text-title lg:text-[35px] text-transparent bg-clip-text ${data.linearGradient}`}
					>
						{data.title}
					</p>
					<p className="sm:text-justify capitalize text-lg leading-8">
						{data.content}
					</p>
					<button className="w-max border-[1px] border-black dark:border-white dark:text-white text-black py-2.5 px-2 flex items-center justify-center gap-x-10 rounded-lg cursor-pointer transition duration-300 ease-in-out origin-right hover:border-none hover:bg-gradient-to-r from-[#F05225] to-[#EEA820]">
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
									fill={theme === "light" ? "black" : "white"}
								/>
							</svg>
						</span>
					</button>
				</div>
			</div>
			<div
				className="relative sm:max-w-[45%] sm:flex hidden justify-center items-center"
				data-aos="fade-right"
				data-aos-duration="600"
				data-aos-delay="0"
				data-aos-easing="ease-in-out"
				data-aos-once="false"
				data-aos-anchor-placement="top-center"
			>
				<div
					className={
						"absolute top-[-200px] right-[-125px] w-[175%] h-[175%] hidden lg:block " +
						(theme === "light" ? "lg:hidden" : "block")
					}
				>
					<img src={data.bg} alt="." />
				</div>
				<img className="z-1 sm:w-[80%] w-[100%]" src={data.img} alt="." />
			</div>
		</div>
	);
};

export default GrothCard;
