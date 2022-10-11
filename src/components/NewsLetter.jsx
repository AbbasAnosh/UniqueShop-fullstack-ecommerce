import React from 'react'

const NewsLetter = () => {
    return (
        <div className="bg-hero-pattern flex flex-col justify-center items-center py-16">
            <div className="text-center  space-y-4 mb-14">
                <h1 className="text-5xl text-white tracking-wide">Let's keep in touch</h1>
                <p className="text-xl text-white">Join our list and save 15% off your first order.</p>
            </div>
            <form action="" className="space-x-10">
                <input type="text" name="" placeholder="ENTER YOUR EMAIL" className='w-[600px] h-[50px] 
                rounded-lg p-2 border border-transparent focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-black' />
                <button className='px-10 py-4 bg-primary text-white text-xl tracking-wider rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50'>Subscribe</button>
            </form>
        </div>
    )
}

export default NewsLetter
