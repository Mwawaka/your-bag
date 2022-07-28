import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../data/cartItems";

const initialState = {
  cartItems: cartItems,
  amount: 4,
  total: 0,
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
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      if (cartItem.quantity > 0) {
        cartItem.quantity -= 1;
      } else {
        cartItem.quantity = 0;
      }
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.quantity;
        total += item.quantity * item.price;
      });
      state.amount = amount;
      state.total = total;
    },

    // anything returned by the reducer becomes the new state  which replaces the initialState
  },
});
// console.log(cartSlice);

export const { clearCart, removeItem, increase, decrease,calculateTotals } = cartSlice.actions;

export default cartSlice.reducer;
