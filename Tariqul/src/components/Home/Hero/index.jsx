import React from "react";
import herobg from "../../../assets/images/herobg.jpg";
function Hero() {
  return (
    <div
      style={{ backgroundImage: `url(${herobg})` }}
      className="py-32 px-6 md:px-0 md:py-[256px] bg-cover bg-no-repeat after:z-[-1] z-[1] bg-center after:content-[''] after:absolute after:w-full after:h-full after:bg-[#00000070] after:left-0 after:top-0 relative"
    >
      <div className="max-w-container mx-auto text-center md:text-left gap-y-3">
        <h1 className="font-poppins text-white w-full md:w-[842px] text-[25px] md:text-[46px] lg:text-[64px]">
          We exist since 1975 on the oil and gas industry.
        </h1>
        <button className="bg-primary border-2  border-primary hover:border-2 hover:border-white hover:bg-transparent py-2 mt-3 md:mt-7 rounded-md md:py-[13px] px-[41px] text-white  transition duration-300 ease-in-out">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default Hero;
