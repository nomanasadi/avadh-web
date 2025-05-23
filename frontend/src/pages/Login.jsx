import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowAltCircleLeft } from 'react-icons/fa';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post('http://localhost:5000/api/auth/login', form);
    localStorage.setItem('token', res.data.token);
        console.log(res.data.user.isAdmin);
    // Set admin flag if user is admin
    if (res.data.user.isAdmin) {
      localStorage.setItem('isAdmin', 'true');
    } else {
      localStorage.removeItem('isAdmin');
    }
    alert('Login successful!');
    navigate('/');
  } catch (err) {
    alert(err.response?.data?.msg || 'Login failed');
  }
};

  return (

    <div className=''>
     <div className='flex justify-center'>
    <img src="images/logo.png" className='h-24 w-28' alt="" />
    </div>
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 space-y-4 p-10 border">
          <Link to='/' className='flex items-center'><FaArrowAltCircleLeft/> </Link>
      <h2 className="text-2xl font-bold">Login</h2>
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
      <div className='flex justify-between'>
      <button className="bg-blue-600 text-white px-4 py-2">Login</button>
      <Link to='/register' className='text-blue-500 underline'>Register</Link>
      </div>
    </form>
    </div>
  );
}
