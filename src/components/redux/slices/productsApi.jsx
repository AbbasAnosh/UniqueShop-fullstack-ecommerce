import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



const url = 'http://127.0.0.1:8000/api/'


export const productsApi = createApi({
    reducerPath: "productsApi",
    baseQuery: fetchBaseQuery({ baseUrl: url }),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => "products"
        }),
    }),
})


export const { useGetAllProductsQuery } = productsApi