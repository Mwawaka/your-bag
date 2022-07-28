import React from "react";
import { ChevronDown, ChevronUp } from "../icons";
import { removeItem,increase,decrease } from "../reducers/cartSlice";
import { useDispatch } from "react-redux";
const CartItem = ({ id, title, price, amount, img }) => {
    const dispatch = useDispatch();
    const handleRemove = () => {
        dispatch(removeItem(id));
    }
    const handleIncrease = () => {
        dispatch(increase({id}));
    }
    const handleDecrease = () => {
        dispatch(decrease({id}));
     }
    return (
        <article className='grid grid-cols-3 gap-x-6  items-center my-10'>
            <img src={img} alt='' className="w-32 h-32 object-cover " />
            <div className="flex flex-col items-start space-y-2">
                <h4 className='font-bold text-xl md:text-2xl md:tracking-wider'>{title}</h4>
                <h4 className='font-semibold text-lg text-greyFive md:text-xl '>$ {price}</h4>
                <button className=' text-primary hover:text-primaryLight tracking-wide transform transition-transform hover:scale-105 md:tracking-wider' onClick={handleRemove}>remove</button>
            </div>
            <div className='flex flex-col items-center'>
                <button className="text-primary" onClick={handleIncrease}> <ChevronUp /></button>
                {amount}
                <button className="text-primary" onClick={handleDecrease}><ChevronDown /></button>
            </div>


        </article>
    )
}

export default CartItem;