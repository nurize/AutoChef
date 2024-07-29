import React from 'react';
import StatusBadge from './StatusBadge';
import { Icon } from '@iconify/react';

const BookedServiceRow = ({ service }) => (
  <tr key={service.id} className="border-t hover:bg-gray-50">
    {/* Invoice Number */}
    <td className="hidden xl:table-cell py-2 px-2 md:px-4 text-[#DE0000] text-center whitespace-nowrap">
      {service.invoiceNumber}
    </td>

    {/* Customer Name and Service Name (Responsive Stacking) */}
    <td className="flex flex-col md:table-cell py-2 px-2 md:px-4 text-sm md:text-base text-gray-700">
      <span>{service.customerName}</span>
      <span className="text-gray-400 md:hidden mt-1">{service.serviceName}</span> {/* Hide service name on larger screens */}
    </td>

    {/* Service Name for Larger Screens */}
    <td className="hidden md:table-cell py-2 px-2 md:px-4 text-sm md:text-base text-gray-700">{service.serviceName}</td>

    {/* Date */}
    <td className="hidden md:table-cell py-2 px-2 md:px-4 text-[#6E7786] whitespace-nowrap">
      {service.date}
    </td>

    {/* Status */}
    <td className="py-2 px-2 md:px-4">
      <StatusBadge status={service.status} />
    </td>

    {/* Actions */}
    <td className="py-2 px-2 md:px-4 text-center">
      <button className="inline-flex items-center justify-center">
        <Icon icon="solar:menu-dots-bold" className="w-5 h-5" />
      </button>
    </td>
  </tr>
);

export default BookedServiceRow;
