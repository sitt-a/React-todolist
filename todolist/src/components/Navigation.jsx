import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white py-5 p-0 ">
      <div className="container mx-auto  flex justify-between items-center md:flex-row flex-col">
        <div className="text-black font-semibold text-3xl  ">TodoList</div>
        <div className="flex  text-black mt-4 md:mt-0">
  <a href="#" className="bg-transparent hover:bg-[#eeeeed] text-black font-semibold text-lg py-1 px-5 rounded inline-block">
   Home
  </a>
  <a href="#" className="bg-transparent hover:bg-[#eeeeed] text-black font-semibold text-lg py-1 px-5 rounded inline-block">
   For Teams
  </a>
  <a href="#" className="bg-transparent hover:bg-[#eeeeed] text-black font-semibold text-lg py-1 px-5 rounded inline-block">
    Features
  </a>
  <a href="#" className="bg-transparent hover:bg-[#eeeeed] text-black font-semibold text-lg py-1 px-5 rounded inline-block">
    Pricing
  </a>
  <a href="#" className="mr-4 bg-transparent hover:bg-[#eeeeed] text-black font-semibold text-lg py-1 px-5 rounded inline-block">
    Log in
  </a>
  <a href="#" className=" bg-[#a18330] hover:bg-[#8d732a] text-white font-semibold text-lg py-1 px-5 rounded inline-block">
  Free Trail
  </a>
</div>

      </div>
    </nav>
  );
};

export default Navbar;
