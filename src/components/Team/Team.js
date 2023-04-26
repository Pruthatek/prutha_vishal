import React from "react";

const Team = () => {
	const techs = [
		{
			id: 1,
			src: "/img/pic1.png",
			title: "Vishal Nayak",
			Worker: "Founder & Managing Director",
			style: "shadow-orange-500",
			gradientBorder: "from-[#F05225] to-[#EEA820]",
			detailes: {
				img: "/img/pic1.png",
				name: "Vishal Nayak",
				role: 'Founder & Managing Director',
				experience: '3+ years of experience',
				Skills: 'Creates visually appealing and user-friendly designs for multimedia content collaborates with cross-functional teams to ensure design and functionality align Expertise in Adobe Creative Suite,Figma, HTML, CSS, JavaScript',
				Experties: 'UI/Ux Design, Video Editing, Animations, Logo Design, Logo Animations',
				Learninig: 'Flutter, 3D Animations & Modeling,'
			}
		},
		{
			id: 2,
			src: "/img/pic2.png",
			title: "Nita Nayak",
			Worker: "Co-Founder & Managing Director",
			style: "shadow-pink-500",
			gradientBorder: "from-[#D400A5] via-[#1F7ECB] to-[#2ED6E3]"
		},
		{
			id: 3,
			src: "/img/pic3.png",
			title: "Krupa Nayak",
			Worker: "Marketing Adviser",
			style: "shadow-yellow-500",
			gradientBorder: "from-[#7A4199] via-[#AC3F6D] to-[#E93E3A]"
		},
		{
			id: 4,
			src: "/img/pic4.png",
			title: "Jagrat Patel",
			Worker: "Develpoers",
			style: "shadow-blue-600",
			gradientBorder: "from-[#F05225] to-[#EEA820]"
		},
		{
			id: 5,
			src: "/img/pic5.png",
			title: "Rahul Keshwala",
			Worker: "UI/UX Designer",
			style: "shadow-sky-400",
			gradientBorder: "from-[#D400A5] via-[#1F7ECB] to-[#2ED6E3]"
		},
		{
			id: 6,
			src: "/img/pic6.png",
			title: "Shubham Bhogayata",
			Worker: "Fronted Developer",
			style: "shadow-gray-400",
			gradientBorder: "from-[#7A4199] via-[#AC3F6D] to-[#E93E3A]"
		},
		{
			id: 7,
			src: "/img/pic6.png",
			title: "Ansh Modi",
			Worker: "Fronted Developer",
			style: "shadow-green-400",
			gradientBorder: "from-[#0038FF] via-[#75B743] to-[#E10E8C]"
		},
	];
	return (
		<div className="px-10 my-10">
			<div className="w-full flex flex-col items-center">
				<h1 className="font-bold text-title text-center mb-5">Meet Our Team</h1>
				<p className="max-w-[1200px]">
					Discover the dedicated individuals who have been instrumental in
					driving PruthaTek’s growth and success over the years, and continue to
					work tirelessly towards achieving the company's goals and objectives.
				</p>
			</div>
			<div
				className="w-full mt-10 py-14"
				style={{
					backgroundImage: "url('/img/squareBG.png')",
					backgroundPosition: "center",
					backgroundSize: "cover",
				}}
			>
				<h1 className="font-bold text-title text-center mb-3">Meet Our Founder</h1>
				<p className="text-center">Vishal Nayak - Founder, CEO & Managing Director</p>
				<div className="flex items-center justify-between mt-10 px-14 text-white">
					<div className="max-w-[700px] border-gradient-box-4 rounded-lg">
						<div className="glassmorphism rounded-lg">
							<div className="w-full rounded-lg p-8">
								<p className="text-description mb-4">
									PruthaTek is a unique development company that blends
									cutting-edge technology with personalised service, creating
									innovative solutions for businesses of all sizes.
								</p>

								<p className="text-description my-6">
									Vishal Nayak: The man behind PruthaTek’s concrete success. With
									over 12+ years of leadership and management experience in
									software and product development, He is passionate about
									providing great service to clients and partners.
								</p>

								<p className="text-description mt-4">
									Vishal Nayak’s(HE is obsessed with)  delivering exceptional
									quality permeates through the entire organisation, creating a
									culture of innovation, growth, and excellence. With his expert
									leadership, PruthaTek has become a powerhouse in the software
									and product development space, delivering cutting-edge solutions
									that drive success for businesses of all sizes.
								</p>
							</div>
						</div>
					</div>
					<div className="bg-gradient-to-r from-[#0038FF] via-[#75B743] to-[#E10E8C] p-1 rounded-full">
						<img src="/img/vishal.png" className="h-64 w-64 " />
					</div>
				</div>
			</div>
			<div className="max-w-screen-lg my-10 mx-auto">
				<h1 className="font-bold text-title text-center mb-3">Leadership</h1>
				<p className="text-center">Innovative teams driving success since 2019</p>
				<div className="flex flex-row flex-wrap justify-center items-center gap-10 text-center mt-14">
					{techs.map((item, index) => (
						<div
							key={index}
							className={'shadow hover:scale-105 glassmorphism duration-500 w-[50%] lg:w-[30%] h-fit rounded-lg py-5 px-4' + item.style}
						>
							<div className={"w-20 h-20 mx-auto -mt-10 bg-gradient-to-r p-1 rounded-full " + item.gradientBorder}>
								<img
									src={item.src}
									alt=""
									className="w-full h-full bg-transparent "
								/>
							</div>
							<p className="mt-2">{item.title}</p>
							<p className="">{item.Worker}</p>
						</div>
					))}
					{/* {techs.map(({ id, src, title, style, Worker, gradientBorder }) => (
						<div
							key={id}
							className={`shadow hover:scale-105 glassmorphism duration-500 w-[50%] lg:w-[30%] h-fit rounded-lg py-5 px-4 ${style}`}
						>
							<div className={"w-20 h-20 mx-auto -mt-10 bg-gradient-to-r p-1 rounded-full " + gradientBorder}>
								<img
									src={src}
									alt=""
									className="w-full h-full bg-transparent "
								/>
							</div>
							<p className="mt-2">{title}</p>
							<p className="">{Worker}</p>
						</div>
					))} */}
				</div>
			</div>
		</div>
	);
};

export default Team;
