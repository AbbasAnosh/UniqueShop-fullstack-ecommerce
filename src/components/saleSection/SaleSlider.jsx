import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";

import img1 from "../../assets/Products/beautiful-elegance-luxury-fashion-green-handbag.png"
import img2 from "../../assets/Products/beautiful-elegance-luxury-fashion-women-bag.png"
import img3 from "../../assets/Products/beautiful-elegance-luxury-fashion-women-blue-handbag.png"
import img4 from "../../assets/Products/andre-styles.png"
import img5 from "../../assets/Products/leather-boots.png"

const data = [
    { image: img1 },
    { Image: img2 },
    { image: img3 },
    { image: img4 },
    { image: img5 },

]

const SaleSlider = () => {
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
                    "@1.50": {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                }}
                modules={[Navigation, Autoplay]}
                className="mySwiper"
            >
                {data.map((item, index) => (
                    <SwiperSlide >
                        <div key={index} className="flex flex-col justify-center items-center max-w-sm mx-auto my-8">
                            <div className="bg-red-400 h-64 w-full rounded-lg shadow-md bg-cover bg-center">
                                <img src={item.Image} alt="" />
                            </div>
                            <div className="w-56 md:w-64 bg-[#D5E8CA] -mt-10 shadow-lg rounded-lg overflow-hidden">
                                <div className="py-2 text-center font-bold uppercase tracking-wide text-gray-800">Nike Revolt</div>
                                <div className="flex items-center justify-between py-2 px-3 bg-[#FAC2DB]">
                                    <h1 className="text-primary font-bold ">$129</h1>
                                    <button className=" bg-primary text-xs text-white px-2 py-1 font-semibold rounded uppercase hover:bg-gray-700">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>
        </div>
    );
};

export default SaleSlider;
