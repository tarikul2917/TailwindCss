import React from "react";
import post1 from "../../assets/images/post1.png";
import post2 from "../../assets/images/post2.jpg";
import post3 from "../../assets/images/post3.jpg";
function BlogPost() {
  return (
    <div className="bg-[#F0F0F0] py-[110px]">
      <div className="max-w-container justify-between md:flex mx-auto">
        {/* post 1  */}
        <div
          className="px-[46px] pt-[75px] pb-[52px] bg-cover relative bg-no-repeat w-[339px] after:z-[-1] z-[1]  after:content-[''] after:absolute after:w-full after:h-full after:bg-[#00000090] after:left-0 after:top-0"
          style={{ backgroundImage: `URL(${post1})` }}
        >
          <p className="font-poppins text-2xl font-bold  text-white">
            lorem ipsum dolor sit amet consectetur adipiscing elit sed do
            eiusmod.
          </p>
          <button className="py-[10px] text-white px-[23px] mt-[52px] bg-[#FFFFFF50]">
            Read more
          </button>
        </div>
        {/* post 2  */}
        <div
          className="px-[46px] pt-[75px] pb-[52px] bg-cover relative bg-no-repeat w-[339px] after:z-[-1] z-[1]  after:content-[''] after:absolute after:w-full after:h-full after:bg-[#00000090] after:left-0 after:top-0"
          style={{ backgroundImage: `URL(${post2})` }}
        >
          <p className="font-poppins text-2xl font-bold  text-white">
            lorem ipsum dolor sit amet consectetur adipiscing elit sed do
            eiusmod.
          </p>
          <button className="py-[10px] text-white px-[23px] mt-[52px] bg-[#FFFFFF50]">
            Read more
          </button>
        </div>
        {/* post 3  */}
        <div
          className="px-[46px] pt-[75px] pb-[52px] bg-cover relative bg-no-repeat w-[339px] after:z-[-1] z-[1]  after:content-[''] after:absolute after:w-full after:h-full after:bg-[#00000090] after:left-0 after:top-0"
          style={{ backgroundImage: `URL(${post3})` }}
        >
          <p className="font-poppins text-2xl font-bold  text-white">
            lorem ipsum dolor sit amet consectetur adipiscing elit sed do
            eiusmod.
          </p>
          <button className="py-[10px] text-white px-[23px] mt-[52px] bg-[#FFFFFF50]">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
}

export default BlogPost;
