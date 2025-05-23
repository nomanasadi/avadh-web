import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ name, imageUrl, availability }) => {
  return (
    <div className='w-64 h-56 mt-28'>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {/* <!-- Card --> */}
        <div class="relative w-64 h-56 bg-yellow-400 rounded-xl  group">
          {/* <!-- Background Yellow Box (stays fixed) --> */}

          {/* <!-- Image (moves on hover) --> */}
          <img
            src={imageUrl}
            alt="Card Image"
            class="absolute bottom-28 w-full transition-transform duration-300 group-hover:-translate-y-5"
          />

          <div className='bg-red-500 h-0.5 max-w-52 m-auto mt-[40%]'></div>
          <h2 className='text-center mt-3 mb-3 text-xl font-semibold'>{name}</h2>
          <h2 className='text-center'>Available for ₹ {availability}/-</h2>
          <div className='relative mt-2'>
            <Link
              to={`/product/${name.toLowerCase().replace(/\s+/g, '-')}`}
              className='absolute right-3 underline text-red-700'>
              Reviews
            </Link>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
