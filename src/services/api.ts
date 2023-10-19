import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Restaurante } from '../pages/Home'

const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://fake-api-tau.vercel.app/api/efood/restaurantes'
    }),
    endpoints: (builder) => ({
        getRestaurants: builder.query<Restaurante[], void>({
            query: () => 'restaurants'
        }),
        getMenu: builder.query<Restaurante, string>({
            query: (id) => `menus/${id}`
        })
    })
})

export const { useGetRestaurantsQuery, useGetMenuQuery } = api

export default api
