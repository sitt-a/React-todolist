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
    <div className='flex justify-center items-center w-full px-24 space-x-16'>
      <div className='content-wrapper w-[80%] text-left text-lg mt-20'> {/* Added margin-top: 16px */}
        <div className='text-black pb-4 text-4xl font-bold'> <p className='w-[70%]'>Capture tasks at the speed of thought</p></div>
        <div className='w-full  mb-4 text-gray-600 h-30 py-6 text-xl '><p className='w-[95%] '>We’ve spent over a decade refining how people add tasks to Todoist. Our goal? To make a to-do list that feels like a natural extension of your mind.</p></div>
        <div className='w-full mb-4 text-gray-600 p-6 bg-gray-100 rounded-lg'><p className='w-[80%]'>Quick add will quickly become your superpower. Capture and organize tasks the moment they come to you with easy-flowing, natural language.</p></div>
        <div className='w-full mb-4  text-gray-600 p-6 bg-gray-100 rounded-lg'>Recurring Due dates</div>
        <div className='w-full mb-4 text-gray-600 p-6 bg-gray-100 rounded-lg'>Reminders</div>
        <div className='w-full mb-4 text-gray-600 p-6 bg-gray-100 rounded-lg'>80+ intergrations</div>
      </div>

      <div className={`image-container w-full justify-center h-[500px] overflow-hidden ${isSticky ? 'sticky top-0' : ''}`}>
        <img src={ds} alt="todo" className='w-full h-full object-cover' />
      </div>
    </div>
  );
}

export default Service;
