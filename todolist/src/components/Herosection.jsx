import React from 'react';

const Herosection = () => {
  return (
    <section className="py-16 w-full md:w-[60%] mx-auto">
      <div className="container mx-auto px-4 text-center flex flex-col items-center justify-center">
        <div className="text-black font-poppins text-6xl font-bold mb-8 md:text-4xl lg:text-7xl ">
          <p className='font-poppins mb-4'>Organize your work</p><p className='font-poppins'> and life, finally.</p>
        </div>
        <div className="text-gray-400 text-lg md:text-lg lg:text-xl w-[92%] mt-2 mb-8">
  <p className="mb-1 font-poppins">Become focused, organized, and calm with Todoist. The world's #1</p>
  <p className="font-poppins">task manager and to-do list app</p>
</div>

        <div>
          <button className="bg-[#a18330] hover:bg-[#8d732a] text-white font-semibold py-3 px-8 rounded-lg">
            Get started now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
