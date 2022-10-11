import React from "react";
import icons1 from "../assets/package.png";
import icons2 from "../assets/24-hours.png";
import icons3 from "../assets/delivery-truck.png";

const FeactureSection = () => {
  return (
    <div className="container py-16">
      <div className=" grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-6 mx-auto justify-center">
        <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
          <img src={icons1} alt="" className="w-12 h-12 object-contain" />
          <div>
            <p className="text-xl text-primary tracking-wide">Free shipping</p>
            <p className="text-sm text-gray-600 tracking-wide">
              On all orders over $30
            </p>
          </div>
        </div>
        <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
          <img src={icons2} alt="" className="w-12 h-12 object-contain" />
          <div>
            <p className="text-xl text-primary tracking-wide">
              Always available
            </p>
            <p className="text-sm text-gray-600 tracking-wide">
              24/7 call center available
            </p>
          </div>
        </div>
        <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
          <img src={icons3} alt="" className="w-12 h-12 object-contain" />
          <div>
            <p className="text-xl text-primary tracking-wide">Free returns</p>
            <p className="text-sm text-gray-600 tracking-wide">
              30 days free return policy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeactureSection;
