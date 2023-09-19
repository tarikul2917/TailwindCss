import React from "react";
import ctabg from "../../assets/images/ctabg.jpg";
function Calltoaction() {
  return (
    <div className="bg-[#F0F0F0] py-[100px] md:py-[136px]">
      <div className="max-w-container md:flex mx-auto">
        <div className="w-full md:w-full lg:w-[413px] py-9 md:py-[100px] bg-primary px-5 md:px-[74px]">
          <h2 className="font-poppins text-[36px] leading-10 text-center md:text-left font-bold text-white">
            Learn more about our company
          </h2>
        </div>
        <div
          className="bg-cover bg-no-repeat bg-center py-24 px-5 text-center md:px-[282px] md:py-[150px]"
          style={{ backgroundImage: `url(${ctabg})` }}
        >
          <button className="bg-white text-primary font-poppins font-semibold py-[13px] px-[30px]">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calltoaction;
