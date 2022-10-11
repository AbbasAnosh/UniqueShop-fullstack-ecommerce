import React from 'react'

import prod from "../assets/Products/beautiful-elegance-luxury-fashion-green-handbag.png"
const Card = () => {
    return (
        <div class="flex flex-col justify-center items-center max-w-sm mx-auto my-8">
            <div class="bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center">
                <img src={prod} alt="" />
                {/* <a href="#" className="text-white text-lg w-9 h-8 rounded-full bg-primary absolute top-2 right-2 flex items-center justify-center hover:bg-gray-800 transition">
                    <i className="fa fa-heart"></i>
                </a> */}
            </div>
            <div class="w-56 md:w-64 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden">
                <div class="py-2 text-center font-bold uppercase tracking-wide text-gray-800">Nike Revolt</div>
                <div class="flex items-center justify-between py-2 px-3 bg-gray-400">
                    <h1 class="text-gray-800 font-bold ">$129</h1>
                    <button class=" bg-gray-800 text-xs text-white px-2 py-1 font-semibold rounded uppercase hover:bg-gray-700">Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default Card