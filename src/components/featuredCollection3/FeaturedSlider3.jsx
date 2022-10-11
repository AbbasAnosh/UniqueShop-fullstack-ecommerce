import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/pagination";

import { Autoplay } from "swiper";

import imgprod1 from "../../assets/Products/beautiful-elegance-luxury-fashion-women-blue-handbag.png"
import imgprod2 from "../../assets/Products/beautiful-elegance-luxury-fashion-women-bag.png"
import imgprod3 from "../../assets/Products/beautiful-elegance-luxury-fashion-women-blue-handbag.png"
import imgprod4 from "../../assets/Products/leather-boots__1.png"
import imgprod5 from "../../assets/Products/andre-styles.png"
import imgprod6 from "../../assets/Products/red sneakers.png"

const FeaturedSlider3 = () => {
    return (
        <div className="w-[1100px] bg-[#D7D0BE] px-5 py-8">
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
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

                }}
                modules={[Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="relative">
                        <img src={imgprod1} alt="" className="h-[350px] w-[390px] object-contain bg-[#D5E8CA]" />
                        <div className="absolute inset-0 hover:bg-black hover:bg-opacity-40 opacity-0 hover:opacity-100 flex items-center justify-center gap-2">
                            <a href="#" className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition">
                                <i className="fa fa-heart"></i>
                            </a>
                            <a href="#" className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition">
                                <i className="fa fa-shopping-cart"></i>
                            </a>

                        </div>
                    </div>
                    <div className="flex justify-between mt-3">
                        <div>
                            <p>Woodie Blake</p>
                            <div className="flex gap-2">
                                <div className="space-x-1"><span className="text-[#F35627]"><i class="fa fa-star"></i></span>
                                    <span className="text-[#F35627]"><i class="fa fa-star"></i></span>
                                    <span className="text-[#F35627]"><i class="fa fa-star"></i></span>
                                    <span className="text-[#F35627]"><i class="fa fa-star"></i></span>
                                    <span className="text-[#F35627]"><i class="fa fa-star"></i></span>
                                </div>
                                <p className="text-black">45</p>
                            </div>
                        </div>
                        <p className="text-[#F35627]">$33.0</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <img src={imgprod2} alt="" className="h-[350px] w-[390px]  object-contain bg-[#D5E8CA]" />
                        <div className="absolute inset-0 hover:bg-black hover:bg-opacity-40 opacity-0 hover:opacity-100 flex items-center justify-center gap-2">
                            <a href="#" className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition">
                                <i className="fa fa-heart"></i>
                            </a>
                            <a href="#" className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition">
                                <i className="fa fa-shopping-cart"></i>
                            </a>

                        </div>
                    </div>
                    <div className="flex justify-between mt-3">
                        <div>
                            <p>Woodie Blake</p>
                            <div className="flex gap-2">
                                <div className="space-x-1"><span className="text-[#F35627]"><i class="fa fa-star"></i></span>
                                    <span className="text-[#F35627]"><i class="fa fa-star"></i></span>
                                    <span className="text-[#F35627]"><i class="fa fa-star"></i></span>
                                    <span className="text-[#F35627]"><i class="fa fa-star"></i></span>
                                    <span className="text-[#F35627]"><i class="fa fa-star"></i></span>
                                </div>
                                <p className="text-black">45</p>
                            </div>
                        </div>
                        <p className="text-[#F35627]">$33.0</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <img src={imgprod3} alt="" className="h-[350px] w-[390px]  object-contain bg-[#D5E8CA]" />
                        <div className="absolute inset-0 hover:bg-black hover:bg-opacity-40 opacity-0 hover:opacity-100 flex items-center justify-center gap-2">
                            <a href="#" className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition">
                                <i className="fa fa-heart"></i>
                            </a>
                            <a href="#" className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition">
                                <i className="fa fa-shopping-cart"></i>
                            </a>

                        </div>
                    </div>
                    <div className="flex justify-between mt-3">
                        <div>
                            <p>Woodie Blake</p>
                            <div className="flex gap-2">
                                <div className="space-x-1"><span className="text-[#F35627]"><i class="fa fa-star"></i></span>
                                    <span className="text-[#F35627]"><i class="fa fa-star"></i></span>
                                    <span className="text-[#F35627]"><i class="fa fa-star"></i></span>
                                    <span className="text-[#F35627]"><i class="fa fa-star"></i></span>
                                    <span className="text-[#F35627]"><i class="fa fa-star"></i></span>
                                </div>
                                <p className="text-black">45</p>
                            </div>
                        </div>
                        <p className="text-[#F35627]">$33.0</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <img src={imgprod4} alt="" className="h-[350px] w-[390px]  object-contain bg-[#D5E8CA]" />
                        <div className="absolute inset-0 hover:bg-black hover:bg-opacity-40 opacity-0 hover:opacity-100 flex items-center justify-center gap-2">
                            <a href="#" className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition">
                                <i className="fa fa-heart"></i>
                            </a>
                            <a href="#" className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition">
                                <i className="fa fa-shopping-cart"></i>
                            </a>

                        </div>
                    </div>
                    <div className="flex justify-between mt-3">
                        <div>
                            <p>Woodie Blake</p>
                            <div className="flex gap-2">
                                <div className="space-x-1"><span className="text-[#F35627]"><i class="fa fa-star"></i></span>
                                    <span className="text-[#F35627]"><i class="fa fa-star"></i></span>
                                    <span className="text-[#F35627]"><i class="fa fa-star"></i></span>
                                    <span className="text-[#F35627]"><i class="fa fa-star"></i></span>
                                    <span className="text-[#F35627]"><i class="fa fa-star"></i></span>
                                </div>
                                <p className="text-black">45</p>
                            </div>
                        </div>
                        <p className="text-[#F35627]">$33.0</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <img src={imgprod5} alt="" className="h-[350px] w-[390px]  object-contain bg-[#D5E8CA]" />
                        <div className="absolute inset-0 hover:bg-black hover:bg-opacity-40 opacity-0 hover:opacity-100 flex items-center justify-center gap-2">
                            <a href="#" className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition">
                                <i className="fa fa-heart"></i>
                            </a>
                            <a href="#" className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition">
                                <i className="fa fa-shopping-cart"></i>
                            </a>

                        </div>
                    </div>
                    <div className="flex justify-between mt-3">
                        <div>
                            <p>Woodie Blake</p>
                            <div className="flex gap-2">
                                <div className="space-x-1"><span className="text-[#F35627]"><i class="fa fa-star"></i></span>
                                    <span className="text-[#F35627]"><i class="fa fa-star"></i></span>
                                    <span className="text-[#F35627]"><i class="fa fa-star"></i></span>
                                    <span className="text-[#F35627]"><i class="fa fa-star"></i></span>
                                    <span className="text-[#F35627]"><i class="fa fa-star"></i></span>
                                </div>
                                <p className="text-black">45</p>
                            </div>
                        </div>
                        <p className="text-[#F35627]">$33.0</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <img src={imgprod6} alt="" className="h-[350px] w-[390px]  object-contain bg-[#D5E8CA]" />
                        <div className="absolute inset-0 hover:bg-black hover:bg-opacity-40 opacity-0 hover:opacity-100 flex items-center justify-center gap-2">
                            <a href="#" className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition">
                                <i className="fa fa-heart"></i>
                            </a>
                            <a href="#" className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition">
                                <i className="fa fa-shopping-cart"></i>
                            </a>

                        </div>
                    </div>
                    <div className="flex justify-between mt-3">
                        <div>
                            <p>Woodie Blake</p>
                            <div className="flex gap-2">
                                <div className="space-x-1"><span className="text-[#F35627]"><i class="fa fa-star"></i></span>
                                    <span className="text-[#F35627]"><i class="fa fa-star"></i></span>
                                    <span className="text-[#F35627]"><i class="fa fa-star"></i></span>
                                    <span className="text-[#F35627]"><i class="fa fa-star"></i></span>
                                    <span className="text-[#F35627]"><i class="fa fa-star"></i></span>
                                </div>
                                <p className="text-black">45</p>
                            </div>
                        </div>
                        <p className="text-[#F35627]">$33.0</p>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    )
}

export default FeaturedSlider3