import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { dummyData } from '../productDetail';
import { FaBackspace } from 'react-icons/fa';
import Navbar from '../components/Navbar';

const ProductDescription = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1); // Go back to the previous page
  };

  const { slug } = useParams();
  const product = dummyData[slug];

  if (!product)
    return (
      <div className="p-6 max-w-xl mx-auto mt-10 text-center text-red-600 font-semibold">
        Product not found
      </div>
    );

  return (
    <>

    <Navbar/>
    <div className="max-w-3xl mx-auto mt-12 p-8 bg-white rounded-xl shadow-xl border border-teal-200">
      <button
        onClick={goBack}
        aria-label="Go back"
        className="flex items-center text-teal-600 hover:text-teal-800 transition mb-6"
      >
        <FaBackspace size={26} />
        <span className="ml-2 font-medium text-lg">Back</span>
      </button>

      <h1 className="text-3xl font-extrabold text-teal-900 mb-6">{product.name}</h1>

      <div className="flex flex-col md:flex-row items-center gap-8">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-48 rounded-lg shadow-md border border-gray-200"
        />

        <div className="flex-1">
          <p className="text-2xl font-semibold text-gray-800 mb-4">Price: ₹{product.price}</p>
          <p className="text-gray-700 leading-relaxed">{product.description || 'No description available.'}</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default ProductDescription;
