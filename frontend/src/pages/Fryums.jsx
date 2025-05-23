import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';

const Fryums = () => {

  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/fryums'); // full URL recommended
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
    <div>
      <img src="images/slide-1.webp" alt="" />
    </div>
    <div className='max-w-7xl m-auto mt-7 p-8'>
      <h1 className='text-4xl text-red-500 font-bold'>FRYUMS</h1>
      <p className='text-red-500 mt-2 text-xl'>Get ready for a fryum-tastic experience!</p>
      <div className='w-48 border h-2 bg-red-500 mt-3'></div>
    </div>

    <div className='mt-36'>
      <div className='flex flex-wrap gap-16 max-w-7xl m-auto'>
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

   <div className='mt-20'>
    <Footer/>
   </div>
  </>
  )
}

export default Fryums
