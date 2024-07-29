import React from 'react';
import { Icon } from '@iconify/react';

const FilterSection = () => (
  <div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-center mb-6">
      <select className="p-2 bg-white border border-[#E8E9ED] rounded-lg text-[#6E7786] w-full">
        <option>All Customers</option>
      </select>
      <select className="p-2 bg-white border border-[#E8E9ED] rounded-lg text-[#6E7786] w-full">
        <option>All Status</option>
      </select>
      <select className="p-2 bg-white border border-[#E8E9ED] rounded-lg text-[#6E7786] w-full">
        <option>All Services</option>
      </select>
      <input
        type="date"
        className="p-2 bg-white border border-[#E8E9ED] rounded-lg text-[#6E7786] w-full"
      />
    </div>
  </div>
);

export default FilterSection;
