import { useState, useEffect } from 'react';
import { FaEnvelope } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';
import { MdOutlineVpnKey } from 'react-icons/md';
import { FaUser } from "react-icons/fa6";

const LoginSignupModal = ({ isOpen, onClose }) => {
  const [action, setAction] = useState('Sign In');
  const [email, setEmail] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    const handleClickOutside = (event) => {
      if (event.target.classList.contains('modal-overlay')) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black z-50 bg-opacity-50 flex justify-center items-center p-4 sm:p-6 md:p-8 modal-overlay">
      <div className="relative bg-white py-8 px-6 sm:px-10 md:px-14 lg:px-20 rounded-lg shadow-lg w-full sm:w-4/5 md:w-3/5 lg:w-2/5 2xl:w-1/3">
        <h2 className="text-2xl font-bold text-black mb-4 text-center">{action}</h2>
        <p className="text-center text-gray-500 mb-8">Please enter your details</p>
        <form>
          {action === 'Sign Up' && (
            <>
              <div className="mb-4">
                <label className="block text-gray-700">First Name</label>
                <div className="relative">
                  <FaUser className="absolute left-3 top-4 text-gray-400" />
                  <input
                    type="text"
                    className="w-full p-3 pl-10 border border-gray-300 rounded-lg text-black"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Last Name</label>
                <div className="relative">
                  <FaUser className="absolute left-3 top-4 text-gray-400" />
                  <input
                    type="text"
                    className="w-full p-3 pl-10 border border-gray-300 rounded-lg text-black"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                  />
                </div>
              </div>
            </>
          )}
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-4 text-gray-400" />
              <input
                type="email"
                className="w-full p-3 pl-10 border border-gray-300 rounded-lg text-black"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <div className="relative">
              <MdOutlineVpnKey className="absolute left-3 top-4 text-gray-400" />
              <input
                type="password"
                className="w-full p-3 pl-10 border border-gray-300 rounded-lg text-black"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {action === 'Sign In' && (
              <div className="text-right mt-2">
                <a href="#" className="text-red-600 text-sm">Forgot password</a>
              </div>
            )}
          </div>
          <button type="submit" className="bg-red-600 text-white w-full py-2 rounded-lg mb-6">{action}</button>
        </form>
        <div className="flex items-center mb-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-2 text-gray-500">Or continue with</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <div className="flex justify-center space-x-4 mb-6">
          <button className="bg-white border border-gray-300 p-2 rounded-full">
            <FcGoogle className="text-2xl" />
          </button>
          <button className="bg-white text-black border border-gray-300 p-2 rounded-full">
            <FaApple className="text-2xl" />
          </button>
        </div>
        <p className="text-center text-gray-500">
          {action === 'Sign In' ? "Don't" : 'Already'} have an account? 
          <button 
            onClick={() => setAction(action === 'Sign In' ? 'Sign Up' : 'Sign In')} 
            className="text-red-600 ml-1">
            {action === 'Sign In' ? 'Sign Up' : 'Sign In'}
          </button>
        </p>
        <button className="absolute top-5 right-5 text-black text-2xl" onClick={onClose}>
          &times;
        </button>
      </div>
    </div>
  );
};

export default LoginSignupModal;
