import React from 'react'
import { Link } from "react-router-dom"
import Rating from "./Rating"

const ShopProducts = ({ product }) => {

    return (
        <div className="p-4">
            <div className="relative bg-red-400 rounded-md">
                <a>
                    <Link to={`/product/${product._id}`}>
                        <img src={product.image} alt="" className="h-[300px] w-[390px] object-contain" />
                    </Link>
                </a>
                <div className="absolute inset-0 hover:bg-black hover:rounded-md hover:bg-opacity-40 opacity-0 hover:opacity-100 flex items-center justify-center gap-2">
                    <a className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition">
                        <Link to="/whishList"><i className="fa fa-heart"></i></Link>
                    </a>
                    <a className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition">
                        <Link to={`/product/${product._id}`}><i class="fa fa-magnifying-glass"></i></Link>
                    </a>
                    <a href="#" className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition">
                        <Link to="/cart"><i className="fa fa-shopping-cart"></i></Link>
                    </a>

                </div>
            </div>

            <div className="flex justify-between space-x-5">
                <div className="space-y-6">
                    <a>
                        <Link to={`/products/${product._id}`}>
                            <h2>{product.name}</h2>
                        </Link>
                    </a>
                    <p>
                        <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'} />
                    </p>
                </div>
                <h3>{product.price}</h3>
            </div>
        </div>

    )
}

export default ShopProducts
