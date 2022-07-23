import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  quantity: 0,
  total: 0,
  isLoadign: true,
};

const cartSlice = createSlice({
  name: "cart", // name of the slice
  initialState,
});

export default cartSlice.reducer;
