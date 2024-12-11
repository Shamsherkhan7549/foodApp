import React, { useEffect, useState } from 'react';
import PropagateLoader from 'react-spinners/PropagateLoader'

const Success = () => {
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },3000)
  },[])
  return (
    <>

    <div className='flex flex-col items-center justify-center h-screen'>
      {
        loading ? 
        <PropagateLoader color='#36d7b7' />
        :
        <div className='text-center'>
          <h2 className='font-bold text-2xl pb-5'>Order Successful</h2>
          <p className='text-green-500 font-semibold '>Your order has been Successfully placed</p>
        </div>
      }
    </div>  
    </>
  )
}

export default Success;