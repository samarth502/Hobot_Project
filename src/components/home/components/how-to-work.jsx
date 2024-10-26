import React from 'react';
import editIcon from '../../../assets/Home/edit.png';
import groupIcon from '../../../assets/Home/Group.png';
import handshekIcon from '../../../assets/Home/handShek.png';
import userIcon from '../../../assets/Home/userIcon.png';
import docIcon from '../../../assets/Home/document.png';
import layerIcon from '../../../assets/Home/layer.png';

const HowItWorks = () => {
  const steps = [
    "Select Your Role and Sign Up",
    "Buyers Post Your Requirements",
    "Review, Select, and Contact the Best Suppliers",
    "Suppliers Complete your profile and get notified for opportunities",
    "Contact to Buyers and Share your Quote for the service",
    "Both the Parties can Connect and Make Business Leave a Feedback"
  ];

  const boxContent = [
    { id: 1, icon: userIcon, text: "Select Your Role and Sign Up" },
    { id: 2, icon:   docIcon, text: "Buyers Post Your Requirements" },
    { id: 3, icon:  layerIcon, text: "Review, Select, and Contact the Best Suppliers" },
    { id: 4, icon: editIcon, text: "Suppliers Complete your profile and get notified for opportunities" },
    { id: 5, icon:  groupIcon, text: "Contact to Buyers and Share your Quote for the service" },
    { id: 6, icon: handshekIcon, text: "Both the Parties can Connect and Make Business Leave a Feedback" },
  ];

  return (
    <section className="px-6 py-10 lg:px-28 lg:py-20">
      {/* Heading Section */}
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4 text-gray-800">How it Works?</h2>
        <p className="text-[#000000] text-base md:text-lg ">
          Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with potential buyers, and build successful business relationships, sharing valuable feedback.
        </p>
      </div>

      {/* Boxes Section */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 overflow-hidden">
        {boxContent.map((item, index) => (
          <div
            key={item.id}
            className={`flex flex-col items-center py-20 px-7  lg:h-[254px] ${
              index % 2 === 0 ? 'bg-[#E8FBFF]' : 'bg-white'
            }`}
          >
            <img src={item.icon} alt="icon" className="mb-4 w-12 lg:w-[75px] lg:h-[75px] h-12" />
            <p className="text-center text-gray-800 font-medium lg:text-[20px]">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
