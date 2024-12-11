import React from 'react'
import FoodCard from './FoodCard'
import { useSelector } from 'react-redux'
import FoodData from '../assets/FoodData'

const FoodITems = () => {  
  const foodCategory = useSelector(state => state.foodCategory.foodCategory);
  const searchData = useSelector(state=>state.search.search);
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px] pt-10  w-full '>

    {
        FoodData.filter(item=>{
          if(foodCategory === 'All'){
            return item.name.toLowerCase().includes(searchData.toLowerCase());
          }else{
            return foodCategory === item.category && item.name.toLowerCase().includes(searchData.toLowerCase());
          }
        }).map(data=> 
          <div key={data.id}>
          <FoodCard  id={data.id} img={data.img} name={data.name} price={data.price} rating={data.rating} desc={data.desc.slice(0,43)}/>
          </div>)
    }
        
    </div>
  )
}

export default FoodITems