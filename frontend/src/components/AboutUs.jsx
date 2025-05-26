import React from 'react';

const AboutUs = () => {
  return (
    <>
      <span className="text-white bg-red-500 p-3 px-5 rounded-full ml-6 mt-8 inline-block">
        About Us
      </span>
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto mt-10 mb-14 px-4 md:px-0">
        {/* content */}
        <div className="w-full md:w-[70%] h-auto md:h-[32rem] flex flex-col items-start bg-[#FFD347] p-7 pb-10 rounded-t-[2rem] md:rounded-l-[2rem] md:rounded-b-[2rem] rounded-b-[2rem] md:rounded-tr-none">
          <p className="text-lg md:text-2xl leading-relaxed">
            Avadh (Prataap Snacks Limited), a flourishing snacks <br className="hidden md:block" /> manufacturer in Gujarat, India, boasts a vast{' '}
            <span className="font-bold text-red-500">5.8-acre</span>{' '}
            <br className="hidden md:block" /> manufacturing setup.
            <br />
            <br />

            With 10 high-capacity production lines, Avadh Snacks churns <br className="hidden md:block" /> out an impressive{' '}
            <span className="font-bold text-red-500">100 tonnes</span> of snacks per day.
            <br />
            <br />

            Avadh Snacks reaches a wide customer base through its <br className="hidden md:block" /> extensive network of{' '}
            <span className="font-bold text-red-500">350 distributors</span>.
            <br />

            Ranked as the <span className="font-bold text-red-500">4th largest player</span> in Gujarat’s organized{' '}
            <br className="hidden md:block" /> snacks market.
          </p>
          <span className="mt-6 font-bold text-xl md:text-2xl text-red-500 cursor-pointer hover:underline">
            Read More...
          </span>
        </div>

        {/* image */}
        <div className="w-full md:w-3/5 mt-8 md:mt-0 flex justify-center">
          <img
            src="images/about.webp"
            alt="About Us"
            className="w-full max-w-md md:max-w-full object-cover rounded-b-[2rem] md:rounded-r-[2rem] md:rounded-bl-none"
          />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
