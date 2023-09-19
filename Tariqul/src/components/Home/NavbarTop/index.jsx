import React from "react";
import email from "../../../assets/images/email.svg"; // svg icon
import phone from "../../../assets/images/phone.svg"; // svg icon
// Socila icon from react
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
function Navbartop() {
  return (
    <div className="bg-[#282828] py-[15px]">
      <div className="max-w-container mx-auto flex items-center px-5 md:px-0 justify-between">
        <div className="blog md:flex gap-x-11 items-center ">
          {/* navbar top left part  */}
          <div className="flex gap-1 after:content-[''] relative after:absolute after:top-0 after:right-[-10px] after:h-[200%] after:md:h-full after:w-[1px] after:bg-[#5C6A92]">
            <img src={email} alt="email icon" />
            <span className="text-white font-poppins font-[12px] ">
              skshakil591@gmail.com
            </span>
          </div>
          <div className="flex gap-1">
            <img src={phone} alt="email icon" />{" "}
            <span className="text-white font-poppins font-[12px] ">
              +880 1845590711
            </span>
          </div>
        </div>
        {/* social icons menu  */}
        <div>
          <div className="items-center flex gap-2 md:gap-3 text-white gap-px-5">
            <FaFacebookF className="hover:animate-bounce cursor-pointer"></FaFacebookF>
            <FaTwitter className=" hover:animate-bounce cursor-pointer"></FaTwitter>
            <FaLinkedinIn className=" hover:animate-bounce cursor-pointer"></FaLinkedinIn>
            <FaInstagram className=" hover:animate-bounce cursor-pointer"></FaInstagram>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbartop;
