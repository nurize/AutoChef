import React from 'react';
import { Icon } from '@iconify/react';

const HeaderSection = () => (
  <div className="flex flex-col md:flex-row justify-between items-center">
    {/* Tabs Section */}
    <div className="flex space-x-4 border-b-2 border-gray-200 mb-4 md:mb-0">
      <p className="text-[#DE0000] border-b-2 border-[#DE0000] pb-1">
        All Invoice
      </p>
      <p className="text-gray-500 pb-1">Draft</p>
    </div>

    {/* Button Section */}
    <button className="flex items-center border-2 border-red-400 text-[#DE0000] hover:bg-[#DE0000] hover:text-white py-2 px-3 rounded-lg w-full md:w-auto">
      <Icon icon="pajamas:export" className="mr-2 w-5 h-5" />
      <span className='flex-1'>Export as</span>
      <Icon icon="mingcute:down-line" className="ml-2 w-4 h-4" />
    </button>
  </div>
);

export default HeaderSection;
