import React from "react";

function About() {
  return (
    <div className="bg-white">
      <div className="max-w-container flex mx-auto py-10 md:py-24 flex-col px-6 md:px-0 md:flex-row items-center justify-between">
        <div className="md:w-4/12">
          <h2 className="font-poppins text-[25px] leading-tight md:text-[48px] font-bold">
            The biggest supplier on the country
          </h2>
        </div>
        <div className="md:w-6/12 ">
          <p className="text-[#6C6C6C] leading-tight mt-3 md:mt-0 text-base">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
