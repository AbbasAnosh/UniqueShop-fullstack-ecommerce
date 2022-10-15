import React, { useState, useEffect } from 'react'
import Rating from "./Rating"
import { Link, useParams } from "react-router-dom"
import { HiShoppingBag } from "react-icons/hi"
import axios from 'axios'

import img1 from "../../assets/Products/beautiful-elegance-luxury-fashion-green-handbag.png"

const ProductPage = () => {
    const { id } = useParams();
    // const thisProduct = products.find(prod => prod._id === id)
    const [product, setProduct] = useState([])

    useEffect(() => {
        async function fetchProducts() {
            const { data } = await axios.get(`http://127.0.0.1:8000/api/products/${id}`)
            setProduct(data)
        }
        fetchProducts()
    }, [])
    return (
        <div>
            <div className="container py-4 flex items-center gap-3 pb-9">
                <Link to={"/"}>
                    <a className="text-primary text-base"><i class="fa-solid fa-house"></i></a>
                </Link>
                <span className="text-sm text-gray-400">
                    <i class="fa fa-chevron-right"></i>
                </span>
                <Link to={"/shop"}><HiShoppingBag className="text-primary text-base text-[20px]" /></Link>
                <span className="text-sm text-gray-400">
                    <i class="fa fa-chevron-right"></i>
                </span>
                <p className="text-gray-600 font-medium">Product view</p>
            </div>


            <div className="container grid grid-cols-2 gap-6">
                <div>
                    <img src={img1} alt="" className="bg-[#FBF1F0] rounded-lg w-full h-[600px] object-contain" />
                    <div className="grid grid-cols-4 gap-4 mt-4">
                        <img src={img1} alt="" className="w-full rounded-lg bg-[#FBF1F0] cursor-pointer" />
                        <img src={img1} alt="" className="w-full rounded-lg bg-[#FBF1F0] cursor-pointer" />
                        <img src={img1} alt="" className="w-full rounded-lg bg-[#FBF1F0] cursor-pointer" />
                        <img src={img1} alt="" className="w-full rounded-lg bg-[#FBF1F0] cursor-pointer" />
                    </div>
                </div>
                <div>
                    <div className="flex flex-row space-x-10">
                        <h2 className="text-3xl font-medium uppercase mb-2">{product.name}</h2>
                        <div><p className="text-xs font-semibold text-white bg-primary rounded-full text-center py-2 px-4">20% OFF</p></div>
                    </div>
                    <div className="flex space-x-4 py-3">
                        <p className="text-gray-800 font-semibold text-lg">{product.price}</p>
                        <p className="text-gray-400 line-through text-lg">$350.0</p>
                    </div>
                    <div className="space-x-6 flex">
                        <div className="text-primary space-x-1">
                            <Rating />
                        </div>
                        <p>{product.numReviews}</p>
                    </div>
                    <div class="border-b-2 pt-4"></div>
                    <div class="flex space-x-4 py-4 pb-8">
                        <p className="font-medium text-[14px] tracking-wide">Availability:</p>
                        <p className="font-medium text-[14px] tracking-wide text-green-500">{product.countInStock}</p>
                    </div>
                    <p className="pb-6">{product.description}</p>
                    <div className="flex flex-row space-x-20 pb-8 items-center">
                        <p>Color</p>
                        <div className="flex space-x-3">
                            <div className="w-6 h-6 rounded-full bg-primary" />
                            <div className="w-6 h-6 rounded-full bg-black" />
                            <div className="w-6 h-6 rounded-full bg-green-500" />
                            <div className="w-6 h-6 rounded-full bg-blue-500" />
                        </div>
                    </div>

                    <div className="flex flex-row space-x-24 items-center">
                        <p>Size</p>
                        <select id="products" className="p-2 border-2 focus:outline-none bg-white border-gray-500 w-full text-gray-500 ring-primary focus:ring-primary focus:border-primary">
                            <option selected>Small</option>
                            <option value="medium">Medium</option>
                            <option value="large">Large</option>
                        </select>
                    </div>

                    <div className="flex flex-row space-x-[60px] items-center py-7">
                        <p>Quantity</p>
                        <div className="flex flex-row items-center">
                            <p className="border-2 px-6 py-[13px] border-r-0 border-gray-500 rounded-tl-[5px] rounded-bl-[5px]">3</p>
                            <div className="flex flex-col">
                                <button className="border-2 border-gray-500 px-3 py-0 border-b-0 rounded-tr-[5px] text-primary"><i class="fa fa-caret-up"></i></button>
                                <button className="border-2 px-3 border-gray-500 py-0 rounded-br-[5px] text-primary"><i class="fa fa-caret-down"></i></button>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-8">
                        <button className="py-4 px-10 bg-transparent text-primary border-2 border-primary
                        font-bold tracking-wide rounded-md hover:bg-primary hover:text-white">ADD TO CART</button>
                        <button className="py-4 px-10 bg-primary
                        font-bold tracking-wide rounded-md hover:bg-[#FB6D11] text-white">BUY NOW</button>
                    </div>


                </div>
            </div>

        </div >
    )
}

export default ProductPage
