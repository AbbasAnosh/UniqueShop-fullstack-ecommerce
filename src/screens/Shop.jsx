import React from 'react'
import Nav from '../components/shop/Nav'
import ShopProducts from '../components/shop/ShopProducts'
import Slider from "../components/slider/Slider"
import products from "../product"



const Shop = () => {

    return (
        <div>
            <Slider />
            <Nav />
            <div className="container grid grid-cols-1 gap-2 md:grid-cols-3 md:gap-3 lg:grid-cols-4 lg:gap-5 pb-10">
                {products.map(product => (
                    <div key={product._id}>
                        <ShopProducts product={product} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Shop