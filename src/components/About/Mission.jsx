import React from 'react'

const Mission = () => {
  return (
    <>
			<div className="w-full mt-10 py-14">
				<h1 className="text-title lg:text-[25px] font-bold mb-3 text-center">Our Mission</h1>
				<p className="text-[10px] lg:text-subtitle px-5 text-center">Our mission is to deliver exceptional IT services without compromising on quality, ensuring we build robust and reliable solutions for our clients.</p>
				<div className="flex flex-col-reverse lg:flex-row items-center justify-between mt-10 px-14 text-white gap-y-5">
					<div className="max-w-[700px] border-gradient-box-4 rounded-lg">
						<div className="glassmorphism rounded-lg p-10">
							<div className="w-full rounded-lg lg:p-8">
                            <svg width="27" height="22" viewBox="0 0 27 22" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M8.18186 0.322266C4.13741 5.23338 -2.39148 16.0956 3.84852 20.2556" stroke="white" /> <circle cx="6.4485" cy="15.9223" r="6.06667" fill="white" /> <path d="M22.0486 0.322266C18.0041 5.23338 11.4752 16.0956 17.7152 20.2556" stroke="white" /> <circle cx="20.3152" cy="15.9223" r="6.06667" fill="white" /> </svg>
								<p className="text-description mt-2">
								Our focus is on assisting entrepreneurs in developing software that not only fulfils today's demands, but also predicts tomorrow's needs by creating solutions that are both creative and sustainable.
								</p>
							</div>
						</div>
					</div>
					<div className="bg-gradient-to-r from-[#0038FF] via-[#75B743] to-[#E10E8C] p-1 rounded-full">
						<img src="/img/vishal.png" className="lg:h-64 lg:w-64 h-40 w-40" />
					</div>
				</div>
			</div>
</>
  )
}

export default Mission