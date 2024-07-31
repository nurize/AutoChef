import React, { useEffect, useState } from 'react';
import FilterSection from '../components/FilterSection';
import StatisticsSection from '../components/StatisticsSection';
import HeaderSection from '../components/HeaderSection';
import PageHeader from '../components/PageHeader';
import Pagination from '../../client/components/Pagination';
import BookedServicesTable from '../components/BookedServicesTable';

const BookedServices = () => {
  const [bookedServices, setBookedServices] = useState([]);
  const [filteredServices, setFilteredServices] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [filters, setFilters] = useState({
    customerName: '',
    status: '',
    serviceName: '',
    date: ''
  });

  useEffect(() => {
    fetch('/api/booked-services')
      .then((response) => response.json())
      .then((data) => {
        setBookedServices(data);
        setFilteredServices(data);
      })
      .catch((error) => console.error('Error fetching booked services:', error));
  }, []);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth >= 3840) {
        setItemsPerPage(15);
      } else if (window.innerWidth >= 3160) {
        setItemsPerPage(12);
      } else if (window.innerWidth >= 2560) {
        setItemsPerPage(10);
      } else if (window.innerWidth >= 2000) {
        setItemsPerPage(7);
      } else if (window.innerWidth >= 1536) {
        setItemsPerPage(6);
      } else {
        setItemsPerPage(5);
      }
    };

    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  const handlePageChange = (page) => {
    if (page > 0 && page <= Math.ceil(filteredServices.length / itemsPerPage)) {
      setCurrentPage(page);
    }
  };

  const handleFilterChange = (name, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
    setCurrentPage(1);
  };

  useEffect(() => {
    const filtered = bookedServices.filter((service) => {
      const { customerName, status, serviceName, date } = filters;
      return (
        (customerName === '' || service.customerName.includes(customerName)) &&
        (status === '' || service.status === status) &&
        (serviceName === '' || service.serviceName.includes(serviceName)) &&
        (date === '' || service.date === date)
      );
    });
    setFilteredServices(filtered);
  }, [filters, bookedServices]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedServices = filteredServices.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(filteredServices.length / itemsPerPage);

  return (
    <div className="flex flex-col min-h-screen mx-4 sm:mx-8 lg:mx-16 mt-4">
      <div className="flex-grow">
        <PageHeader />
        <StatisticsSection />
        <div className="bg-white py-4 px-4 sm:px-6 lg:px-8">
          <FilterSection onFilterChange={handleFilterChange} />
          <HeaderSection />
          <BookedServicesTable bookedServices={paginatedServices} />
        </div>
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default BookedServices;
