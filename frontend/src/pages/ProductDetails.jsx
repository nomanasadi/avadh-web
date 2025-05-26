import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FaBackspace, FaHouseUser } from 'react-icons/fa';
import { dummyData } from '../productDetail';
import Navbar from '../components/Navbar';

const StarRating = ({ rating }) => (
  <span className="text-yellow-400">
    {'★'.repeat(rating)}
    {'☆'.repeat(5 - rating)}
  </span>
);

export default function ProductDetails() {
    const navigate = useNavigate();
    const goBack = () => {
    navigate(-1); // Go back to the previous page
  };

  const { slug } = useParams();
  const product = dummyData[slug];

  if (!product) return <div className="p-6 text-center text-red-500">Product not found</div>;

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gradient-to-b from-yellow-200 to-yellow-300 p-6 flex justify-center items-center">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <Link onClick={goBack} className="text-gray-500 hover:text-gray-700 transition">
            <FaBackspace size={24} />
          </Link>
        </div>

        <div className="flex flex-col items-center">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-48 h-48 object-cover rounded-lg shadow mb-4"
          />
          <h2 className="text-2xl font-bold text-gray-800">{product.name}</h2>
          <p className="text-lg text-gray-700 mb-4">Price: ₹{product.price}</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Customer Reviews</h3>
          {product.reviews.length > 0 ? (
            <ul className="space-y-4">
              {product.reviews.map((rev, i) => (
                <li key={i} className="bg-yellow-100 border border-yellow-200 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <div className="w-10 h-10 flex items-center justify-center bg-white border rounded-full shadow mr-3">
                      <FaHouseUser className="text-slate-400 w-5 h-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-semibold text-gray-700">{rev.user}</span>
                      <StarRating rating={rev.rating} />
                    </div>
                  </div>
                  <p className="text-gray-600">{rev.comment}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No reviews yet.</p>
          )}
        </div>
      </div>
    </div>
    </>
  );
}
