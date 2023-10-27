import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CardapioItem } from '../../pages/Home'

type CartSlice = {
    items: CardapioItem[]
    isOpen: boolean

}

const initialState: CartSlice = {
    items: [],
    isOpen: false
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<CardapioItem>) => {
            const restaurante = state.items.find((item) => item.id === action.payload.id)
            if (!restaurante) {
                state.items.push(action.payload)
            } else {
                alert('O item já esta no carrinho')
            }
        },
        remove: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter((item) => item.id !== action.payload)
        },
        open: (state) => {
            state.isOpen = true
        },
        close: (state) => {
            state.isOpen = false
        }
    }
})

export const { add, open, close, remove } = cartSlice.actions
export default cartSlice.reducer
