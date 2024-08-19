// src/components/NewRequests.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StatusBadge from './StatusBadge';
import ArrowUpButton from './ArrowUpButton';
import InitialsAvatar from './InitialsAvatar';
import SkeletonLoader from './SkeletonLoader';

const NewRequests = () => {
  const [bookedServices, setBookedServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const placeholderData = [
        { id: 1, invoiceNumber: '#20025785644', customerName: 'John Doe', serviceName: 'Oil Change', date: '2024-07-25', status: 'Requested' },
        // Additional placeholder data...
      ];

      setBookedServices(placeholderData);
      setLoading(false);
    };

    fetchData();
  }, []);

  const requestedStatuses = bookedServices.filter(service => service.status === 'Requested').slice(-4);

  const handleArrowClick = () => {
    navigate('/admin/booked-services', { state: { filterStatus: 'Requested' } });
  };

  return (
    <div className="flex-1 bg-white p-4 border border-[#E8E9ED] rounded-lg">
      <div className="flex justify-between items-center mb-1">
        <h2 className="font-semibold text-lg">New Requests</h2>
        <ArrowUpButton onClick={handleArrowClick} />
      </div>
      {loading ? (
        <SkeletonLoader itemCount={4} layout="horizontal" type="list" />
      ) : (
        <ul>
          {requestedStatuses.map((request) => (
            <li key={request.id} className="flex items-center justify-between py-3 border-b">
              <div className="flex items-center space-x-3">
                <InitialsAvatar name={request.customerName} />
                <div className='pr-2'>
                  <p className="font-semibold">{request.customerName}</p>
                  <p className="text-sm text-gray-500 truncate">{request.serviceName}</p>
                </div>
              </div>
              <StatusBadge status={request.status} margin="mr-0" />
            </li>
          ))}
        </ul>
      )}

      
    </div>
  );
};

export default NewRequests;
