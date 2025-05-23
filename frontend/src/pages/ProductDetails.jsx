import { useParams , Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FaBackspace, FaHouseUser } from 'react-icons/fa';
import { dummyData } from '../productDetail';


// Helper function to render stars
const StarRating = ({ rating }) => {
  return (
    <span className="text-yellow-500">
      {'★'.repeat(rating)}
      {'☆'.repeat(5 - rating)}
    </span>
  );
};

export default function ProductDetails() {
  const { slug } = useParams();
  const product = dummyData[slug];

  if (!product) return <div className="p-6">Product not found</div>;

  return (
    <div className="p-4 mx-auto flex items-center justify-center">
    <div className='w-[34rem] bg-yellow-300 shadow-lg p-3 h-full'>
    <Link to='/namkeen'><FaBackspace/></Link>
    <div className='flex flex-col justify-center items-center'>
      <img src={product.imageUrl} alt={product.name} className="w-56 mb-2" />
      <h2 className="text-2xl font-bold">{product.name}</h2>
      <p className="text-gray-700 mb-2">Price: ₹{product.price}</p>

    <div className='flex w-full justify-start flex-col'>
      <h3 className="text-xl font-semibold mb-2">Reviews</h3>
      {product.reviews.length > 0 ? (
        <ul className="list-disc pl-5 space-y-2">
          {product.reviews.map((rev, i) => (
            <li key={i} className='border bg-green-300 p-1 pl-4'>
              <p><div className='flex'><div className='flex justify-center items-center bg-white border rounded-full w-8 h-8 mr-3'><FaHouseUser className='text-slate-400 h-5 w-5'/> </div> <strong>{rev.user}</strong></div> <StarRating rating={rev.rating} /></p>
              <p>{rev.comment}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews yet.</p>
      )}
       </div>
       </div>
      </div>
    </div>
  );
}
