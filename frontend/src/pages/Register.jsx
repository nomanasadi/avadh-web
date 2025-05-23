import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowAltCircleLeft } from 'react-icons/fa';

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/register', form);
      alert('Registration successful!');
      navigate('/login');
    } catch (err) {
      alert(err.response?.data?.msg || 'Registration failed');
    }
  };

  return (
    <div>
    <div className='flex justify-center'>
    <img src="images/logo.png" className='h-24 w-28' alt="" />
    </div>
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-14 space-y-4 border p-10">
      <Link to='/' className='flex items-center'><FaArrowAltCircleLeft/> </Link>
      <h2 className="text-2xl font-bold">Register</h2>
      <input
        type="text"
        placeholder="Name"
        className="w-full border p-2"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        required
      />
      <input
        type="email"
        placeholder="Email"
        className="w-full border p-2"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        required
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full border p-2"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        required
      />
      <button className="bg-green-600 text-white px-4 py-2 w-full">Register</button>
      <div className='relative'>
      <Link to='/login' className='text-blue-500 underline absolute right-0'>login</Link>
      </div>
    </form>
    </div>
  );
}
