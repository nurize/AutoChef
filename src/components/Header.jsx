import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Button from './BookButton';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact Us' },
  ];

  return (
    <header className="bg-black text-white p-2 fixed top-0 left-0 right-0 z-30">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold flex items-center">
          <NavLink to='/' className='flex items-center'>
            <img src={require('../assets/auto-chef-logo.png')} alt='logo' className='ml-4 mr-2 w-10 h-10'/>
            Auto<span className='text-red-700'>Chef</span>
          </NavLink>
        </div>
        <div className="md:hidden">
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
        <ul className={`md:flex md:flex-row md:space-x-4 gap-4 ${isOpen ? 'block' : 'hidden'} md:block absolute md:relative top-full left-0 w-full md:w-auto bg-black md:bg-transparent`}>
          {menuItems.map((item, index) => (
            <li key={index} className="md:border-none">
              <NavLink 
                to={item.path} 
                className={({ isActive }) => `nav-link block md:inline py-2 md:py-0 px-4 md:px-0 ${isActive ? 'text-red-700 font-bold' : ''}`}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
          {isOpen && (
            <li className="md:hidden">
              <Button styleProp="w-full bg-red-600 px-6 py-3 text-lg font-semibold hover:bg-red-700 transition duration-300 mt-4 md:mt-0" textProp="Book Now" />
            </li>
          )}
        </ul>
        <div className="hidden md:block">
          <Button styleProp="bg-red-600 px-6 py-3 text-lg font-semibold rounded hover:bg-red-700 transition duration-300" textProp="Book Now" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
