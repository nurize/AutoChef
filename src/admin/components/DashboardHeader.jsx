// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <div className="flex justify-between items-center py-4 px-6 bg-white my-6 border border-[#E8E9ED] rounded-lg">
      <div>
        <div className="text-xl font-semibold">Admin Central</div>
        <div className="text-gray-500">
            Monitor, manage, and maximize your auto shop's potential
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <img
            src="https://via.placeholder.com/40"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="text-sm font-semibold">David Anderson</p>
            <p className="text-xs text-gray-500">markatta@codealpha.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
