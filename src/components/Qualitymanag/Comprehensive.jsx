import React from 'react'
import '../../index.css'
const Comprehensive = () => {
    return (
        <>
            <div className=' pt-20 pb-5 flex items-center  justify-center  ' >

                <h1 className='text-[18px] md:text-[25px] text-[#B3B3B3] dark:text-[#FFFFFF] not-italic font-normal leading-[39.5px]'> <span className="font-bold not-italic text-transparent  bg-clip-text bg-gradient-to-r from-[#F05225] to-[#EEA820]">Comprehensive </span> Approach to quality</h1>



            </div>

           

            {/* updated code */}

            <div className="flex  justify-center py-20 items-center ">
        <div className=" flex flex-col md:flex-row max-sm:space-y-7 md:space-x-5 xl:space-x-28 px-10 md:px-5 xl:px-10 md:pl-8 xl:pl-10 ">
       
            {/*==================================first circle ========================== */}
            <div>
            <div class=" md:w-[225px] xl:w-[300px] w-[250px] dark:rounded-full   dark:bg-gradient-to-r dark:from-[#F05225]  dark:to-[#EEA820] dark:p-0.5 ">
          <div className="ui-card  md:w-[225px] xl:w-[300px] w-[250px] relative overflow-hidden transition-all rounded-[100%] duration-[0.3s] ease-[ease-out]  ">
            <img
              className=" image object-cover   w-[100%] "
              src="/img/QualityPlanning.png"
              alt=""
            />
            <div className="description">
              <h3 className="textcircle text-[15px] md:text-[15px] xl:text-[20px] px-7 md:px-3 xl:px-7 ">
              Quality Planning
              </h3>
              <p className="textcirclesm text-[10px] md:text-[10px] xl:text-[13px] px-9 capitalize leading-5 md:leading-4 xl:leading-5">
              Teams are isolated across different locations. Some teams may not be using Agile.
              </p>
            </div>

            
          </div>

          
         
          </div>
          <h3 className="text-black font-semibold dark:text-white text-[15px] md:text-[15px] xl:text-[20px] pt-5  text-center ">
              Quality Planning
              </h3>
          </div>

         

          {/*============================================= end first  circle====================== */}

          {/*==================================second circle ========================== */}
          <div>
          <div class=" md:w-[225px] xl:w-[300px] w-[250px] dark:rounded-full   dark:bg-gradient-to-r dark:from-[#E10E8C]  dark:to-[#7A4199] dark:p-0.5 ">
          <div className="ui-card md:w-[225px] xl:w-[300px] w-[250px] relative overflow-hidden transition-all rounded-full duration-[0.3s] ease-[ease-out]  ">
            <img
              className="image object-cover   w-[100%] "
              src="/img/Quality Assurance.png"
              alt=""
            />
            <div className="description">
              <h3 className="textcircle text-[15px] md:text-[13px] xl:text-[20px] px-7 md:px-3 xl:px-7">
              Quality Assurance
              </h3>
              <p className="textcirclesm text-[10px] md:text-[8px] xl:text-[13px] px-9 capitalize leading-5 md:leading-4 xl:leading-5 ">
              Cross-functional Scrum teams are isolated across locations and integrated by a Scrum-of-Scrums that meets regularly across locations.
              </p>
            </div>
          </div>
         
         
          </div>
          <h3 className="font-semibold  text-black dark:text-white text-[15px] md:text-[13px] xl:text-[20px] pt-5  text-center">
              Quality Assurance
              </h3>
          </div>

            {/*============================================= end second  circle====================== */}

            {/*======================= third circle image ============*/}
            <div>
            <div class=" md:w-[225px] xl:w-[300px] w-[250px] dark:rounded-full   dark:bg-gradient-to-r dark:from-[#6DCCFF]  dark:to-[#0038FF] dark:p-0.5 ">
          <div className="ui-card md:w-[225px] xl:w-[300px] w-[250px] relative overflow-hidden transition-all rounded-full duration-[0.3s] ease-[ease-out]  ">
            <img
              className="image object-cover   w-[100%] "
              src="/img/Quality.png"
              alt=""
            />
            <div className="description">
              <h3 className="textcircle text-[15px] md:text-[15px] xl:text-[20px] px-7 md:px-3 xl:px-7 ">
              Quality Control
              </h3>
              <p className="textcirclesm text-[10px]  md:text-[10px] xl:text-[13px] px-9 capitalize leading-5 md:leading-4 xl:leading-5">
                {" "}
                Scrum team members are distributed across locations.
              </p>
            </div>
          </div>

          
          </div>

          <h3 className=" font-semibold text-black dark:text-white text-[15px] md:text-[15px] xl:text-[20px] pt-5  text-center ">
              Quality Control
              </h3>
          </div>
        
{/*============================================= end third  circle====================== */}
        </div>
        
      </div>

     

        



           
          
        </>
    )
}

export default Comprehensive