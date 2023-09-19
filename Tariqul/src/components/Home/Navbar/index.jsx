import React, { useState } from "react";

import logo from "../../../assets/images/logo.png"; //site logo

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // Function for toggle menu
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    // main menu for large screen devices
    <nav className="bg-primary py-[30px] ">
      <div className="max-w-container items-center flex justify-between mx-auto px-6 md:px-0">
        <div>
          <img src={logo} alt="Logo" />
        </div>
        <div className="gap-12 items-center hidden md:flex">
          <a
            href="#"
            className="text-white font-poppins font-semibold text-base"
          >
            Home
          </a>
          <a
            href="#"
            className="text-white font-poppins font-semibold text-base"
          >
            About
          </a>
          <a
            href="#"
            className="text-white font-poppins font-semibold text-base"
          >
            Service
          </a>
          <a
            href="#"
            className="text-white font-poppins font-semibold text-base"
          >
            Gallery
          </a>
          <a
            href="#"
            className="text-white font-poppins font-semibold text-base"
          >
            Blog
          </a>
          <a
            href="#"
            className="text-white border border-white py-[13px] px-[32px] font-poppins font-semibold text-base"
          >
            Contact
          </a>
        </div>
        {/* Mobile menu  */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleNavbar}
            className="text-white hover:text-gray-300 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        // Mobile Menu items
        <div className="md:hidden  w-full gap-y-3 flex flex-col bg-primary  mt-4 p-4">
          <a
            href="#"
            className="text-white font-poppins block transition hover:bg-hoverbg py-2 px-2 font-semibold text-base"
          >
            Home
          </a>
          <a
            href="#"
            className="text-white font-poppins block transition hover:bg-hoverbg py-2 px-2 font-semibold text-base"
          >
            About
          </a>
          <a
            href="#"
            className="text-white font-poppins block transition  hover:bg-hoverbg py-2 px-2 font-semibold text-base"
          >
            Service
          </a>
          <a
            href="#"
            className="text-white font-poppins block transition hover:bg-hoverbg py-2 px-2 font-semibold text-base"
          >
            Gallery
          </a>
          <a
            href="#"
            className="text-white font-poppins block transition hover:bg-hoverbg py-2 px-2 font-semibold text-base"
          >
            Blog
          </a>
          <a
            href="#"
            className="text-white hover:text-primary transition rounded-sm  hover:bg-white border text-center text-md-start border-white py-[13px] px-[32px] block font-poppins font-semibold text-base"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
