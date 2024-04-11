import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const MobileNavbar = (props) => {
	const [isHomePage, setIsHomePage] = useState(false);

	useEffect(() => {
		if (window.location.pathname === "/") {
			setIsHomePage(true);
		} else {
			setIsHomePage(false);
		}
	}, []);

	const mobileNavbarData = [
		{
			title: ["What is our role?", "#"],
			subtitle: [
				{
					title: ["Overview", "#"],
					subtitle: [],
				},
				{
					title: ["Offerings And Advancements", "#"],
					subtitle: [
						["Enterprise Software Development", "#"],
						["Web Application Development", "web-development"],
						["Mobile Application Development", "#"],
						["E-commerce / Retail", "#"],
						["Artificial Intelligence", "#"],
						["Machine Learning", "#"],
						["DevOps", "#"],
						["E-commerce", "#"],
						["Product Engineering", "#"],
						["QA Testing", "#"],
					],
				},
				{
					title: ["Products", "#"],
					subtitle: [
						["Kijeka", "#"],
						["Sage", "#"],
						["Samyati", "#"],
					],
				},
				{
					title: ["Technologies", "#"],
					subtitle: [
						["Figma", "#"],
						["Adobe illustrator", "#"],
						["Blender 3D", "#"],
						["React Js", "#"],
						["React Native", "#"],
						["HTML", "#"],
						["CSS", "#"],
						["Java Script", "#"],
						["Flutter", "#"],
						["Tailwind", "#"],
						["Three Js", "#"],
						["GSAP", "#"],
						["Python-Django", "#"],
						["Node Js", "#"],
						["Machine Learning", "#"],
						["Artificial Intelligence", "#"],
						["Enterprise Software Development", "#"],
						["Web Applications Development", "#"],
						["Mobile Applications Developments", "#"],
					],
				},
				{
					title: ["Sectors", "#"],
					subtitle: [
						["Banking", "#"],
						["Capital Markets", "#"],
						["Consumer Goods and Distribution", "#"],
						["Communications", "#"],
						["Media, and Information Services Education Energy,", "#"],
						[
							"Resources, and Utilities Healthcare High Tech Insurance Life Sciences Manufacturing Public Services Retail Travel and Logistics",
							"#",
						],
					],
				},
			],
		},
		{
			title: ["What defines us?", "#"],
			subtitle: [
				{
					title: ["Overview", "#"],
					subtitle: [],
				},
				{
					title: ["About Us", "/aboutus"],
					subtitle: [],
				},
				{
					title: ["Meet Our team", "/team"],
					subtitle: [],
				},
				// {
				// 	title: ["Case Studies", "#"],
				// 	subtitle: [],
				// },
			],
		},
		// {
		// 	title: ["Careers", "#"],
		// 	subtitle: [
		// 		{
		// 			title: ["Let’s Join With we", "#"],
		// 			subtitle: [],
		// 		},
		// 	],
		// },
		{
			title: ["Blogs", "/blogs"],
			subtitle: [],
		},
		// {
		// 	title: ["Case Studies", "#innovationInsights"],
		// 	subtitle: [],
		// },
	];

	return (
		<div className={"fixed top-0 left-full w-full min-h-screen max-h-screen overflow-y-scroll p-3 z-50 transition-all duration-300 block lg:hidden " + (isHomePage ? "glassmorphism-2 text-[rgb(119,119,119)]" : "glassmorphism-2")} id="mobileNavbarOverlay">
			<div className="w-full flex items-center justify-between">
				<Link to="/" className="cursor-pointer">
					<img src="/img/Pruthateknew.png" alt="" className="w-32" />
				</Link>
				{/* Close */}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					className={"w-6 h-6 lg:w-7 lg:h-7 cursor-pointer " + (isHomePage ? "text-[rgb(119,119,119)]" : props.theme === "light" ? "black" : "white")}
					viewBox="0 0 16 16"
					onClick={() => {
						document.getElementById("mobileNavbarOverlay").classList.add("left-full");
						document.getElementById("mobileNavbarOverlay").classList.remove("left-0");
						document.body.style.overflow = "visible";
					}}
				>
					<path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
				</svg>
			</div>
			<div className="p-3 my-3">
				<ul>
					{mobileNavbarData.map((data, index) => {
						return (
							<li key={index} className={"border-b pb-2 my-5 first-of-type:mt-0 max-h-[30px] overflow-hidden transition-all duration-300 " + (isHomePage ? "border-[rgb(119,119,119)]" : "dark:border-white border-black")}>
								<div
									className="flex items-center justify-between"
									id={"mobileNavLink-" + index}
									onClick={() => {
										if (data["subtitle"].length !== 0) {
											if (document.getElementById("mobileNavLink-" + index).parentNode.classList.contains("max-h-[30px]")) {
												document.getElementById("mobileNavLink-" + index).parentNode.classList.remove("max-h-[30px]");
												document.getElementById("mobileNavLink-" + index).parentNode.classList.add("max-h-fit");
												document.getElementById("mobileNavLinkDownArrow-" + index).classList.remove("rotate-0");
												document.getElementById("mobileNavLinkDownArrow-" + index).classList.add("-rotate-180");
											} else {
												document.getElementById("mobileNavLink-" + index).parentNode.classList.add("max-h-[30px]");
												document.getElementById("mobileNavLink-" + index).parentNode.classList.remove("max-h-fit");
												document.getElementById("mobileNavLinkDownArrow-" + index).classList.add("rotate-0");
												document.getElementById("mobileNavLinkDownArrow-" + index).classList.remove("-rotate-180");
											}
										}
									}}
								>
									<a
										href={data["title"][1]}
										className={
											"font-bold " +
											(isHomePage ? "text-[rgb(119,119,119)]" : "dark:text-white text-black")
										}
									>
										{data["title"][0]}
									</a>
									{data["subtitle"].length !== 0 && (
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width={16}
											height={16}
											fill="currentColor"
											className={"bi bi-chevron-down transition-all duration-300 " + (isHomePage? "text-[rgb(119,119,119)]": props.theme === "light"? "black": "white")}
											viewBox="0 0 16 16"
											id={"mobileNavLinkDownArrow-" + index}
										>
											<path
												fillRule="evenodd"
												d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
											/>
										</svg>
									)}
								</div>
								<div className="px-3 py-1">
									<ul>
										{data["subtitle"].map((item, index2) => {
											return (
												<li
													key={index2}
													className={
														"border-b pb-2 my-3 max-h-[30px] overflow-hidden transition-all duration-300 " +
														(isHomePage
															? "border-[rgb(119,119,119)]"
															: "dark:border-white border-black")
													}
												>
													<div
														className="flex items-center justify-between"
														id={"mobileNavLinkContent-" + index2}
														onClick={() => {
															if (item["subtitle"].length !== 0) {
																if (
																	document
																		.getElementById(
																			"mobileNavLinkContent-" + index2
																		)
																		.parentNode.classList.contains(
																			"max-h-[30px]"
																		)
																) {
																	document
																		.getElementById(
																			"mobileNavLinkContent-" + index2
																		)
																		.parentNode.classList.remove(
																			"max-h-[30px]"
																		);
																	document
																		.getElementById(
																			"mobileNavLinkContent-" + index2
																		)
																		.parentNode.classList.add("max-h-fit");
																} else {
																	document
																		.getElementById(
																			"mobileNavLinkContent-" + index2
																		)
																		.parentNode.classList.add("max-h-[30px]");
																	document
																		.getElementById(
																			"mobileNavLinkContent-" + index2
																		)
																		.parentNode.classList.remove("max-h-fit");
																}
															}
														}}
													>
														<a
															href={item["title"][1]}
															className={
																isHomePage
																	? "text-[rgb(119,119,119)]"
																	: "dark:text-white text-black"
															}
														>
															{item["title"][0]}
														</a>
														{item["subtitle"].length !== 0 && (
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width={18}
																height={18}
																fill="currentColor"
																className={(isHomePage? "text-[rgb(119,119,119)]": props.theme === "light"? "black": "white")}
																viewBox="0 0 16 16"
																data-type="plus"
																onClick={(event) => {
																	let target = event.target;
																	if (
																		target.getAttribute("data-type") === "plus"
																	) {
																		if (target.tagName === "svg") {
																			target.innerHTML = `<path fillRule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>`;
																			target.setAttribute("data-type", "minus");
																		} else {
																			target.parentNode.innerHTML = `<path fillRule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>`;
																			target.parentNode.setAttribute(
																				"data-type",
																				"minus"
																			);
																		}
																	} else {
																		if (target.tagName === "svg") {
																			target.innerHTML = `<path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>`;
																			target.setAttribute("data-type", "plus");
																		} else {
																			target.parentNode.innerHTML = `<path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>`;
																			target.parentNode.setAttribute(
																				"data-type",
																				"plus"
																			);
																		}
																	}
																}}
															>
																<path
																	fillRule="evenodd"
																	d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
																/>
															</svg>
														)}
													</div>
													<div className="px-3">
														<ul
															className={
																"px-3 list-disc " +
																(item["subtitle"].length > 10
																	? "grid grid-cols-2 gap-x-[22px]"
																	: "")
															}
														>
															{item["subtitle"].map((item2, index3) => {
																return (
																	<li
																		key={index3}
																		className={
																			"my-1 text-description " +
																			(isHomePage
																				? "text-[rgb(119,119,119)]"
																				: "dark:text-white text-black")
																		}
																	>
																		<a href={item2[1]}>{item2[0]}</a>
																	</li>
																);
															})}
														</ul>
													</div>
												</li>
											);
										})}
									</ul>
								</div>
							</li>
						);
					})}
				</ul>
				<Link
					to="/contact"
					className="cursor-pointer text-white flex flex-row items-center justify-between gap-x-4 bg-gradient-to-r from-[#F05225] to-[#EEA820] rounded-lg py-1.5 px-3 drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] w-fit"
					onClick={() => {
						document
							.getElementById("mobileNavbarOverlay")
							.classList.add("left-full");
						document
							.getElementById("mobileNavbarOverlay")
							.classList.remove("left-0");
						document.body.style.overflow = "visible";
					}}
				>
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M19.0001 4C20.657 4 22.0001 5.34315 22.0001 7V17C22.0001 18.6569 20.657 20 19.0001 20H5.00012C3.34327 20 2.00012 18.6569 2.00012 17V7C2.00012 5.34315 3.34327 4 5.00012 4H19.0001ZM20.0001 7.328L12.6586 13.7526C12.313 14.055 11.8112 14.0802 11.4395 13.8282L11.3416 13.7526L4.00012 7.329V17C4.00012 17.5523 4.44784 18 5.00012 18H19.0001C19.5524 18 20.0001 17.5523 20.0001 17V7.328ZM18.4801 6H5.51812L12.0001 11.6712L18.4801 6Z"
							fill="white"
						/>
					</svg>
					<p className="text-subtitle">Get In Touch</p>
				</Link>
			</div>
		</div>
	);
};

export default MobileNavbar;
