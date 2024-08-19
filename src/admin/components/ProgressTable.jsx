import React, { useEffect, useState } from 'react';
import BookedServicesTable from './BookedServicesTable';
import { useNavigate } from 'react-router-dom';
import ArrowUpButton from './ArrowUpButton';
import SkeletonLoader from './SkeletonLoader';

const ProgressTable = () => {
  const [bookedServices, setBookedServices] = useState([]); // State to store fetched services
  const [visibleServices, setVisibleServices] = useState([]); // State to manage visible rows in the table
  const [rowsToShow, setRowsToShow] = useState(0); // State to calculate rows to show based on screen size
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [error, setError] = useState(null); // State to handle potential errors
  const navigate = useNavigate(); // Hook for programmatic navigation

  useEffect(() => {
    // Fetch data from API
    const fetchBookedServices = async () => {
      try {
        const response = await fetch('https://api.example.com/booked-services'); // Replace with your actual API endpoint
        if (!response.ok) {
          throw new Error('Failed to fetch booked services');
        }
        const data = await response.json();
        setBookedServices(data);
      } catch (err) {
        setError(err.message || 'Failed to fetch data');
      } finally {
        setLoading(false); // Stop loading state once the data is fetched
      }
    };

    fetchBookedServices();
  }, []);

  useEffect(() => {
    const calculateRowsToShow = () => {
      const availableHeight = window.innerHeight - 1000; // Adjust based on your layout (header, margins, etc.)
      const rowHeight = 50; // Approximate row height (adjust based on your table's row height)
      const rows = Math.floor(availableHeight / rowHeight);
      setRowsToShow(rows);
    };

    calculateRowsToShow();
    window.addEventListener('resize', calculateRowsToShow);

    return () => window.removeEventListener('resize', calculateRowsToShow);
  }, []);

  useEffect(() => {
    setVisibleServices(bookedServices.slice(0, rowsToShow)); // Update visible services based on rows to show
  }, [bookedServices, rowsToShow]);

  const handleArrowClick = () => {
    navigate('/admin/booked-services');
  };

  return (
    <div className="flex-1 bg-white rounded-lg py-3">
      <div className="flex justify-between mx-4 items-center">
        <h2 className="font-semibold text-lg">Progress Statistics</h2>

        <div className="flex items-center gap-3">
          <div>
            <input type="date" className="text-[#6E7786] border border-[#E8E9ED] rounded-full px-4 py-2" />
          </div>
          <ArrowUpButton onClick={handleArrowClick} />
        </div>
      </div>
      {loading ? (
        <SkeletonLoader itemCount={5} layout="horizontal" type="table" />
      ) : (
        <BookedServicesTable bookedServices={visibleServices} />
      )}
    </div>
  );
};

export default ProgressTable;
