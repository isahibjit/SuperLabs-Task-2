import React from 'react'
import { MdOutlineShoppingCart } from "react-icons/md";
import { TfiHeadphoneAlt } from "react-icons/tfi";


const CornerPopupBtn = () => {
  return (
    <div className='fixed right-5 bottom-5 z-999'>
        <button className='flex justify-center w-[205px] gap-2 my-2 cursor-pointer corner-popup-btn'>
            <MdOutlineShoppingCart className='text-2xl' />
            <span>Start Selling</span></button>
        <button className=' flex  my-2 gap-1 w-[205px]  cursor-pointer corner-popup-btn'>
            <TfiHeadphoneAlt className='text-2xl' />
            <span>Customer Service</span></button>
    </div>
  )
}

export default CornerPopupBtn