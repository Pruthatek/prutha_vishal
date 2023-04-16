import React from 'react'

const Subnavbar = () => {
  return (
    <>
    <div className='ml-[3rem] '>
    <div className='  w-[96%] h-[50%]  border-2  rounded-[14px]'>
       

            <ul className='text-[#FFFFFF] p-2 ml-10  flex flex-row items-center'>
                <li className='mr-8 font-normal text-[16px] leading-[22.85px]'>All</li>
                <li className='mr-8 font-normal text-[16px] leading-[22.85px]'>Cloud</li>
                <li className='mr-8 font-normal text-[16px] leading-[22.85px]'>Products</li>
                <li className='mr-8 font-normal text-[16px] leading-[22.85px]'>Mobile</li>
                <li className='mr-8 font-normal text-[16px] leading-[22.85px]'>Java</li>
                <li className='mr-8 font-normal text-[16px] leading-[22.85px]'>Big data & Bi</li>
                <li className='mr-8 font-normal text-[16px] leading-[22.85px]'>Software Devlopment</li>
                <li className='mr-8 font-normal text-[16px] leading-[22.85px]'>Ai</li>
                <li className='mr-8 font-normal text-[16px] leading-[22.85px]'>Other</li>

                <form class="flex items-center text-white mr-8 ml-5">  
                    <input type='text' placeholder='Search here' className='bg-[#1E1E1E] w-[340px] h-[45px] border-[#0038FF] rounded-[14px]'/>

                    <div className=' absolute translate-x-[18rem]'>

                                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="8.65871" cy="7.92366" r="6.76271" stroke="url(#paint0_linear_997_5903)" stroke-width="2"/>
                <defs>
                <linearGradient id="paint0_linear_997_5903" x1="6.60191" y1="9.45887" x2="-2.70468" y2="3.4708" gradientUnits="userSpaceOnUse">
                <stop stop-color="#0038FF"/>
                <stop offset="0.526042" stop-color="#3A86FF"/>
                <stop offset="1" stop-color="#6DCCFF"/>
                </linearGradient>
                </defs>
                </svg>

                    </div>
                </form>
               
            </ul>

           
           

        
    </div>
    </div>
    </>
  )
}

export default Subnavbar