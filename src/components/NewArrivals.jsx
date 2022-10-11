import React from 'react'

import newArrival from "../assets/images/newArrival.jpg"
const NewArrivals = () => {
    return (
        <div className="py-16 px-4 grid grid-cols-1 md:grid-cols-2">
            <img src={newArrival} alt="" className="rounded-lg h-[550px]" />
            <div className="space-y-8 pl-10 text-start">
                <p className="text-2xl uppercase tracking-wide">new arrivals</p>
                <h1 className="text-5xl tracking-wide">Blouses & Jeans Up to <br /> 70% Off</h1>
                <button className="bg-primary px-8 py-4 uppercase hover:bg-transparent hover:text-black hover:border-primary hover:border-2 rounded-lg text-white font-semibold tracking-wider">get it now</button>
            </div>
        </div>
    )
}

export default NewArrivals