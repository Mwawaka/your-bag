import React from "react";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { calculateTotals, getCartItems } from './reducers/cartSlice'
import Modal from './components/Modal';

function App() {
  const dispatch = useDispatch();
  const { cartItems, isLoading } = useSelector(store => store.cart)
  const { isOpen } = useSelector(store => store.modal)
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems, dispatch]);
  //each time their is change in cartItems the dispatch is run 

  useEffect(() => {
    dispatch(getCartItems())
  }, [dispatch]);

  if (isLoading) {

    return (<section className='max-w-6xl mx-auto mt-14 '>
      <header className='flex flex-col items-center space-y-6'>
        <h2 className='text-primaryDark text-center text-5xl font-bold md:tracking-wider'>Loading...</h2>

      </header>
    </section>)
  }
  else {

    return (
      <main className="text-greyOne">
        {isOpen && <Modal />}
        <Navbar />
        <CartContainer />
      </main>
    );
  }
}
export default App;
