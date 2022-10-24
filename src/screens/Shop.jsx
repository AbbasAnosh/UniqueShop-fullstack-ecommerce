import React, { useEffect } from 'react'
import Nav from '../components/shop/Nav'
import ShopProducts from '../components/shop/ShopProducts'
import Slider from "../components/slider/Slider"
import { useSelector, useDispatch } from "react-redux"
import { productsFetch } from "../components/redux/slices/productsSlice"

// import axios from 'axios'




const Shop = () => {
    // const [products, setProducts] = useState([])

    // useEffect(() => {
    //     // async function fetchProducts() {
    //     //     const { data } = await axios.get("http://127.0.0.1:8000/api/products/")
    //     //     setProducts(data)
    //     // }
    //     // fetchProducts()
    //     store.dispatch(productsFetch())

    // }, [])

    const products = useSelector((state) => state.products.productLists)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(productsFetch())
        console.log(productsFetch())
    }, [])



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