import React from "react";
import brand1 from "../../assets/images/brand1.png";
import brand2 from "../../assets/images/brand2.png";
import brand3 from "../../assets/images/brand3.png";
import brand4 from "../../assets/images/brand4.png";

function Branding() {
  return (
    <div className="bg-white">
      <div className="max-w-container md:flex text-center justify-between py-[116px] mx-auto">
        <img src={brand1} alt="brand1" />
        <img src={brand2} alt="brand2" />
        <img src={brand3} alt="brand3" />
        <img src={brand4} alt="brand4" />
      </div>
    </div>
  );
}

export default Branding;
