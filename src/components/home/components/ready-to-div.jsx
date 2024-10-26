import React from 'react';
import GroupArror from "../../../assets/Home/GroupArror.png";

const ReadyToDiv = () => {
  const rows = [
    { location1: "Abu Dhabi", location2: " Dhabi" },
    { location1: "Sharjah & Ajman", location2: "Fujairah" },
    { location1: "Ras AI Khaimah", location2: "Umm AI Quwain" },
  ];

  return (
    <div className="flex flex-col lg:flex-row justify-between w-full p-6 px-5 md:px-12 lg:px-[45px] xl:px-20 mt-5">
      {/* First Div */}
      <div className="lg:w-1/2 w-full flex flex-col justify-center gap-6 p-4 mb-4 lg:mb-0">
        <h1 className="text-2xl md:text-[38px] font-bold mb-4 text-center lg:text-left">Ready to dive into HABOT?</h1>
        <p className="mb-6 text-sm md:text-[18px] leading-snug lg:text-left text-justify">
          Signing up with HABOT opens the door to a world of new opportunities and potential for business growth. Gain access to a vibrant community of like-minded individuals, unlock valuable resources, and take the first step towards realizing your entrepreneurial dreams.
        </p>
        <button className="px-4 py-2 font-bold md:px-6 md:py-3 relative bg-[#00732F] w-full sm:w-[290px] text-white rounded-lg mx-auto lg:mx-0">
          Sign up Today! 
          <span className="absolute right-4 top-1/2 transform -translate-y-1/2">
            <img src={GroupArror} alt="Arrow icon" />
          </span>
        </button>
      </div>

      {/* Second Div */}
      <div className="lg:w-1/2 w-full flex flex-col justify-center p-4 gap-4">
        {rows.map((row, index) => (
          <div key={index} className="flex flex-col md:flex-row justify-between px-4 md:px-8 lg:px-12">
            {/* Location 1 */}
            <div className="flex-1 border border-red-500 flex items-center justify-center rounded-lg shadow h-[65px] py-4 mb-3 md:mb-0 md:mr-2 relative group hover:bg-[#E7760D]">
              <h2 className="text-lg font-semibold group-hover:text-white">{row.location1}</h2>
              <img
                src={GroupArror}
                alt="Arrow icon"
                className="absolute right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            {/* Location 2 */}
            <div className="flex-1 border py-4 border-red-500 flex items-center justify-center rounded-lg shadow h-[65px] mb-2 md:mb-0 md:mr-2 relative group hover:bg-[#E7760D]">
              <h2 className="text-lg font-semibold group-hover:text-white">{row.location2}</h2>
              <img
                src={GroupArror}
                alt="Arrow icon"
                className="absolute right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReadyToDiv;
