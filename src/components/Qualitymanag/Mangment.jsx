import React from 'react'

const Mangment = () => {

    const projects = [
        {
            img: `/img/Icon1.png`,
            desc: " Elaboration and Implementation of procedures and regulations for software development process based on industrial standards and besst practices. ",

        },
        {

            img: `/img/tick3.png`,
            desc: "Product lifecycle monitoring to ensure compliance with established processes and guidlines.",

        },
        {
            img: `/img/Icon3.png`,
            desc: "Product Quality verification and validation to ensure that it complies with clients business need and expectations.",

        },
        {

            img: `/img/Icon4.png`,
            desc: "Establishment of an effective collaboration between all project team members.",

        },
    ];
    return (
        <>

           
            <div className=' pt-14  pb-5 px-6 xl:px-px-8 '>
                <div className='flex flex-col  xl:flex xl:flex-row md:px-6 xl:px-8  justify-center items-center '>

                    {/* Renctangle image */}
                    <div class="relative  w-[100%] h-[250px] md:w-[100%] md:h-[450px] xl:w-[115%] xl:h-[450px] rounded-[15px] border-2 border-[#7E7E7E] dark:border-2 dark:border-[#FFFFFF]  overflow-hidden bg-cover bg-no-repeat ">
                        <img
                            src="/img/Rectangle.png"
                            class="object-cover w-[100%] h-[250px] md:w-[100%] md:h-[450px] xl:w-[120%] xl:h-[450px] rounded-[15px]   transition duration-300 ease-in-out hover:scale-110"
                            alt="Louvre" />
                    </div>

                    
                    <div className='xl:px-6 '>


                        {projects.map((project, i) => {
                            return (


                                <ul className=" md:px-6 xl:px-10    "  >
                                    <img src={project.img} className='absolute w-5 h-5 hidden md:block xl:block  mt-[4.2%] md:mt-[5.2%] xl:mt-[3.4%] rounde-full border-none' alt="" />
                                    <li className="  pt-10 px-2 md:px-10 text-justify text-[16px] md:text-[18px] text-[#101010] dark:text-[#FFFFFF] not-italic font-normal  leading-[169.3%] capitalize"  >{project.desc}
                                    </li>

                                </ul>
                            );

                        })}

                    </div>
                    


                </div>


            </div>
           

        </>
    )
}

export default Mangment