import React, { useState, useRef, useEffect } from "react";
import { FaCaretDown, FaBars } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";


const MainHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const servicesRef = useRef(null);
  const mobileMenuRef = useRef(null);

  

  return (
    <header className="w-full  h-[56px] md:h-[85px] lg:h-[104px]">
      <div className="mx-auto flex justify-between px-5 md:px-12 lg:px-[45px] xl:px-20 items-center">

        <a href="/">
          <img
            src="https://s3-alpha-sig.figma.com/img/c1e1/45c4/467f6c3f60c323a607803f6d0dbc78cd?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CJsqb2Us5tJbJYv48B4hm0nZY7FBVILWUACjzGeGn0KnATEl3uvXkRPYXHkpxN8DEINzfstTgJ9JWW4qQsf7PJTBTTKT5qCE4B0cnVprGhhg2geZxmT8PIttR-4ye7W77FGMILp5JXhnp7pFVSg41lu-BhjlhiGUX6JnFf8I5aG~5wVaaq2sqAW9qbv7h5LkFCgcSjq7Pb2pcSMDfyS8jhFsXAe-Ba5t4ngLa6S9VaXRWUxxvzjb2KneDsAwshohiILjNPB8BCDmRLsjpB3YnmYNMn0faISRyePDbxECjAkptU0DDE5uZzn~zyM9i6dCaNMHPpMRSYkgnRH6t45zmA__"
            alt="Company Logo"
            className="w-[97px] md:w-[181px] lg:w-[181px]"
          />
        </a>

        <div className="md:flex-row">
          <nav className="hidden md:flex space-x-8 items-center">
          <NavItem label="Find Suppliers" href="/findSupplies" />

            <div className="relative" ref={servicesRef}>
              <NavItem
                label="Find Services Tage"
                icon={<MdKeyboardArrowDown />}
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              />
             
            </div>
            <div className="hidden md:flex justify-end items-center">
          <LoginAndSignUp />
        </div>
          </nav>
        </div>
        

        <div className="md:hidden">
          {isMobileMenuOpen ? (
            <FaBars
              className="text-2xl cursor-pointer"
              onClick={() => setIsMobileMenuOpen(false)}
            />
          ) : (
            <FaBars
              className="text-2xl cursor-pointer"
              onClick={() => setIsMobileMenuOpen(true)}
            />
          )}
        </div>
        <div
          className={`z-10 fixed inset-0 mt-[56px] bg-white text-black transition-opacity duration-300 ${
            isMobileMenuOpen
              ? "opacity-100 visible h-[37vh]"
              : "opacity-0 invisible h-0"
          }`}
          ref={mobileMenuRef}
        >
          <div className="overflow-y-auto h-full p-4 ">
            <ul className="flex flex-col space-y-6 text-xl ">
              <li>
                <a href="/technologies">Find Services Tage</a>
              </li>
              <li
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="cursor-pointer  flex justify-between items-center hover:bg-[#F4F4F4]"
              >
                Find Suppliers <FaCaretDown />
              </li>
              {isServicesOpen && (
                <ul className="ml-4 text-lg space-y-2">
                  <li>
                    <a href="/#">Find Services Tage 1</a>
                  </li>
                  <li>
                    <a href="/#">
                    Find Services Tage 1
                    </a>
                  </li>
                  <li>
                    <a href="/#">
                    Find Services Tage 1
                    </a>
                  </li>
                  <li>
                    <a href="/#">
                    Find Services Tage 1
                    </a>
                  </li>
                  <li>
                    <a href="/#">Find Services Tage 1</a>
                  </li>
                </ul>
              )}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

const NavItem = ({ label, href, icon, onClick }) => {
  return (
    <a
      href={href}
      className="flex items-center cursor-pointer "
      onClick={onClick}
    >
      <span className="md:text-[13px] lg:text-[16px] font-poppins text-[#6D6E71]">{label}</span>
      {icon && <span className="ml-2 text-[17px]">{icon}</span>}
    </a>
  );
};


const LoginAndSignUp = () => {
    return (
      <button className=" text-[#00732F] rounded-lg  border-2 border-[#00732F] w-[180px] lg:h-[53px] md:h-[40px]  font-poppins lg:w-[193px] md:w-[180px]">
        <a href="/#" className="md:text-[15px] font-bold ">
          Login/Sign up
        </a>
        
      </button>
    );
  };
export default MainHeader;
