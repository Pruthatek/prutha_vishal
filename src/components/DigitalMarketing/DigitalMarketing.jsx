import React from 'react'
import { NavLink } from 'react-router-dom'


const data= [
 {
    title: "Email Marketing",
    desc: "We offer targeted email marketing services to help you reach your audience with personalised and relevant messaging, resulting in increased engagement and conversions.",
    img1: "/img/icondm1.svg",
    img2: "/img/mask1.png"
 },
 {
  title: "Social Media Marketing",
  desc: "Our social media marketing services focus on creating compelling and shareable content that resonates with your audience, helping you increase brand awareness and customer engagement",
  img1: "/img/icondm2.svg",
  img2: "/img/mask2.png"
},
{
  title: "Pay-Per-Click Advertising (PPC)",
  desc: "We provide PPC advertising services to help you reach your target audience with targeted ads, driving more traffic to your website and increasing conversions. ",
  img1: "/img/icondm3.svg",
  img2: "/img/mask3.png"
},
{
  title: "Content Marketing",
  desc: "Our content marketing services include creating high-quality and engaging content that resonates with your audience, helping you attract and retain customers and build brand loyalty.",
  img1: "/img/icondm4.svg",
  img2: "/img/mask4.png"
},
{
  title: "Conversion Rate Optimization (CRO)",
  desc: "We offer CRO services to help you improve your website or mobile app's user experience and conversion rates, resulting in increased revenue and customer satisfaction.",
  img1: "/img/icondm5.svg",
  img2: "/img/mask5.png"
},
{
  title: "Conversion Rate Optimization (CRO)",
  desc: "We offer targeted email marketing services to help you reach your audience with personalised and relevant messaging, resulting in increased engagement and conversions.",
  img1: "/img/icondm6.svg",
  img2: "/img/mask6.png"
},
]

const data2 = [
  {
    title: "Search engine optimization (SEO)"
  },
  {
    title: "Pay-per-click advertising (PPC)"
  },
  {
    title: "Social media marketing"
  },
  {
    title: "Email marketing"
  },
  {
    title: "Content marketing"
  },
]

const data3 = [
  {
    title: "Influencer marketing"
  },
  {
    title: "Video marketing"
  },
  {
    title: "Mobile marketing "
  },
  {
    title: "Conversion rate optimization"
  },
  {
    title: "Analytics and reporting"
  },
]

