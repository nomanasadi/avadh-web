import { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("token"));
    setIsAdmin(localStorage.getItem("isAdmin") === "true");
    setMenuOpen(false); // Close mobile menu on route change
    setOpenDropdown(false);
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isAdmin");
    setIsLoggedIn(false);
    setIsAdmin(false);
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Left: Logo */}
        <Link to="/">
          <img src="/images/logo.png" alt="Avadh Logo" className="w-28 md:w-32 h-auto" />
        </Link>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-red-600 text-2xl"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        {/* Center: Links (Desktop) */}
        <div className="hidden md:flex space-x-10 text-red-600 text-[1rem] font-medium items-center">
          <Link to="/">Home</Link>

          <div className="relative">
            <button
              onClick={() => setOpenDropdown(!openDropdown)}
              className="flex items-center space-x-1"
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

          <Link to="/aboutus">About Us</Link>
          {isLoggedIn && isAdmin && (
            <>
              <Link to="/retailer">Retailer</Link>
              <Link to="/employee">Employee</Link>
          <Link to="/applicant" className="block">Applicant</Link>
            </>
          )}
          <Link to="/job">Apply For Job</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        {/* Right: Buttons (Desktop) */}
        <div className="hidden md:flex items-center space-x-4">
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-6 py-2 rounded-full text-sm"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="bg-red-600 text-white px-6 py-2 rounded-full text-sm"
            >
              Login
            </Link>
          )}
          <a href="#" className="text-red-600 text-xl"><FaFacebookF /></a>
          <a href="#" className="text-red-600 text-xl"><FaInstagram /></a>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3 text-red-600 font-medium">
          <Link to="/" className="block">Home</Link>

          {/* Mobile Dropdown */}
          <div>
            <button
              onClick={() => setOpenDropdown(!openDropdown)}
              className="flex items-center justify-between w-full"
            >
              <span>Product</span>
              <ChevronDown size={18} />
            </button>
            {openDropdown && (
              <div className="ml-4 mt-2 space-y-2">
                <Link to="/namkeen" className="block">Namkeen</Link>
                <Link to="/fryums" className="block">Fryums</Link>
                <Link to="/chips" className="block">Chips</Link>
              </div>
            )}
          </div>

          <Link to="/aboutus" className="block">About Us</Link>
          {isLoggedIn && isAdmin && (
            <>
              <Link to="/retailer" className="block">Retailer</Link>
              <Link to="/employee" className="block">Employee</Link>
            </>
          )}
          <Link to="/job" className="block">Apply For Job</Link>
          <Link to="/contact" className="block">Contact Us</Link>
          <Link to="/applicant" className="block">Applicant</Link>

          {/* Login/Logout and Social */}
          <div className="mt-4 flex items-center justify-between">
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-4 py-2 rounded-full text-sm"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="bg-red-600 text-white px-4 py-2 rounded-full text-sm"
              >
                Login
              </Link>
            )}
            <div className="flex space-x-4 ml-2">
              <a href="#" className="text-red-600 text-xl"><FaFacebookF /></a>
              <a href="#" className="text-red-600 text-xl"><FaInstagram /></a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
