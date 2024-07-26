import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white p-4">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
      <nav>
        <ul>
          <li>
            <NavLink to="/admin" end className="block py-2 px-4 hover:bg-gray-700">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/admin/booked-services" className="block py-2 px-4 hover:bg-gray-700">Booked Services</NavLink>
          </li>
          <li>
            <NavLink to="/admin/gallery" className="block py-2 px-4 hover:bg-gray-700">Gallery</NavLink>
          </li>
          <li>
            <NavLink to="/admin/services" className="block py-2 px-4 hover:bg-gray-700">Services</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
