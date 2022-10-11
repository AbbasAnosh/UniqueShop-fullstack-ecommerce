import React from "react";

const Footer = () => {
  return <footer id="footer">
    <div className="bg-hero-pattern flex flex-row justify-between items-center py-12 px-24">
      <div className="text-white space-y-8">
        <h1 className="text-2xl">Contact</h1>
        <div className="flex flex-col gap-3">
          <p>abbasalianosh@gmail.com</p>
          <p>+93799749108</p>
          <p>PandaShop</p>
        </div>
      </div>
      <div className="space-y-6 text-white">
        <h1 className=" text-4xl text-center">Panda.</h1>
        <div className="space-x-4">
          <a href="#"><i class="fa-brands fa-facebook"></i></a>
          <a href="#"><i class="fa-brands fa-twitter"></i></a>
          <a href="#"><i class="fa-brands fa-instagram"></i></a>
          <a href="#"><i class="fa-brands fa-tiktok"></i></a>
        </div>
      </div>
      <div className="text-white space-y-8">
        <h1 className="text-2xl">Link</h1>
        <div className="flex flex-col gap-3">
          <a href="#">Shop</a>
          <a href="#">Contact Us</a>
          <a href="#">Terms & Conditions</a>
        </div>
      </div>
    </div>

    <p className="text-center py-8 text-xl">All rights reserved &copy; 2022. Made with <span className="text-red-600"><i class="fa-solid fa-heart"></i></span> by <span className="text-primary">Abbas Ali Anosh</span> </p>


  </footer>;
};

export default Footer;
