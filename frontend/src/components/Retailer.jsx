import React from 'react'
import Navbar from './Navbar'

const Retailer = () => {

  const data = [
    { id: 1, shopName: 'Avadh Mart', totalAmount: 12000 },
    { id: 2, shopName: 'Snack World', totalAmount: 8500 },
    { id: 3, shopName: 'Namkeen Hub', totalAmount: 9750 },
    { id: 1, shopName: 'Bharat Cold Drink', totalAmount: 12500 },
    { id: 2, shopName: 'KGN Daily Needs', totalAmount: 9800 },
    { id: 3, shopName: 'Nisha General Store', totalAmount: 11250 },
    { id: 4, shopName: 'BK Kirana', totalAmount: 13400 },
    { id: 5, shopName: 'Tawakkal Store', totalAmount: 9200 },
    { id: 6, shopName: 'Jain Pan Centre', totalAmount: 4500 },
    { id: 7, shopName: 'Jay General Store', totalAmount: 10500 },
    { id: 8, shopName: 'Lucky Supermart', totalAmount: 14250 },
    { id: 9, shopName: 'Shree Snacks & More', totalAmount: 8750 },
    { id: 10, shopName: 'Mehta Provision Store', totalAmount: 10900 },
    { id: 11, shopName: 'Super Kirana Mart', totalAmount: 13650 },
    { id: 12, shopName: 'Royal General Store', totalAmount: 11700 },
    { id: 13, shopName: 'Sunrise Grocery', totalAmount: 9600 },
    { id: 14, shopName: 'Urban Mart', totalAmount: 10100 },
    { id: 15, shopName: 'A1 Kirana', totalAmount: 8700 }
  ];

  return (
    <div>
      <Navbar/>
      
      <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Retailers</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead className="bg-red-600 text-white">
            <tr>
              <th className="py-3 px-4 text-left">Serial No.</th>
              <th className="py-3 px-4 text-left">Shop Name</th>
              <th className="py-3 px-4 text-left">Total Amount</th>
            </tr>
          </thead>
          <tbody>
            {data.map((order, index) => (
              <tr key={order.id} className="border-b hover:bg-gray-50">
                <td className="py-2 px-4">{index + 1}</td>
                <td className="py-2 px-4">{order.shopName}</td>
                <td className="py-2 px-4">₹{order.totalAmount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  )
}

export default Retailer
