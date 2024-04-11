import React ,{useState} from 'react'

const FigmastackSelectYourDomain = ({selected , setSelected}) => {

    const [isActive , SetIsActive ]=useState(false)
    const option =['Select Your Domain']
  return (
    <>
    <div className='dropdown w-[15rem]  lg:w-[19rem] md:w-[19rem] relative   max-md:ml-[-1rem]' >
        <div className='pt-[0.4rem] pb-[0.2rem]   bg-[#CFCFCF] text-[18px] text-[#000]   text-center p-4  dropdown-btn rounded-full' 
        
        onClick={(e)=> SetIsActive(!isActive)}> 
      
      {selected }

     
      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="8" viewBox="0 0 17 8" fill="none"  className='absolute bottom-2.5 md:bottom-2 right-3 md:right-10 h-4 w-4    '>
  <path d="M1.54199 0.999999L7.71462 6.32399C8.16494 6.7124 8.83182 6.71241 9.28214 6.32399L15.4548 1" stroke="black" stroke-width="2" stroke-linecap="round"/>
</svg>
        </div>

                    {isActive && (
                             <div className="absolute top[110px] p-[15px] my-2   bg-white  left-0 w-[100%] drop-shadow-md  dropdown-contain">

                           

                              
                               
                                {option.map((option) =>(
                                     <div className="dropdown-item p-[10px] cursor-pointer "
                                      onClick={(e)=>{ 
                                        setSelected(option)
                                        SetIsActive(false);
                                      }
                                     }>
                                       {option}
                                     </div>
                                ))}

                            
                             
                         </div>
                    )}

       

    </div>
    </>
  )
}

export default FigmastackSelectYourDomain