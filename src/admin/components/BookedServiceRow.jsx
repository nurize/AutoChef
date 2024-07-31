import React, { useState, useMemo } from 'react';
import StatusBadge from './StatusBadge';
import { Icon } from '@iconify/react';
import { useLocation } from 'react-router-dom';

const BookedServiceRow = ({ service }) => {
  const [currentStatus, setCurrentStatus] = useState(service.status || 'Requested');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const location = useLocation();
  const isDashboard = location.pathname === '/admin';

  const toggleDropdown = () => {
    setIsDropdownOpen(prevState => !prevState);
  };

  const handleActionClick = (action) => {
    setCurrentStatus(action);
    setIsDropdownOpen(false);
    console.log(`Action selected: ${action}`);
  };

  const actions = useMemo(() => {
    switch (currentStatus.toLowerCase()) {
      case 'requested':
        return [
          { label: 'Accept', action: 'Pending' },
        ];
      case 'pending':
        return [
          { label: 'Cancel', action: 'Cancelled' },
          { label: 'Complete', action: 'Completed' },
        ];
      default:
        return [];
    }
  }, [currentStatus]);

  return (
    <tr className="border-t hover:bg-gray-50 relative">
      {isDashboard ? ('') : (
        <td className="hidden xl:table-cell py-2 px-2 md:px-4 text-[#DE0000] text-center whitespace-nowrap">
          {service.invoiceNumber}
        </td>
      )}
      <td className="flex flex-col md:table-cell py-2 px-2 md:px-4 text-sm md:text-base text-gray-700">
        <span>{service.customerName}</span>
        <span className="text-gray-400 md:hidden mt-1">{service.serviceName}</span>
      </td>
      <td className="hidden md:table-cell py-2 px-2 md:px-4 text-sm md:text-base text-gray-700">
        {service.serviceName}
      </td>
      <td className="hidden md:table-cell py-2 px-2 md:px-4 text-[#6E7786] whitespace-nowrap">
        {service.date}
      </td>
      <td className="py-2 px-2 md:px-4">
        <StatusBadge status={currentStatus} />
      </td>
      {isDashboard ? ('') : (
        <td className="py-2 px-2 md:px-4 text-center relative">
          {actions.length > 0 ? (
            <>
              <button className="inline-flex items-center justify-center focus:outline-none" onClick={toggleDropdown}>
                <Icon icon="solar:menu-dots-bold" className="w-5 h-5" />
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 -mt-1 w-40 bg-white border border-gray-200 rounded shadow-lg z-10">
                  <ul className="py-1">
                    {actions.map(({ label, action }) => (
                      <li key={action}>
                        <button
                          className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => handleActionClick(action)}
                        >
                          {label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </>
          ) : (
            <div className="inline-flex items-center justify-center text-gray-400">
              <Icon icon="solar:menu-dots-bold" className="w-5 h-5" />
            </div>
          )}
        </td>
      )}
    </tr>
  );
};

export default BookedServiceRow;