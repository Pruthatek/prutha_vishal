import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Aproch = () => {
    return (
        <div className="mt-12">
            <div className="mb-5 text-center">
                <h3 className='text-title lg:text-[25px] font-bold'>Our Approach to Excellence: The Pruthatek Way
                </h3>
                <p className="text-[10px] lg:text-subtitle px-5">Pruthatek is an exceptional team – highly responsive, responsible, dedicated, and capable. I strongly recommend them for any project, regardless of their complexity.</p>
            </div>

            {/* Cards */}
            <div className="px-20 text-white">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={window.innerWidth > 640 ? 3 : 1}
                >
                    <SwiperSlide>
                        <div className="px-6 py-10 bg-[#0000004D] border-gradient-box rounded-3xl flex flex-col items-center">
                            <div className="">
                                <svg width="27" height="22" viewBox="0 0 27 22" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M8.18186 0.322266C4.13741 5.23338 -2.39148 16.0956 3.84852 20.2556" stroke="white" /> <circle cx="6.4485" cy="15.9223" r="6.06667" fill="white" /> <path d="M22.0486 0.322266C18.0041 5.23338 11.4752 16.0956 17.7152 20.2556" stroke="white" /> <circle cx="20.3152" cy="15.9223" r="6.06667" fill="white" /> </svg>
                                <p className="mt-3 font-normal  text-description text-justify">
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                    Lorem ipsum sit amet, consectetuer adipiscing elit, Lorem
                                    ipsum dolor sit amet, consectetuer adipiscing elit, Lorem
                                    ipsum dolor sit amet, adi elit, Lorem ipsum dolor sit amet,
                                    Lorem ipsum dolor sit amet, adi elit, Lorem ipsum dolor sit
                                    amet
                                </p>
                            </div>
                            <div className="flex flex-row items-center my-3 gap-x-3">
                                <div className="w-14 h-14 border-dotted border-2 border-[#0038FF] rounded-full">
                                    <img
                                        className="mb-3 rounded-full shadow-lg "
                                        src="/img/Ellipse 43.png"
                                        alt="Bonnie "
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <h5 className="mb-1 font-semibold text-subtitle ">
                                        Daniel Lane,
                                    </h5>

                                    <span className="text-[12px]  font-normal">
                                        Developer, Lorem ipsum dolor sit amet,
                                    </span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="px-6 py-10 bg-[#0000004D] border-gradient-box-2 rounded-3xl flex flex-col items-center">
                            <div className="">
                                <svg width="27" height="22" viewBox="0 0 27 22" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M8.18186 0.322266C4.13741 5.23338 -2.39148 16.0956 3.84852 20.2556" stroke="white" /> <circle cx="6.4485" cy="15.9223" r="6.06667" fill="white" /> <path d="M22.0486 0.322266C18.0041 5.23338 11.4752 16.0956 17.7152 20.2556" stroke="white" /> <circle cx="20.3152" cy="15.9223" r="6.06667" fill="white" /> </svg>
                                <p className="mt-3 font-normal  text-description text-justify">
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                    Lorem ipsum sit amet, consectetuer adipiscing elit, Lorem
                                    ipsum dolor sit amet, consectetuer adipiscing elit, Lorem
                                    ipsum dolor sit amet, adi elit, Lorem ipsum dolor sit amet,
                                    Lorem ipsum dolor sit amet, adi elit, Lorem ipsum dolor sit
                                    amet
                                </p>
                            </div>
                            <div className="flex flex-row items-center my-3 gap-x-3">
                                <div className="w-14 h-14 border-dotted border-2 border-[#0038FF] rounded-full">
                                    <img
                                        className="mb-3 rounded-full shadow-lg "
                                        src="/img/Ellipse 43.png"
                                        alt="Bonnie "
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <h5 className="mb-1 font-semibold text-subtitle ">
                                        Daniel Lane,
                                    </h5>

                                    <span className="text-[12px]  font-normal">
                                        Developer, Lorem ipsum dolor sit amet,
                                    </span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="px-6 py-10 bg-[#0000004D] border-gradient-box-3 rounded-3xl flex flex-col items-center">
                            <div className="">
                                <svg width="27" height="22" viewBox="0 0 27 22" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M8.18186 0.322266C4.13741 5.23338 -2.39148 16.0956 3.84852 20.2556" stroke="white" /> <circle cx="6.4485" cy="15.9223" r="6.06667" fill="white" /> <path d="M22.0486 0.322266C18.0041 5.23338 11.4752 16.0956 17.7152 20.2556" stroke="white" /> <circle cx="20.3152" cy="15.9223" r="6.06667" fill="white" /> </svg>
                                <p className="mt-3 font-normal  text-description text-justify">
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                    Lorem ipsum sit amet, consectetuer adipiscing elit, Lorem
                                    ipsum dolor sit amet, consectetuer adipiscing elit, Lorem
                                    ipsum dolor sit amet, adi elit, Lorem ipsum dolor sit amet,
                                    Lorem ipsum dolor sit amet, adi elit, Lorem ipsum dolor sit
                                    amet
                                </p>
                            </div>
                            <div className="flex flex-row items-center my-3 gap-x-3">
                                <div className="w-14 h-14 border-dotted border-2 border-[#0038FF] rounded-full">
                                    <img
                                        className="mb-3 rounded-full shadow-lg "
                                        src="/img/Ellipse 43.png"
                                        alt="Bonnie "
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <h5 className="mb-1 font-semibold text-subtitle ">
                                        Daniel Lane,
                                    </h5>

                                    <span className="text-[12px]  font-normal">
                                        Developer, Lorem ipsum dolor sit amet,
                                    </span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="px-6 py-10 bg-[#0000004D] border-gradient-box-2 rounded-3xl flex flex-col items-center">
                            <div className="">
                                <svg width="27" height="22" viewBox="0 0 27 22" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M8.18186 0.322266C4.13741 5.23338 -2.39148 16.0956 3.84852 20.2556" stroke="white" /> <circle cx="6.4485" cy="15.9223" r="6.06667" fill="white" /> <path d="M22.0486 0.322266C18.0041 5.23338 11.4752 16.0956 17.7152 20.2556" stroke="white" /> <circle cx="20.3152" cy="15.9223" r="6.06667" fill="white" /> </svg>
                                <p className="mt-3 font-normal  text-description text-justify">
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                    Lorem ipsum sit amet, consectetuer adipiscing elit, Lorem
                                    ipsum dolor sit amet, consectetuer adipiscing elit, Lorem
                                    ipsum dolor sit amet, adi elit, Lorem ipsum dolor sit amet,
                                    Lorem ipsum dolor sit amet, adi elit, Lorem ipsum dolor sit
                                    amet
                                </p>
                            </div>
                            <div className="flex flex-row items-center my-3 gap-x-3">
                                <div className="w-14 h-14 border-dotted border-2 border-[#0038FF] rounded-full">
                                    <img
                                        className="mb-3 rounded-full shadow-lg "
                                        src="/img/Ellipse 43.png"
                                        alt="Bonnie "
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <h5 className="mb-1 font-semibold text-subtitle ">
                                        Daniel Lane,
                                    </h5>

                                    <span className="text-[12px]  font-normal">
                                        Developer, Lorem ipsum dolor sit amet,
                                    </span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="px-6 py-10 bg-[#0000004D] border-gradient-box-3 rounded-3xl flex flex-col items-center">
                            <div className="">
                                <svg width="27" height="22" viewBox="0 0 27 22" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M8.18186 0.322266C4.13741 5.23338 -2.39148 16.0956 3.84852 20.2556" stroke="white" /> <circle cx="6.4485" cy="15.9223" r="6.06667" fill="white" /> <path d="M22.0486 0.322266C18.0041 5.23338 11.4752 16.0956 17.7152 20.2556" stroke="white" /> <circle cx="20.3152" cy="15.9223" r="6.06667" fill="white" /> </svg>
                                <p className="mt-3 font-normal  text-description text-justify">
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                    Lorem ipsum sit amet, consectetuer adipiscing elit, Lorem
                                    ipsum dolor sit amet, consectetuer adipiscing elit, Lorem
                                    ipsum dolor sit amet, adi elit, Lorem ipsum dolor sit amet,
                                    Lorem ipsum dolor sit amet, adi elit, Lorem ipsum dolor sit
                                    amet
                                </p>
                            </div>
                            <div className="flex flex-row items-center my-3 gap-x-3">
                                <div className="w-14 h-14 border-dotted border-2 border-[#0038FF] rounded-full">
                                    <img
                                        className="mb-3 rounded-full shadow-lg "
                                        src="/img/Ellipse 43.png"
                                        alt="Bonnie "
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <h5 className="mb-1 font-semibold text-subtitle ">
                                        Daniel Lane,
                                    </h5>

                                    <span className="text-[12px]  font-normal">
                                        Developer, Lorem ipsum dolor sit amet,
                                    </span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Aproch