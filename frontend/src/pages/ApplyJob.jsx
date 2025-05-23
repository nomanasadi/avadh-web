import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';

const ApplyJob = () => {
  const [formData, setFormData] = useState({
    applicantName: '',
    applicantEmail: '',
    resumeLink: '',
    designation: 'SR',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      await axios.post(`http://localhost:5000/api/applications/apply`, formData);
      setMessage('✅ Application submitted!');
      setFormData({
        applicantName: '',
        applicantEmail: '',
        resumeLink: '',
        designation: 'SR',
      });
    } catch (err) {
      setMessage(err.response?.data?.message || '❌ Failed to submit.');
    }
  };

  return (
    <>
    <Navbar/>
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">Apply for a Job</h2>

      {message && (
        <div
          className={`mb-4 p-3 rounded text-sm ${
            message.includes('✅') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
          }`}
        >
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            name="applicantName"
            value={formData.applicantName}
            onChange={handleChange}
            className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email Address</label>
          <input
            type="email"
            name="applicantEmail"
            value={formData.applicantEmail}
            onChange={handleChange}
            className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Resume Link</label>
          <input
            type="url"
            name="resumeLink"
            value={formData.resumeLink}
            onChange={handleChange}
            placeholder="https://example.com/resume.pdf"
            className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Designation</label>
          <select
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            className="w-full mt-1 px-3 py-2 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="SR">SR</option>
            <option value="SO">SO</option>
            <option value="ASM">ASM</option>
            <option value="HR">HR</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
        >
          Submit Application
        </button>
      </form>
    </div>
    </>
  );
};

export default ApplyJob;
