import React from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';

const Pagination = ({ currentPage, totalPages, onPageChange }) => (
  <div className="flex justify-center items-center my-6">
    <button
      className={`px-[5px] py-[5px] mx-[2px] md:mx-1 ${currentPage === 1 ? 'text-[#C4C4C4]' : 'text-gray-500'} border border-[#C4C4C4] bg-gray-100 rounded-lg`}
      onClick={() => onPageChange(currentPage - 1)}
      disabled={currentPage === 1}
    >
      <Icon icon="mingcute:left-line" className='h-6 w-6'/>
    </button>
    {Array.from({ length: totalPages }, (_, i) => (
      <button
        key={i}
        className={`px-[12px] py-[4px] mx-[2px] md:mx-1 ${i + 1 === currentPage ? 'text-black border-gray-500 border2' : 'text-[#C4C4C4] border-[#C4C4C4]'} border bg-gray100 rounded-lg`}
        onClick={() => onPageChange(i + 1)}
      >
        {i + 1}
      </button>
    ))}
    <button
      className={`px-[5px] py-[5px] mx-[2px] md:mx-1 ${currentPage === totalPages ? 'text-[#C4C4C4]' : 'text-gray-500'} border border-[#C4C4C4] bg-gray-100 rounded-lg`}
      onClick={() => onPageChange(currentPage + 1)}
      disabled={currentPage === totalPages}
    >
      <Icon icon="mingcute:right-line" className='h-6 w-6' />
    </button>
  </div>
);

export default Pagination;
