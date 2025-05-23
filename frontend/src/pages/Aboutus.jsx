import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Aboutus = () => {
  return (
    <div>
      <Navbar />
      <div className='mb-8'>
        <img src="images/slide-1.webp" alt="" />
      </div>

      {/* About Us */}


      <div className='flex  max-w-7xl m-auto h-[44rem]'>
        {/* content */}
        <div className='w-full md:w-1/2 mt-8 md:mt-0 h-[32rem] flex flex-col items-start  p-7 pb-10 rounded-l-[2rem] rounded-b-[2rem]'>
          <span className='text-red-500  mb-4 text-3xl font-bold'>About Us</span>
          <p className='text-lg'>
            Welcome to Avadh Snacks, a rapidly growing snacks manufacturing <br /> brand based in Gujarat, India and Prataap Snacks Ltd. is our parent <br /> company. <br /> <br />

            We pride ourselves on our state-of-the-art manufacturing setup, <br /> spanning a sprawling 5.8-acre land area. <br /> <br />

            With 10 high-capacity manufacturing lines, we boast an impressive total <br /> production capacity of approximately 130 tonnes per day, catering to a <br /> wide customer base through our network of approximately 350 <br /> distributors. Our commitment to superior quality extends to our in-house <br /> printing and lamination division, made possible by our subsidiary, <br /> Red RotoPack Pvt Ltd. <br /> <br />

            Embark on a snacking journey like no other and savor the flavours that <br /> have positioned us as the 3rd largest player in Gujarat’s organized snacks <br /> market. <br /> <br />


          </p>
          <span className='mt-6 font-bold text-2xl text-red-500'>Read More...</span>
        </div>
        {/* image */}

        <div className='w-full md:w-1/2'>
          <img src="images/aboutusmain.png" alt="" />
        </div>

      </div>
      {/* Vision */}

      <div className='mt-12'>
      <div className='text-red-500  mb-4 text-3xl font-bold text-center'>Vision</div>
      <h2 className='text-center mt-16 mb-8 text-xl'>Become people’s favourite go to brand in the snacks and namkeen industry with the yummiest/tastiest products.</h2>
      <hr />
      <h2 className='text-center mt-8 mb-8 text-xl'>Commitment of best quality products for our consumers.</h2>
      <hr />
      <h2 className='text-center mt-8 mb-8 text-xl'>Maximum value to the consumer.</h2>
      </div>


      {/* Mission */}

      <div className='mt-12'>
      <div className='text-red-500  mb-4 text-3xl font-bold text-center'>Mission</div>
      <h2 className='text-center mt-16 mb-8 text-xl'>We endeavour to fulfill all the snacking needs of our consumers with best quality, tasty, and value for money products.</h2>
      <hr />
      <h2 className='text-center mt-8 mb-8 text-xl'>We strive to create value through best management practices, empowered & dedicated work force and innovation.</h2>
      <hr />
      <h2 className='text-center mt-8 mb-12 text-xl'>We believe in building enduring partnerships with our business associates.</h2>
      </div>

    
    {/* Footer Section */}
     <Footer/>
    </div>
  )
}

export default Aboutus
