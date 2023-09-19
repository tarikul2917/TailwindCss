import React from "react";
import service2 from "../../assets/images/service2.jpg";
import service3 from "../../assets/images/service3.jpg";

function Service2() {
  return (
    <div className="md:flex">
      <div
        className="md:w-[50%] px-5 py-9 md:ps-16 text-center md:text-left md:py-[142px] bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${service2})` }}
      >
        <h2 className="font-poppins font-bold leading-10 text-white text-[36px]">
          Supply of national industries.
        </h2>
        <button className="py-[14px] mt-8 md:mt-7  px-[30px] bg-primary text-white">
          Learn More
        </button>
      </div>
      {/* second part  */}
      <div
        className="md:w-[50%]  px-5 py-9 md:ps-16 text-center md:text-left md:py-[142px] bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${service3})` }}
      >
        <h2 className="font-poppins font-bold leading-10 text-white text-[36px]">
          National fuel distribution and supply.
        </h2>
        <button className="py-[14px] mt-8 md:mt-7  px-[30px] bg-primary text-white">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default Service2;
