import React , { useState, useEffect }from 'react'
import { ourExpertsData } from "../Academy/Data/OurExpertsData";
import OurExpersPopup from "../Academy/OurExpertspopup/OurExperspopup";
import OurExpertsMembers from "../Academy/OurExpertsMembers/OurExpertsMembers";
const OurExperts = (props) => {

  useEffect(() => {
		document.body.scrollTop = 0; // For Safari
		document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
	}, [])

  const [details, setdetails] = useState([
		{
			style: "",
			gradientBorder: "",
			img: "",
			name: "",
			role: "",
			experience: "",
			Skills: "",
			Expertise: "",
			Learninig: "",
		},
	]);
  return (
    <>
    <div className='lg:px-10 md:px-6 px-6 lg:py-5'>
        <div className='flex items-center justify-center'>

      <h1 className='font-Euclid text-[#000] dark:text-[#FFF] text-[30px] not-italic font-semiold leading-normal capitalize'>Our Experts</h1>  

        </div>

        {/* team */}
        <div className="lg:px-10 mb-10 px-10 lg:pt-5 pt-10">
			{/* Team member popup  */}
			<OurExpersPopup data={details} />
			
			<div className="max-w-screen-lg my-10 mx-auto">
				
				<div className={"flex flex-row flex-wrap  justify-center items-center gap-10 gap-y-[6rem] text-center mt-28"}>
					{ourExpertsData.slice(0, 6).map((item, index) => (
						<OurExpertsMembers item={item} key={index} setdetails={setdetails} theme={props.theme} />
					))}
				</div>
			</div>
			
			
		</div>

        {/* team end */}
    </div>
    </>
  )
}

export default OurExperts