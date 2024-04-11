import React from "react";

const TeamMemberPopup = ({ data }) => {
	return (
		<div className="w-full h-full fixed top-0 left-0 glassmorphism flex items-center justify-center z-50 scale-0 opacity-0 transition-all duration-300" id="teamMemberPopup">
			<div className={"bg-gradient-to-r p-[3px] rounded-xl lg:w-[80%] w-[90%] h-fit max-h-[80vh] relative overflow-y-scroll md:overflow-visible " + data.gradientBorder}>
				<div className=" flex flex-col lg:flex-row dark:bg-[#101010] bg-white rounded-lg lg:p-5 py-2">
					{/* Close */}
					<div className="glassmorphism absolute md:-top-5 md:-right-5 top-2 right-2 rounded-full p-1 cursor-pointer"
						onClick={() => {
							document.getElementById("teamMemberPopup").classList.add("scale-0", "opacity-0");
							document.getElementsByTagName("BODY")[0].style.overflowY = "visible"
						}}
					>
						<svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
							<path d="M18 6L6 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
							<path d="M6 6L18 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
						</svg>
					</div>
					<div className="lg:w-1/2 flex flex-col items-center justify-center lg:border-r lg:border-b-0 border-b pb-5 lg:pb-0 ">
						{data.img != "" ? (
							<div className={"lg:w-[250px] w-[160px] lg:h-[250px] h-[160px] bg-gradient-to-r p-1 rounded-full overflow-hidden " + data.gradientBorder}>
								<img src={data.img} className="w-full h-full rounded-full" alt=""/>
							</div>
						) : (
							<div className={"w-[250px] h-[250px] bg-gradient-to-r p-[3px] rounded-full overflow-hidden flex items-center justify-center " + data.gradientBorder}>
								<p className="text-[100px] text-white font-bold text-center capitalize">{data.name[0] + data.lastName[0]}</p>
							</div>
						)}
						<div className="mt-5 flex flex-col items-center justify-center px-2 lg:px-0">
							<p className="text-title font-bold">{data.name}</p>
							<p className="font-light text-center md:text-left">{data.role}</p>
							<p className="font-bold mt-5 text-subtitle">
								Experience :{" "}
								<span className="font-normal">{data.experience}</span>
							</p>
						</div>
					</div>
					<div className="lg:w-1/2 flex flex-col justify-center px-5">
						{/* <p className="flex gap-5 whitespace-nowrap font-bold mt-5 text-subtitle">
							About vishal :{" "}
							<span className="whitespace-normal text-justify font-normal">
								Founder and Mentor with 12+ years of experience
								Passionate about teaching and mentoring, with a focus on empowering the next generation of leaders through education and entrepreneurship
								Guided and mentored over 200+ individuals and supervised 50+ talented students in internship programs, resulting in their personal and professional growth
								Contributed to the success of 100+ diverse projects through providing guidance and mentorship to the team.
							</span>
						</p> */}
						{data.Skills != "" && data.Skills != null ? (
							<p className="flex gap-5 whitespace-nowrap font-bold mt-5 text-subtitle">
								Skills :{" "}
								<span className="whitespace-normal text-justify font-normal">
									{data.Skills.charAt(0).toUpperCase() + data.Skills.slice(1)}
								</span>
							</p>
						) : (
							<></>
						)}
						{data.Experties != "" && data.Experties != null ? (
							<p className="flex gap-5 whitespace-nowrap font-bold mt-5 text-subtitle">
								Experties :{" "}
								<span className="whitespace-normal text-justify font-normal">
									{data.Experties.charAt(0).toUpperCase() +
										data.Experties.slice(1)}
								</span>
							</p>
						) : (
							<></>
						)}
						{data.Learninig != "" && data.Learninig != null ? (
							<p className="flex gap-5 whitespace-nowrap font-bold mt-5 text-subtitle">
								Learninig :{" "}
								<span className="whitespace-normal text-justify font-normal">
									{data.Learninig.charAt(0).toUpperCase() +
										data.Learninig.slice(1)}
								</span>
							</p>
						) : (
							<></>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default TeamMemberPopup;
