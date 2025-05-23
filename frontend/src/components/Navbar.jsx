import { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { ChevronDown } from 'lucide-react';
import { Link, useNavigate, useLocation } from "react-router-dom";


export default function Navbar() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

 useEffect(() => {
  setIsLoggedIn(!!localStorage.getItem("token"));
  setIsAdmin(localStorage.getItem("isAdmin") === "true");
}, [location]); // Update on route change

const handleLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("isAdmin"); // Remove admin flag
  setIsLoggedIn(false);
  setIsAdmin(false);
  navigate("/login");
};
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-md sticky z-10 top-0">
      {/* Left: Logo */}
      <div className="flex items-center space-x-4">
        <img src="images/logo.png" alt="Avadh Logo" className="w-[120px] h-auto" />
      </div>

      {/* Center: Links */}
      <div className="flex items-center space-x-14 text-red-600 font-normal text-[1rem]">
        <Link to="/">Home</Link>
        <div className="relative">
          <button
            onClick={() => setOpenDropdown(!openDropdown)}
            className="flex items-center space-x-1 focus:outline-none"
          >
            <span>Product</span>
            <ChevronDown size={18} />
          </button>
          {openDropdown && (
            <div className="absolute top-8 left-0 bg-white border rounded shadow-md py-2 w-40 z-10">
              <Link to="/namkeen" className="block px-4 py-2 hover:bg-gray-100">Namkeen</Link>
              <Link to="/fryums" className="block px-4 py-2 hover:bg-gray-100">Fryums</Link>
              <Link to="/chips" className="block px-4 py-2 hover:bg-gray-100">Chips</Link>
            </div>
          )}
        </div>
        <div  className=" flex space-x-14">
        <Link to="/aboutus">About Us</Link>
        {isLoggedIn && isAdmin && (
          <>
          <Link to="/retailer">Retailer</Link>
        <Link to="/employee">Employee</Link>
          </>
        )}
        {/* {isLoggedIn && (
        )} */}
          <Link to="/job">Apply For Job</Link>
        <Link to="/contact">Contact Us</Link>
        </div>
      </div>

      {/* Right: Login/Logout and Social Icons */}
      <div className="flex items-center space-x-4">
        {isLoggedIn ? (
          <button onClick={handleLogout} className="bg-red-600 text-white px-6 py-2 rounded-full text-lg">
            Logout
          </button>
        ) : (
          <Link to='/login' className="bg-red-600 text-white px-6 py-2 rounded-full text-lg">
            Login
          </Link>
        )}
        <a href="#" className="text-red-600 text-xl"><FaFacebookF /></a>
        <a href="#" className="text-red-600 text-xl"><FaInstagram /></a>
      </div>
    </nav>
  );
}
