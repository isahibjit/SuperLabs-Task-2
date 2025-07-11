import React from 'react'

const UpperNav = () => {
  return (
        <div className="flex justify-between md:items-center gap-2 my-3 md:max-w-[80vw] w-full mx-auto">
          <h3 className="text-lg text-gray-600 text-center ">
            World's Largest Medical Equipment Market Place
          </h3>
          <div className="md:text-lg text-md flex ">
            <a href="#" className="hover-link">
              My account
            </a>
            <span className="mx-2">|</span>
            <span className=""> </span>
            <a href="#" className="hover-link">
              Contact Us
            </a>
          </div>
        </div>
  )
}

export default UpperNav