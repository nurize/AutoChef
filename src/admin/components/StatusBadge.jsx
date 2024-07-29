import React from 'react';

const StatusBadge = ({ status }) => {
  const statusClasses = {
    Pending: {
      bg: 'bg-[#FFEBCC]',
      text: 'text-[#FF9900]'
    },
    Completed: {
      bg: 'bg-[#DAF6E5]',
      text: 'text-[#08C352]'
    },
    Cancelled: {
      bg: 'bg-[#FFE5E5]',
      text: 'text-[#DE0000]'
    },
    Requested: {
      bg: 'bg-gray-200', 
      text: 'text-gray-700' 
    }
  };

  const { bg, text } = statusClasses[status];

  return (
    <div className={`px-2 md:px-3 py-1 md:py-1.5 rounded text-center ${bg} ${text} w-auto md:w-24 text-sm md:text-base font-medium`}>
      {status}
    </div>
  );
};

export default StatusBadge;
