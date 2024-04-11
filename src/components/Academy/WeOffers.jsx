import React,{useState} from 'react'

const WeOffers = () => {

    const [showSeeMore, setShowSeeMore] = useState(false);

     const Cardsdata= [
        {
            img:`/img/Rectangle1.png`,
            title1:'Learn',
            course:`MEARN Stack`,
            star:`4.5`,
            time:`2-3 Months`,
            seats:`35 Seats Available`,
            title2:`What You will Learn`,
            desc:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis nunc a molestie dictum. Mauris venenatis, felis scelerisque aliquet lacinia, nulla nisi venenatis odio, id blandit mauris ipsum id sapien. Vestibulum malesuada orci sit amet pretium facilisis. In lobortis congue augue, a commodo libero tincidunt scelerisque. Donec tempus congue lacinia. Phasellus lacinia felis est, placerat commodo odio tincidunt iaculis. Sed felis magna, iaculis a metus id, ullamcorper suscipit nulla. Fusce facilisis, nunc ultricies posuere porttitor, nisl lacus tincidunt diam, vel feugiat nisi elit id massa. Proin nulla `,
            coursename:`MEARN STACK Developer`

        },
        {
            img:`/img/Rectangle2.png`,
            title1:'Learn',
            course:`Web Development Basics `,
            star:`4.5`,
            time:`2-3 Months`,
            seats:`35 Seats Available`,
            title2:`What You will Learn`,
            desc:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis nunc a molestie dictum. Mauris venenatis, felis scelerisque aliquet lacinia, nulla nisi venenatis odio, id blandit mauris ipsum id sapien. Vestibulum malesuada orci sit amet pretium facilisis. In lobortis congue augue, a commodo libero tincidunt scelerisque. Donec tempus congue lacinia. Phasellus lacinia felis est, placerat commodo odio tincidunt iaculis. Sed felis magna, iaculis a metus id, ullamcorper suscipit nulla. Fusce facilisis, nunc ultricies posuere porttitor, nisl lacus tincidunt diam, vel feugiat nisi elit id massa. Proin nulla `,
            coursename:`MEARN STACK Developer`

        },
        {
            img:`/img/Rectangle1.png`,
            title1:'Learn',
            course:`Flutter  Development`,
            star:`4.5`,
            time:`2-3 Months`,
            seats:`35 Seats Available`,
            title2:`What You will Learn`,
            desc:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis nunc a molestie dictum. Mauris venenatis, felis scelerisque aliquet lacinia, nulla nisi venenatis odio, id blandit mauris ipsum id sapien. Vestibulum malesuada orci sit amet pretium facilisis. In lobortis congue augue, a commodo libero tincidunt scelerisque. Donec tempus congue lacinia. Phasellus lacinia felis est, placerat commodo odio tincidunt iaculis. Sed felis magna, iaculis a metus id, ullamcorper suscipit nulla. Fusce facilisis, nunc ultricies posuere porttitor, nisl lacus tincidunt diam, vel feugiat nisi elit id massa. Proin nulla `,
            coursename:`MEARN STACK Developer`

        },
        {
            img:`/img/Rectangle1.png`,
            title1:'Learn',
            course:`React Js`,
            star:`4.5`,
            time:`2-3 Months`,
            seats:`35 Seats Available`,
            title2:`What You will Learn`,
            desc:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis nunc a molestie dictum. Mauris venenatis, felis scelerisque aliquet lacinia, nulla nisi venenatis odio, id blandit mauris ipsum id sapien. Vestibulum malesuada orci sit amet pretium facilisis. In lobortis congue augue, a commodo libero tincidunt scelerisque. Donec tempus congue lacinia. Phasellus lacinia felis est, placerat commodo odio tincidunt iaculis. Sed felis magna, iaculis a metus id, ullamcorper suscipit nulla. Fusce facilisis, nunc ultricies posuere porttitor, nisl lacus tincidunt diam, vel feugiat nisi elit id massa. Proin nulla `,
            coursename:`MEARN STACK Developer`

        },

        {
            img:`/img/Rectangle1.png`,
            title1:'Learn',
            course:`Data Structures`,
            star:`4.5`,
            time:`2-3 Months`,
            seats:`35 Seats Available`,
            title2:`What You will Learn`,
            desc:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis nunc a molestie dictum. Mauris venenatis, felis scelerisque aliquet lacinia, nulla nisi venenatis odio, id blandit mauris ipsum id sapien. Vestibulum malesuada orci sit amet pretium facilisis. In lobortis congue augue, a commodo libero tincidunt scelerisque. Donec tempus congue lacinia. Phasellus lacinia felis est, placerat commodo odio tincidunt iaculis. Sed felis magna, iaculis a metus id, ullamcorper suscipit nulla. Fusce facilisis, nunc ultricies posuere porttitor, nisl lacus tincidunt diam, vel feugiat nisi elit id massa. Proin nulla `,
            coursename:`MEARN STACK Developer`

        },
        {
            img:`/img/Rectangle1.png`,
            title1:'Learn',
            course:`Python`,
            star:`4.5`,
            time:`2-3 Months`,
            seats:`35 Seats Available`,
            title2:`What You will Learn`,
            desc:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis nunc a molestie dictum. Mauris venenatis, felis scelerisque aliquet lacinia, nulla nisi venenatis odio, id blandit mauris ipsum id sapien. Vestibulum malesuada orci sit amet pretium facilisis. In lobortis congue augue, a commodo libero tincidunt scelerisque. Donec tempus congue lacinia. Phasellus lacinia felis est, placerat commodo odio tincidunt iaculis. Sed felis magna, iaculis a metus id, ullamcorper suscipit nulla. Fusce facilisis, nunc ultricies posuere porttitor, nisl lacus tincidunt diam, vel feugiat nisi elit id massa. Proin nulla `,
            coursename:`MEARN STACK Developer`

        },
        {
            img:`/img/Rectangle1.png`,
            title1:'Learn',
            course:`Machine Learning`,
            star:`4.5`,
            time:`2-3 Months`,
            seats:`35 Seats Available`,
            title2:`What You will Learn`,
            desc:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis nunc a molestie dictum. Mauris venenatis, felis scelerisque aliquet lacinia, nulla nisi venenatis odio, id blandit mauris ipsum id sapien. Vestibulum malesuada orci sit amet pretium facilisis. In lobortis congue augue, a commodo libero tincidunt scelerisque. Donec tempus congue lacinia. Phasellus lacinia felis est, placerat commodo odio tincidunt iaculis. Sed felis magna, iaculis a metus id, ullamcorper suscipit nulla. Fusce facilisis, nunc ultricies posuere porttitor, nisl lacus tincidunt diam, vel feugiat nisi elit id massa. Proin nulla `,
            coursename:`MEARN STACK Developer`

        },
        {
            img:`/img/Rectangle1.png`,
            title1:'Learn',
            course:`Ui/Ux Design`,
            star:`4.5`,
            time:`2-3 Months`,
            seats:`35 Seats Available`,
            title2:`What You will Learn`,
            desc:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis nunc a molestie dictum. Mauris venenatis, felis scelerisque aliquet lacinia, nulla nisi venenatis odio, id blandit mauris ipsum id sapien. Vestibulum malesuada orci sit amet pretium facilisis. In lobortis congue augue, a commodo libero tincidunt scelerisque. Donec tempus congue lacinia. Phasellus lacinia felis est, placerat commodo odio tincidunt iaculis. Sed felis magna, iaculis a metus id, ullamcorper suscipit nulla. Fusce facilisis, nunc ultricies posuere porttitor, nisl lacus tincidunt diam, vel feugiat nisi elit id massa. Proin nulla `,
            coursename:`MEARN STACK Developer`

        },
        
       
        
        
     ]


    return (
        <>
            <div className="lg:px-10 md:px-6 px-6 pb-10">
                <div className="flex items-center justify-center py-5">

                    <h1 className="font-Euclid text-[31px] text-[#000] dark:text-[#FFF] not-italic font-semibold leading-normal capitalize">We Offers</h1>

                </div>

                <div className='flex grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center justify-center md:items-center md:jusyify-center py-5'>
                {Cardsdata.map((data,index)=>{
                    return(
                       
                        <div class="w-[321px] h-[786px] items-center justify-center">
                        <div class="w-[320px] h-[785px] hover:bg-gradient-to-r hover:from-[#F05225] hover:via-[#EEA820] hover:to-[#EEA820] p-0.5 transition delay-700 duration-700 ease-in-out rounded-lg ">
                        <div className='cardweoffers border w-[315px] h-[780px] '>
                        <div className='relative '>
                            <img src={data.img} className='Rectangle-image w-[348px] h-[220px] ' alt='rectangle' />

                            <div className='transform
                                transition duration-500 hover:scale-110'>
                            <div className='absolute bottom-[150px] left-[20px]'>
                                <h3 className='font-Euclid text-[#fff] text-[22px] not-italic font-normal leading-normal capitalize '>{data.title1}</h3>
                            </div>
                            <div className='flex gap-5 absolute bottom-[90px] left-[15px]'>
                                <h3 className='font-Euclid text-[#fff] text-[18px] not-italic font-semibold leading-normal capitalize'>{data.course}</h3>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 47 47" fill="none" className=''>
                                    <path d="M19.9523 14.5592C20.6006 15.2675 20.5602 16.3747 19.8621 17.0324L13.1734 23.3333L19.8621 29.6343C20.5602 30.2919 20.6006 31.3992 19.9523 32.1075C19.3041 32.8157 18.2126 32.8567 17.5145 32.1991L9.4645 24.6157C9.113 24.2846 8.91328 23.82 8.91328 23.3333C8.91328 22.8467 9.113 22.3821 9.4645 22.051L17.5145 14.4676C18.2126 13.81 19.3041 13.851 19.9523 14.5592Z" fill="white" />
                                    <path d="M27.8645 17.0324C27.1664 16.3747 27.126 15.2675 27.7742 14.5592C28.4225 13.851 29.5139 13.81 30.2121 14.4676L38.2621 22.051C38.6136 22.3821 38.8133 22.8467 38.8133 23.3333C38.8133 23.82 38.6136 24.2846 38.2621 24.6157L30.2121 32.1991C29.5139 32.8567 28.4225 32.8157 27.7742 32.1075C27.126 31.3992 27.1664 30.2919 27.8645 29.6343L34.5532 23.3333L27.8645 17.0324Z" fill="white" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.863281 4.08333C0.863281 1.82817 2.66533 0 4.88828 0H42.8383C45.0612 0 46.8633 1.82817 46.8633 4.08333V42.5833C46.8633 44.8385 45.0612 46.6667 42.8383 46.6667H4.88828C2.66534 46.6667 0.863281 44.8385 0.863281 42.5833V4.08333ZM4.88828 3.5C4.57072 3.5 4.31328 3.76117 4.31328 4.08333V42.5833C4.31328 42.9055 4.57072 43.1667 4.88828 43.1667H42.8383C43.1558 43.1667 43.4133 42.9055 43.4133 42.5833V4.08333C43.4133 3.76117 43.1558 3.5 42.8383 3.5H4.88828Z" fill="white" />
                                </svg>
    
                            </div>
    
                            <div className='flex space-x-1 absolute bottom-[60px] left-[20px]'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="20" viewBox="0 0 23 20" fill="none">
                                    <path d="M12.2664 0.556893C12.1509 0.343558 11.9125 0.208496 11.6515 0.208496C11.3904 0.208496 11.1521 0.343558 11.0365 0.556893L8.24024 5.72091L1.98754 6.549C1.72923 6.58321 1.51463 6.74811 1.43397 6.97437C1.35331 7.20063 1.42058 7.449 1.6075 7.61506L6.13199 11.6347L5.0639 17.3105C5.01978 17.545 5.12554 17.782 5.33671 17.9218C5.54788 18.0616 5.82784 18.0801 6.05888 17.9694L11.6515 15.2896L17.244 17.9694C17.4751 18.0801 17.755 18.0616 17.9662 17.9218C18.1774 17.782 18.2831 17.545 18.239 17.3105L17.1709 11.6347L21.6954 7.61506C21.8823 7.449 21.9496 7.20063 21.869 6.97437C21.7883 6.74811 21.5737 6.58321 21.3154 6.549L15.0627 5.72091L12.2664 0.556893Z" fill="white" />
                                </svg>
    
                                <span className='text-[#fff] text-[18px] not-italic font-medium leading-normal capitalize'>{data.star}</span>
                            </div>
                            <div className='flex space-x-[150px]'>
                                <div className='flex gap-1 absolute bottom-[25px] left-[20px]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                        <path d="M10.638 6.04183C10.638 5.69665 10.3582 5.41683 10.013 5.41683C9.66784 5.41683 9.38802 5.69665 9.38802 6.04183V10.6252C9.38802 10.8494 9.5082 11.0565 9.70293 11.1678L12.6196 12.8345C12.9193 13.0057 13.3011 12.9016 13.4723 12.6019C13.6436 12.3022 13.5395 11.9204 13.2398 11.7492L10.638 10.2625V6.04183Z" fill="white" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.2214 0.833496C5.15874 0.833496 1.05469 4.93755 1.05469 10.0002C1.05469 15.0628 5.15874 19.1668 10.2214 19.1668C15.284 19.1668 19.388 15.0628 19.388 10.0002C19.388 4.93755 15.284 0.833496 10.2214 0.833496ZM2.30469 10.0002C2.30469 5.62791 5.8491 2.0835 10.2214 2.0835C14.5936 2.0835 18.138 5.62791 18.138 10.0002C18.138 14.3724 14.5936 17.9168 10.2214 17.9168C5.8491 17.9168 2.30469 14.3724 2.30469 10.0002Z" fill="white" />
                                    </svg>
    
                                    <h5 className='font-inter text-[#fff] text-[16px] not-italic font-medium leading-normal capitalize'>{data.time}</h5>
                                </div>
    
                                <div className='flex gap-1 absolute bottom-[25px] left-[20px]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" viewBox="0 0 25 20" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M21.4794 18.1769C21.5404 18.1859 21.6013 18.1952 21.6622 18.2047L21.9659 18.2523C23.2879 18.4593 24.4706 17.3346 24.4706 15.8705V14.753C24.4706 13.7059 23.8702 12.7718 22.9708 12.4196C21.9309 12.0124 20.8573 11.7474 19.7735 11.6245C20.9039 12.5364 21.6051 14.0134 21.6051 15.6248V17.0122C21.6051 17.4149 21.5614 17.8048 21.4794 18.1769ZM16.8994 10.1377C17.3501 10.3455 17.8452 10.4604 18.3648 10.4604C20.4533 10.4604 22.1464 8.6041 22.1464 6.3142C22.1464 4.0243 20.4533 2.16797 18.3648 2.16797C18.3023 2.16797 18.2402 2.16963 18.1785 2.17291C18.5583 3.07573 18.7705 4.08377 18.7705 5.14713C18.7705 7.10038 18.0545 8.86695 16.8994 10.1377Z" fill="white" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.46174 18.1765C3.40106 18.1855 3.3404 18.1947 3.27976 18.2042L2.97613 18.2518C1.65413 18.4589 0.471357 17.3341 0.471357 15.87V14.7526C0.471357 13.7054 1.07175 12.7713 1.97119 12.4191C3.01081 12.012 4.0841 11.747 5.16755 11.6241C4.03721 12.536 3.33609 14.013 3.33609 15.6244V17.0117C3.33609 17.4145 3.37973 17.8044 3.46174 18.1765ZM8.04199 10.1374C7.59149 10.3452 7.09658 10.4599 6.57721 10.4599C4.48866 10.4599 2.79555 8.60361 2.79555 6.31371C2.79555 4.02381 4.48866 2.16748 6.57721 2.16748C6.63938 2.16748 6.70121 2.16913 6.76264 2.17238C6.38289 3.07521 6.17067 4.08327 6.17067 5.14665C6.17067 7.10002 6.8868 8.86671 8.04199 10.1374Z" fill="white" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.106 5.14774C17.106 2.30472 15.0412 0 12.4942 0C9.94709 0 7.88228 2.30472 7.88228 5.14774C7.88228 7.99076 9.94709 10.2955 12.4942 10.2955C15.0412 10.2955 17.106 7.99076 17.106 5.14774Z" fill="white" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.87696 12.7279C10.5094 11.2798 14.4789 11.2798 18.1114 12.7279C19.2083 13.1651 19.9405 14.3249 19.9405 15.625V17.0123C19.9405 18.8301 18.498 20.2265 16.8858 19.9694L16.5155 19.9104C13.8481 19.485 11.1402 19.485 8.47281 19.9104L8.10251 19.9694C6.49029 20.2265 5.04785 18.8301 5.04785 17.0123V15.625C5.04785 14.3249 5.78006 13.1651 6.87696 12.7279Z" fill="white" />
                                    </svg>
    
                                    <h5 className='font-inter text-[#fff] text-[12px] not-italic font-medium leading-normal capitalize'>{data.seats}</h5>
                                </div>
                            </div>

                            </div>
                        </div>
    
                        {/* ================================= */}
    
                        <div className='cardstitle px-4 py-1 pt-3'>
    
                            <h1 className='font-inter text-[18px] not-italic text-left font-semibold leading-normal capitalize'>{data.title2}</h1>
    
                        </div>
    
                        <div className='para lg:px-6 px-4 md:px-6'>
                            <p className='font-inter text-justify text-[14px] text-[#7E8F9A] not-italic font-medium tracking-[150.023%] capitalize'>
                            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Vestibulum mollis nunc a molestie dictum. Mauris venenatis,
                             felis scelerisque aliquet lacinia, nulla nisi venenatis odio,
                              id blandit mauris ipsum id sapien. Vestibulum malesuada orci sit amet pretium facilisis.
                               In lobortis congue augue, a commodo libero tincidunt scelerisque.
                                Donec tempus congue lacinia. Phasellus lacinia felis est, 
                                placerat commodo odio tincidunt iaculis. Sed felis magna, iaculis a metus id, 
                                ullamcorper suscipit nulla. Fusce facilisis, nunc ultricies posuere porttitor,
                                 nisl lacus tincidunt diam, vel feugiat nisi elit id massa. Proin nulla  */}
                                 {data.desc}
                            </p>
    
                        </div>
    
                        <div className='cardstitle px-4 py-3'>
    
                            <h1 className='text-[18px] not-italic text-left font-semibold leading-normal capitalize'>Course Outcome</h1>
    
                        </div>
                        <div className='course lg:px-6 md:px-6 px-4'>
                            <h5 className='font-inter text-justify text-[14px] text-[#7E8F9A] not-italic font-medium leading-[150.023%] capitalize'>{data.coursename}</h5>
    
                        </div>
    
                        {/* =============================button================ */}
                        <div className='flex space-x-4 px-4 py-4'>
                        <button type="button" className="font-inter button-bg text-[#FFF] not-italic font-semibold leading-normal text-[18px] px-2 p-2.5 py-2 pt-2  capitalize">Enroll Now</button>
                        <button type="button" className="font-Euclid button- text-[#B3B3B3] not-italic font-semibold leading-normal text-[20px] px-5 p-2.5 py-2 pt-2  capitalize">Learn More</button>
                        </div>
    
                        {/* ================================= */}
                    </div>
                  </div>
                  </div>

                    )
                })}
                 </div>

           



                {/* =====================================view more data======================= */}
                {showSeeMore && (
                <div className='flex grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center justify-center py-5'>
                {Cardsdata.map((data,index)=>{
                    return(
                       
                        <div class="w-[321px] h-[786px] items-center justify-center">
                        <div class="w-[320px] h-[785px] hover:bg-gradient-to-r hover:from-[#F05225] hover:via-[#EEA820] hover:to-[#EEA820] p-0.5 transition delay-700 duration-700 ease-in-out ">
                        <div className='cardweoffers border w-[315px] h-[780px] '>
                        <div className='relative '>
                            <img src={data.img} className='Rectangle-image w-[348px] h-[220px] ' alt='rectangle' />

                            <div className='transform
                                transition duration-500 hover:scale-110'>
                            <div className='absolute bottom-[150px] left-[20px]'>
                                <h3 className='font-Euclid text-[#fff] text-[22px] not-italic font-normal leading-normal capitalize '>{data.title1}</h3>
                            </div>
                            <div className='flex gap-5 absolute bottom-[90px] left-[15px]'>
                                <h3 className='font-Euclid text-[#fff] text-[20px] not-italic font-semibold leading-normal capitalize'>{data.course}</h3>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 47 47" fill="none" className=''>
                                    <path d="M19.9523 14.5592C20.6006 15.2675 20.5602 16.3747 19.8621 17.0324L13.1734 23.3333L19.8621 29.6343C20.5602 30.2919 20.6006 31.3992 19.9523 32.1075C19.3041 32.8157 18.2126 32.8567 17.5145 32.1991L9.4645 24.6157C9.113 24.2846 8.91328 23.82 8.91328 23.3333C8.91328 22.8467 9.113 22.3821 9.4645 22.051L17.5145 14.4676C18.2126 13.81 19.3041 13.851 19.9523 14.5592Z" fill="white" />
                                    <path d="M27.8645 17.0324C27.1664 16.3747 27.126 15.2675 27.7742 14.5592C28.4225 13.851 29.5139 13.81 30.2121 14.4676L38.2621 22.051C38.6136 22.3821 38.8133 22.8467 38.8133 23.3333C38.8133 23.82 38.6136 24.2846 38.2621 24.6157L30.2121 32.1991C29.5139 32.8567 28.4225 32.8157 27.7742 32.1075C27.126 31.3992 27.1664 30.2919 27.8645 29.6343L34.5532 23.3333L27.8645 17.0324Z" fill="white" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.863281 4.08333C0.863281 1.82817 2.66533 0 4.88828 0H42.8383C45.0612 0 46.8633 1.82817 46.8633 4.08333V42.5833C46.8633 44.8385 45.0612 46.6667 42.8383 46.6667H4.88828C2.66534 46.6667 0.863281 44.8385 0.863281 42.5833V4.08333ZM4.88828 3.5C4.57072 3.5 4.31328 3.76117 4.31328 4.08333V42.5833C4.31328 42.9055 4.57072 43.1667 4.88828 43.1667H42.8383C43.1558 43.1667 43.4133 42.9055 43.4133 42.5833V4.08333C43.4133 3.76117 43.1558 3.5 42.8383 3.5H4.88828Z" fill="white" />
                                </svg>
    
                            </div>
    
                            <div className='flex space-x-1 absolute bottom-[60px] left-[20px]'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="20" viewBox="0 0 23 20" fill="none">
                                    <path d="M12.2664 0.556893C12.1509 0.343558 11.9125 0.208496 11.6515 0.208496C11.3904 0.208496 11.1521 0.343558 11.0365 0.556893L8.24024 5.72091L1.98754 6.549C1.72923 6.58321 1.51463 6.74811 1.43397 6.97437C1.35331 7.20063 1.42058 7.449 1.6075 7.61506L6.13199 11.6347L5.0639 17.3105C5.01978 17.545 5.12554 17.782 5.33671 17.9218C5.54788 18.0616 5.82784 18.0801 6.05888 17.9694L11.6515 15.2896L17.244 17.9694C17.4751 18.0801 17.755 18.0616 17.9662 17.9218C18.1774 17.782 18.2831 17.545 18.239 17.3105L17.1709 11.6347L21.6954 7.61506C21.8823 7.449 21.9496 7.20063 21.869 6.97437C21.7883 6.74811 21.5737 6.58321 21.3154 6.549L15.0627 5.72091L12.2664 0.556893Z" fill="white" />
                                </svg>
    
                                <span className='text-[#fff] text-[18px] not-italic font-medium leading-normal capitalize'>{data.star}</span>
                            </div>
                            <div className='flex space-x-[150px]'>
                                <div className='flex gap-1 absolute bottom-[25px] left-[20px]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                        <path d="M10.638 6.04183C10.638 5.69665 10.3582 5.41683 10.013 5.41683C9.66784 5.41683 9.38802 5.69665 9.38802 6.04183V10.6252C9.38802 10.8494 9.5082 11.0565 9.70293 11.1678L12.6196 12.8345C12.9193 13.0057 13.3011 12.9016 13.4723 12.6019C13.6436 12.3022 13.5395 11.9204 13.2398 11.7492L10.638 10.2625V6.04183Z" fill="white" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.2214 0.833496C5.15874 0.833496 1.05469 4.93755 1.05469 10.0002C1.05469 15.0628 5.15874 19.1668 10.2214 19.1668C15.284 19.1668 19.388 15.0628 19.388 10.0002C19.388 4.93755 15.284 0.833496 10.2214 0.833496ZM2.30469 10.0002C2.30469 5.62791 5.8491 2.0835 10.2214 2.0835C14.5936 2.0835 18.138 5.62791 18.138 10.0002C18.138 14.3724 14.5936 17.9168 10.2214 17.9168C5.8491 17.9168 2.30469 14.3724 2.30469 10.0002Z" fill="white" />
                                    </svg>
    
                                    <h5 className='font-inter text-[#fff] text-[16px] not-italic font-medium leading-normal capitalize'>{data.time}</h5>
                                </div>
    
                                <div className='flex gap-1 absolute bottom-[25px] left-[20px]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" viewBox="0 0 25 20" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M21.4794 18.1769C21.5404 18.1859 21.6013 18.1952 21.6622 18.2047L21.9659 18.2523C23.2879 18.4593 24.4706 17.3346 24.4706 15.8705V14.753C24.4706 13.7059 23.8702 12.7718 22.9708 12.4196C21.9309 12.0124 20.8573 11.7474 19.7735 11.6245C20.9039 12.5364 21.6051 14.0134 21.6051 15.6248V17.0122C21.6051 17.4149 21.5614 17.8048 21.4794 18.1769ZM16.8994 10.1377C17.3501 10.3455 17.8452 10.4604 18.3648 10.4604C20.4533 10.4604 22.1464 8.6041 22.1464 6.3142C22.1464 4.0243 20.4533 2.16797 18.3648 2.16797C18.3023 2.16797 18.2402 2.16963 18.1785 2.17291C18.5583 3.07573 18.7705 4.08377 18.7705 5.14713C18.7705 7.10038 18.0545 8.86695 16.8994 10.1377Z" fill="white" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.46174 18.1765C3.40106 18.1855 3.3404 18.1947 3.27976 18.2042L2.97613 18.2518C1.65413 18.4589 0.471357 17.3341 0.471357 15.87V14.7526C0.471357 13.7054 1.07175 12.7713 1.97119 12.4191C3.01081 12.012 4.0841 11.747 5.16755 11.6241C4.03721 12.536 3.33609 14.013 3.33609 15.6244V17.0117C3.33609 17.4145 3.37973 17.8044 3.46174 18.1765ZM8.04199 10.1374C7.59149 10.3452 7.09658 10.4599 6.57721 10.4599C4.48866 10.4599 2.79555 8.60361 2.79555 6.31371C2.79555 4.02381 4.48866 2.16748 6.57721 2.16748C6.63938 2.16748 6.70121 2.16913 6.76264 2.17238C6.38289 3.07521 6.17067 4.08327 6.17067 5.14665C6.17067 7.10002 6.8868 8.86671 8.04199 10.1374Z" fill="white" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.106 5.14774C17.106 2.30472 15.0412 0 12.4942 0C9.94709 0 7.88228 2.30472 7.88228 5.14774C7.88228 7.99076 9.94709 10.2955 12.4942 10.2955C15.0412 10.2955 17.106 7.99076 17.106 5.14774Z" fill="white" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.87696 12.7279C10.5094 11.2798 14.4789 11.2798 18.1114 12.7279C19.2083 13.1651 19.9405 14.3249 19.9405 15.625V17.0123C19.9405 18.8301 18.498 20.2265 16.8858 19.9694L16.5155 19.9104C13.8481 19.485 11.1402 19.485 8.47281 19.9104L8.10251 19.9694C6.49029 20.2265 5.04785 18.8301 5.04785 17.0123V15.625C5.04785 14.3249 5.78006 13.1651 6.87696 12.7279Z" fill="white" />
                                    </svg>
    
                                    <h5 className='font-inter text-[#fff] text-[12px] not-italic font-medium leading-normal capitalize'>{data.seats}</h5>
                                </div>
                            </div>

                            </div>
                        </div>
    
                        {/* ================================= */}
    
                        <div className='cardstitle px-2 py-3'>
    
                            <h1 className='font-inter text-[18px] not-italic text-left font-semibold leading-normal capitalize'>{data.title2}</h1>
    
                        </div>
    
                        <div className='para lg:px-6 px-4 md:px-6'>
                            <p className='font-inter text-justify text-[14px] text-[#7E8F9A] not-italic font-medium tracking-[150.023%] capitalize'>
                            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Vestibulum mollis nunc a molestie dictum. Mauris venenatis,
                             felis scelerisque aliquet lacinia, nulla nisi venenatis odio,
                              id blandit mauris ipsum id sapien. Vestibulum malesuada orci sit amet pretium facilisis.
                               In lobortis congue augue, a commodo libero tincidunt scelerisque.
                                Donec tempus congue lacinia. Phasellus lacinia felis est, 
                                placerat commodo odio tincidunt iaculis. Sed felis magna, iaculis a metus id, 
                                ullamcorper suscipit nulla. Fusce facilisis, nunc ultricies posuere porttitor,
                                 nisl lacus tincidunt diam, vel feugiat nisi elit id massa. Proin nulla  */}
                                 {data.desc}
                            </p>
    
                        </div>
    
                        <div className='cardstitle px-2 py-3'>
    
                            <h1 className='text-[18px] not-italic text-left font-semibold leading-normal capitalize'>Course Outcome</h1>
    
                        </div>
                        <div className='course lg:px-6 md:px-6 px-4'>
                            <h5 className='font-inter text-justify text-[14px] text-[#7E8F9A] not-italic font-medium leading-[150.023%] capitalize'>{data.coursename}</h5>
    
                        </div>
    
                        {/* =============================button================ */}
                        <div className='flex space-x-4 px-4 py-4'>
                        <button type="button" className="font-inter button-bg text-[#FFF] not-italic font-semibold leading-normal text-[18px] px-2 p-2.5 py-2 pt-2  capitalize">Enroll Now</button>
                        <button type="button" className=" font-Euclid button- text-[#B3B3B3] not-italic font-semibold leading-normal text-[20px] px-4 p-2.5 py-2 pt-2  capitalize">Learn More</button>
                        </div>
    
                        {/* ================================= */}
                    </div>
                  </div>
                  </div>

                    )
                })}
                 </div>

                )}

                {/* =====================================view more data end===================== */}

                 {/* ==========================view more  ===================*/}
                 <div className='viewmorebtn  float-right'>
                <button 
                type="button" 

                onClick={
                    ()=>{
                        setShowSeeMore((prevSeeMore)=>setShowSeeMore(!prevSeeMore))
                    }
                }

                className="button- text-[#B3B3B3] font-Euclid  not-italic font-semibold leading-normal text-[20px] px-4 p-2.5 py-2 pt-2  capitalize">
                    
                    {showSeeMore ? "View More": "View More"}
                    
                    </button>
                </div>
                
                 
                 {/* =================================== */}

            </div>
            
        </>
    )
}

export default WeOffers