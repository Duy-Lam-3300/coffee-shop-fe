

import type { CartItem } from "@/types/cart";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartState {
    items: CartItem[];
}

const initialState: CartState = {
    items: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
            const existing=state.items.find(item=>item.id===action.payload.id);
            if(existing){
                existing.quantity+=action.payload.quantity;
            }else{
                state.items.push(action.payload);
            }
        }
    }
})

export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer;