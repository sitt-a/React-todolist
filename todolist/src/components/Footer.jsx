import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#e6e4dc] py-12 w-full"> {/* Added px-4 for horizontal padding */}
      <div className="grid grid-cols-5 gap-32 w-[100%] mx-auto justify-items-center"> {/* Grid for five columns, justify-items-center for vertical centering */}
        <div className="">
          <h3 className="text-black text-lg font-semibold mb-4">Column 1</h3>
          <ul className="text-black">
            <li className="mb-2">Item 1</li>
            <li className="mb-2">Item 2</li>
            <li className="mb-2">Item 3</li>
            <li className="mb-2">Item 4</li>
            <li>Item 5</li>
          </ul>
        </div>
        <div className="">
          <h3 className="text-black text-lg font-semibold mb-4">Column 2</h3>
          <ul className="text-black">
            <li className="mb-2">Item 1</li>
            <li className="mb-2">Item 2</li>
            <li className="mb-2">Item 3</li>
            <li className="mb-2">Item 4</li>
            <li>Item 5</li>
          </ul>
        </div>
        <div className="col-span-1">
          <h3 className="text-black text-lg font-semibold mb-4">Column 3</h3>
          <ul className="text-black">
            <li className="mb-2">Item 1</li>
            <li className="mb-2">Item 2</li>
            <li className="mb-2">Item 3</li>
            <li className="mb-2">Item 4</li>
            <li>Item 5</li>
          </ul>
        </div>
        <div className="col-span-1">
          <h3 className="text-black text-lg font-semibold mb-4">Column 4</h3>
          <ul className="text-black">
            <li className="mb-2">Item 1</li>
            <li className="mb-2">Item 2</li>
            <li className="mb-2">Item 3</li>
            <li className="mb-2">Item 4</li>
            <li>Item 5</li>
          </ul>
        </div>
        <div className="col-span-1">
          <h3 className="text-black text-lg font-semibold mb-4">Column 5</h3>
          <ul className="text-black">
            <li className="mb-2">Item 1</li>
            <li className="mb-2">Item 2</li>
            <li className="mb-2">Item 3</li>
            <li className="mb-2">Item 4</li>
            <li>Item 5</li>
          </ul>
        </div>
      </div>
      <div className="w-full text-center mt-8 border-t border-gray-400 p-4">
        <p className="text-black">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
