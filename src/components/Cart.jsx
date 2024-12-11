import React from 'react'
import { useState } from 'react';
import Button from './Button'
import CloseIcon from '@mui/icons-material/Close';
import CartItems from './CartItems';
import {useSelector} from 'react-redux';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useNavigate } from "react-router-dom"
import toast, { Toaster } from 'react-hot-toast';

const Cart = () => {
  const [close, setClose] = useState(true)
  const cartItems = useSelector(state=>state.cart.carts);  
  const totalQty =  cartItems.reduce((acc,val)=>acc+val.qty,0);
  const totalPrice =  cartItems.reduce((acc,val)=>acc+val.qty*val.price,0);
  const navigate = useNavigate();

  return (
    <>
    <div onClick={()=> setClose(false)} className={`fixed bottom-10 right-20 bg-white text-green-500 h-[50px] w-[50px] text-center leading-[45px] rounded-full text-sm cursor-pointer shadow-md text-5xl ${totalQty>0 && 'animate-bounce delay-500 transion-all'}`}><AddShoppingCartIcon/></div>
    <div className={` ${close ? 'translate-x-full': 'translate-x-0'} transition-all duration-500  px-4 py-8 fixed  right-0 top-0 w-full sm:w-[40vw] md:w-[40vw] lg:w-[25vw] h-full bg-white`}>
        <div>
            <div className='flex justify-between bg-white h-[5vh]'>
                <h2 className='font-bold text-2xl'>My Order</h2>
                <p onClick={()=> setClose(true)} className=' text-gray-500 cursor-pointer w-6 h-6 '><CloseIcon className='border-[1px] border-gray-500  font-bold rounded-lg hover:text-red-300 hover:border-red-300 p-1' /></p>
                
            </div>
           
        </div>
       
        <div className='h-[70vh] overflow-y-scroll scroll-smooth no-scrollbar'>
          {cartItems.length>0 ? cartItems.map(item=> <CartItems  key={item.id} id={item.id} name={item.name} img={item.img} price={item.price} qty={item.qty}/>) : <h2 className='pt-5 text-xl font-bold text-center'>Your card is empty</h2> }
        </div>
        
        <div className='fixed bottom-0 pb-4 w-full bg-white  h-[20vh]'>
            <p className='font-bold text-black-md w-full'>Items: <span className='text-green-500'>{totalQty}</span></p>
            <p className='font-bold text-black-md py-2 border-b border-gray-500 w-full '>Total: <span className='text-green-500'>&#x20B9;{totalPrice}</span></p>
            <Button onClick={()=>cartItems.length>0 ? navigate("/success" ) : toast.error('Kindly, add some food!')} className='bg-green-500 text-white mt-3' text={'Checkout'}/>
           
        </div>
    </div>
    </>
  )
}

export default Cart