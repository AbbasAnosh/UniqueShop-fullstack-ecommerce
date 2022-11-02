import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import axios from 'axios'

// const url = 'http://127.0.0.1:8000/api/products/'

const initialState = {
    productLists: [],
    // status: null
}

// export const productsFetch = createAsyncThunk(
//     "products/productsFetch",
//     async () => {
//         const response = await axios.get(url)
//         return response?.data
//     }
// )

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    // extraReducers: {
    //     [productsFetch.pending]: (state, action) => {
    //         state.status = "pending"
    //     },
    //     [productsFetch.fulfilled]: (state, action) => {
    //         state.status = "fulfilled"
    //         state.productLists = action.payload
    //     },
    //     [productsFetch.rejected]: (state, action) => {
    //         state.status = "rejected"
    //     },
    // },
});

export const { } = productsSlice.actions

export default productsSlice.reducer