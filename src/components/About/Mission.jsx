import React from "react";

const Mission = () => {
	return (
		<>
			<div className="w-full  py-14">
				<h1 className="text-title lg:text-[25px] font-bold mb-3 text-center text-[#b3b3b3]">
					Our Mission
				</h1>
				<p className="text-[10px] capitalize lg:text-subtitle px-5 text-center text-[#b3b3b3]">
					Our mission is to deliver exceptional IT services without compromising on quality, ensuring we build robust and reliable solutions for our clients.        </p>
				<div className="flex md:gap-x-28 px-10 lg:px-20 md:flex-row lg:flex-row flex-col justify-center items-center py-2 mt-10">
					<div className=" lg:w-[65%] gap-y-8 md:w-[70%] w-[100%] bg-gradient-to-r from-[#F05225] to-[#eea820] shadow-[0px_4px_14px_0px_rgba(0,0,0,0.25)] dark:shadow-[#000000] dark:shadow-lg p-[2px] rounded-lg">
						<div className="rounded-lg dark:bg-[#101010] bg-white px-10 py-5 gap-y-5 flex flex-col">
							<div className="flex flex-col justify-center gap-y-5">
								<svg
									width="27"
									height="22"
									viewBox="0 0 27 22"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M8.18186 0.322266C4.13741 5.23338 -2.39148 16.0956 3.84852 20.2556"
										stroke="white"
									/>
									<circle cx="6.4485" cy="15.9223" r="6.06667" fill="white" />
									<path
										d="M22.0486 0.322266C18.0041 5.23338 11.4752 16.0956 17.7152 20.2556"
										stroke="white"
									/>
									<circle cx="20.3152" cy="15.9223" r="6.06667" fill="white" />
								</svg>
								<p className=" xl:text-justify capitalize lg:leading-8 leading-5 lg:text-[16px] text-[13px] ">
									Our focus is on assisting entrepreneurs in developing software that not only fulfils today's demands, but also predicts tomorrow's needs by creating solutions that are both creative and sustainable.                </p>
							</div>
							<div className="flex flex-col justify-end items-end">
								<p className="text-[15px] lg:text-title font-normal ">
									-Vishal Nayak
								</p>
								{/* <p className="text-[12px]">CEO/Pruthatek</p> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Mission;
