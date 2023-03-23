import React from 'react'

const Home = () => {
    return (
        <div className='text-white px-20 mt-32 flex items-center justify-between'>
            <div className='w-[60%]'>
                <p className='text-[40px]'>Lorem ipsum dolor sit amet, consectetuer</p>
                <p className='mt-10 w-[75%]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,  Lorem ipsum sit amet, consectetuer adipiscing elit, Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Lorem ipsum dolor sit amet, consectetuer adipiscing elit, </p>
            </div>
            <div className='w-[40%]'>
                <img src="./earth.png" alt="" className='w-full'/>
            </div>
        </div>
    )
}

export default Home