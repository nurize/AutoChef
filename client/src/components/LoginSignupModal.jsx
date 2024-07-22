import React, { useState, useEffect, useCallback, useReducer } from 'react';
import Modal from 'react-modal';
import { FaEnvelope, FaApple, FaUser } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { MdOutlineVpnKey } from 'react-icons/md';
import classNames from 'classnames';

// Initial state for form inputs
const initialState = {
  email: '',
  firstname: '',
  lastname: '',
  password: ''
};

// Reducer function to handle form state updates
function reducer(state, action) {
  switch (action.type) {
    case 'SET_EMAIL':
      return { ...state, email: action.payload };
    case 'SET_FIRSTNAME':
      return { ...state, firstname: action.payload };
    case 'SET_LASTNAME':
      return { ...state, lastname: action.payload };
    case 'SET_PASSWORD':
      return { ...state, password: action.payload };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

// Component for individual input fields with icons
const InputField = ({ label, type, icon: Icon, value, onChange }) => (
  <div className="mb-4">
    <label className="block text-gray-700">{label}</label>
    <div className="relative">
      <Icon className="absolute left-3 top-4 text-gray-400" />
      <input
        type={type}
        className="w-full p-3 pl-10 border border-gray-300 rounded-lg text-black"
        value={value}
        onChange={onChange}
      />
    </div>
  </div>
);

const LoginSignupModal = ({ isOpen, onClose }) => {
  const [action, setAction] = useState('Sign In'); // Current action (Sign In or Sign Up)
  const [state, dispatch] = useReducer(reducer, initialState); // Form state management

  // Handle keyboard events (Escape to close, Arrow keys for navigation)
  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === 'Escape') {
        onClose();
      } else if (event.key === 'ArrowLeft') {
        // Handle previous action if applicable
      } else if (event.key === 'ArrowRight') {
        // Handle next action if applicable
      }
    },
    [onClose]
  );

  // Set up and clean up keyboard event listeners
  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  // Handle form submission (currently does nothing)
  const handleSubmit = useCallback((event) => {
    event.preventDefault();
  }, []);

  // Toggle between Sign In and Sign Up forms
  const toggleAction = useCallback(() => {
    setAction((prevAction) => (prevAction === 'Sign In' ? 'Sign Up' : 'Sign In'));
    dispatch({ type: 'RESET' }); // Reset form fields on action change
  }, []);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4 sm:p-6 md:p-8"
      className={classNames(
        'relative bg-white py-8 px-6 sm:px-10 md:px-14 lg:px-20 rounded-lg shadow-lg w-full',
        action === 'Sign In' ? 'sm:w-4/5 md:w-3/5 lg:w-2/5 2xl:w-1/3' : 'max-w-xl'
      )}
    >
      <h2 className="text-2xl font-bold text-black mb-4 text-center">{action}</h2>
      <p className="text-center text-gray-500 mb-8">Please enter your details</p>
      <form onSubmit={handleSubmit}>
        {action === 'Sign Up' && (
          <>
            <InputField
              label="First Name"
              type="text"
              icon={FaUser}
              value={state.firstname}
              onChange={(e) => dispatch({ type: 'SET_FIRSTNAME', payload: e.target.value })}
            />
            <InputField
              label="Last Name"
              type="text"
              icon={FaUser}
              value={state.lastname}
              onChange={(e) => dispatch({ type: 'SET_LASTNAME', payload: e.target.value })}
            />
          </>
        )}
        <InputField
          label="Email"
          type="email"
          icon={FaEnvelope}
          value={state.email}
          onChange={(e) => dispatch({ type: 'SET_EMAIL', payload: e.target.value })}
        />
        <InputField
          label="Password"
          type="password"
          icon={MdOutlineVpnKey}
          value={state.password}
          onChange={(e) => dispatch({ type: 'SET_PASSWORD', payload: e.target.value })}
        />
        {action === 'Sign In' && (
          <div className="text-right mt-2">
            <a href="https://support.google.com/accounts/answer/41078?hl=en&co=GENIE.Platform%3DAndroid" className="text-red-600 text-sm">Forgot password</a>
          </div>
        )}
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
          onClick={toggleAction} 
          className="text-red-600 ml-1">
          {action === 'Sign In' ? 'Sign Up' : 'Sign In'}
        </button>
      </p>
      <button className="absolute top-5 right-5 text-black text-2xl" onClick={onClose}>
        &times;
      </button>
    </Modal>
  );
};

export default LoginSignupModal;
