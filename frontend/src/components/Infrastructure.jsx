import React from 'react';

const Infrastructure = () => {
  return (
    <div className="flex flex-col md:flex-row max-w-7xl mx-auto mt-10 mb-14 px-4 md:px-0">
      {/* content */}
      <div className="w-full md:w-1/2 h-auto md:h-[32rem] flex flex-col items-start p-6 md:p-7 pb-10 rounded-t-[2rem] md:rounded-l-[2rem] md:rounded-b-[2rem] rounded-b-[2rem] bg-[#FFFBEF]">
        <span className="text-white bg-red-500 p-3 px-5 rounded-full mb-4 text-xl">
          Infrastructure
        </span>
        <p className="text-base md:text-lg leading-relaxed">
          Welcome to Prataap Snacks Limited! We are a leading snacks brand
          committed to delivering exceptional products.
          <br className="hidden md:block" />
          <br />
          With a daily production capacity of{' '}
          <span className="text-red-500 font-bold">100 tons</span>, our{' '}
          <span className="text-red-500 font-bold">8-acre factory</span> houses{' '}
          <span className="text-red-500 font-bold">10 production lines</span>,
          ensuring efficient manufacturing.
          <br className="hidden md:block" />
          <br />
          Our <span className="text-red-500 font-bold">70,000 square</span> feet
          storage facility accommodates a wide range of products.
          <br className="hidden md:block" />
          <br />
          Supported by{' '}
          <span className="text-red-500 font-bold">
            60+ transportation vehicles
          </span>{' '}
          and a dedicated team of{' '}
          <span className="text-red-500 font-bold">450+ professionals</span>, we
          ensure timely delivery and superior customer satisfaction.
          <br className="hidden md:block" />
          <br />
          Experience the excellence of Pratap Snacks Limited today!
        </p>
        <span className="mt-6 font-bold text-xl md:text-2xl text-red-500 cursor-pointer hover:underline">
          Read More...
        </span>
      </div>

      {/* image grid */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <div className="grid grid-rows-2 gap-2 w-full max-w-lg md:max-w-full">
          <div className="overflow-hidden rounded-xl">
            <img
              src="images/infra-1.jpg"
              alt="Infrastructure 1"
              className="w-full h-full object-cover hover:scale-110 duration-300"
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="overflow-hidden rounded-xl">
              <img
                src="images/infra-2.jpg"
                alt="Infrastructure 2"
                className="w-full h-full object-cover hover:scale-110 duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-xl">
              <img
                src="images/infra-3.jpg"
                alt="Infrastructure 3"
                className="w-full h-full object-cover hover:scale-110 duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Infrastructure;
