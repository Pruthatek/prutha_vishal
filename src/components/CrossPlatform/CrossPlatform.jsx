import React from 'react'

import SwiperCore, { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { NavLink } from 'react-router-dom';

SwiperCore.use([A11y, Autoplay, Navigation, Pagination, Scrollbar]);
const data = [
    {
        img: "/img/iconcp1.svg",
        title: "Cross-Platform Expertise",
        desc: "Our team has extensive experience in developing applications that work seamlessly across multiple platforms, ensuring that your business reaches a wider audience and maximises its potential."
    },
    {
        img: "/img/iconcp2.svg",
        title: "Customised Solutions",
        desc: "We work closely with our clients to understand their unique requirements and develop customised solutions that meet their specific business needs"
    },
    {
        img: "/img/iconcp3.svg",
        title: "High-Quality Standards",
        desc: "We maintain high-quality standards in our cross-platform development process, ensuring that your application is reliable, secure, and performs at its best."
    },
    {
        img: "/img/iconcp4.svg",
        title: "Agile Methodology",
        desc: "We use agile methodology to ensure that our cross-platform development process is flexible, efficient, and responsive to changing business needs."
    },
    {
        img: "/img/iconcp5.svg",
        title: "Continuous Support",
        desc: "We provide continuous support to our clients even after the completion of the project, ensuring that their application is up-to-date, secure, and performing at its best."
    },
]

const CrossPlatform = (props) => {
    return (
        <div className='pt-36'>
            <div className='flex md:flex-row flex-col justify-between items-center'>
                <div className='md:px-10 px-[14px]'>

                    <p className=' bg-gradient-to-r from-[#732f85] to-[#f729e5]  text-start  lg:text-[60px] md:text-[40px] text-[30px] font-bold inline-block text-transparent bg-clip-text'>CROSS-PLATFORM</p>
                    <p className="dark:text-white text-black  text-start lg:text-[35px] md:text-[22px] text-[14px] font-semibold  uppercase ">DEVELOPMENT SERVICES</p>
                    <p className="lg:w-[652px] md:w-[432px] w-[380px] dark:text-white  text-black  text-start lg:text-[20px] md:text-[16px] text-[14px] md:pt-[37px] font-[200] leading-[28px] pt-4 md:leading-[34px]">PruthaTek offers cross-platform development services to help you create engaging applications that run seamlessly on multiple operating systems and devices. We collaborate with you to reflect your brand identity and ensure a seamless user experience. Let us help you captivate your audience and drive your business forward.</p>
                    <NavLink to="/contact">
                    <button className='mt-[65px] lg:w-[520px] lg:h-[65px] md:w-[400px] md:h-[45px] w-[334px] h-[35px] mx-6 md:mx-0 rounded-[8px] border border-[#732f85] lg:text-[30px] md:text-[22px] font-normal dark:text-white text-black text-center'>Call Now Or Get Intouch</button>
                    </NavLink>
                </div>
                <div className='pt-[60px] md:pt-0 lg:pr-[40px] px-10 md:px-0'>
                    <img src='/img/vcgraphic4.svg' />
                </div>
            </div>

            <div className='flex flex-col justify-center items-center lg:pt-[121px] pt-16'>
                <p className='lg:px-16 md:px-12 px-6 text-center font-bold lg:text-[30px] md:text-[24px] text-[20px] bg-gradient-to-r from-[#F05225] to-[#EEA820]  inline-block text-transparent bg-clip-text'>PruthaTek delivers captivating cross-platform apps with seamless user experience and brand identity reflection.</p>
                <p className='lg:px-16 md:px-12 px-6 text-center font-light md:text-[18px] text-[14px] pt-[32px]'>With our expertise in cross-platform development, businesses can create applications that reflect their brand identity and provide a superior user experience, helping them stand out in a crowded market.</p>
            </div>

            <div className='lg:px-10 px-4'>
                <Swiper modules={[A11y, Autoplay]}
                    autoplay={{
                        delay: 2500,
                    }}
                    breakpoints={{
                        300: {
                            slidesPerView: 1,
                            spaceBetween: 50,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 120,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 50,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 380,
                        },
                        1280: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                    }}
                // onSwiper={(swiper) => console.log(swiper)}
                // onSlideChange={() => console.log('slide change')}
                >
                    {data.map(({ img, title, desc }, index) => {
                        return (
                            <SwiperSlide className='mt-[62px]'>
                                <div key={index} className="lg:w-[424px] lg:h-[356px] w-[375px] h-[356px] bg-zinc-300 bg-opacity-20 rounded-[13px] backdrop-blur-[20px]">
                                    <img src={img} className='pt-[45px] ml-[55px]' />
                                    <div className='pl-[24px] pt-[27px]'>
                                        <p className='text-[20px] font-normal'>{title}</p>
                                        <p className='text-[16px] font-normal pt-[23px]'>{desc}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )

                    })}
                </Swiper>
            </div>

            <div className='flex flex-col justify-center items-center lg:pt-[121px] pt-16'>
                <p className='lg:px-16 md:px-12 px-6 text-center font-bold lg:text-[30px] md:text-[24px] text-[20px] bg-gradient-to-r from-[#F05225] to-[#EEA820]  inline-block text-transparent bg-clip-text'>We at PruthaTek provide the following cross-platform development services (CPDS):</p>
                <div className='lg:flex lg:flex-row flex flex-col pt-[56px]'>
                    <img src='/img/vcgraphic7.svg' className='px-10' />

                    <div className='lg:pl-[100px] md:px-14 px-6 lg:pr-[20px] pt-[50px] lg:pt-0'>
                        <div>
                            <p className='bg-gradient-to-r from-[#0038FF] to-[#3A86FF]  text-start inline-block text-transparent bg-clip-text pl-[24px] text-[16px] font-[600]'>Cross platform app development</p>
                            <p className='pl-[24px]'>We develop applications that can run seamlessly across multiple platforms, such as iOS and Android, using tools such as React Native and Flutter. </p>
                        </div>

                        <div className='pt-[24px]'>
                            <p className='bg-gradient-to-r from-[#F05225] to-[#EEA820]  text-start inline-block text-transparent bg-clip-text pl-[24px] text-[16px] font-[600]'>Responsive web development </p>
                            <p className='pl-[24px]'>Our web development services ensure that your website is optimised for all devices, delivering a consistent user experience across desktop, tablet, and mobile.</p>
                        </div>

                        <div className='pt-[24px]'>
                            <p className='bg-gradient-to-r from-[#7FBB42] to-[#3D7800]  text-start inline-block text-transparent bg-clip-text pl-[24px] text-[16px] font-[600]'>Progressive web apps (PWA)</p>
                            <p className='pl-[24px]'>We can help you create PWAs that look and feel like a native app, providing a fast and engaging user experience, while also being easily discoverable on the web.</p>
                        </div>

                        <div className='pt-[24px]'>
                            <p className='bg-gradient-to-r from-[#0DA1DA] to-[#5DB98E]  text-start inline-block text-transparent bg-clip-text pl-[24px] text-[16px] font-[600]'>Cloud-based Application Development </p>
                            <p className='pl-[24px]'>Our cloud-based solutions allow you to access your application from anywhere, and provide scalability and cost-effectiveness. </p>
                        </div>

                        <div className='pt-[24px]'>
                            <p className='bg-gradient-to-r from-[#0DA1DA] to-[#5DB98E]  text-start inline-block text-transparent bg-clip-text pl-[24px] text-[16px] font-[600]'>API integration and development</p>
                            <p className='pl-[24px]'>We can help you integrate third-party APIs into your application or develop custom APIs to streamline your business operations.</p>
                        </div>

                    </div>
                </div>
            </div>

            <div className='relative lg:px-16 md:px-12 px-12 lg:flex lg:flex-row flex flex-col justify-center items-center lg:pt-[140px] md:pt-[80px] pt-[50px]'>
            <img src='/img/bgvector.png' className='absolute lg:-right-10 md:-right-0 '/>
                <div className=''>
                    <p className='text-[25px] font-medium'>Why We use Flutter and React Native?</p>
                    <div className='w-[300px]  h-[1px] rounded bg-gradient-to-r from-[#0038FF] to-[#9747FF] my-3 '></div>
                    <p className='text-[16px]'>Flutter and React Native are two popular cross-platform development frameworks used for building mobile Applications that can run on Multiple Operating Systems Like, Android, IOS, Mac, Windows, Linux etc.</p>                  
                    <p className='text-[25px] font-medium pt-10'>Why choose Flutter for Cross platform development?</p>
                    <div className='w-[200px]  h-[1px] rounded bg-gradient-to-r from-[#0DA1DA] to-[#5DB98E] my-3 '></div>                   
                    <p className='text-[16px]'>Flutter is a great choice for cross-platform development due to its ability to build high-performance apps for multiple platforms using a single codebase, hot reload feature, flexible and reusable UI components, rich pre-built widgets, and easy-to-use programming language.</p>
                    <p className='py-7'>Discover how to enhance your cross-platform development projects with the use of advanced features and technologies :-</p>
                    <div className='flex'> {props.theme == "dark" ? <img src='/img/tickw.svg' /> : <img src='/img/tick.svg' />}
                    <p className='px-2'>Dart programming language</p>
                    </div>                   
                    <div className='flex'> {props.theme == "dark" ? <img src='/img/tickw.svg' /> : <img src='/img/tick.svg' />}
                    <p className='px-2'>Material Design and Cupertino widgets for building user interfaces</p>
                    </div>
                    <div className='flex'> {props.theme == "dark" ? <img src='/img/tickw.svg' /> : <img src='/img/tick.svg' />}
                    <p className='px-2'>Plugins and packages</p>
                    </div>
                    <div className='flex'> {props.theme == "dark" ? <img src='/img/tickw.svg' /> : <img src='/img/tick.svg' />}
                    <p className='px-2'>Popular IDEs such as Android Studio, Visual Studio Code, and IntelliJ IDEA.</p>
                    </div>
                </div>
                <img src='/img/vcgraphic8.svg' className='mx-12 mt-[50px] lg:mt-0'/>
            </div>

            <div className='relative lg:px-16 md:px-12 px-12 lg:flex lg:flex-row flex flex-col justify-center items-center pb-20 lg:pt-[169px] md:pt-[100px] pt-[70px]'>
            <img src='/img/bgvector2.png' className='absolute -left-10'/>
               <img src='/img/vcgraphic9.svg'/>
               <div className='lg:pl-[60px] pt-28'>
                  <p className='text-[25px] font-medium'>Why Choose React Native For Cross Platform Development?</p>
                  <div className='w-[300px] h-[1px] rounded bg-gradient-to-r from-[#0038FF] to-[#9747FF] my-3 '></div>
                  <p className='text-[16px]'>React Native is a great choice for cross-platform development due to its ability to build high-performance apps for multiple platforms using a single codebase, declarative programming model, large library of pre-built components, active developer community, and easy integration with other technologies and frameworks.</p>
                  <p className='text-[16px] py-4'>Discover how to enhance your cross-platform development projects with the use of advanced features and technologies :-</p>
                  <div className='flex'> {props.theme == "dark" ? <img src='/img/tickw.svg' /> : <img src='/img/tick.svg' />}
                    <p className='px-2'>JavaScript programming language</p>
                  </div>  
                  <div className='flex'> {props.theme == "dark" ? <img src='/img/tickw.svg' /> : <img src='/img/tick.svg' />}
                    <p className='px-2'>React library for building user interfaces</p>
                  </div>  
                  <div className='flex'> {props.theme == "dark" ? <img src='/img/tickw.svg' /> : <img src='/img/tick.svg' />}
                    <p className='px-2'>Native components for iOS and Android</p>
                  </div>  
                  <div className='flex'> {props.theme == "dark" ? <img src='/img/tickw.svg' /> : <img src='/img/tick.svg' />}
                    <p className='px-2'>Expo framework for rapid app development and prototyping</p>
                  </div>  
                  <div className='flex'> {props.theme == "dark" ? <img src='/img/tickw.svg' /> : <img src='/img/tick.svg' />}
                    <p className='px-2'>Redux for state management</p>
                  </div>  
                  <div className='flex'> {props.theme == "dark" ? <img src='/img/tickw.svg' /> : <img src='/img/tick.svg' />}
                    <p className='px-2'>GraphQL for data querying and manipulation.</p>
                  </div>  
               </div>
            </div>
        </div>
    )
}

export default CrossPlatform
