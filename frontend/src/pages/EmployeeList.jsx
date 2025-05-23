import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/employees')
      .then(res => setEmployees(res.data))
      .catch(err => console.error(err));
  }, []);
  return (
    <>
    <Navbar/>
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Employee List</h2>
      <ul className="space-y-3">
        {employees.map(emp => (
          <li key={emp._id} className="p-3 border rounded hover:bg-gray-100">
            <Link to={`/employee/${emp._id}`} className="text-blue-600 hover:underline">
              {emp.applicantName}
            </Link>
            <span className="block text-sm text-gray-600">Designation: {emp.designation}</span>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
};

export default EmployeeList;
