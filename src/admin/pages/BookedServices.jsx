import React, { useEffect, useState } from 'react';

const BookedServices = () => {
  const [bookedServices, setBookedServices] = useState([]);

  useEffect(() => {
    fetch('/api/booked-services')
      .then(response => response.json())
      .then(data => setBookedServices(data))
      .catch(error => console.error('Error fetching booked services:', error));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Booked Services</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Service</th>
            <th className="py-2">Customer</th>
            <th className="py-2">Date</th>
            <th className="py-2">Progress</th>
          </tr>
        </thead>
        <tbody>
          {bookedServices.map(service => (
            <tr key={service.id}>
              <td className="py-2 px-4">{service.serviceName}</td>
              <td className="py-2 px-4">{service.customerName}</td>
              <td className="py-2 px-4">{service.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookedServices;
