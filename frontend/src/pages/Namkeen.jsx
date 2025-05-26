import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import Footer from '../components/Footer';

const Namkeen = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/namkeen');
        const data = await res.json();
        setCards(data);
      } catch (error) {
        console.error('Error fetching cards:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />

      {/* Banner */}
      <div>
        <img src="images/namjeenBanner.png" alt="Namkeen Banner" className="w-full h-auto object-cover" />
      </div>

      {/* Section Title */}
      <div className='max-w-7xl mx-auto mt-7 px-4 md:px-8'>
        <h1 className='text-3xl md:text-4xl text-red-500 font-bold'>NAMKEEN</h1>
        <p className='text-red-500 mt-2 text-lg md:text-xl'>Flavourful Namkeens for every craving and every occasion.</p>
        <div className='w-36 md:w-48 h-1 bg-red-500 mt-3'></div>
      </div>

      {/* Card Grid */}
      <div className='mt-16 px-4 md:px-8'>
        <div className='flex flex-wrap justify-center gap-6 md:gap-10 lg:gap-16 max-w-7xl mx-auto'>
          {cards.map((card) => (
            <div key={card._id}>
              <Card
                name={card.name}
                imageUrl={card.imageUrl}
                availability={card.availability}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className='mt-20'>
        <Footer />
      </div>
    </>
  );
};

export default Namkeen;
