import React from "react";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { calculateTotals } from './reducers/cartSlice'


function App() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector(store => store.cart)
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems, dispatch]);
  //each time their is change in cartItems the dispatch is run 
  return (
    <main className="text-greyOne">
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
