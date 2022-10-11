import React from "react";

const Header = () => {
  return (
    <header className="py-4 shadow-sm bg-[#FFE4B0]">
      <div className="container flex items-center justify-between">
        <a href="#">
          <h1 className="text-3xl font-bold">
            <span className="text-primary">Panda</span>Shop
          </h1>
        </a>

        <div className="w-full max-w-xl relative flex">
          <span className="absolute left-4 top-3 text-lg text-gray-400">
            <i className="fa fa-search"></i>
          </span>
          <input
            type="text"
            className="w-full border border-primary border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none"
            placeholder="search"
          />
          <button className="bg-primary border border-primary text-white px-8 rounded-r-md hover:bg-transparent hover:text-primary transition">
            Search
          </button>
        </div>
        <div className="flex items-center space-x-6">
          <a
            href="#"
            className="text-center text-gray-700 hover:text-primary transition relative"
          >
            <div className="text-2xl">
              <i className="fa fa-heart"></i>
            </div>
            <div className="text-[14px] leading-3">Wish List</div>
            <span className="absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
              8
            </span>
          </a>
          <a
            href="#"
            className="text-center text-gray-700 hover:text-primary transition relative"
          >
            <div className="text-2xl">
              <i className="fa fa-shopping-cart"></i>
            </div>
            <div className="text-[14px] leading-3">cart</div>
            <span className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
              8
            </span>
          </a>
          <a
            href="#"
            className="text-center text-gray-700 hover:text-primary transition relative"
          >
            <div className="text-2xl">
              <i className="fa fa-user"></i>
            </div>
            <div className="text-[14px] leading-3">login</div>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
