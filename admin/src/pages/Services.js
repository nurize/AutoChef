import React, { useState, useEffect } from 'react';

const Services = () => {
  const [services, setServices] = useState([]);
  const [newService, setNewService] = useState({ name: '', description: '', price: '' });

  useEffect(() => {
    fetch('/api/services')
      .then(response => response.json())
      .then(data => setServices(data))
      .catch(error => console.error('Error fetching services:', error));
  }, []);

  const handleAddService = () => {
    fetch('/api/add-service', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newService),
    })
      .then(response => response.json())
      .then(data => {
        setServices([...services, data]);
        setNewService({ name: '', description: '', price: '' });
      })
      .catch(error => console.error('Error adding service:', error));
  };

  const handleDeleteService = (id) => {
    fetch(`/api/delete-service/${id}`, { method: 'DELETE' })
      .then(() => {
        setServices(services.filter(service => service.id !== id));
      })
      .catch(error => console.error('Error deleting service:', error));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Services</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Name"
          value={newService.name}
          onChange={(e) => setNewService({ ...newService, name: e.target.value })}
          className="border p-2"
        />
        <input
          type="text"
          placeholder="Description"
          value={newService.description}
          onChange={(e) => setNewService({ ...newService, description: e.target.value })}
          className="border p-2 ml-2"
        />
        <input
          type="number"
          placeholder="Price"
          value={newService.price}
          onChange={(e) => setNewService({ ...newService, price: e.target.value })}
          className="border p-2 ml-2"
        />
        <button onClick={handleAddService} className="bg-blue-500 text-white p-2 ml-2">Add Service</button>
      </div>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Name</th>
            <th className="py-2">Description</th>
            <th className="py-2">Price</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {services.map(service => (
            <tr key={service.id}>
              <td className="py-2 px-4">{service.name}</td>
              <td className="py-2 px-4">{service.description}</td>
              <td className="py-2 px-4">{service.price}</td>
              <td className="py-2 px-4">
                <button onClick={() => handleDeleteService(service.id)} className="bg-red-500 text-white p-1">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Services;
