import React from 'react'
import { useDispatch } from 'react-redux';
import { clearCart } from '../reducers/cartSlice';
import { closeModal } from '../reducers/modalSlice';


const Modal = () => {
    const dispatch = useDispatch();
    const handleCart = () => {
        dispatch(clearCart());
        dispatch(closeModal());
    }
    const handleCancel = () => {
        dispatch(closeModal());
    }
    return (
        <aside className=' fixed top-0 left-0 w-[100%] h-[100%] bg-modalColor z-10 flex items-center justify-center '>
            <div className='bg-white max-w-2xl w-auto text-center p-8 rounded-lg space-y-8'>

                <h4 className=' font-semibold md:tracking-wider '>Remove all items in the shopping cart ?</h4>
                <div className='flex justify-around'>

                    <button type='button' className='bg-transparent py-2 px-4 text-primary border border-primary hover:bg-primaryLight hover:text-primaryDark rounded-lg' onClick={handleCart}>Confirm</button>
                    {/* btn-confirm */}
                    <button type='button' className='bg-transparent py-2 px-4 text-redLight border border-redDark rounded-lg hover:bg-redLight hover:text-redDark' onClick={handleCancel}>Cancel</button>
                    {/* btn-clear */}
                </div>
            </div>
        </aside>
    )

}

export default Modal;