import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';

const ApplicantDetail = () => {
  const { id } = useParams();
  const [applicant, setApplicant] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/applications/${id}`)
      .then(res => {
        setApplicant(res.data);
      })
      .catch(err => console.error('API error:', err));
  }, [id]);

  if (!applicant) return <p className="text-center mt-20 text-teal-400 text-lg animate-pulse">Loading...</p>;

  const renderData = (data, title) => (
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-teal-700 mb-3 border-b border-teal-300 pb-1">{title}</h3>
      <ul className="grid grid-cols-2 gap-3 text-sm text-teal-900">
        {Object.entries(data).map(([month, value]) => (
          <li
            key={month}
            className="flex justify-between bg-teal-50 rounded px-3 py-2 shadow-sm hover:bg-teal-100 transition"
          >
            <span className="font-medium">{month}</span>
            <span>{value.toLocaleString()}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <>
      <Navbar />
      <div className="max-w-3xl mx-auto mt-16 p-8 bg-white rounded-lg shadow-lg border border-teal-200">
        <h2 className="text-3xl font-extrabold text-teal-900 mb-6 border-b border-teal-300 pb-2">Applicant Details</h2>

        <div className="space-y-3 text-teal-800">
          <p><span className="font-semibold text-teal-700">Name:</span> {applicant.applicantName}</p>
          <p><span className="font-semibold text-teal-700">Email:</span> {applicant.applicantEmail}</p>
          <p><span className="font-semibold text-teal-700">Designation:</span> {applicant.designation}</p>
          <p>
            <span className="font-semibold text-teal-700">Resume:</span>{' '}
            <a
              href={applicant.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline transition"
            >
              View Resume
            </a>
          </p>
        </div>

        {applicant.monthlySales && renderData(applicant.monthlySales, 'Monthly Sales')}
        {applicant.monthlyTarget && renderData(applicant.monthlyTarget, 'Monthly Target')}
      </div>
    </>
  );
};

export default ApplicantDetail;
