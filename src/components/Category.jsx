import React, { useEffect,useState } from 'react'
import Button from './Button'
import {useDispatch, useSelector} from 'react-redux';
import FoodData from '../assets/FoodData';
import {allData, categoryData} from '../features/category/CategorySlice';
import { addFoodCategory } from '../features/foodCategory/foodCategory';


const Category = () => {
    const dispatch = useDispatch();
    const handlingAllData = () =>{
    dispatch(allData(FoodData));
    dispatch(addFoodCategory("All"))
  };

  const categoriesData = (data) =>{
    const filteredData = FoodData.filter(item=> item.category === data);
    dispatch(categoryData(filteredData));
    dispatch(addFoodCategory(data));
  };

  const [categories, setCategories] = useState([]);

  const listUniqueCategories = () =>{
    const uniqueCategories = [...new Set(FoodData.map(item=>item.category))];
    setCategories(uniqueCategories);
  };

  const selectedCategory = useSelector(state=>state.foodCategory.foodCategory);

  useEffect(()=>{
    listUniqueCategories()
  },[]);

  return (
    <div className=''>
        <h2 className='text-2xl font-semibold sm:pt-16'>Find the best food</h2> 
        <div className='flex gap-4 pt-10 overflow-x-scroll scroll-smooth no-scrollbar sm:overflow-x-hidden'> 
            <Button className={`${selectedCategory==='All' && 'bg-green-500 text-white'}`} onClick={handlingAllData} text={'All'}/>
           {
            categories.map((category,index)=>(
              <Button className={`${selectedCategory===category && 'bg-green-500 text-white'}`} key={index}  onClick={()=>categoriesData(category)} text={category} />
            ))
           }
        </div>
    </div>
  )
}

export default Category