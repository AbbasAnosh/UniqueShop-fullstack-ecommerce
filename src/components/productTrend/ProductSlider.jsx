import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";


import im1 from "../../assets/Products/pink-handbags.png";
import im2 from "../../assets/Products/leather-boots.png";
import im3 from "../../assets/Products/beautiful-elegance-luxury-fashion-women-bag.png";
import im4 from "../../assets/Products/pexels-alizee-marchand.png";
import im5 from "../../assets/Products/shoes__1.png";
import im6 from "../../assets/Products/watch.png";
import im7 from "../../assets/Products/sunglasses.png";
import im8 from "../../assets/Products/pexels-ge-yonk.png";
import im9 from "../../assets/Products/pexels-alizee-marchand.png";

const ProductSlider = () => {
  return (
    <div className="pt-10">
      <Swiper
        style={{
          "--swiper-navigation-color": "#000",
          "--swiper-navigation-size": "15px",
        }}
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        loop={true}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide >
          <div className="relative">
            <img src={im1} alt="" className="bg-red-400 w-[350px] h-[350px] object-contain object-center inset-0 rounded-lg" />
            <div className="absolute inset-0 hover:bg-black rounded-lg hover:bg-opacity-40 opacity-0 hover:opacity-100 flex items-center justify-center gap-2">
              <a href="#" className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition">
                <i className="fa fa-heart"></i>
              </a>
              <a href="#" className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition">
                <i className="fa fa-shopping-cart"></i>
              </a>

            </div>
          </div>
          <div className="relative px-4 -mt-16  ">
            <div className="bg-[#FDD29D] p-6 rounded-lg shadow-lg">
              <div className="flex items-baseline">
                <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                  New
                </span>
              </div>

              <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">A random Title</h4>

              <div className="mt-1">
                $1800
                <span className="text-gray-600 text-sm">   /wk</span>
              </div>
              <div className="mt-4">
                <div class="flex space-x-1">
                  <span className="text-[#F35627]"><i class="fa fa-star"></i></span>
                  <span className="text-[#F35627]"><i class="fa fa-star"></i></span>
                  <span className="text-[#F35627]"><i class="fa fa-star"></i></span>
                  <span className="text-[#F35627]"><i class="fa fa-star"></i></span>
                  <span className="text-[#F35627]"><i class="fa fa-star"></i></span>
                </div>
                <span className="text-teal-600 text-md font-semibold">4/5 ratings </span>
                <span className="text-sm text-gray-600">(based on 234 ratings)</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={im2} alt="" className="bg-red-400 w-[350px] h-[350px] object-contain object-center rounded-lg" />
            <div className="absolute inset-0 hover:bg-black rounded-lg hover:bg-opacity-40 opacity-0 hover:opacity-100 flex items-center justify-center gap-2">
              <a href="#" className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition">
                <i className="fa fa-heart"></i>
              </a>
              <a href="#" className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition">
                <i className="fa fa-shopping-cart"></i>
              </a>

            </div>
          </div><div className="relative px-4 -mt-16  ">
            <div className="bg-[#FDD29D] p-6 rounded-lg shadow-lg">
              <div className="flex items-baseline">
                <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                  New
                </span>
              </div>

              <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">A random Title</h4>

              <div className="mt-1">
                $1800
                <span className="text-gray-600 text-sm">   /wk</span>
              </div>
              <div className="mt-4">
                <div class="flex space-x-1">
                  <span className="text-[#F35627]"><i class="fa fa-star"></i></span>
                  <span className="text-[#F35627]"><i class="fa fa-star"></i></span>
                  <span className="text-[#F35627]"><i class="fa fa-star"></i></span>
                  <span className="text-[#F35627]"><i class="fa fa-star"></i></span>
                  <span className="text-[#F35627]"><i class="fa fa-star"></i></span>
                </div>
                <span className="text-teal-600 text-md font-semibold">4/5 ratings </span>
                <span className="text-sm text-gray-600">(based on 234 ratings)</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={im3} alt="" className="bg-red-400 w-[350px] h-[350px] object-contain object-center rounded-lg" />
            <div className="absolute inset-0 hover:bg-black rounded-lg hover:bg-opacity-40 opacity-0 hover:opacity-100 flex items-center justify-center gap-2">
              <a href="#" className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition">
                <i className="fa fa-heart"></i>
              </a>
              <a href="#" className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition">
                <i className="fa fa-shopping-cart"></i>
              </a>

            </div>
          </div><div className="relative px-4 -mt-16  ">
            <div className="bg-[#FDD29D] p-6 rounded-lg shadow-lg">
              <div className="flex items-baseline">
                <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                  New
                </span>
              </div>

              <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">A random Title</h4>

              <div className="mt-1">
                $1800
                <span className="text-gray-600 text-sm">   /wk</span>
              </div>
              <div className="mt-4">
                <div class="flex space-x-1">
                  <span className="text-[#F35627]"><i class="fa fa-star"></i></span>
                  <span className="text-[#F35627]"><i class="fa fa-star"></i></span>
                  <span className="text-[#F35627]"><i class="fa fa-star"></i></span>
                  <span className="text-[#F35627]"><i class="fa fa-star"></i></span>
                  <span className="text-[#F35627]"><i class="fa fa-star"></i></span>
                </div>
                <span className="text-teal-600 text-md font-semibold">4/5 ratings </span>
                <span className="text-sm text-gray-600">(based on 234 ratings)</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={im4} alt="" className="bg-red-400 w-[350px] h-[350px] object-contain object-center rounded-lg" />
            <div className="absolute inset-0 hover:bg-black rounded-lg hover:bg-opacity-40 opacity-0 hover:opacity-100 flex items-center justify-center gap-2">
              <a href="#" className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition">
                <i className="fa fa-heart"></i>
              </a>
              <a href="#" className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition">
                <i className="fa fa-shopping-cart"></i>
              </a>

            </div>
          </div><div className="relative px-4 -mt-16  ">
            <div className="bg-[#FDD29D] p-6 rounded-lg shadow-lg">
              <div className="flex items-baseline">
                <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                  New
                </span>
              </div>

              <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">A random Title</h4>

              <div className="mt-1">
                $1800
                <span className="text-gray-600 text-sm">   /wk</span>
              </div>
              <div className="mt-4">
                <div class="flex space-x-1">
                  <span className="text-[#F35627]"><i class="fa fa-star"></i></span>
                  <span className="text-[#F35627]"><i class="fa fa-star"></i></span>
                  <span className="text-[#F35627]"><i class="fa fa-star"></i></span>
                  <span className="text-[#F35627]"><i class="fa fa-star"></i></span>
                  <span className="text-[#F35627]"><i class="fa fa-star"></i></span>
                </div>
                <span className="text-teal-600 text-md font-semibold">4/5 ratings </span>
                <span className="text-sm text-gray-600">(based on 234 ratings)</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={im5} alt="" className="bg-red-400 w-[350px] h-[350px] object-contain object-center rounded-lg" />
            <div className="absolute inset-0 hover:bg-black hover:bg-opacity-40 opacity-0 hover:opacity-100 flex items-center justify-center gap-2">
              <a href="#" className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition">
                <i className="fa fa-heart"></i>
              </a>
              <a href="#" className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition">
                <i className="fa fa-shopping-cart"></i>
              </a>

            </div>
          </div><div className="relative px-4 -mt-16  ">
            <div className="bg-[#FDD29D] p-6 rounded-lg shadow-lg">
              <div className="flex items-baseline">
                <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                  New
                </span>
              </div>

              <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">A random Title</h4>

              <div className="mt-1">
                $1800
                <span className="text-gray-600 text-sm">   /wk</span>
              </div>
              <div className="mt-4">
                <div class="flex space-x-1">
                  <span className="text-[#F35627]"><i class="fa fa-star"></i></span>
                  <span className="text-[#F35627]"><i class="fa fa-star"></i></span>
                  <span className="text-[#F35627]"><i class="fa fa-star"></i></span>
                  <span className="text-[#F35627]"><i class="fa fa-star"></i></span>
                  <span className="text-[#F35627]"><i class="fa fa-star"></i></span>
                </div>
                <span className="text-teal-600 text-md font-semibold">4/5 ratings </span>
                <span className="text-sm text-gray-600">(based on 234 ratings)</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={im6} alt="" className="bg-red-400 w-[350px] h-[350px] object-contain object-center rounded-lg" />
            <div className="absolute inset-0 hover:bg-black rounded-lg hover:bg-opacity-40 opacity-0 hover:opacity-100 flex items-center justify-center gap-2">
              <a href="#" className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition">
                <i className="fa fa-heart"></i>
              </a>
              <a href="#" className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition">
                <i className="fa fa-shopping-cart"></i>
              </a>

            </div>
          </div><div className="relative px-4 -mt-16  ">
            <div className="bg-[#FDD29D] p-6 rounded-lg shadow-lg">
              <div className="flex items-baseline">
                <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                  New
                </span>
              </div>

              <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">A random Title</h4>

              <div className="mt-1">
                $1800
                <span className="text-gray-600 text-sm">   /wk</span>
              </div>
              <div className="mt-4">
                <div class="flex space-x-1">
                  <span className="text-[#F35627]"><i class="fa fa-star"></i></span>
                  <span className="text-[#F35627]"><i class="fa fa-star"></i></span>
                  <span className="text-[#F35627]"><i class="fa fa-star"></i></span>
                  <span className="text-[#F35627]"><i class="fa fa-star"></i></span>
                  <span className="text-[#F35627]"><i class="fa fa-star"></i></span>
                </div>
                <span className="text-teal-600 text-md font-semibold">4/5 ratings </span>
                <span className="text-sm text-gray-600">(based on 234 ratings)</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={im7} alt="" className="bg-red-400 w-[350px] h-[350px] object-contain object-center rounded-lg" />
            <div className="absolute inset-0 hover:bg-black rounded-lg hover:bg-opacity-40 opacity-0 hover:opacity-100 flex items-center justify-center gap-2">
              <a href="#" className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition">
                <i className="fa fa-heart"></i>
              </a>
              <a href="#" className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition">
                <i className="fa fa-shopping-cart"></i>
              </a>

            </div>
          </div><div className="relative px-4 -mt-16  ">
            <div className="bg-[#FDD29D] p-6 rounded-lg shadow-lg">
              <div className="flex items-baseline">
                <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                  New
                </span>
              </div>

              <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">A random Title</h4>

              <div className="mt-1">
                $1800
                <span className="text-gray-600 text-sm">   /wk</span>
              </div>
              <div className="mt-4">
                <div class="flex space-x-1">
                  <span className="text-[#F35627]"><i class="fa fa-star"></i></span>
                  <span className="text-[#F35627]"><i class="fa fa-star"></i></span>
                  <span className="text-[#F35627]"><i class="fa fa-star"></i></span>
                  <span className="text-[#F35627]"><i class="fa fa-star"></i></span>
                  <span className="text-[#F35627]"><i class="fa fa-star"></i></span>
                </div>
                <span className="text-teal-600 text-md font-semibold">4/5 ratings </span>
                <span className="text-sm text-gray-600">(based on 234 ratings)</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={im8} alt="" className="bg-red-400 w-[350px] h-[350px] object-contain object-center rounded-lg" />
            <div className="absolute inset-0 hover:bg-black rounded-lg hover:bg-opacity-40 opacity-0 hover:opacity-100 flex items-center justify-center gap-2">
              <a href="#" className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition">
                <i className="fa fa-heart"></i>
              </a>
              <a href="#" className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition">
                <i className="fa fa-shopping-cart"></i>
              </a>

            </div>
          </div><div className="relative px-4 -mt-16  ">
            <div className="bg-[#FDD29D] p-6 rounded-lg shadow-lg">
              <div className="flex items-baseline">
                <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                  New
                </span>
              </div>

              <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">A random Title</h4>

              <div className="mt-1">
                $1800
                <span className="text-gray-600 text-sm">   /wk</span>
              </div>
              <div className="mt-4">
                <div class="flex space-x-1">
                  <span className="text-[#F35627]"><i class="fa fa-star"></i></span>
                  <span className="text-[#F35627]"><i class="fa fa-star"></i></span>
                  <span className="text-[#F35627]"><i class="fa fa-star"></i></span>
                  <span className="text-[#F35627]"><i class="fa fa-star"></i></span>
                  <span className="text-[#F35627]"><i class="fa fa-star"></i></span>
                </div>
                <span className="text-teal-600 text-md font-semibold">4/5 ratings </span>
                <span className="text-sm text-gray-600">(based on 234 ratings)</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={im9} alt="" className="bg-red-400 w-[350px] h-[350px] object-contain object-center rounded-lg" />
            <div className="absolute inset-0 hover:bg-black rounded-lg hover:bg-opacity-40 opacity-0 hover:opacity-100 flex items-center justify-center gap-2">
              <a href="#" className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition">
                <i className="fa fa-heart"></i>
              </a>
              <a href="#" className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition">
                <i className="fa fa-shopping-cart"></i>
              </a>

            </div>
          </div><div className="relative px-4 -mt-16  ">
            <div className="bg-[#FDD29D] p-6 rounded-lg shadow-lg">
              <div className="flex items-baseline">
                <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                  New
                </span>
              </div>

              <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">A random Title</h4>

              <div className="mt-1">
                $1800
                <span className="text-gray-600 text-sm">   /wk</span>
              </div>
              <div className="mt-4">
                <div class="flex space-x-1">
                  <span className="text-[#F35627]"><i class="fa fa-star"></i></span>
                  <span className="text-[#F35627]"><i class="fa fa-star"></i></span>
                  <span className="text-[#F35627]"><i class="fa fa-star"></i></span>
                  <span className="text-[#F35627]"><i class="fa fa-star"></i></span>
                  <span className="text-[#F35627]"><i class="fa fa-star"></i></span>
                </div>
                <span className="text-teal-600 text-md font-semibold">4/5 ratings </span>
                <span className="text-sm text-gray-600">(based on 234 ratings)</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProductSlider;
