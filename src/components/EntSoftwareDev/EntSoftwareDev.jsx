import React from 'react'
import '../../index.css'
import EntWebApp from './EntWebApp'
import OurBcontinuity from './OurBcontinuity'
import EntsoftwareAnlitcal from './EntsoftwareAnlitcal'
import EntSoftwareSlider from './EntSoftwareSlider'
const EntSoftwareDev = () => {
  return (
    <>
        <div className=' flex flex-col md:flex-row lg:flex-row  items-center gap-5 md:gap-[4rem] lg:gap-20  pt-28 px-8 md:px-14 lg:px-20'>
            <div className='flex flex-col  '>
            <div>
            <h1 className="   textclip text-[22px] md:text-[25px] lg:text-[45px] not-italic py-1 leading-[108%]  font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#EF32D9] to-[#3F5EFB]">ECOMMERCE Software</h1>
            </div>
            <div>
            <h2 className='devshadow text-justify text-[#515151]  py-2 text-[18px]  lg:text-[20px] font-semibold not-italic leading-[140%] tracking-[11px] lg:tracking-[29.925px] uppercase'>Development</h2>
            </div>
            <div>
            <p className='text-[#101010] dark:text-white text-justify text-[16px] md:text-[18px] not-italic font-midum leading-[170%] tracking-[0.54px] capitlize '>To market your products and services to drive more results, you need to consider a knowledgeable app development company in methodology and execution. We have helped businesses with customized solutions to grow their business with better performance.</p>
            <p className=' text-[#101010] dark:text-white py-2 text-justify text-[16px] md:text-[18px] not-italic font-midum leading-[170%] tracking-[0.54px] capitlize '>Whether you are looking for a qualified software development provider to deliver a custom enterprise software solution, an experienced integrator to create a connected software ecosystem or a diversified team of developers to handle a bunch of enterprise apps, you can turn to PruthaTek.</p>
            </div> 
            </div>

            <div className=' flex items-center justify-cenetr mx-auto hidden md:block lg:block'>
           

                <img src="/img/star 6.png" className=' w-[100%] md:w-[100%] lg:w-[90%]  h-auto  rounded-full object-cover transition duration-300 ease-in-out hover:scale-110' alt='star-image'/>

            </div>
           
        </div>

        {/*=================second components================ */}
        <OurBcontinuity/>

         {/*=================third components================ */}

        <EntWebApp/>
         {/*=================fourth components================ */}

         <EntsoftwareAnlitcal/>

         {/* ===================six components================ */}

          <EntSoftwareSlider/>  
    </>
  )
}

export default EntSoftwareDev