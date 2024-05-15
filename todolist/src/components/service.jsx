import React, { useState, useEffect } from 'react';
import ds from "../assets/ds.jpg";

function Service() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const imageTop = document.querySelector('.image-container').offsetTop;
      const windowScrollTop = window.scrollY;
      const contentHeight = document.querySelector('.content-wrapper').offsetHeight;

      setIsSticky(windowScrollTop >= imageTop && windowScrollTop < imageTop + contentHeight);
    };

    window.addEventListener('scroll', handleScroll); // Add event listener

    return () => window.removeEventListener('scroll', handleScroll); // Cleanup
  }, []);

  return (
    <div className='flex justify-center items-center w-full px-16 space-x-16 font-semibold'>
      <div className='content-wrapper w-[80%] text-left text-md mt-40'> {/* Added margin-top: 16px */}
        <div className='text-black pb-6 text-xl font-bold'>Capture tasks at the speed of thought</div>
        <div className='w-full  mb-4 bg-[#f2f3ed] h-30 p-6 rounded-lg'><p className='w-[81%] '>We’ve spent over a decade refining how people add tasks to Todoist. Our goal? To make a to-do list that feels like a natural extension of your mind.</p></div>
        <div className='w-full mb-4 p-6 bg-[#f2f3ed] rounded-lg'><p className='w-[80%]'>Quick add will quickly become your superpower. Capture and organize tasks the moment they come to you with easy-flowing, natural language.</p></div>
        <div className='w-full mb-4 p-6 bg-[#f2f3ed] rounded-lg'>Recurring Due dates</div>
        <div className='w-full mb-4 p-6 bg-[#f2f3ed] rounded-lg'>Reminders</div>
        <div className='w-full mb-4 p-6 bg-[#f2f3ed] rounded-lg'>80+ intergrations</div>
      </div>

      <div className={`image-container w-full justify-center h-[500px] overflow-hidden ${isSticky ? 'sticky top-0' : ''}`}>
        <img src={ds} alt="todo" className='w-full h-full object-cover' />
      </div>
    </div>
  );
}

export default Service;
