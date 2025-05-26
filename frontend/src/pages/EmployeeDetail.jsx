import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer
} from 'recharts';
import Navbar from '../components/Navbar';

const EmployeeDetail = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/employees/${id}`)
      .then(res => setEmployee(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!employee) return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-indigo-100 to-blue-100">
      <p className="text-lg text-gray">Loading employee details...</p>
    </div>
  );

  const salesData = employee.monthlySales && employee.monthlyTarget
    ? Object.keys(employee.monthlySales).map(month => ({
        month,
        sales: employee.monthlySales[month],
        target: employee.monthlyTarget[month] || 0
      }))
    : [];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-red-200 to-blue-200 py-10 px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-red-600 to-blue-600 rounded-3xl shadow-2xl p-10 text-white">
          <h2 className="text-3xl font-extrabold text-white mb-6 border-b-2 border-indigo-100 pb-3">
            Employee Details
          </h2>

          <div className="space-y-4 text-gray-200 text-base">
            <p><span className="font-semibold text-gray-50">Name:</span> {employee.applicantName}</p>
            <p><span className="font-semibold text-gray-50">Email:</span> {employee.applicantEmail}</p>
            <p><span className="font-semibold text-gray-50">Designation:</span> {employee.designation}</p>
            <p>
              <span className="font-semibold text-gray-50">Resume:</span>{' '}
              <a
                href={employee.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline font-medium"
              >
                View Resume
              </a>
            </p>
          </div>

          <div className="mt-10">
            <h3 className="text-xl font-semibold text-white mb-4">Monthly Sales vs Target</h3>
            {salesData.length > 0 ? (
              <div className="bg-red-100 rounded-xl p-5 border border-red-500">
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={salesData}>
                    <CartesianGrid strokeDasharray="3 3"  />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="sales"
                      stroke="#6366f1"
                      name="Sales"
                      strokeWidth={3}
                      dot={{ r: 4 }}
                      
                    />
                    <Line
                      type="monotone"
                      dataKey="target"
                      stroke="#f59e0b"
                      strokeDasharray="5 5"
                      name="Target"
                      strokeWidth={3}
                      dot={{ r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            ) : (
              <p className="text-gray-500 text-sm">No sales data available.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeDetail;
