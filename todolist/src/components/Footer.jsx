import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#e6e4dc] py-12 flex ">
      <div className="container mx-auto px-4 ">
        <div className="flex flex-wrap  justify-between items-center ">
          <div className="w-full sm:w-1/2 md:w-1/5 flex justify-center">
            <div>
              <h3 className="text-black text-lg font-semibold mb-4 ">Column 1</h3>
              <ul className="text-black">
                <li className="mb-2">Item 1</li>
                <li className="mb-2">Item 2</li>
                <li className="mb-2">Item 3</li>
                <li className="mb-2">Item 4</li>
                <li>Item 5</li>
              </ul>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/5 flex justify-center">
            <div>
              <h3 className="text-black text-lg font-semibold mb-4">Column 2</h3>
              <ul className="text-black">
                <li className="mb-2">Item 1</li>
                <li className="mb-2">Item 2</li>
                <li className="mb-2">Item 3</li>
                <li className="mb-2">Item 4</li>
                <li>Item 5</li>
              </ul>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/5 flex justify-center">
            <div>
              <h3 className="text-black text-lg font-semibold mb-4">Column 3</h3>
              <ul className="text-black">
                <li className="mb-2">Item 1</li>
                <li className="mb-2">Item 2</li>
                <li className="mb-2">Item 3</li>
                <li className="mb-2">Item 4</li>
                <li>Item 5</li>
              </ul>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/5 flex justify-center">
            <div>
              <h3 className="text-black text-lg font-semibold mb-4">Column 4</h3>
              <ul className="text-black">
                <li className="mb-2">Item 1</li>
                <li className="mb-2">Item 2</li>
                <li className="mb-2">Item 3</li>
                <li className="mb-2">Item 4</li>
                <li>Item 5</li>
              </ul>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/5 flex justify-center">
            <div>
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
        </div>
        <div className="w-full text-center mt-8 border-t border-gray-700 p-4">
          <p className="text-black">
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
