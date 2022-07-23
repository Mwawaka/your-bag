import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './src/reducers/cartSlice';

export const store = configureStore({
    reducer: {
        cart: cartSlice,
    }
})