import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

const dataOfDomain = [
    {
        img: './img/image 20.png',
        title: "mComerce",
    },
    {
        img: './img/image 14.png',
        title: "Media Staming",
    },
    {
        img: './img/image 15.png',
        title: "Digital Content",
    },
    {
        img: './img/image 16.png',
        title: "Mobile Health Care",
    },
    {
        img: './img/image 17.png',
        title: "Social Networking",
    },
    {
        img: './img/image 18.png',
        title: "mComerce",
    },
    {
        img: './img/image 19.png',
        title: "mComerce",
    },
];

function MobileDevelopment(prop) {

    const [sliderSetting, setSliderSetting] = useState(window.innerWidth);


    return (
        <>
            <div className="  pt-[76px]   px-7 box-border w-full">


                {/* ///////////////////////////////////////////////////// seciton 1 start /////////////////////////////////////////////// */}
                <div className=' flex w-full flex-col md:flex-row items-center gap-32 justify-center'>

                    <div id='moveme' className=' lg:w-[530px] w-full '>
                        <p id='headingMobileDev' className='text-[30px]  md:text-[40px]  font-extrabold  md:leading-[140%] leading-[120%] tracking-[2px]  uppercase'>Mobile Application
                            Development</p>

                        <p class=" lg:text-justify text-black dark:text-white  pt-7  text-[16px] md:text-[20px] font-normal   capitalize leading-[150%] md:leading-[200%]">With more use of smartphones and tablets worldwide, the transfer of data and analytics gained a prominent foothold, and so Android OS became the most secure and popular. We deliver the best mobile app development solutions for your business growth.</p>
                    </div>

                 
                     <div className='  flex justify-center items-center   lg:h-[610px]  lg:w-[580px] relative w-full'>
                     <div className='  loader'>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                        <img src="./img/mobilebg.svg" alt="" className=' absolute w-[330px]  ' />
                     
                        {/* <div className='circleMobileDev lg:w-[500px] lg:h-[500px] w-full h-full '>
                        </div>  */}
                        </div> 
                </div>

                {/* ///////////////////////////////////////////////////// seciton 1 end /////////////////////////////////////////////// */}


                {/* ///////////////////////////////////////////////////// seciton 2 start /////////////////////////////////////////////// */}
                <div className='pt-5'>
                    <h1 className=" text-center  md:leading-[48px] leading-[28px] md:text-[25px] lg:text-[30px] text-[20px] font-bold">Web Application Development Services
                    </h1>

                    <p className=" text-center text-[16px] md:text-[18px] lg:text-[16px] leading-[25px] md:pt-0 pt-2   tracking-[0.48px]">
                        Our skilled full-stack web app developers have taken the development services to excellent quality.
                    </p>
                </div>


                {/* ///////////////////////////////////////////////////// seciton 2 end /////////////////////////////////////////////// */}



                {/* ///////////////////////////////////////////////////// seciton 3 start /////////////////////////////////////////////// */}


                <div class="lg:w-[1157px] lg:h-[672px] md:w-[700px] mt-[100px] md:h-[1350px] w-full  z-10 relative bg-zinc-300 bg-opacity-10 rounded-[10px] backdrop-filter backdrop-blur-[15px] mx-auto  ">

                    <div className="contact-square-11  top-[-4%] -right-[2%] hidden xl:block " />
                    <div className="contact-square-22   -bottom-[5%] -left-[2%] hidden xl:block  " />

                    <div className='lg:flex lg:flex-row md:flex md:flex-col'>
                        <div className='lg:px-[50px] md:px-[40px] py-[22px] lg:py-[22px] md:py-[32px]' >
                            <p className="lg:w-[436px] md:text-[25px] text-[20px] px-5 md:px-0 font-bold leading-[35px] text-start">We Do Not Just Build Apps. We Craft Top-notch Mobile Experiences.</p>
                            <p className="text-[16px] md:text-[18px] lg:text-[16px] pt-[29px] lg:w-[436px] md:px-0 px-5 leading-[162%] tracking-[0.5px] font-normal  md:text-justify ">The organization and its working methodologies have been changing, and BYOD fits more popular. At PruthaTek, we understand the need and importance of enterprise mobility solutions and how it can transform your business.</p>
                            <img src='/img/mobileDevimg2.png' className='mt-[56px] md:ml-[100px] md:px-0 px-7 lg:ml-0' alt='logos' />
                        </div>

                        <div className='py-[35px] md:px-[40px] px-5'>
                            <p className='font-medium text-[18px] md:text-[20px] lg:text-[18px] text-start'>User Experience Design</p>
                            <div className='w-[100px] md:w-[150px] lg:w-[100px] bg-white h-[1px] rounded bg-gradient-to-r from-[#0038FF] to-[#9747FF] my-[9px] md:my-2 lg:my-[9px] '></div>
                            <p className="md:text-[18px] lg:text-[13px]  text-[14px] md:tracking-normal tracking-[0.6px] font-normal leading-[18.20px] text-start">
                                Our artistic UI &amp; UX designer team focuses on providing user-friendly designs to transform your ideas into a meaningful solution. With our mobile application design service, we support your project visualization with the complete software application.</p>

                            <p className='font-medium text-[18px] md:text-[20px] lg:text-[18px] text-start pt-[25px]'>Cross-Platform Coverage</p>
                            <div className='w-[100px] md:w-[150px] lg:w-[100px] bg-white h-[1px] rounded bg-gradient-to-r from-[#0DA1DA] to-[#5DB98E] my-[9px] md:my-2 lg:my-[9px] '></div>
                            <p className="md:text-[18px] lg:text-[13px]  text-[14px] md:tracking-normal tracking-[0.6px] font-normal leading-[18.20px] text-start">We leverage the advantages of a Cross-platform framework and offer competitive mobile app development that runs with more than one operating system, in this case, iOS and Android. </p>

                            <p className='font-medium text-[18px] md:text-[20px] lg:text-[18px] text-start pt-[25px]'>Scalability & Interoperability</p>
                            <div className='w-[100px] md:w-[150px] lg:w-[100px] bg-white h-[1px] rounded bg-gradient-to-r from-lime-600 to-lime-900 my-[9px] md:my-2 lg:my-[9px] '></div>
                            <p className="md:text-[18px] lg:text-[13px]  text-[14px] md:tracking-normal tracking-[0.6px] font-normal leading-[18.20px] text-start">Our mobile app solutions are scalable enough to operate in a growing environment where software can run in a wide power range. It overall reduces software development costs and brings products to market quickly.</p>

                            <p className='font-medium text-[18px] md:text-[20px] lg:text-[18px] text-start pt-[25px]'>Security & Compliance</p>
                            <div className='w-[100px] md:w-[150px] lg:w-[100px] bg-white h-[1px] rounded bg-gradient-to-r from-[#F05225] to-[#EEA820] my-[9px] md:my-2 lg:my-[9px] '></div>
                            <p className="md:text-[18px] lg:text-[13px]  text-[14px] md:tracking-normal tracking-[0.6px] font-normal leading-[18.20px] text-start">Every business needs security, and every mobile app demands compliance. We keep safety and compliance in consideration while developing any solution and address the best possible security requirements for a business to run smoothly.</p>

                            <p className='font-medium text-[18px] md:text-[20px] lg:text-[18px] text-start pt-[25px]'>Accelerated Delivery</p>
                            <div className='w-[100px] bg-white h-[1px] rounded bg-gradient-to-r from-[#0038FF] to-[#6DCCFF] my-[9px] '></div>
                            <p className="md:text-[18px] lg:text-[13px]  text-[14px] md:tracking-normal tracking-[0.5px] font-normal leading-[18.20px] text-start">With technology know-how and the best app development resources, the Pyour project is as fat as possible by maintaining quality and enhanced user experience. We focus on delivering remarkable mobile-experience in the industry.</p>


                        </div>
                    </div>
                </div>

                {/* ///////////////////////////////////////////////////// seciton 3 end /////////////////////////////////////////////// */}




                {/* ///////////////////////////////////////////////////// seciton 4 start /////////////////////////////////////////////// */}
                <div className={`pt-[92px] md:pt-[70px] pb-[50px]`}>
                    <div class="text-white lg:text-[30px] md:text-[25px] text-[20px] font-bold font-['Euclid Circular A'] capitalize text-center leading-[48px]">Domain Expertise</div>
                    <p className=" font-normal md:text-[18px] text-[16px]  tracking-[0.5px] leading-[25px] md:leading-[30px]  text-center">We deliver highly functional mobile apps drawing on hands-on experience in the following solution domains:</p>
                </div>

                {
                    sliderSetting > 600 ? <div className=''>
                        <Swiper
                            slidesPerView={"5"}
                            spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                                delay: 1000,
                                disableOnInteraction: false,
                            }}
                            className="mySwiper"
                        >
                            {
                                dataOfDomain.map((e) => {
                                    return (
                                        <>
                                            <SwiperSlide>
                                                <div className=' flex flex-col justify-center gap-5 items-center'>
                                                    <div className='w-[100px] h-[100px]'>

                                                        <img src={e.img} alt="" className=' ' />
                                                    </div>
                                                    <p>{e.title}</p>
                                                </div>
                                            </SwiperSlide>
                                        </>
                                    )
                                })
                            }
                        </Swiper>
                    </div> : <div className=''>
                        <Swiper
                            slidesPerView={"1"}
                            spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                                delay: 1000,
                                disableOnInteraction: false,
                            }}

                            className="mySwiper"
                        >
                            {
                                dataOfDomain.map((e) => {
                                    return (
                                        <>
                                            <SwiperSlide>
                                                <div className=' flex flex-col justify-center gap-5 items-center'>
                                                    <div className='w-[100px] h-[100px]'>

                                                        <img src={e.img} alt="" className=' ' />
                                                    </div>
                                                    <p>{e.title}</p>
                                                </div>
                                            </SwiperSlide>
                                        </>
                                    )
                                })
                            }
                        </Swiper>
                    </div>
                }

                {/* ///////////////////////////////////////////////////// seciton 4 end /////////////////////////////////////////////// */}





                {/* ///////////////////////////////////////////////////// seciton 5 start /////////////////////////////////////////////// */}
                <div className='lg:w-[1287px] flex justify-center items-center mx-auto flex-col px-2 md:pt-[90px] pt-[50px]' >

                    <div>
                        <p className='text-[20px] md:text-[25px] lg:text-[30px]  font-bold md:leading-[18px] lg:leading-[48px] leading-[30px]  text-center'>One - Stop Solution Provider For Multi-platform Projects</p>
                        <p className='md:text-[16px]  text-[14px] font-normal pt-[20px] leading-[162%] text-center tracking-[0.5px] '>With years of experience in IT, we take complete responsibility for our customer's software development needs by ensuring top-quality performance. You can consider us as your one-stop development partner, and we deliver you the best industry-specific services, along with strategic alliances with professional consultants and business experts.</p>
                    </div>
                    <img src="./img/image 21.png" alt="carimg" className='md:pt-[61px] lg:pt-[91px] pt-[40px]' />

                </div>
                {/* ///////////////////////////////////////////////////// seciton 5 end /////////////////////////////////////////////// */}







                {/* ///////////////////////////////////////////////////// seciton 6 start /////////////////////////////////////////////// */}
                <div className=' flex justify-center items-center flex-col gap-[62px] lg:pt-[120px] md:pt-[80px] pt-[70px] pb-[200px] '>
                    <p className=' md:text-[30px] text-[20px] font-bold leading-[160%]  tracking-[3.3px]'>TECHNOLOGIES</p>


                    <div className=' w-fit gap-7 md:gap-20 flex  lg:flex-row flex-col md:flex-row md:flex-wrap  md:justify-center justify-between   lg:justify-between items-center ' >

                        <div className=' relative onHoverMobileDev' >
                            <div className='ios  md:w-[250px] md:h-[270px] w-[176px] h-[190px] bg-[url(./../public/img/VectorL.png)] dark:bg-[url(./../public/img/Vector.png)]'></div>
                            <div className='logoInSvg absolute top-[50%] left-[50%] translate-x-[-50%]  translate-y-[-50%] flex justify-center items-center flex-col'>
                                <img src="/img/image 23.png" alt="sdf" className='md:w-[86px] md:h-[86px] w-[50px] h-[50px] ' />
                                <p className='md:text-[21px] text-[16px]  dark:text-white  text-black  font-medium pt-3 md:pt-[34px]'>iOS</p>
                            </div>
                        </div>


                        <div className=' relative onHoverMobileDev' >
                            <div className='ios1 md:w-[250px] md:h-[270px] w-[176px] h-[190px] bg-[url(./../public/img/VectorL.png)] dark:bg-[url(./../public/img/Vector.png)]'></div>
                            <div className='logoInSvg absolute top-[50%] left-[50%] translate-x-[-50%]  translate-y-[-50%] flex justify-center items-center flex-col'>
                                <img src="/img/image 40.png" alt="sdf" className='md:w-[86px] md:h-[86px] w-[50px] h-[50px] ' />
                                <p className='md:text-[21px] text-[16px] dark:text-white  text-black font-medium pt-3 md:pt-[34px]'>Android</p>
                            </div>
                        </div>


                        <div className=' relative onHoverMobileDev' >
                            <div className='ios2 md:w-[250px] md:h-[270px] w-[176px] h-[190px] bg-[url(./../public/img/VectorL.png)] dark:bg-[url(./../public/img/Vector.png)]'></div>
                            <div className='logoInSvg absolute top-[50%] left-[50%] translate-x-[-50%]  translate-y-[-50%] flex justify-center items-center flex-col'>
                                <img src="/img/image 22.png" alt="sdf" className='md:w-[86px] md:h-[86px] w-[50px] h-[50px] ' />
                                <p className='md:text-[21px] text-[16px] dark:text-white w-[190px] text-center text-black font-medium pt-3 md:pt-[34px]'>Window Mobility</p>
                            </div>
                        </div>


                        <div className=' relative onHoverMobileDev' >
                            <div className='ios3 md:w-[250px] md:h-[270px] w-[176px] h-[190px] bg-[url(./../public/img/VectorL.png)] dark:bg-[url(./../public/img/Vector.png)]'></div>
                            <div className='logoInSvg  absolute top-[50%] left-[50%] translate-x-[-50%]  translate-y-[-50%] flex justify-center items-center flex-col'>
                                <img src="/img/image 80.png" alt="sdf" className='md:w-[86px] md:h-[86px] w-[50px] h-[50px] ' />
                                <p className='md:text-[21px] text-[16px] w-[190px] text-center dark:text-white  text-black font-medium pt-3 md:pt-[34px]'>Cross-Platform</p>
                            </div>
                        </div>



                    </div>
                </div>
                {/* ///////////////////////////////////////////////////// seciton 6 end /////////////////////////////////////////////// */}






            </div>

        </>

    )
}


export default MobileDevelopment;