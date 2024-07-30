import React from 'react';
import BookedServiceRow from './BookedServiceRow';

const BookedServicesTable = ({ bookedServices }) => {
  const renderTableRows = () =>
    bookedServices.map((service) => <BookedServiceRow key={service.id} service={service} />);

  return (
    <div className="bg-white pt-4 overflow-x-auto">
      <table className="min-w-full bg-white table-auto">
        <thead>
          <tr>
            {/* Invoice Number */}
            <th className="hidden xl:table-cell bg-[#F5F6F8] py-2 px-2 md:px-4 font-semibold text-center rounded-tl-xl whitespace-nowrap">
              Invoice Number
            </th>

            {/* Customer Name */}
            <th className="bg-[#F5F6F8] py-2 px-2 md:px-4 font-semibold text-left rounded-tl-xl xl:rounded-tl-none">
              Customer Name
            </th>

            {/* Service */}
            <th className="hidden md:table-cell bg-[#F5F6F8] py-2 px-2 md:px-4 font-semibold text-left">
              Service
            </th>

            {/* Date */}
            <th className="hidden md:table-cell bg-[#F5F6F8] py-2 px-2 md:px-4 font-semibold text-left">
              Date
            </th>

            {/* Status */}
            <th className="bg-[#F5F6F8] py-2 px-2 md:px-4 font-semibold md:text-left">
              Status
            </th>

            {/* Actions */}
            <th className="bg-[#F5F6F8] py-2 px-2 md:px-4 font-semibold text-center rounded-tr-xl">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>{renderTableRows()}</tbody>
      </table>
    </div>
  );
};

export default BookedServicesTable;
