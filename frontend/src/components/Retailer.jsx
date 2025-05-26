import React from 'react';
import Navbar from './Navbar';

const Retailer = () => {
  const data = [
    { id: 1, shopName: 'Avadh Mart', totalAmount: 12000 },
    { id: 2, shopName: 'Snack World', totalAmount: 8500 },
    { id: 3, shopName: 'Namkeen Hub', totalAmount: 9750 },
    { id: 4, shopName: 'Bharat Cold Drink', totalAmount: 12500 },
    { id: 5, shopName: 'KGN Daily Needs', totalAmount: 9800 },
    { id: 6, shopName: 'Nisha General Store', totalAmount: 11250 },
    { id: 7, shopName: 'BK Kirana', totalAmount: 13400 },
    { id: 8, shopName: 'Tawakkal Store', totalAmount: 9200 },
    { id: 9, shopName: 'Jain Pan Centre', totalAmount: 4500 },
    { id: 10, shopName: 'Jay General Store', totalAmount: 10500 },
    { id: 11, shopName: 'Lucky Supermart', totalAmount: 14250 },
    { id: 12, shopName: 'Shree Snacks & More', totalAmount: 8750 },
    { id: 13, shopName: 'Mehta Provision Store', totalAmount: 10900 },
    { id: 14, shopName: 'Super Kirana Mart', totalAmount: 13650 },
    { id: 15, shopName: 'Royal General Store', totalAmount: 11700 },
    { id: 16, shopName: 'Sunrise Grocery', totalAmount: 9600 },
    { id: 17, shopName: 'Urban Mart', totalAmount: 10100 },
    { id: 18, shopName: 'A1 Kirana', totalAmount: 8700 }
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-red-100 to-blue-100 py-10 px-4">
        <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden p-8">
          <h2 className="text-3xl font-bold text-red-600 mb-6 border-b border-red-300 pb-2">
            🛒 Retailers Overview
          </h2>

          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left">
              <thead className="bg-red-600 text-white">
                <tr>
                  <th className="py-3 px-4">Serial No.</th>
                  <th className="py-3 px-4">Shop Name</th>
                  <th className="py-3 px-4">Total Amount</th>
                </tr>
              </thead>
              <tbody>
                {data.map((order, index) => (
                  <tr
                    key={`${order.shopName}-${index}`}
                    className="border-b border-gray-200 hover:bg-red-50 transition duration-200"
                  >
                    <td className="py-3 px-4 font-medium text-gray-700">{index + 1}</td>
                    <td className="py-3 px-4 text-gray-800">{order.shopName}</td>
                    <td className="py-3 px-4 text-green-600 font-semibold">₹{order.totalAmount.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Retailer;
