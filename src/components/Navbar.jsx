import React from 'react';
import { useSelector } from 'react-redux';
import { CartIcon } from '../icons';

const Navbar = () => {
    const { amount} = useSelector((store) => store.cart)
    return (
        <nav className='flex justify-around items-center mx-auto max-w-full bg-primary text-white p-5'>

            <h3 className='font-bold text-3xl md:tracking-wider'>Redux Toolkit</h3>

            <div className='relative block '>

                <CartIcon />
                <div className='absolute top-[-0.75rem] right-[-0.75rem] w-[1.75rem] h-[1.75rem]  rounded-full bg-primaryLight flex items-center justify-around'>
                    <p className='text-xl'>{amount}</p>
                </div>
            </div>

        </nav>
    )
}

export default Navbar;

// useSelector enables access to the storen