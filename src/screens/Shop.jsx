import React, { useEffect } from 'react'
import Nav from '../components/shop/Nav'
import ShopProducts from '../components/shop/ShopProducts'
import Slider from "../components/slider/Slider"
// import { useSelector, useDispatch } from "react-redux"
// import { productsFetch } from "../components/redux/slices/productsSlice"
import { useGetAllProductsQuery } from '../components/redux/slices/productsApi'
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

    // const products = useSelector((state) => state.products.productLists)
    // const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(productsFetch())
    //     console.log(productsFetch())
    // }, [])

    // const { productLists, satus } = useSelector(state => state.products)
    const { data, error, isLoading } = useGetAllProductsQuery()

    console.log(data);
    return (
        <div>
            {isLoading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>An error occurred...</p>
            ) : (
                <>
                    <Slider />
                    <Nav />
                    <div className="container grid grid-cols-1 gap-2 md:grid-cols-3 md:gap-3 lg:grid-cols-4 lg:gap-5 pb-10">
                        {data?.map(product => (
                            <div key={product._id}>
                                <ShopProducts product={product} />
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}

export default Shop