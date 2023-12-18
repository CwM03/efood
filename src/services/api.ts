import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Restaurante } from '../pages/Home'

type Product = {
    id: number
    price: number
}

type PurchasePayload = {
    products: Product[]
    delivery: {
        receiver: string
        address: {
            description: string
            city: string
            zipCode: string
            number: number
            complement: string
        }
    }
    payment: {
        card: {
            name: string
            number: string
            code: number
            expires: {
                month: number
                year: number
            }
        }
    }
}

const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://fake-api-tau.vercel.app/api/efood/restaurantes'
    }),
    endpoints: (builder) => ({
        getRestaurants: builder.query<Restaurante[], void>({
            query: () => ''
        }),
        getMenu: builder.query<Restaurante, string>({
            query: (id) => `/${id}`
        }),
        purchase: builder.mutation<any, PurchasePayload>({
            query: (body) => ({
                url: 'checkout',
                method: 'POST',
                body
            })
        })
    })
})

export const { useGetRestaurantsQuery, useGetMenuQuery, usePurchaseMutation } = api

export default api
