import React from 'react'

const Button = ({onClick,className,text}) => {
  return (
    <>
        <button onClick={onClick} className={`${className} bg-gray-300 px-4 py-2 active:bg-green-500 active:text-white font-bold rounded`}>{text}</button>
    </>
  )
}

export default Button