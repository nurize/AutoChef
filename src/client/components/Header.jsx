import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { UserContext } from '../context/UserContext'; // Importing the UserContext
import LoginSignupButton from './LoginSignUpButton'; // Importing a custom button component

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage the mobile menu's open/close status
  const { isLoggedIn } = useContext(UserContext); // Getting the login status from the context

  // Function to toggle the mobile menu
  const toggleMenu = () => setIsOpen(!isOpen);

  // Array of navigation menu items
  const menuItems = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact Us' },
  ];

  return (
    <header className="bg-black text-white px-2 py-4 fixed top-0 left-0 right-0 z-30">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold flex items-center">
          <NavLink to="/" className="flex items-center font-serif">
            <img 
              src={require('../assets/auto-chef-logo.png')} 
              alt="logo" 
              className="ml-4 mr-2 w-16 h-10"
            />
            <div className="hidden lg:block font-thin">
              Auto<span className="text-red-700">Chef</span>
            </div>
          </NavLink>
        </div>

        <div className="md:hidden">
          {/* Button to toggle the mobile menu */}
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>

        {/* Navigation menu, conditionally rendered based on isOpen state */}
        <ul className={`md:flex md:flex-row md:space-x-4 gap-4 ${isOpen ? 'block' : 'hidden'} md:block absolute md:relative top-full left-0 w-full md:w-auto bg-black md:bg-transparent`}>
          {menuItems.map((item, index) => (
            <li key={index} className="md:border-none">
              <NavLink 
                to={item.path} 
                className={({ isActive }) => `hover:text-red-700 block md:inline py-2 md:py-0 px-4 md:px-0 ${isActive ? 'text-red-700 font-bold' : ''}`}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
          {/* Show login/signup buttons only on mobile and if not logged in */}
          {isOpen && !isLoggedIn && (
            <li className="md:hidden">
              <LoginSignupButton 
                styleProp="w-[90%] mx-auto bg-white text-red-600 px-6 py-3 text-lg font-semibold hover:bg-red-700 transition duration-300 mt-4 md:mt-0" 
                textProp="Sign In" 
              />
              <LoginSignupButton 
                styleProp="w-[90%] bg-red-600 px-6 py-3 text-lg font-semibold hover:bg-red-700 transition duration-300 mt-4 md:mt-0" 
                textProp="Sign Up" 
              />
            </li>
          )}
        </ul>

        <div className="hidden md:flex items-center">
          {/* Show profile icon or login/signup buttons based on login status */}
          {isLoggedIn ? (
            <div className="flex items-center">
              <NavLink to="/profile" className="text-white">
                <FaUserCircle className="text-3xl text-white mr-4" />
              </NavLink>
            </div>
          ) : (
            <div className="flex items-center">
              <LoginSignupButton 
                styleProp="bg-white text-red-600 px-3 py-2 text-md mr-3 font-semibold rounded-lg hover:bg-red-700 transition duration-300 hover:text-white" 
                textProp="Sign In" 
              />
              <LoginSignupButton 
                styleProp="bg-red-600 px-3 py-2 text-md font-semibold rounded-lg hover:bg-red-700 transition duration-300" 
                textProp="Sign Up" 
              />
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
