import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaBriefcase, FaTv, FaSearch, FaDollarSign, FaSignInAlt } from 'react-icons/fa';
import workex_pink from "../assets/workex_pink.svg";
import w_logo from "../assets/w_logo.svg"; 
import workex_jobs from "../assets/workex_jobs.svg"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full p-4 bg-[#071424] shadow-lg shadow-yellow-400 text-white z-50">
        <div className="container flex justify-between items-center h-16 mx-auto">
          <div className="flex items-center">
            {/* Three Line Icon (Mobile) */}
            <button
              onClick={toggleMenu}
              className="md:hidden flex items-center px-2"
              aria-label="Toggle Menu"
              aria-expanded={isOpen}
            >
              {!isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>

            {/* Logo */}
            <Link to="/" className="flex items-center p-2">
              <img src={workex_pink} alt="Logo" className="w-full lg:block hidden h-auto" />
              <img src={w_logo} alt="Logo" className="w-10 lg:hidden h-auto" />
            </Link>
            <div className="ml-28">
              {/* Download App Button (Mobile Only) */}
              <button className="bg-pink-600 text-white px-4 py-2 lg:hidden">
                Download App
              </button>
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-7 items-center">
            {[
              { name: 'Hire Staff', path: '/hireStaf' }, 
              { name: 'Manage Staff', path: '/managestaf' }, 
              { name: 'Career TV', path: '/careertv' }, 
              { name: 'Find Jobs', path: '/findJobs' }, 
              { name: 'Pricing', path: '/pricing' }, 
              { name: 'Sign In', path: '/signin' }
            ].map(({ name, path }) => (
              <Link 
                key={name}
                to={path}
                className="relative text-xl font-serif px-3 py-2 font-semibold text-white hover:text-pink-400 transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-1 after:bg-red-600 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
              >
                {name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-20 left-0 w-full bg-white text-black md:hidden z-10">
            <div className="flex items-center justify-between p-4">
              {/* Workex Image on the Left */}
              <img src={workex_jobs} alt="Top Image" className="w-60 h-auto" />
              {/* Close Icon */}
              <svg onClick={toggleMenu} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <ul className="flex flex-col space-y-4 p-4">
              {[
                { name: 'Hire Staff', icon: <FaUser />, path: '/hireStaf' },
                { name: 'Manage Staff', icon: <FaBriefcase />, path: '/managestaf' },
                { name: 'Career TV', icon: <FaTv />, path: '/careertv' },
                { name: 'Find Jobs', icon: <FaSearch />, path: '/findJobs' },
                { name: 'Pricing', icon: <FaDollarSign />, path: '/pricing' },
                { name: 'Sign In', icon: <FaSignInAlt />, path: '/signin' }
              ].map(({ name, icon, path }) => (
                <li key={name}>
                  <Link
                    to={path}
                    className="flex items-center gap-2 px-7 justify-start text-2xl font-semibold"
                    onClick={toggleMenu}
                  >
                    <span className="flex items-center text-gray-400 mt-4 py-4">{icon}</span>
                    <span className="border-t-2 flex items-center mt-4 px-6 font-serif font-bold text-gray-500">{name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      <main className="pt-20"> 
       
      </main>
    </>
  );
};

export default Navbar;
