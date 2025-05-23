import React from 'react'

const AboutUs = () => {
    return (

        <>
              <span className='text-white bg-red-500 p-3 px-5 rounded-full ml-10 mt-8'>About Us</span>
        <div className='flex max-w-7xl m-auto mt-10 mb-14'>
            {/* content */}
            <div className='w-full md:w-4xl mt-8 md:mt-0 h-[32rem] flex flex-col items-start bg-[#FFD347] p-7 pb-10  rounded-l-[2rem] rounded-b-[2rem]'>
                <p className='text-2xl'>Avadh (Prataap Snacks Limited), a flourishing snacks <br /> manufacturer in Gujarat, India, boasts a vast <span className='font-bold text-red-500'>5.8-acre</span>  <br /> manufacturing setup. <br /> <br />

                    With 10 high-capacity production lines, Avadh Snacks churns <br /> out an impressive <span className='font-bold text-red-500'>100 tonnes</span> of snacks per day. <br /> <br />

                    Avadh Snacks reaches a wide customer base through its <br /> extensive network of <span className='font-bold text-red-500'>350 distributors</span>. <br />

                    Ranked as the <span className='font-bold text-red-500'>4th largest player</span> in Gujarat’s organized <br /> snacks market.</p>
                    <span className='mt-6 font-bold text-2xl text-red-500'>Read More...</span>
            </div>
            {/* image */}
            <div className='w-full  md:w-3/4 flex justify-cente'>
                <img src="images/about.webp" alt="" />
            </div>
        </div>
        </>
    )
}

export default AboutUs
