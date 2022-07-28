import React from 'react';
import CartItem from './CartItem';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../reducers/cartSlice';

const CartContainer = () => {
    const { cartItems, amount, total } = useSelector((store) => store.cart);
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(clearCart());
    }
    if (amount< 1) {
        return (
            <section className='max-w-6xl mx-auto mt-14 '>
                <header className='flex flex-col items-center space-y-6'>
                    <h2 className='text-center text-5xl font-bold md:tracking-wider'>your bag</h2>
                    <h4 className=' text-greyFive text-lg tracking-widest'>. . .is currently empty</h4>
                </header>
            </section>
        );
    }

    return (
        <section className='max-w-6xl mx-auto mt-14'>
            <header className='flex flex-col items-center space-y-6'>
                <h2 className='text-5xl font-bold mb-12 md:tracking-wider'>your bag</h2>
            </header>
            <div>
                {cartItems.map(cartItem => {
                    return (
                        <CartItem key={cartItem.id} {...cartItem} />
                        // spread operator is used to pass the properties of the object as props
                    )
                })}
            </div>
            <footer>
                <hr />
                <div className='flex justify-between font-semibold text-2xl mt-4'>
                    <h3>Total</h3>
                    <h3>$ {total.toFixed(2)}</h3>
                </div>
                <div className='max-w-xs mx-auto text-center mt-12'>
                    <button className=' bg-transparent py-[0.5rem] px-[1.8rem] text-redDark border-2 border-redDark rounded-lg font-bold tracking-widest mb-12 hover:bg-redLight hover:border-redLight hover:outline hover:outline-2' onClick={handleClick}>CLEAR CART</button>
                </div>


            </footer>
        </section>
    )
}

export default CartContainer;