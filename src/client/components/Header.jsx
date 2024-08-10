import React, { useContext, useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import LoginSignupModal from './LoginSignupModal';
import BookingHistoryModal from './BookingHistoryModal';
import LoginSignupButton from './LoginSignUpButton';
import Button from './BookButton';
import { Icon } from '@iconify/react';

// Custom hook to detect clicks outside a given element
const useOutsideClick = (ref, callback) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callback]);
};

const Header = () => {
  // State management for toggling UI elements and modals
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [modals, setModals] = useState({
    loginSignup: false,
    bookingHistory: false,
  });

  // Ref to dropdown and menu elements
  const dropdownRef = useRef(null);
  const menuRef = useRef(null);

  // Context and navigation hooks
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);
  const navigate = useNavigate();

  // Determine background color based on scroll position, memoized for performance
  const bgColor = useMemo(() => (window.scrollY > 50 ? 'bg-black' : 'bg-transparent'), []);

  // Menu items array, memoized for performance
  const menuItems = useMemo(() => [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact Us' },
  ], []);

  // Toggle the mobile menu
  const toggleMenu = useCallback(() => setIsOpen(prev => !prev), []);

  // Toggle the user dropdown menu
  const toggleDropdown = useCallback(() => {
    setIsDropdownOpen(prev => !prev);
  }, []);

  // Close dropdown or menu when clicking outside
  useOutsideClick(dropdownRef, () => setIsDropdownOpen(false));
  useOutsideClick(menuRef, () => setIsOpen(false));

  // Handle user icon click to toggle dropdown or open login/signup modal
  const handleUserIconClick = () => {
    if (isLoggedIn) {
      toggleDropdown();
    } else {
      setModals({ ...modals, loginSignup: true });
    }
  };

  // Handle cart icon click to open booking history modal or login/signup modal
  const handleCartIconClick = () => {
    if (isLoggedIn) {
      openBookingHistoryModal();
    } else {
      setModals({ ...modals, loginSignup: true });
    }
  };

  // Close Login/Signup modal
  const closeModal = () => setModals({ ...modals, loginSignup: false });

  // Close Booking History modal
  const closeBookingHistoryModal = () => setModals({ ...modals, bookingHistory: false });

  // Open Booking History modal
  const openBookingHistoryModal = () => setModals({ ...modals, bookingHistory: true });

  // Handle user logout
  const handleLogout = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/logout', {
        method: 'POST',
        credentials: 'include', // Include cookies with the request
      });

      if (response.ok) {
        setIsLoggedIn(false);
        navigate('/');
      } else {
        console.error('Failed to log out');
      }
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <header className={`${bgColor} text-white px-4 lg:px-16 py-4 fixed top-0 left-0 right-0 z-30 transition-colors duration-300`}>
      <nav className="flex justify-between items-center">
        {/* Logo and Menu button */}
        <div className='flex items-center'>
          <button onClick={toggleMenu} className="focus:outline-none mr-4 transition duration-300">
            {isOpen ? (
              <Icon icon='ic:round-close' className='h-6 w-6 transition-transform duration-300' />
            ) : (
              <div className='flex items-center'>
                <Icon icon='ic:outline-menu' className='h-6 w-6 lg:h-8 lg:w-8 transition-transform duration-300' />
                <h2 className='hover:text-red-500 ml-2 lg:ml-4 transition-colors duration-300'>Menu</h2>
              </div>
            )}
          </button>
          <Link to='/' className='hidden lg:block'>Welcome to the future of auto repair!</Link>
        </div>

        {/* Mobile Menu */}
        <ul ref={menuRef} className={`absolute top-full left-0 h-screen bg-black w-4/5 sm:w-3/5 md:w-1/2 lg:w-1/3 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-500 ease-in-out pl-4 lg:pl-16`}>
          {menuItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                className={({ isActive }) => `hover:text-red-700 block w-fit py-2 md:py-3 lg:py-4 px-4 md:px-0 transition-colors duration-300 ${isActive ? 'text-red-700 font-bold' : ''}`}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* User Icon, Cart Icon, and Buttons */}
        <div className='flex'>
          <div className='flex items-center'>
            <div className='relative' ref={dropdownRef}>
              <Icon
                icon='lets-icons:user-light'
                className='h-6 w-6 md:h-7 md:w-7 mr-2 lg:mr-3 hover:text-[#DE0000] transition-colors duration-300 cursor-pointer'
                onClick={handleUserIconClick}
              />
              {isDropdownOpen && (
                <div className='absolute right-0 mt-2 w-48 bg-black bg-opacity-85 border border-gray-500 p-2 text-white rounded-lg shadow-lg transition-all duration-300'>
                  <button onClick={openBookingHistoryModal} className='flex items-center w-full text-left px-3 py-2 rounded-md hover:bg-stone-800 transition-colors duration-300'>
                    <Icon icon="mdi-light:cart" className="w-4 h-4 mr-3" />
                    Booking History
                  </button>
                  <button onClick={handleLogout} className='flex items-center w-full text-left px-3 py-2 rounded-md text-red-600 hover:bg-stone-800 transition-colors duration-300'>
                    <Icon icon="ic:round-logout" className="w-4 h-4 mr-3" />
                    Logout
                  </button>
                </div>
              )}
            </div>
            <Icon 
              icon='mdi-light:cart' 
              className='h-6 w-6 md:h-7 md:w-7 mr-2 lg:mr-3 hover:text-[#DE0000] transition-colors duration-300 cursor-pointer'
              onClick={handleCartIconClick}
            />
            <Button
              styleProp='hidden md:block pr-4 hover:text-[#DE0000] transition-colors duration-300'
              textProp='Book Now'
            />           
            {isLoggedIn ? (
              <Link to='/services' className='px-2 py-[7px] md:px-3 md:py-2 border rounded-lg lg:hidden border-gray-100 text-sm hover:text-red-700 transition-colors duration-300 hover:bg-white'>View Services</Link>
            ) : (
              <LoginSignupButton
                styleProp="px-2 py-[7px] md:px-3 md:py-2 hidden sm:block lg:hidden border-gray-400 text-sm hover:text-red-700 transition-colors duration-300 hover:bg-white"
                textProp="Sign In"
              />
            )}
          </div>

          <div className='hidden lg:flex items-center'>
            {isLoggedIn ? (
              <Link to='/services' className='px-3 py-2 border rounded-lg text-md font-semibold hover:text-red-700 transition-colors duration-300 hover:bg-white'>View Our Services</Link>
            ) : (
              <>
                <LoginSignupButton
                  styleProp="px-3 py-2 text-md mr-3 border-red-700 font-semibold hover:text-white transition-colors duration-300 hover:bg-red-700"
                  textProp="Sign In"
                />
                <LoginSignupButton
                  styleProp="px-3 py-2 text-md font-semibold hover:border-red-700 hover:bg-red-700 transition-colors duration-300"
                  textProp="Sign Up"
                />
              </>
            )}
          </div>

          <NavLink to="/" className="flex items-center ml-3">
            <img 
              src={require('../assets/auto-chef-logo.png')} 
              alt="logo" 
              className="w-16 h-10"
            />
          </NavLink>
        </div>
      </nav>

      {/* Modals */}
      <LoginSignupModal isOpen={modals.loginSignup} onClose={closeModal} />
      <BookingHistoryModal isOpen={modals.bookingHistory} onClose={closeBookingHistoryModal} />
    </header>
  );
};

export default Header;
