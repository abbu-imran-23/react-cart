import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {

    const cartValue = useSelector((state) => state.CartReducer);

  return (
    <div className='text-3xl text-green-600 font-sans font-bold w-full'>{cartValue}</div>
  )
}

export default Cart