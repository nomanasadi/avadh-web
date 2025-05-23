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

  if (!employee) return <p className="text-center mt-10">Loading...</p>;

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
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Employee Details</h2>
      <p><strong>Name:</strong> {employee.applicantName}</p>
      <p><strong>Email:</strong> {employee.applicantEmail}</p>
      <p><strong>Designation:</strong> {employee.designation}</p>
      <p><strong>Resume:</strong> <a href={employee.resumeLink} target="_blank" className="text-blue-600 underline">View Resume</a></p>

      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-2">Monthly Sales vs Target</h3>
        {salesData.length > 0 ? (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="sales" stroke="#3b82f6" name="Sales" />
              <Line type="monotone" dataKey="target" stroke="#ef4444" strokeDasharray="5 5" name="Target" />
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <p className="text-gray-500">No sales data available.</p>
        )}
      </div>
    </div>
    </>
  );
};

export default EmployeeDetail;
