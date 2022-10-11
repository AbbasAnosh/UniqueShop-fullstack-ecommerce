import React from 'react'
import { Link } from "react-router-dom"
const Nav = () => {
    return (
        <div className="container py-12 flex justify-between">
            <div class="flex flex-row space-x-4 divide-xy divide-primary text-lg">
                <a><Link to="#" className="hover:text-primary text-gray-700">All</Link></a><span className="text-gray-400">/</span>
                <a><Link to="#" className="hover:text-primary text-gray-700">Bags & Backpacks</Link></a><span className="text-gray-400">/</span>
                <a><Link to="#" className="hover:text-primary text-gray-700">Decoration</Link></a><span className="text-gray-400">/</span>
                <a><Link to="#" className="hover:text-primary text-gray-700">Essentials</Link></a><span className="text-gray-400">/</span>
                <a><Link to="#" className="hover:text-primary text-gray-700">Interior</Link></a>
            </div>
            <div className="flex space-x-4 text-lg">
                <a><Link to="#" className="hover:text-primary text-gray-700">Filter</Link></a><span className="text-gray-400">/</span>
                <a><Link to="#" className="hover:text-primary text-gray-700">Search <span className="text-sm text-gray-400"><i class="fa fa-magnifying-glass"></i></span></Link></a>
            </div>
        </div>
    )
}

export default Nav
