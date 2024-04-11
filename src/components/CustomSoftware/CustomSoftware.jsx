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
    img: "/img/iconcs1.svg",
    title: "Collaborative Partnership",
    desc: "We believe in collaborating with our clients to understand their unique business needs and develop customised software solutions that meet their requirements."
  },
  {
    img: "/img/iconcs2.svg",
    title: "Innovative Approaches",
    desc: "Our software development approach is driven by innovation, resulting in creative and unique software solutions that are visually engaging, user-friendly, and tailored to your specific needs"
  },
  {
    img: "/img/iconcs3.svg",
    title: "Customer-Centred Approach",
    desc: "Our focus is on providing exceptional customer experiences with our custom software development services, ensuring that our software is optimised for all devices and delivers efficient, user-friendly solutions for your business needs"
  },
  {
    img: "/img/iconcs1.svg",
    title: "Collaborative Partnership",
    desc: "We believe in collaborating with our clients to understand their unique business needs and develop customised software solutions that meet their requirements."
  },
]

const CustomSoftware = (props) => {
  return (
    <div className='pt-36'>
      <div className='flex md:flex-row flex-col justify-between items-center'>
        <div className='md:px-10 px-[14px]'>

          <p className=' bg-gradient-to-r from-[#0DA1DA] to-[#5DB98E]  text-start  lg:text-[60px] md:text-[40px] text-[30px] font-bold inline-block text-transparent bg-clip-text'>CUSTOM SOFTWARE</p>
          <p className="dark:text-white text-black  text-start lg:text-[35px] md:text-[22px] text-[14px] font-semibold  uppercase leading-[49px] md:tracking-[29.93px] tracking-[24px]">DEVELOPMENT</p>
          <p className=" dark:text-white  text-black  text-start lg:text-[25px] md:text-[20px] md:pt-[37px]  font-normal leading-[28px]">Services for Developing Custom Software</p>
          <p className=" dark:text-white lg:w-[652px] md:w-[432px] w-[380px] text-black  text-start lg:text-[20px] md:text-[16px] pt-[22px] pb-[30px] font-normal leading-[28px]">Need software Bespoke for your business? PruthaTek's expertise in technology allows us to create unique solutions that meet your needs.</p>
          <NavLink to= "/contact">
          <button className='lg:w-[520px] lg:h-[65px] md:w-[400px] md:h-[45px] w-[334px] h-[35px] mt-[31px] mx-6 md:mx-0 rounded-[8px] border border-lime-700 lg:text-[30px] md:text-[22px] font-normal dark:text-white text-black text-center'>Call Now Or Get Intouch</button>
          </NavLink>
        </div>
        <div className='pt-[60px] md:pt-0 lg:pr-[40px]'>
          <img src='/img/vcgraphic4.svg' />
        </div>
      </div>

      <div className='flex justify-center items-center pt-[83px]'>
        <p className="lg:px-16 md:px-12 px-6 text-center lg:text-[25px] text-[20px] font-bold capitalize leading-9">The modern, volatile digital economy coexists with IT and software application development. Users nowadays are also more picky than ever, and brand loyalty and client application commitment are now essentially unrelated notions</p>
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
                <div key={index} class="lg:w-[424px] lg:h-[356px] w-[375px] h-[356px] bg-zinc-300 bg-opacity-20 rounded-[13px] backdrop-blur-[20px]">
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

      <div className='flex-col flex justify-between items-center pt-[83px]'>
        <p className="lg:px-16 md:px-12 px-6 text-center lg:text-[25px] text-[20px] font-bold capitalize leading-9">Design, programming, testing, and integration are among the bespoke software development services offered by PruthaTek to help businesses succeed online.</p>

        <div className='md:pt-[100px] pt-[70px] lg:px-16 lg:flex lg:flex-row md:flex md:flex-col justify-between items-center'>
          <img src='/img/vcgraphic5.svg' className='md:w-[516px] md:h-[396px] w-[380px] h-[200px]' />

          <div className='lg:pl-[100px] md:px-14 px-6 lg:pr-[20px] pt-[50px] lg:pt-0'>
            <div>
              <div className='flex'>
                {props.theme == "dark" ? <img src='/img/tickw.svg' /> : <img src='/img/tick.svg' />}
                <p className='bg-gradient-to-r from-[#0038FF] to-[#3A86FF]  text-start inline-block text-transparent bg-clip-text pl-[24px] text-[16px] font-[600]'>Custom Software Development : </p>
              </div>
              <p className='pl-[40px]'>We specialise in developing custom software solutions that cater to your unique requirements, ensuring that your software stands out from the crowd and reflects your brand identity.</p>
            </div>

            <div className='pt-[24px]'>
              <div className='flex'>
                {props.theme == "dark" ? <img src='/img/tickw.svg' /> : <img src='/img/tick.svg' />}
                <p className='bg-gradient-to-r from-[#F05225] to-[#EEA820]  text-start inline-block text-transparent bg-clip-text pl-[24px] text-[16px] font-[600]'>Enterprise Software Development : </p>
              </div>
              <p className='pl-[40px]'>Our enterprise software development services cater to businesses looking to establish a strong digital presence, allowing you to streamline your business processes and improve operational efficiency..</p>
            </div>

            <div className='pt-[24px]'>
              <div className='flex'>
                {props.theme == "dark" ? <img src='/img/tickw.svg' /> : <img src='/img/tick.svg' />}
                <p className='bg-gradient-to-r from-[#7FBB42] to-[#3D7800]  text-start inline-block text-transparent bg-clip-text pl-[24px] text-[16px] font-[600]'>Database Management and Optimization : </p>
              </div>
              <p className='pl-[40px]'>We provide database management services, allowing you to manage and analyse your data with ease, providing a hassle-free data management experience. </p>
            </div>

            <div className='pt-[24px]'>
              <div className='flex'>
                {props.theme == "dark" ? <img src='/img/tickw.svg' /> : <img src='/img/tick.svg' />}
                <p className='bg-gradient-to-r from-[#0DA1DA] to-[#5DB98E]  text-start inline-block text-transparent bg-clip-text pl-[24px] text-[16px] font-[600]'>Mobile App Development : </p>
              </div>
              <p className='pl-[40px]'>Our mobile app development services help you establish a strong mobile presence, allowing you to connect with your customers on the go and drive engagement..</p>
            </div>

          </div>
        </div>


      </div>

      <div className='flex-col flex justify-center items-center lg:pt-[146px] pt-12'>
        <p className="lg:px-16 md:px-12 px-6 text-center lg:text-[25px] text-[20px] font-bold capitalize leading-9">Benefits of using our services for bespoke software development include:</p>
        <img src='/img/vcgraphic6.svg' className='mt-[75px] md:px-16 lg:px-0 px-10' />

        <div className='lg:flex lg:flex-row flex flex-col md:px-16 px-6 py-16'>
          <div>
            <div className='pb-14'>
              <div className='flex'>
                <div className="flex items-center justify-center">
                  <div className="md:h-[55px] md:w-[55px] w-[45px] h-[45px] rounded-full bg-gradient-to-r from-[#FF63F9] via-[#E41EAD] to-[#FF008D] p-1">
                  <div className={`flex h-full w-full rounded-full items-center justify-center ${props.theme === "light" ? "bg-white" : "bg-black"}`}>
                      <h1 className="md:text-[35px] text-[28px]">1</h1>
                    </div>
                  </div>
                </div>
                <p className='md:px-10 px-4 bg-gradient-to-r from-[#FF63F9] via-[#E41EAD] to-[#FF008D]  text-start inline-block text-transparent bg-clip-text md:text-[30px] text-[24px] font-[500]'>Streamlined Business Processes</p>
              </div>
              <p className='md:px-24 pl-16 pt-4 md:pt-0 md:text-[20px] text-[18px] font-[400]'>Our custom software development services help streamline your business processes, enabling you to work more efficiently and effectively. </p>
            </div>

            <div className='pb-14 lg:pb-0'>
              <div className='flex'>
                <div className="flex items-center justify-center">
                  <div className="md:h-[55px] md:w-[55px] w-[45px] h-[45px] rounded-full bg-gradient-to-r from-[#0DA1DA] to-[#5DB98E] p-1">
                  <div className={`flex h-full w-full rounded-full items-center justify-center ${props.theme === "light" ? "bg-white" : "bg-black"}`}>
                      <h1 className="md:text-[35px] text-[28px]">2</h1>
                    </div>
                  </div>
                </div>
                <p className='md:px-10 px-4  bg-gradient-to-r from-[#0DA1DA] to-[#5DB98E] text-start inline-block text-transparent bg-clip-text  md:text-[30px] text-[24px] font-[500]'>Competitive Edge</p>
              </div>
              <p className='md:px-24 pl-16 pt-4 md:pt-0 md:text-[20px] text-[18px] font-[400]'>Custom software can give you a competitive edge by providing you with unique features and functionality that are specific to your business needs.</p>
            </div>

          </div>

          <div>
          <div className='pb-14'>
              <div className='flex'>
        {/* <div className='md:h-[55px] md:w-[55px] w-[45px] h-[45px] gradient-border flex items-center justify-center'><p className='md:text-[35px] text-[28px]'>1</p></div> */}
        
                <div className="flex items-center justify-center">
                  <div className="md:h-[55px] md:w-[55px] w-[45px] h-[45px] rounded-full bg-gradient-to-r from-[#D400A5] via-[#1F7ECB] to-[#2ED6E3] p-1">
                    <div className={`flex h-full w-full rounded-full items-center justify-center ${props.theme === "light" ? "bg-white" : "bg-black"}`}>
                      <h1 className="md:text-[35px] text-[28px]">3</h1>
                    </div>
                  </div>
                </div>
                <p className='md:px-10 px-4 bg-gradient-to-r from-[#D400A5] via-[#1F7ECB] to-[#2ED6E3] text-start inline-block text-transparent bg-clip-text  md:text-[30px] text-[24px] font-[500]'>Improved Performance</p>
              </div>
              <p className='md:px-24 pl-16 pt-4 md:pt-0 md:text-[20px] text-[18px] font-[400]'>With custom software, you can achieve better performance and faster response times, allowing you to provide a better user experience for your customers.</p>
            </div>

            <div className='md:pb-14 lg:pb-0'>
              <div className='flex'>
                <div className="flex items-center justify-center">
                  <div className="md:h-[55px] md:w-[55px] w-[45px] h-[45px] rounded-full bg-gradient-to-r from-[#F05225] to-[#EEA820] p-1">
                  <div className={`flex h-full w-full rounded-full items-center justify-center ${props.theme === "light" ? "bg-white" : "bg-black"}`}>
                      <h1 className="md:text-[35px] text-[28px]">4</h1>
                    </div>
                  </div>
                </div>
                <p className='md:px-10 px-4 bg-gradient-to-r from-[#F05225] to-[#EEA820] text-start inline-block text-transparent bg-clip-text md:text-[30px] text-[24px] font-[500]'>Scalability and Flexibility</p>
              </div>
              <p className='md:px-24 pl-16 pt-4 md:pt-0 md:text-[20px] text-[18px] font-[400]'>Custom software can be designed to be scalable and flexible, allowing it to grow and adapt to your changing business needs over time.</p>
            </div>

          </div>
        </div>


        <p className="lg:px-16 md:px-12 px-6 lg:py-14 text-center lg:text-[25px] text-[20px] font-bold capitalize leading-9">At PruthaTek, we ensure that our custom software development services will provide you with innovative and robust solutions that align with your unique business objectives. Collaborate with us today and witness the transformation we can bring to your operations and customer experience. Let us be your technology partner and take your business to the next level.</p>
      </div>
   
    </div>
  )
}

export default CustomSoftware