const DigitalMarketing = (props) => {
  return (
    <div className='pt-36'>
       <div className='flex md:flex-row flex-col justify-between items-center'>
        <div className='px-10'>
       
            <p className=' bg-gradient-to-r from-lime-600 to-lime-900 text-start  lg:text-[60px] md:text-[40px] text-[30px] font-bold inline-block text-transparent bg-clip-text'>DIGITAL MARKETING</p>
            <p className="dark:text-white text-black  text-start lg:text-[35px] md:text-[22px] text-[16px] font-semibold  uppercase leading-[49px] md:tracking-[29.93px] tracking-[24px]">SERVICES</p>
            <p className=" dark:text-white lg:w-[652px] md:w-[432px] text-black  text-start lg:text-[20px] md:text-[16px] md:pt-[37px] md:pb-[31px] pb-[16px] font-normal leading-[28px]">Ready to elevate your business in the age of digital media? Our top-tier digital marketing services can boost your online reputation to new heights. With expert strategies and cutting-edge techniques, you'll leave a lasting impression on your audience and achieve the success you deserve. Let's make it happen!</p>
            <p className=" dark:text-white lg:w-[652px] md:w-[432px] text-black text-start lg:text-[25px] md:text-[14px] font-semibold lg:leading-9 md:leading-6">Looking to revolutionise your online sales strategy with a custom-built digital storefront?</p>
            <NavLink to="/contact">
            <button className='lg:w-[520px] lg:h-[65px] md:w-[400px] md:h-[45px] w-[334px] h-[35px] mt-[31px] rounded-[8px] border border-lime-700 lg:text-[30px] md:text-[22px] font-normal dark:text-white text-black text-center'>Call Now Or Get Intouch</button>
            </NavLink>
        </div>
        <div className='pt-[60px] md:pt-0 lg:pr-[40px]'>
            <img src='/img/vcgraphic.svg'/>
        </div>
       </div>

      <div className='flex md:flex-row flex-col justify-between items-center'>
      <div className='pt-[125px] md:flex hidden'>
        <img src='/img/Ellipse.png'/>
        <img src='/img/vcgraphic2.svg' className='lg:-ml-[200px] md:-ml-[260px]'/>
      </div>
      <div className='md:pr-[40px] px-10 md:px-0 pt-[100px] md:pt-0'>
         <p className="bg-gradient-to-r lg:w-[646px] md:w-[464px] from-[#0DA1DA] to-[#5DB98E] text-start  lg:text-[26px] md:text-[20px] font-bold inline-block text-transparent bg-clip-text">Drive business growth and achieve success with our effective digital marketing solutions.</p>
         <p className="lg:w-[646px] md:w-[464px] text-start lg:pt-[75px] md:pt-[55px] pt-[35px] dark:text-white lg:text-[16px] md:text-[14px] text-black  font-normal leading-normal tracking-wide">At our digital marketing agency, we pride ourselves on our commitment to delivering measurable results. We use data-driven insights to continuously refine our approach and ensure that you're getting the most value for your marketing investment. Don't settle for second best when it comes to your digital marketing strategy.<br></br><br></br>Trust the experts at our agency to help you achieve your business goals and stay ahead of the competition.</p>
      </div>
      </div>
      
     
      <div className='flex flex-row flex-wrap justify-between items-center lg:px-16 md:px-40 px-6 lg:pt-[114px] pt-[80px] '>
        {data.map(({ title, desc, img1, img2}, index)=>{
          return(
             <div key={index} className='md:w-[424px] md:h-[330px] w-[380px] h-[330px] relative mb-[22px] bg-zinc-300 bg-opacity-20 rounded-[13px] backdrop-blur-[20px]'>
                <img src={img2} className='absolute md:left-[257px] left-[199px]'/>
                <img src={img1} className='mt-[45px] ml-[54px]'/>
                <div className='pl-[24px] pr-[14px] pt-[27px]'>
                  <p className='md:text-[20px] text-[18px] font-normal text-start'>{title}</p>
                  <p className='pt-[18px] md:text-[16px] text-[14px] font-normal text-start'>{desc}</p>
                </div>
               
             </div>
          )
             
        })}
       
      </div>

      <div class="lg:w-[1157px] lg:h-[760px] md:w-[700px] md:h-[1350px] w-[380px] z-40 bg-zinc-300 bg-opacity-10 rounded-[10px] backdrop-blur-[15px] mx-auto mt-[145px]">
            <div className="contact-square-1 absolute top-[-4%] -right-[2%] hidden xl:block z-20 h-[5rem] w-[5rem]" />
            <div className="contact-square-2 absolute -bottom-[5%] -left-[2%] hidden xl:block -z-50 h-[5rem] w-[5rem]" />
       <div className='lg:flex lg:flex-row md:flex md:flex-col'>
          <div className='lg:px-[50px] md:px-[60px] py-[22px]'>
              <p className="lg:w-[436px] md:text-[25px] text-[20px] px-5 md:px-0 font-bold leading-[35px] text-start">Why settle for average? Our digital marketing services elevate your brand to the next level.</p>
              <img src='/img/vcgraphic3.svg' className='mt-[20px] md:ml-[100px] lg:ml-0'/>
          </div>

          <div className='py-[33px] px-[40px]'> 
             <p className='font-medium text-[18px] text-start'>Targeted Advertising</p>
             <div className='w-[100px]  h-[1px] rounded bg-gradient-to-r from-[#0038FF] to-[#9747FF] my-3 '></div>
             <p className="text-[13px] font-normal leading-[18.20px] text-start">Our digital marketing services target your ideal customer, resulting in higher engagement and conversions.</p>
          
             <p className='font-medium text-[18px] text-start pt-[30px]'>Data-Driven Strategies</p>
             <div className='w-[100px]  h-[1px] rounded bg-gradient-to-r from-[#0DA1DA] to-[#5DB98E] my-3 '></div>
             <p className="text-[13px] font-normal leading-[18.20px] text-start">Our digital marketing services are data-driven, ensuring you get the best ROI for your marketing budget.</p>

             <p className='font-medium text-[18px] text-start pt-[30px]'>Improved Brand Awareness</p>
             <div className='w-[100px]  h-[1px] rounded bg-gradient-to-r from-lime-600 to-lime-900 my-3 '></div>
             <p className="text-[13px] font-normal leading-[18.20px] text-start">Our digital marketing services help improve brand awareness, resulting in higher brand recognition and customer trust.</p>

             <p className='font-medium text-[18px] text-start pt-[30px]'>Stay Ahead of the Curve</p>
             <div className='w-[100px]  h-[1px] rounded bg-gradient-to-r from-[#F05225] to-[#EEA820] my-3 '></div>
             <p className="text-[13px] font-normal leading-[18.20px] text-start">Our digital marketing experts stay up-to-date with the latest trends and strategies, ensuring that your business stays ahead of the curve and ahead of the competition.</p>

             <p className='font-medium text-[18px] text-start pt-[30px]'>Unlock Your Potential</p>
             <div className='w-[100px]  h-[1px] rounded bg-gradient-to-r from-[#0038FF] to-[#6DCCFF] my-3 '></div>
             <p className="text-[13px] font-normal leading-[18.20px] text-start">With our digital marketing services, you can unlock your business's potential and achieve your goals, whether that be increased sales, higher engagement, or better brand visibility..</p>

             <p className='font-medium text-[18px] text-start pt-[30px]'>ROI-Driven Strategies</p>
             <div className='w-[100px]  h-[1px] rounded bg-gradient-to-r from-[#0038FF] to-[#6DCCFF] my-3 '></div>
             <p className="text-[13px] font-normal leading-[18.20px] text-start">Our digital marketing strategies are focused on delivering a strong return on investment (ROI), ensuring that your marketing efforts are delivering tangible results and driving growth for your business.</p>
          
          </div>
       </div>     
      </div>

      <div className='pt-[160px] flex flex-col justify-center items-center relative'>
        <img src='/img/bgvector2.png' className='absolute -left-10'/>
        <img src='/img/bgvector.png' className='absolute lg:-right-10 md:-right-0'/>
        <p className="md:text-[35px] text-[30px] bg-gradient-to-r  from-[#0DA1DA] to-[#5DB98E] text-center font-[500] inline-block text-transparent bg-clip-text">Drive Your Business Growth</p>
        <p className="text-center md:text-[25px] text-[20px] font-medium capitalize leading-[44.50px]">with our digital marketing services that leverage the latest technologies and strategies</p>
       
       <div className='md:flex md:flex-row flex flex-col pt-[72px]'>
       
        <div> 
          {data2.map(({ title }, index)=>{
            return(
              <div key={index} className='flex pb-6'>
                <img src='/img/tick1.svg'/>
                <p className='pl-[22px] text-[20px]'>{title}</p>
            </div>
            )
          })}
            
        </div>

        <div className='lg:pl-[145px] md:pl-[100px] pt-10 md:pt-0'> 
        {data3.map(({ title }, index)=>{
            return(
              <div key={index} className='flex pb-6'>
                <img src='/img/tick2.svg'/>
                <p className='pl-[22px] text-[20px]'>{title}</p>
            </div>
            )
          })}
        </div>

        </div>
        <p className="lg:text-[50px] md:text-[35px] text-[18px] bg-gradient-to-r opacity-10 md:pt-[100px] pt-[30px] from-[#D400A5] via-[#1F7ECB] to-[#2ED6E3] text-center font-[700] inline-block text-transparent bg-clip-text">Start Your Digital Transformation Now!</p>
        <p className="lg:text-[50px] md:text-[35px] text-[18px]  bg-gradient-to-r opacity-30  from-[#D400A5] via-[#1F7ECB] to-[#2ED6E3] text-center font-[700] inline-block text-transparent bg-clip-text">Start Your Digital Transformation Now!</p>
        <p className="lg:text-[50px] md:text-[35px] text-[18px]  bg-gradient-to-r  from-[#D400A5] via-[#1F7ECB] to-[#2ED6E3] text-center font-[700] inline-block text-transparent bg-clip-text">Start Your Digital Transformation Now!</p>
        <p className="lg:px-16 md:px-12 px-6 lg:pt-[72px] md:pt-[40px] pt-[20px] text-center lg:text-[25px] text-[20px] font-medium capitalize lg:leading-[44.50px] leading-[34px]">Our team of experts is passionate about helping businesses succeed in the digital world. Let us be your partner in driving your online growth.</p>
      </div>
     
    
    </div>
  )
}

export default DigitalMarketing
