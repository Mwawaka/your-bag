import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../data/cartItems";

const initialState = {
  cartItems: cartItems,
  amount: 4,
  total: 30,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart", // name of the slice
  initialState,
  reducers: {
    // functions in the reducer must be exported as actions
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.quantity += 1;
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find(item => item.id === payload.id);
      cartItem.quantity -= 1;
      }
    //   calculateTotals: () => { }

    // anything returned by the reducer becomes the new state  which replaces the initialState
  },
});
// console.log(cartSlice);

export const { clearCart, removeItem, increase,decrease } = cartSlice.actions;

export default cartSlice.reducer;
