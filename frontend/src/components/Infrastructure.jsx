import React from 'react'

const Infrastructure = () => {
  return (
    <>

<div className='flex '>
  {/* content */}
  <div className='w-full md:w-1/2 mt-8 md:mt-0 h-[32rem] flex flex-col items-start  p-7 pb-10 rounded-l-[2rem] rounded-b-[2rem]'>
  <span className='text-white bg-red-500 p-3 px-5 rounded-full mb-4 text-xl'>Infrastructure</span>      
  <p className='text-lg'>
      Welcome to Prataap Snacks Limited! We are a leading snacks brand <br /> committed to delivering exceptional products. <br /> <br />

With a daily production capacity of <span className='text-red-500 font-bold'>100 tons</span>, our <span className='text-red-500 font-bold'>8-acre factory</span> houses <br /> <span className='text-red-500 font-bold'>10 production lines</span>, ensuring efficient manufacturing. <br /> <br />

Our <span className='text-red-500 font-bold'>70,000 square</span> feet storage facility accommodates a wide range of <br /> products. <br /> <br />

Supported by <span className='text-red-500 font-bold'>60+ transportation vehicles</span> and a dedicated team <br /> of <span className='text-red-500 font-bold'>450+ professionals</span>, we ensure timely delivery and superior customer <br /> satisfaction. <br /> <br />

Experience the excellence of Pratap Snacks Limited today!
      </p>
          <span className='mt-6 font-bold text-2xl text-red-500'>Read More...</span>
  </div>
  {/* image */}
  <div className='w-full md:w-1/2 flex justify-cente'>
      <div className='grid grid-rows-2 gap-1'>
      <div className='overflow-hidden'>
       <img src="images/infra-1.jpg" alt="" className='hover:scale-110 duration-300' />
      </div>
       <div className='grid grid-cols-2 gap-1'>
         <div className='overflow-hidden'>
          <img src="images/infra-2.jpg" alt="" className='hover:scale-110 duration-300' />
         </div>
         <div className='overflow-hidden'>
          <img src="images/infra-3.jpg" alt="" className='hover:scale-110 duration-300' />
         </div>
       </div>
      </div>
  </div>
</div>
</>

  )
}

export default Infrastructure
