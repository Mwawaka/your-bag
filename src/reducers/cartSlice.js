import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../data/cartItems";
const initialState = {
  cartItems: cartItems,
  quantity: 0,
  total: 0,
  isLoadign: true,
};

const cartSlice = createSlice({
  name: "cart", // name of the slice
  initialState,
});

export default cartSlice.reducer;
