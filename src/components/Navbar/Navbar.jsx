import React from 'react'

const Navbar = () => {
    return (
        <div className='text-white'>
            <Dropdown />
            <nav className='flex items-center  justify-between px-20 py-10'>
                {/* Nav-Logo */}
                <div className='cursor-pointer'><img src="./logo.png" alt="" /></div>
                {/* Nav Links */}
                <div>
                    <ul className='flex items-center w-full justify-between px-20 gap-x-10 cursor-pointer'>
                        <li className='hover:border-b-2 hover:border-white transition-all duration-300 ease-linear' 
                        // onClick={document.getElementById('dropdown').classList.remove('hidden')}
                        >
                            What is our role?</li>
                        <li className='hover:border-b-2 hover:border-white transition-all duration-300 ease-linear'>What defines us?</li>
                        <li className='hover:border-b-2 hover:border-white transition-all duration-300 ease-linear'>Careers</li>
                        <li className='hover:border-b-2 hover:border-white transition-all duration-300 ease-linear'>Blogs</li>
                        <li className='hover:border-b-2 hover:border-white transition-all duration-300 ease-linear'>Case Studies</li>
                    </ul>
                </div>
                <div className='flex items-center justify-between px-20 gap-x-10'>
                    {/* search */}
                    <div className='text-lg relative'>
                        <input type="text" placeholder='Search' className='border-[1px] border-white px-3 py-1 bg-transparent rounded-lg w-[9.5rem]' />
                        <div className='absolute top-2 right-3'>
                            {/* Search icon svg */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                <circle cx="7.76271" cy="7.92372" r="6.76271" stroke="url(#paint0_linear_169_18024)" stroke-width="2" />
                                <path d="M14.5255 14.6866L20.0001 19.8391" stroke="url(#paint1_linear_169_18024)" stroke-width="2" stroke-linecap="round" />
                                <defs>
                                    <linearGradient id="paint0_linear_169_18024" x1="2.49147" y1="4.83973" x2="12.7796" y2="10.6341" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#F05225" />
                                        <stop offset="1" stop-color="#EEA820" />
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_169_18024" x1="15.1292" y1="16.088" x2="19.1681" y2="18.5049" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#F05225" />
                                        <stop offset="1" stop-color="#EEA820" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>
                    {/* Contact */}
                    <p>Contact Us</p>
                </div>
                {/* Language */}
                <div>
                    <p>Languages</p>
                </div>
            </nav>
        </div>
    )
}

export default Navbar

const Dropdown = () => {
    return (
        <div className='flex bg-[#3A3A3A4D] p-20 items-center justify-between backdrop-blur-md absolute top-24 w-full hidden' id='dropdown'>
            <div>
                <ul className='flex flex-col gap-y-14'>
                    <li className='border-b-[1px] border-[#CFCFCF] text-xl hover:border-b-orange-500 hover:text-orange-500'>Overview</li>
                    <li className='border-b-[1px] border-[#CFCFCF] text-xl hover:border-b-orange-500 hover:text-orange-500'>Offerings & Advancements</li>
                    <li className='border-b-[1px] border-[#CFCFCF] text-xl hover:border-b-orange-500 hover:text-orange-500'>Products</li>
                    <li className='border-b-[1px] border-[#CFCFCF] text-xl hover:border-b-orange-500 hover:text-orange-500'>Technologies</li>
                    <li className='border-b-[1px] border-[#CFCFCF] text-xl hover:border-b-orange-500 hover:text-orange-500'>Sectors</li>
                </ul>
            </div>
            <div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ipsum eum, a?
                </p>
            </div>
        </div>
    )
}
