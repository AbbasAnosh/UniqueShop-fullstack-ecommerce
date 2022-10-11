import React from "react";

import img1 from "../assets/Products/red sneakers.png";
import img2 from "../assets/Products/beautiful-elegance-luxury-fashion-green-handbag.png";
import img3 from "../assets/Products/woman style 2.png";
import img4 from "../assets/Products/beautiful-elegance-luxury-fashion-women-blue-handbag.png";

const Categoriy = () => {
  return (
    <div className="py-2 pl-2 pr-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-20">
          <h1 className="text-[2.5rem] font-bold tracking-wider mb-3">
            Trending Panda <br /> Collections
          </h1>
          <p className="text-[1rem] tracking-wide text-gray-900">
            Checkout our newest trends this coming season
          </p>
        </div>
        <div className="bg-[#FDD29D] h-[300px] relative">
          <img src={img1} alt="" className="h-[250px] absolute right-0 top-8" />
          <div className="flex flex-col absolute top-20 left-20 z-30">
            <p className="text-2xl text-black font-semibold tracking-wide mb-7">
              Passion Pearl <br /> Collection
            </p>
            <div className="text-2xl text-white">
              <a href="#" className="space-x-2 items-center">
                <span className="bg-white text-primary px-2 py-1 rounded-full text-[15px]  hover:text-[#FD3D57]">
                  <i class="fa fa-chevron-right"></i>
                </span>
                <span className="text-lg text-primary  hover:text-[#FD3D57]">
                  Get it now
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="bg-[#D5E8CA] h-[300px] relative">
          <img src={img2} alt="" className="h-[300px] absolute right-0" />
          <div className="flex flex-col absolute top-20 left-20 z-30">
            <div className="text-2xl text-black font-semibold tracking-wide mb-7">
              Hoodie your way!
              <br /> For Men
            </div>
            <div className="text-2xl text-white">
              <a href="#" className="space-x-2 items-center">
                <span className="bg-white text-primary px-2 py-1 rounded-full text-[15px]  hover:text-[#FD3D57]">
                  <i class="fa fa-chevron-right"></i>
                </span>
                <span className="text-lg text-primary  hover:text-[#FD3D57]">
                  Get it now
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="bg-[#D7D0BE] row-span-2 relative">
          <img src={img3} alt="" className="absolute right-0" />
          <div className="flex flex-col absolute top-20 left-20 z-30">
            <div className="text-2xl text-black font-semibold tracking-wide mb-7">
              W.W. Clothes
              <br />
              by Panda
            </div>
            <div className="text-2xl text-white">
              <a href="#" className="space-x-2 items-center">
                <span className="bg-white text-primary px-2 py-1 rounded-full text-[15px]  hover:text-[#FD3D57]">
                  <i class="fa fa-chevron-right"></i>
                </span>
                <span className="text-lg text-primary  hover:text-[#FD3D57]">
                  Get it now
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="bg-[#FAC2DB] h-[300px] relative">
          <img src={img4} alt="" className="h-[300px] absolute right-0" />
          <div className="flex flex-col absolute top-20 left-20 z-30">
            <div className="text-2xl text-black font-semibold tracking-wide mb-7    ">
              Anabelle Puress <br /> by Panda
            </div>
            <div className="text-2xl text-white">
              <a href="#" className="space-x-2 items-center">
                <span className="bg-white text-primary px-2 py-1 rounded-full text-[15px]  hover:text-[#FD3D57]">
                  <i class="fa fa-chevron-right"></i>
                </span>
                <span className="text-lg text-primary  hover:text-[#FD3D57]">
                  Get it now
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categoriy;
