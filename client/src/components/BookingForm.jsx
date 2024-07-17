import React, { useState } from 'react';
import Modal from 'react-modal';

const BookingForm = ({ isSignedIn }) => {
  const [modalState, setModalState] = useState({ isOpen: false, isBookingConfirmed: false });
  const [formData, setFormData] = useState({
    fullName: '',
    contactNumber: '',
    service: '',
    serviceInfo: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleOpenModal = (e) => {
    e.preventDefault();
    setModalState({ ...modalState, isOpen: true });
  };

  const handleConfirmBooking = () => {
    setModalState({ isOpen: false, isBookingConfirmed: true });
  };

  const handleCloseModal = () => {
    setModalState({ ...modalState, isOpen: false });
  };

  const handleCloseConfirmationModal = () => {
    setModalState({ ...modalState, isBookingConfirmed: false });
  };

  const renderInputField = (label, type, name, placeholder) => (
    <div className="flex-1">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        type={type}
        name={name}
        value={formData[name]}
        onChange={handleInputChange}
        className="mt-1 block w-full border border-gray-300 p-3 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
        placeholder={placeholder}
      />
    </div>
  );

  const renderModal = (isOpen, onRequestClose, title, content, actions) => (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={title}
      className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto mt-20"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-20 flex justify-center items-center"
    >
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <p className="mb-5">{content}</p>
      <div className="flex justify-end space-x-4">{actions}</div>
    </Modal>
  );

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4">AutoService</h1>
      <form className="space-y-4">
        {renderInputField('Full Name', 'text', 'fullName', 'Your Name')}
        {renderInputField('Contact Number', 'text', 'contactNumber', 'Contact Number')}
        
        <div className="flex-1">
          <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="service">
            Service
          </label>
          <select
            name="service"
            value={formData.service}
            onChange={handleInputChange}
            className="appearance-none border border-gray-300 rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="service"
          >
            <option value="">--Select Service--</option>
            <option value="Automobile resprays">Automobile resprays</option>
            <option value="Auto Electrical">Auto Electrical</option>
            <option value="Car Detailing">Car Detailing</option>
            <option value="Paint Correction">Paint Correction</option>
            <option value="Body Works">Body Works</option>
            <option value="Auto Mechanic">Auto Mechanic</option>
          </select>
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-2">How can we help?</label>
          <textarea
            className="appearance-none border rounded-lg w-full p-3 border-gray-300 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="serviceInfo"
            value={formData.serviceInfo}
            onChange={handleInputChange}
            placeholder="Tell us a little about the request..."
            rows="4"
          ></textarea>
        </div>
        
        <button
          onClick={handleOpenModal}
          className="hover:bg-red-600 text-red-700 bg-white hover:text-white border border-red-300 px-5 py-2 rounded-lg w-full sm:w-auto"
        >
          Confirm Booking
        </button>
      </form>

      {renderModal(
        modalState.isOpen,
        handleCloseModal,
        'Confirm Your Booking',
        'Are you sure you want to confirm the booking?',
        <>
          <button
            onClick={handleConfirmBooking}
            className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700"
          >
            Yes, Confirm
          </button>
          <button
            onClick={handleCloseModal}
            className="bg-gray-300 py-2 px-4 rounded-lg hover:bg-gray-400"
          >
            Cancel
          </button>
        </>
      )}

      {renderModal(
        modalState.isBookingConfirmed,
        handleCloseConfirmationModal,
        'Booking Confirmed',
        'Your booking has been successfully confirmed. Thank you!',
        <button
          onClick={handleCloseConfirmationModal}
          className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700"
        >
          Close
        </button>
      )}
    </div>
  );
};

export default BookingForm;