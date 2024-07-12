// src/components/BookingForm.js
import React from 'react';
import { useService } from '../context/ServiceContext';

const BookingForm = () => {
  const { selectedService } = useService();

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4">AutoService</h1>
      <div className="flex justify-between items-center mb-6">
        <div className="flex-1 text-center">
          <div className="w-8 h-8 bg-green-500 text-white rounded-full inline-flex items-center justify-center">1</div>
          <p className="mt-2">Search</p>
        </div>
        <div className="flex-1 text-center">
          <div className="w-8 h-8 bg-green-500 text-white rounded-full inline-flex items-center justify-center">2</div>
          <p className="mt-2">Select Date & Time</p>
        </div>
        <div className="flex-1 text-center">
          <div className="w-8 h-8 bg-green-500 text-white rounded-full inline-flex items-center justify-center">3</div>
          <p className="mt-2">Choose</p>
        </div>
        <div className="flex-1 text-center">
          <div className="w-8 h-8 bg-green-500 text-white rounded-full inline-flex items-center justify-center">4</div>
          <p className="mt-2">Enter Contact</p>
        </div>
        <div className="flex-1 text-center">
          <div className="w-8 h-8 bg-gray-300 text-white rounded-full inline-flex items-center justify-center">5</div>
          <p className="mt-2">Confirm</p>
        </div>
        <div className="flex-1 text-center">
          <div className="w-8 h-8 bg-gray-300 text-white rounded-full inline-flex items-center justify-center">6</div>
          <p className="mt-2">Make</p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Respray Service</h2>
      <form className="space-y-4">
        <div className="flex space-x-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm" placeholder="Your Name"/>
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">Contact Number</label>
            <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm" placeholder="Contact Number"/>
          </div>
        </div>
        <div className="flex space-x-4">
          <div className="flex-1 mb-4 md:mb-0">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="service">
              Service
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="service"
              value={selectedService || '--Select Service--'}
            >
              <option>--Select Service--</option>
              <option>Automobile resprays</option>
              <option>Auto Electrical</option>
              <option>Car Detailing</option>
              <option>Paint Correction</option>
              <option>Body Works</option>
              <option>Auto Mechanic</option>
            </select>
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">Preferred Date & Time</label>
            <input type="date" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"/>
          </div>
        </div>
        <div className="flex space-x-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">Preferred Service Date</label>
            <input type="date" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"/>
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">Preferred Service Time</label>
            <select className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm">
              <option>Morning</option>
              <option>Afternoon</option>
              <option>Evening</option>
            </select>
          </div>
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">Receive Booking Confirmation</label>
          <div className="mt-2 space-x-4">
            <label className="inline-flex items-center">
              <input type="radio" className="form-radio" name="confirmation" value="yes" />
              <span className="ml-2">Yes, add to calendar</span>
            </label>
            <label className="inline-flex items-center">
              <input type="radio" className="form-radio" name="confirmation" value="no" />
              <span className="ml-2">No, thanks</span>
            </label>
          </div>
        </div>
        <button className='hover:bg-red-600 text-red-600 hover:text-white border border-red-300 px-5 py-2 rounded-lg'>confirm Booking</button>
      </form>
    </div>
  );
}

export default BookingForm;
