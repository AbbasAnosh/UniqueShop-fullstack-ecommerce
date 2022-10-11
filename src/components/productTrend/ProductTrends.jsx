import React from "react";
import ProductSlider from "./ProductSlider";


const ProductTrends = () => {
  return (
    <div className="py-14 px-8">
      <div className="flex justify-between items-center px-2">
        <div className="space-y-2">
          <h1 className="text-3xl tracking-wider">Panda's trends</h1>
          <p className="text-lg traking-wider">
            Be styling, no matter the season!
          </p>
        </div>
        <div>
          <button className="flex gap-5 items-center text-primary border-b border-primary hover:text-[#FD3D57]">
            <span className="text-lg ">Show more</span>
            <span className="text-sm items-center">
              <i class="fa fa-chevron-right"></i>
            </span>
          </button>
        </div>
      </div>
      <div>
        <ProductSlider />
      </div>
    </div>
  );
};

export default ProductTrends;
