import React from "react";
import logo from "../../assets/images/logo.png";
import card1 from "../../assets/images/Cert1.png";
import card2 from "../../assets/images/Cert2.png";
import email from "../../assets/images/email.svg"; // svg icon
import phone from "../../assets/images/phone.svg"; // svg icon
import location from "../../assets/images/map.svg"; // svg icon

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
function Footer() {
  return (
    <div>
      <div className="bg-primary py-[46px]">
        <div className="max-w-container text-center mx-auto md:flex justify-between">
          <h2 className="font-poppins text-white text-[24px] text-center md:text-left md:text-[36px] font-bold">
            Want to join as member branch in your area?
          </h2>
          <button className="font-poppins mt-5 md:mt-0 py-[13px] px-[32px] border-2 text-white">
            Contact
          </button>
        </div>
      </div>
      {/* footer top end  */}
      <div className="bg-[#1F1F1F] py-[80px] md:py-[149px] text-center md:text-left">
        <div className="max-w-container md:flex justify-between items-center mx-auto">
          <div className="space-y-3 p-5">
            <img src={logo} className="mx-auto" alt="site logo" />
            <div className="flex gap-1 justify-center md:justify-normal">
              <img src={email} className="" alt="email icon" />
              <span className="text-white font-poppins font-[12px] ">
                skshakil591@gmail.com
              </span>
            </div>
            <div className="flex justify-center md:justify-normal gap-1">
              <img src={phone} alt="email icon" />{" "}
              <span className="text-white font-poppins font-[12px] ">
                +880 1845590711
              </span>
            </div>
            <div className="flex justify-center md:justify-normal gap-1">
              <img src={location} alt="location icon" />{" "}
              <span className="text-white font-poppins font-[12px] ">
                101 Baker Street, New York
              </span>
            </div>
            <div className="items-center justify-center md:justify-normal flex gap-2 md:gap-3 text-white gap-px-5">
              <div className="bg-primary p-2 rounded-full">
                <FaFacebookF className="cursor-pointer"></FaFacebookF>
              </div>
              <div className="bg-primary p-2 rounded-full">
                <FaTwitter className="cursor-pointer"></FaTwitter>
              </div>
              <div className="bg-primary p-2 rounded-full">
                <FaLinkedinIn className=" cursor-pointer"></FaLinkedinIn>
              </div>
              <div className="bg-primary p-2 rounded-full">
                <FaInstagram className="  cursor-pointer"></FaInstagram>
              </div>
            </div>
          </div>
          {/* second collom  */}
          <div className="space-y-3">
            <h3 className="font-poppins text-white  font-bold">Company</h3>
            <a className="font-poppins text-white text-sm block" href="#">
              Home
            </a>
            <a className="font-poppins text-white text-sm block" href="#">
              About
            </a>
            <a className="font-poppins text-white text-sm block" href="#">
              Service
            </a>
            <a className="font-poppins text-white text-sm block" href="#">
              Gallery
            </a>
          </div>
          {/* third Collom  */}
          <div className="space-y-3">
            <h3 className="font-poppins text-white  font-bold">Others</h3>
            <a className="font-poppins text-white text-sm block" href="#">
              Blog
            </a>
            <a className="font-poppins text-white text-sm block" href="#">
              Contact
            </a>
            <a className="font-poppins text-white text-sm block" href="#">
              Terms & Conditions
            </a>
            <a className="font-poppins text-white text-sm block" href="#">
              Privacy Policy
            </a>
          </div>
          <div className="space-y-3">
            <h3 className="font-poppins text-white  font-bold">Certificate</h3>
            <img src={card1} alt="Certificate" className="mx-auto" />
            <img src={card2} alt="Certificate" className="mx-auto" />
          </div>
        </div>
      </div>
      {/* Footer Bottom Part  */}
      <div className="bg-[#282828] md:py-[42px] p-5">
        <div className="text-center">
          <p className="text-[#6C6C6C] text-[16px] font-poppins font-medium">
            © Copyright 2022 by AltDesain Studio – All right reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
