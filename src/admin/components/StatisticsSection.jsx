import React from 'react';

const StatisticsSection = () => (
  <div className="grid grid-cols-1 gap-5 mb-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    <div className="bg-white p-4 border border-[#E8E9ED] rounded-xl">
      <p className="text-lg md:text-xl font-semibold">972</p>
      <h2 className="text-[#6E7379]">Total Invoice</h2>
    </div>
    <div className="bg-white p-4 border border-[#E8E9ED] rounded-xl">
      <p className="text-lg md:text-xl font-semibold">384</p>
      <h2 className="text-[#6E7379]">Completed</h2>
    </div>
    <div className="bg-white p-4 border border-[#E8E9ED] rounded-xl">
      <p className="text-lg md:text-xl font-semibold">347</p>
      <h2 className="text-[#6E7379]">Pending</h2>
    </div>
    <div className="bg-white p-4 border border-[#E8E9ED] rounded-xl">
      <p className="text-lg md:text-xl font-semibold">798</p>
      <h2 className="text-[#6E7379]">Canceled</h2>
    </div>
  </div>
);

export default StatisticsSection;
