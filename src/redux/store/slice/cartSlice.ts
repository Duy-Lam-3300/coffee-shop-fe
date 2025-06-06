
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
            const existing = state.items.find(item => item.id === action.payload.id);
            if (existing) {
                existing.quantity += action.payload.quantity;
            } else {
                state.items.push(action.payload);
            }
        },
        removeFromCart: (state, action: PayloadAction<string>) => {
            console.log("Reducer received id to remove:", action.payload);
            console.log("Items before:", state.items);
            state.items = state.items.filter(item => item.id !== action.payload);
            console.log("Items after:", state.items);
        },
        updateQuantity: (state, action: PayloadAction<{ id: string, quantity: number }>) => {
            const item = state.items.find(item => item.id === action.payload.id);
            if (item) item.quantity = action.payload.quantity;
        },
        clearItem: (state) => {
            state.items = [];
        },
    }
})

export const { addToCart, updateQuantity, removeFromCart, clearItem } = cartSlice.actions;
export default cartSlice.reducer;