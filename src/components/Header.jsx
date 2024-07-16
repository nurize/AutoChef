import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Button from './BookButton';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <header className="bg-black text-white p-2 sticky top-0 z-30">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-3xl font-bold">
          <NavLink to='/'className='flex'>
            <img src={require('../assets/auto-chef-logo.png')} alt='logo' className='ml-4 mr-2 w-full h-10'/>
            Auto<span className='text-red-700'>Chef</span>
          </NavLink>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
        <ul className={`md:flex md:flex-row md:space-x-4 gap-4 ${isOpen ? 'block' : 'hidden'} md:block`}>
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => `nav-link block md:inline py-2 md:py-0 ${isActive ? 'text-red-700 font-bold' : ''}`}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/services" 
              className={({ isActive }) => `nav-link block md:inline py-2 md:py-0 ${isActive ? 'text-red-700 font-bold' : ''}`}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/about" 
              className={({ isActive }) => `nav-link block md:inline py-2 md:py-0 ${isActive ? 'text-red-700 font-bold' : ''}`}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/gallery" 
              className={({ isActive }) => `nav-link block md:inline py-2 md:py-0 ${isActive ? 'text-red-700 font-bold' : ''}`}
            >
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => `nav-link block md:inline py-2 md:py-0 ${isActive ? 'text-red-700 font-bold' : ''}`}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
        <Button styleProp={"hidden md:block bg-red-600 px-6 py-3 text-lg font-semibold rounded hover:bg-red-700 transition duration-300"} textProp={"Book Now"}/>
      </nav>
      {isOpen && (
        <Button styleProp={"block md:hidden bg-red-600 w-full px-6 py-3 mt-4 text-lg font-semibold rounded hover:bg-red-700 transition duration-300"} textProp={"Book Now"}/>
      )}
    </header>
  );
};

export default Header;