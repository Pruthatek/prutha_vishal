import React from 'react'

const EntWebApp = () => {
  return (
    <>
      <div className=' flex flex-col lg:flex-row items-center gap-3 lg:gap-5 md:gap-4  py-7 px-6 lg:px-20 md:px-10'>
        <div className='image flex items-center  '>
        <div className='relative '>
          <img src="/img/web.png" className='w-[64%] lg:w-[80%] md:-[90%] h-auto mx-auto' alt='star-image' />
        
            <div className='absolute top-[50%] left-[70%]  lg:top-[60%] lg:left-[80%] md:top-[45%] md:left-[70%]'>

            <img src="/img/mobail.png" className=' w-[40%] md:w-[50%] lg:w-[65%]  h-auto  ' alt='star-image' />
            </div>
          </div>
        </div>
        <div className='flex flex-col py-10 md:py-0 lg:pt-0 md:pt-3 lg:py-5'>

          <h1 className="entwebapp    text-[28px] lg:text-[35px] not-italic leading-normal font-semibold  text-transparent bg-clip-text bg-gradient-to-r from-[#EF32D9] to-[#3F5EFB]">Enterprise Web Apps</h1>



          <p className=' py-2 text-[#101010] dark:text-white text-justify text-[18px] not-italic font-normal leading-[150%]  capitlize '>Leverage Our Expertise Resources For The Best Enterprise Web Development To Reach Your Target Audience.As A Tech Geek, We Develop And Deliver Next-generation Enterprise  Applications To Streamline Your  Business Processes And Enhance Our Enterprise Web App Solution.</p>

          <h1 className="entmobileapp text-justify text-[28px] lg:text-[35px] not-italic leading-normal font-semibold  text-transparent bg-clip-text bg-gradient-to-r from-[#EF32D9] to-[#3F5EFB]">Enterprise Mobile Apps</h1>

          <p className='py-2 text-[#101010] dark:text-white  text-justify text-[18px] not-italic font-normal leading-[150%]  capitlize '>To Deliver A Better Customer Experience,
            You Need An Attractive And Effective Mobile App Design And Development And Implementation Based On Business Goals. Enterprise Mobile App Assists With More
            Customers And Is Best Suitable For Business With Useful Products And Services.</p>

        </div>



      </div>

    </>
  )
}

export default EntWebApp