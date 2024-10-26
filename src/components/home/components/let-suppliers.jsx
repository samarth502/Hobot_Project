import React from 'react';

const LetSupplier = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center py-10 px-4 lg:px-28 md:px-20 bg-[#E8FBFF] my-12 lg:mt-36">
      {/* Left Side - Heading */}
      <div className="text-center md:text-left mb-6 md:mb-0">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
          Let Suppliers 
          <span className="relative ml-2">
            Find You
            <span className="absolute left-0 bottom-0 w-full h-1 bg-orange-500"></span>
          </span>
        </h1>
      </div>

      {/* Right Side - Button */}
      <div className="flex justify-center md:justify-end">
        <button className="bg-orange-500 w-full md:w-auto h-12 md:h-14 text-white font-semibold py-2 px-6 md:px-8 rounded-lg shadow-lg hover:bg-orange-600 transition duration-300 text-lg sm:text-xl">
          Get Verified
        </button>
      </div>
    </div>
  );
};

export default LetSupplier;
