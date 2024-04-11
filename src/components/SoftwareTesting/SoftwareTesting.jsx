import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
const swiperData = [
    {
        img: "./img/slide1.png",
        para: "Quality Focus",
        subpara: "We are committed to ensuring the highest level of quality in our software testing services, utilising best practices and industry standards to deliver accurate and reliable testing results",

    },
    {
        img: "./img/slide2.png",
        para: "Thoroughness and Accuracy",
        subpara: "We are committed to ensuring thoroughness and accuracy in our software testing services, utilising a range of testing techniques and tools to detect and eliminate bugs and errors in software applications",
    },
    {
        img: "./img/slide3.png",
        para: "Simplifying Complexity",
        subpara: "We understand that software testing can be complex, which is why we strive to simplify the process for our clients, providing clear and concise testing plans and reports that are easy to understand and implement.",
    },
    {
        img: "./img/slide4.png",
        para: "Continous improvement",
        subpara: "We are dedicated to continuous improvement in our software testing services, regularly evaluating and refining our processes and methodologies to deliver better testing solutions and exceed our clients' expectations.",
    }
]


function SoftwareTesting() {
    return (
        <>
            <div className='pt-36 '>
                <div className=' w-full  flex lg:flex-row lg:px-16 flex-col justify-between items-center'>
                    <div className=' w-full lg:w-auto px-7   md:px-10'>

                        <p className=' bg-gradient-to-b from-[#e73e3b] to-[#9c3f7a] uppercase text-start leading-[120%]  md:text-[60px]  text-[30px] font-bold inline-block text-transparent bg-clip-text  tracking-[6.9%]'>Software</p>
                        <p className="dark:text-white text-black  text-start lg:text-[35px] md:text-[30px] text-[16px] font-semibold  uppercase lg:leading-[49px]  md:pb-0 pb-5 md:tracking-[20%]  tracking-[14px]">Testing & Validation</p>

                        <p className=" dark:text-white lg:w-[652px] md:w-[432px] text-black  text-start lg:text-[20px] md:text-[20px] md:pt-[37px] md:pb-[31px] pb-[16px] font-normal md:leading-[183%] leading-[33px]">We offer comprehensive software testing services that ensure the quality and performance of your applications. Our experienced team uses the latest testing tools and methodologies to provide reliable and efficient testing solutions.
                        </p>
                        <p className=' font-semibold text-[25px] lg:leading-[145%]'>
                            Need reliable software testing for seamless application performance?
                        </p>
                        <button className='lg:w-[520px] lg:h-[65px] md:w-[400px] w-full md:h-[45px] h-[35px] mt-[31px] md:mt-[15px] rounded-[8px] border border-[#9c3f7a] lg:text-[30px] md:text-[22px] font-normal dark:text-white text-black text-center'>Call Now Or Get Intouch</button>
                    </div>
                    <div className='pt-[60px] md:pt-[50px] lg:pt-0  lg:pr-[40px]'>
                        <img src='/img/image 443.png' alt="logo" className=" w-[330px] h-[290px]  md:w-[500px] md:h-[490px] lg:w-[640px] lg:h-[400px]" />
                    </div>
                </div>


                <div className=' w-full md:mt-0 mt-5 py-16 md:px-0 px-6 flex md:flex-row flex-col justify-center items-center gap-5'>

                    <div className=' md:w-[45%] flex flex-row justify-around '>
                        <img src="/img/Frame.png" alt="sadf" className=' lg:w-[530px] lg:h-[300px]' />
                    </div>
                    <div className='  md:w-[45%]'>
                        <p className=' font-bold text-[25px] tracking-[40%]'>Software Testing: High-quality testing for seamless application performance.
                        </p>
                        <div className=' my-5 w-[50%] h-[1px] bg-gradient-to-b from-[#e93e3a] to-[#e93e3a]'>

                        </div>
                        <p className=' font-medium text-[16px] tracking-[162%]'>Pruthatek delivers top-notch Software Quality Assurance services that ensure seamless application performance across all devices, anywhere and anytime. We follow a systematic, ethical approach to provide our clients with the highest quality products, thoroughly verified and validated at every stage of development. Trust us to enable your digital transformation and give you the competitive edge you need to succeed in the fast-paced digital world.</p>
                    </div>
                </div>

                <div className='flex justify-center items-center pt-[83px]'>
                    <p className="lg:px-16 customSoftwareModern md:px-12 px-6 text-center lg:text-[30px] text-[20px] font-bold capitalize leading-9">Ensure the success of your software with our expert testing services.</p>
                </div>


                <div className="lg:w-[1378px] w-full pt-10 lg:pt-14 px-7 ml-auto mx-7">

                    <div className='  hidden lg:block'>
                        <Swiper
                            slidesPerView={"3.1"}
                            spaceBetween={30}
                            className="mySwiper"
                            autoplay={{
                                delay: 1000,
                                disableOnInteraction: false,
                            }}
                        >
                            {
                                swiperData.map((e) => {
                                    return (
                                        <>

                                            <SwiperSlide>
                                                <div className=' rounded-[13px] md:p-5 p-4 lg:w-[418px] lg:h-[355px] h-[300px]   bg-[#D9D9D933] '>
                                                    <div className=' lg:w-[105px] w-[60px]  m-3 md:m-6'>
                                                        <img src={e.img} alt="af" />
                                                    </div>
                                                    <div className=' md:space-y-5 space-y-2 h-1/2'>
                                                        <p className=' lg:text-[20px] leading-[30px] tracking-[3%] font-normal'>{e.para}</p>
                                                        <p className='lg:text-[16px] leading-[25px] tracking-[3%] font-normal'>{e.subpara}</p>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        </>
                                    )
                                })
                            }
                        </Swiper>

                    </div>

                    <div className=' hidden md:block lg:hidden '>
                        <Swiper
                            slidesPerView={"2.1"}
                            spaceBetween={20}
                            className="mySwiper"
                        >
                            {
                                swiperData.map((e) => {
                                    return (
                                        <>

                                            <SwiperSlide>
                                                <div className=' rounded-[13px] md:p-4 p-4 md:w-[328px] md:h-[345px] h-[300px]   bg-[#D9D9D933] '>
                                                    <div className=' lg:w-[105px] w-[60px]  m-3 md:m-5'>
                                                        <img src={e.img} alt="af" />
                                                    </div>
                                                    <div className=' md:space-y-5 space-y-2 h-1/2'>
                                                        <p className=' md:text-[20px] leading-[30px] tracking-[3%] font-normal'>{e.para}</p>
                                                        <p className='md:text-[18px] leading-[25px] tracking-[3%] font-normal'>{e.subpara}</p>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        </>
                                    )
                                })
                            }
                        </Swiper>

                    </div>


                    <div className='   md:hidden lg:hidden '>
                        <Swiper
                            slidesPerView={"1.13"}
                            spaceBetween={20}
                            className="mySwiper"
                        >
                            {
                                swiperData.map((e) => {
                                    return (
                                        <>

                                            <SwiperSlide>
                                                <div className=' rounded-[13px] md:p-5 p-4 lg:w-[428px] lg:h-[355px] h-[320px]   bg-[#D9D9D933] '>
                                                    <div className=' lg:w-[105px] w-[60px]  m-3 md:m-6'>
                                                        <img src={e.img} alt="af" />
                                                    </div>
                                                    <div className=' md:space-y-5 space-y-2 h-1/2'>
                                                        <p className=' lg:text-[20px]  leading-[30px] tracking-[3%] font-normal'>{e.para}</p>
                                                        <p className='lg:text-[16px] leading-[25px] tracking-[3%] font-normal text-[16px]'>{e.subpara}</p>
px                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        </>
                                    )
                                })
                            }
                        </Swiper>

                    </div>
                </div>

                <div>
                    <h1 className=" text-center md:text-[45px] text-[30px] md:pt-12 lg:pt-0  lg:mt-12   pruthaGlobalEng  leading-[76px] font-semibold uppercase  tracking-[23%]">Pruthatek global engagement</h1>
                </div>


            </div>


        </>
    )
}

export default SoftwareTesting;