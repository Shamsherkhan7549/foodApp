import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch,useSelector } from 'react-redux';
import { addToCart, deleteFromCart,removeFromCart } from '../features/cart/CartSlice';
import toast, { Toaster } from 'react-hot-toast';


const CartItems = ({id,name,img,price, qty}) => {
  const dispatch = useDispatch();

  const datas = useSelector(state=> state.cart.carts);

  const handlingDelete = () =>{
    dispatch(deleteFromCart(id))
    toast.success(`${name} removed from cart`);
  };

  const handlingAddIcon = (id) => {
    const data = datas.find(item=> item.id === id)
    dispatch(addToCart(data));   
  };

  const handlingRemoveIcon = (id) => {
    dispatch(removeFromCart(id))
    if(qty===1){
      toast.success(`${name} removed from cart`);
    }

  }
  return (
    <>
         <div className='flex justify-between gap-3 items-center rounded-lg shadow-md p-6 bg-white mt-4 '>
            <img className='h-[50px] w-[50px]' src={img} alt="item-name" /> 

            <div className='flex flex-col w-full'>
              <div className='flex justify-between w-full '>
                <p className='text-lg font-bold '>{name}</p>
                <DeleteIcon onClick={handlingDelete} className='p-1  font-thin cursor-pointer' />
                
              </div>

              <div className='flex justify-between w-full '>
                <p className='font-bold text-green-500'>&#x20B9;{price}</p>
                <div className='flex justify-end gap-2 w-[30%]'>
                  <RemoveIcon onClick={()=>handlingRemoveIcon(id)} className='cursor-pointer p-1 border-[1px]  border-black  hover:bg-green-500 hover:text-white hover:border-none rounded-lg' />
                  <p className='font-bold text-green-500'>{qty}</p>
                  <AddIcon onClick={()=>handlingAddIcon(id)} className='cursor-pointer p-1 border-[1px] border-black hover:bg-green-500 hover:text-white hover:border-none rounded-lg'/>
                </div>
              </div>
              </div>
          </div>
         
    </>
  )
}

export default CartItems