import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';

const ApplicantList = () => {
  const [applicant, setApplicant] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/applications')
      .then(res => setApplicant(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-red-200 to-blue-200 py-10 px-4">
        <div className="max-w-3xl mx-auto bg-white bg-opacity-90 backdrop-blur-lg rounded-3xl shadow-2xl p-10">
          <h2 className="text-3xl font-extrabold text-pink-800 mb-6 border-b-2 border-indigo-100 pb-3">
            Applicant List
          </h2>

          <ul className="space-y-4">
            {applicant.map(emp => (
              <li
                key={emp._id}
                className="p-5 rounded-xl bg-gradient-to-r from-pink-100 to-blue-100 hover:from-pink-200 hover:to-pink-200 transition duration-200 shadow"
              >
                <Link
                  to={`/applicant/${emp._id}`}
                  className="text-xl font-semibold text-pink-700 hover:underline"
                >
                  {emp.applicantName}
                </Link>
                <span className="block text-sm text-gray-700 mt-1">
                  <span className="font-medium text-pink-600">Designation:</span> {emp.designation}
                </span>
              </li>
            ))}
          </ul>

          {applicant.length === 0 && (
            <p className="text-center text-gray-500 mt-6">No Applicant found.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default ApplicantList;
