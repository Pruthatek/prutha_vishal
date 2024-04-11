import React, { useState, useEffect } from "react";

import { teamMembersData } from "../Data/TeamMembersData";
import TeamMemberPopup from "../TeamMemberPopup/TeamMemberPopup";
import TeamMembers from "../TeamMembers/TeamMembers";

const Team = (props) => {

	useEffect(() => {
		document.body.scrollTop = 0; // For Safari
		document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
	}, [])
	

	const [details, setdetails] = useState([
		{
			style: "",
			gradientBorder: "",
			img: "",
			name: "",
			role: "",
			experience: "",
			Skills: "",
			Experties: "",
			Learninig: "",
		},
	]);

	return (
		<div className="lg:px-10 mb-10 px-10 lg:pt-28 pt-16">
			{/* Team member popup  */}
			<TeamMemberPopup data={details} />
			<div className="w-full flex flex-col items-center">
				<h1 className="font-bold text-title text-[#B3B3B3] dark:text-white text-center lg:mb-10 mb-3">Meet Our Team</h1>
				<p className="lg:max-w-[1200px] w-full text-justify lg:text-left">Discover the dedicated individuals who have been instrumental in driving PruthaTek’s growth and success over the years, and continue to work tirelessly towards achieving the company's goals and objectives.</p>
			</div>
			<div className="w-full mt-10 lg:py-14" style={{ backgroundImage: "url('/img/squareBG.png')", backgroundPosition: "center", backgroundSize: "cover" }}>
				<h1 className="font-bold text-title text-center text-[#B3B3B3] dark:text-white mb-3">Meet Our Founder</h1>
				<p className="text-center text-[#B3B3B3]">Vishal Nayak - Founder, CEO & Managing Director</p>
				<div className="lg:bg-gradient-to-r bg-gradient-to-b from-[#F05225] to-[#eea820] lg:max-w-[1200px] mx-auto rounded-lg p-[2px] mt-10 shadow-xl">
					<div className="rounded-lg dark:bg-[#101010] bg-white">
						<div className="w-full rounded-lg p-8">
							<p className="text-description mb-4 text-justify lg:text-left">PruthaTek is a unique development company that blends cutting-edge technology with personalised service, creating innovative solutions for businesses of all sizes.</p>
							<p className="text-description my-6 text-justify lg:text-left">Vishal Nayak: The man behind PruthaTek’s concrete success. With over 12+ years of leadership and management experience in software and product development, He is passionate about providing great service to clients and partners.</p>
							<p className="text-description mt-4 text-justify lg:text-left">Vishal Nayak’s(HE is obsessed with)  delivering exceptional quality permeates through the entire organisation, creating a culture of innovation, growth, and excellence. With his expert leadership, PruthaTek has become a powerhouse in the software and product development space, delivering cutting-edge solutions that drive success for businesses of all sizes.</p>
						</div>
					</div>
				</div>
			</div>
			<div className="max-w-screen-lg my-10 mx-auto">
				<h1 className="font-bold text-title text-center text-[#B3B3B3] dark:text-white mb-3">Leadership</h1>
				<p className="text-center capitalize text-[#B3B3B3]">Innovative teams driving success since 2019</p>
				<div className={"flex flex-row flex-wrap justify-center items-center gap-10 gap-y-[6rem] text-center mt-28"}>
					{teamMembersData.slice(0, 6).map((item, index) => (
						<TeamMembers item={item} key={index} setdetails={setdetails} theme={props.theme} />
					))}
				</div>
			</div>
			<div className="max-w-screen-lg my-20 mx-auto">
				<h1 className="font-bold text-title text-center text-[#B3B3B3] dark:text-white mb-3">Branding & Design Experts</h1>
				<div className="flex flex-row flex-wrap justify-center items-center gap-10 gap-y-[6rem] text-center mt-28">
					{teamMembersData.slice(6, 8).map((item, index) => (
						<TeamMembers item={item} key={index} setdetails={setdetails} theme={props.theme} />
					))}
				</div>
			</div>
			<div className="max-w-screen-lg my-20 mx-auto">
				<h1 className="font-bold text-title text-center text-[#B3B3B3] dark:text-white mb-3">Meet Our Skilled Developers</h1>
				<div className="flex flex-row flex-wrap justify-center items-center gap-10 gap-y-[6rem] text-center mt-28">
					{teamMembersData.slice(8).map((item, index) => (
						<TeamMembers item={item} key={index} setdetails={setdetails} theme={props.theme} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Team;
