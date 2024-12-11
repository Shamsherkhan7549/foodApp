import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import {setSearch} from '../features/search/searchSlice';
const Navbar = () => {
   const dispatch = useDispatch();
  return (
    
        <div className='flex  flex-col gap-8 sm:flex-row sm:justify-between sm:items-center'>
          <div className='flex flex-col gap-1 sm:w-[50%]'>
            <h3 className='text-2xl font-bold text-gray-600'>{new Date().toUTCString().slice(0,16)}</h3>
            <h2 className='text-3xl font-bold '>Flavoro Foods</h2>
          </div>
          <div className='sm:w-[50%] w-[100%] text-end'>
              <input className='border-2 border-solid-600 h-12 w-[100%] sm:w-[90%] md:w-[80%] lg:w-[70%] pl-4 pr-4  outline-none rounded' placeholder='Search Here'  onChange={(event)=>dispatch(setSearch(event.target.value))}/>          
          </div>
        </div>
   
  )
}

export default Navbar