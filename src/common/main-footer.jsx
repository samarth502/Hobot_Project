import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import logo from '../assets/Home/HobotIcon.png';

const Footer = () => {
  return (
    <footer className="px-6 lg:px-28 py-10 bg-[#123557] md:px-16">
      {/* Top Border */}
      <div className="border-t border-[#FFFFFF33] mb-6 mx-auto max-w-screen-xl"></div>

      {/* Footer Content */}
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        {/* Left Section (60%) */}
        <div className="flex-1 lg:w-3/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - Logo and Copyright */}
          <div className="flex flex-col items-start justify-end h-28">
            <img src={logo} alt="Logo" className="w-24 h-auto lg:w-[400px] mb-4 object-contain" />
            <p className="text-[16px] text-white">© R Singhania</p>
          </div>

          {/* Column 2 - Company Links */}
          <div>
            <h3 className="text-white font-bold mb-3">Company</h3>
            <ul className="space-y-2">
              <li className="text-white hover:underline cursor-pointer">About</li>
              <li className="text-white hover:underline cursor-pointer">FAQ</li>
            </ul>
          </div>

          {/* Column 3 - Terms and Policies */}
          <div>
            <h3 className="text-white font-bold mb-3">Terms</h3>
            <ul className="space-y-2">
              <li className="text-white hover:underline cursor-pointer">Data Privacy</li>
              <li className="text-white hover:underline cursor-pointer">Terms</li>
              <li className="text-white hover:underline cursor-pointer">Accessibility</li>
            </ul>
          </div>

          {/* Column 4 - Related Links */}
          <div>
            <h3 className="text-white font-bold mb-3">Related</h3>
            <ul className="space-y-2">
              <li className="text-white hover:underline cursor-pointer">Find Buyer</li>
              <li className="text-white hover:underline cursor-pointer">Feedback</li>
            </ul>
          </div>
        </div>

        {/* Right Section (40%) - Social Media Icons */}
        <div className="flex items-center lg:w-2/5 justify-start lg:justify-end space-x-6 mt-4 lg:mt-0">
          <a href="#" aria-label="Facebook" className="rounded-full border-2 border-[#FFFFFF33] p-2 text-white hover:bg-[#FFFFFF33] transition-colors duration-300">
            <FaFacebookF size={24} />
          </a>
          <a href="#" aria-label="Twitter" className="rounded-full border-2 border-[#FFFFFF33] p-2 text-white hover:bg-[#FFFFFF33] transition-colors duration-300">
            <FaTwitter size={24} />
          </a>
          <a href="#" aria-label="LinkedIn" className="rounded-full border-2 border-[#FFFFFF33] p-2 text-white hover:bg-[#FFFFFF33] transition-colors duration-300">
            <FaLinkedinIn size={24} />
          </a>
          <a href="#" aria-label="Instagram" className="rounded-full border-2 border-[#FFFFFF33] p-2 text-white hover:bg-[#FFFFFF33] transition-colors duration-300">
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
      
      {/* Bottom Border */}
      <div className="border-t border-[#FFFFFF33] mt-4 mx-auto max-w-screen-xl"></div>
    </footer>
  );
};

export default Footer;
