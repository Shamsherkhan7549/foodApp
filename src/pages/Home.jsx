import React from 'react'
import Navbar from '../components/Navbar';
import Category from '../components/Category'
import FoodITems from '../components/FoodITems'
import Cart from '../components/Cart'
const Home = () => {
  return (
    <div className='px-8 py-4'>
       <Navbar/>
       <Category/>
       <FoodITems/>
       <Cart/>
    </div>
  )
}

export default Home