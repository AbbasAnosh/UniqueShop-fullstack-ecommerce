import React from 'react'
import FeaturedSlider1 from "./FeaturedSlider1"

import image1 from "../../assets/Products/beautiful-elegance-luxury-fashion-green-handbag.png"
function FeaturedCollection() {
    return (
        <div className="py-14 pl-20 pr-6 flex gap-4">
            <div><FeaturedSlider1 /></div>
            <div className="flex flex-col gap-16 items-center justify-center">
                <div className="space-y-6 text-white">
                    <h1 className="text-3xl">New Season, <br /> matching shoes</h1>
                    <p className="text-xl">Featured Collection</p>
                </div>
                <div className="relative">
                    <img src={image1} alt="" className="bg-[#D7D0BE] h-[280px] w-[290px] object-contain" />
                    <div className="absolute inset-0 hover:bg-black hover:bg-opacity-40 opacity-0 hover:opacity-100 flex items-center justify-center gap-2">
                        <button className="uppercase px-4 py-3 text-semibold rounded-sm text-white bg-[#FB6D11]">view all product</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedCollection