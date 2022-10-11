import React from "react";
import { Link } from "react-router-dom";


import img1 from "../assets/Products/beautiful-elegance-luxury-fashion-women-bag.png"
import img2 from "../assets/Products/pexels-ge-yonk.png"
import img3 from "../assets/Products/andre-styles.png"
import img4 from "../assets/Products/watch.png"


const SubNav = () => {
  return (
    <nav className="bg-gray-800">
      <div className="container flex">
        <div className="px-8 py-4 bg-primary flex items-center cursor-pointer relative group">
          <span className="text-white">
            <i className="fas fa-bars"></i>
          </span>
          <span className="capitalize ml-2 text-white">All Categories</span>

          <div
            className="absolute left-0 flex flex-row top-full bg-white rounded-bl-lg rounded-br-lg shadow-md
           py-3 divide-x divide-gray-300 divide-dashed opacity-0 
           group-hover:opacity-100 transition duration-300 invisible group-hover:visible z-10"
          >
            <div class="w-[194px] h-[150px] inset-0">
              <a
                href="#"
                className="flex flex-col space-y-4 items-center transition rounded-sm">
                <img src={img1} alt="" className="w-[220px] h-[90px] object-contain" />
                <p className="text-gray-600 text-sm">Bags & Backpacks</p>
              </a>
            </div>
            <div class="w-[194px] h-[150px] inset-0">
              <a
                href="#"
                className="flex flex-col space-y-4 items-center transition rounded-sm">
                <img src={img2} alt="" className="w-[220px] h-[90px] object-contain" />
                <p className="text-gray-600 text-sm">Bags & Backpacks</p>
              </a>
            </div>
            <div class="w-[194px] h-[150px] inset-0">
              <a
                href="#"
                className="flex flex-col space-y-4 items-center transition rounded-sm">
                <img src={img3} alt="" className="w-[220px] h-[90px] object-contain" />
                <p className="text-gray-600 text-sm">Bags & Backpacks</p>
              </a>
            </div>
            <div class="w-[194px] h-[150px] inset-0">
              <a
                href="#"
                className="flex flex-col space-y-4 items-center transition rounded-sm">
                <img src={img4} alt="" className="w-[220px] h-[90px] object-contain" />
                <p className="text-gray-600 text-sm">Bags & Backpacks</p>
              </a>
            </div>
            <div class="w-[194px] h-[150px] inset-0">
              <a
                href="#"
                className="flex flex-col space-y-4 items-center transition rounded-sm">
                <img src={img2} alt="" className="w-[220px] h-[90px] object-contain" />
                <p className="text-gray-600 text-sm">Bags & Backpacks</p>
              </a>
            </div>
            <div class="w-[194px] h-[150px] inset-0">
              <a
                href="#"
                className="flex flex-col space-y-4 items-center transition rounded-sm">
                <img src={img1} alt="" className="w-[220px] h-[90px] object-contain" />
                <p className="text-gray-600 text-sm">Bags & Backpacks</p>
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between flex-grow pl-12">
          <div className="flex items-center space-x-6 capitalize">
            <a className="text-gray-200 hover:text-white transition">
              <Link to="/">Home</Link>
            </a>
            <a className="text-gray-200 hover:text-white transition">
              <Link to="/shop">Shop</Link>
            </a>
            <a className="text-gray-200 hover:text-white transition">
              <Link to="/aboutUs">About us</Link>
            </a>
            <a className="text-gray-200 hover:text-white transition">
              <Link to="/contactUs">Contact us</Link>
            </a>
          </div>
          <a href="#" className="text-gray-200 hover:text-white transition">
            Login/Register
          </a>
        </div>
      </div>
    </nav>
  );
};

export default SubNav;
