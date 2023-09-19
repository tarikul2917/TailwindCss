import React from "react";
import service1 from "../../assets/images/service1.jpg";

function Service() {
  return (
    <div className=" md:overflow-hidden mt-3">
      <div className="max-w-container relative md:flex mx-auto">
        <div className="w-[100%] md:w-[50%] px-5 py-9 md:py-[145px]">
          <h2 className="font-poppins text-[25px] md:text-[48px] font-bold">
            Our Services
          </h2>
          <p className="font-poppins text-base text-[#6C6C6C]">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
        {/* second row */}
        <div
          className="w-[100%] text-center md:text-left bg-cover bg-no-repeat py-9 md:py-[145px] p-5 relative md:mt-0 mb-3 md:absolute left-0 md:left-[50%] md:ps-[116px] after:z-[-1] z-[1] bg-left after:content-[''] after:absolute after:w-full after:h-full after:bg-[#00000070] after:left-0 after:top-0"
          style={{ backgroundImage: `url(${service1})` }}
        >
          <h2 className="font-poppins leading-10 font-bold text-[36px] min-w-[100px]  text-white">
            Modern natural oil and gas refineries.
          </h2>
          <button className="py-[14px] mt-8 md:mt-7 px-[30px] bg-primary text-white">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Service;
