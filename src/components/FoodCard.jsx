import React from 'react'
import GradeIcon from '@mui/icons-material/Grade';
import Button from './Button'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {useDispatch} from 'react-redux';
import { addToCart } from '../features/cart/CartSlice';
import toast, { Toaster } from 'react-hot-toast';

const FoodCard = ({id,img, name, price, rating, desc}) => {
 const dispatch = useDispatch()

  const handlingAddCart = (data) => {
    toast.success(`Added ${data.name}`)
  
    dispatch(addToCart(data))

  };

  

  


  return (
    <div>
      <Card sx={{ maxWidth: 345,  height:'320px'}}>
        <CardMedia
            component="img"
            alt="green iguana"
            image={img}
            sx={{ height: 150, width: '100%', objectFit: 'contain' }}
        />
        <CardContent>
        
            <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span">
              <div className='flex justify-between'>
                  <p className='text-black font-bold'>{name}</p>
                  <p className='text-green-500'>&#x20B9;{price}</p>
              </div>
              <p className='py-4'>{desc}...</p>
              <div className='flex justify-between items-center'>
                  <p className='font-bold text-black flex items-center gap-[5px]'><GradeIcon className='text-yellow-400 ' />{rating}</p>
                  <Button onClick={()=>handlingAddCart({id,img,name,price,desc, rating, qty:1 } )} className='bg-green-500 text-white h-[30px] px-[7px] leading-[10px]' text={"Add to cart"}/>
                 <Toaster position='top-center' reverseOrder={false}/>
                    
              </div>
            </Typography>
      </CardContent>
    </Card>
    </div>
  )
}

export default FoodCard