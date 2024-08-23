import React, { useState, useEffect } from 'react';

const RatingPopup = ({ isOpen, onClose, onSubmit }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  useEffect(() => {
    setIsSubmitDisabled(rating === 0 || comment.trim() === '');
  }, [rating, comment]);

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleSubmit = async () => {
    const payload = { rating, comment };

    try {
      const response = await fetch('https://your-api-endpoint.com/rating', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Failed to submit rating');
      }

      const data = await response.json();
      console.log('Rating submitted successfully:', data);

      onSubmit(payload);

    } catch (error) {
      console.error('Error submitting rating:', error);
    } finally {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-0 right-0 m-4 border bg-white dark:bg-stone-800 borde-2 border-stone-300 dark:border-stone-500 p-8 rounded-lg shadow-lg w-96 z-50">
      <h2 className="text-xl font-semibold text-center text-gray-800 dark:text-white">Rate Our Service</h2>
      
      <div className="flex justify-center mt-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => handleRatingChange(star)}
            className={`text-3xl ${star <= rating ? 'text-yellow-400' : 'text-gray-400'}`}
          >
            &#9733;
          </button>
        ))}
      </div>
      
      <textarea
        className="w-full mt-4 p-2 rounded text-gray-700 border border-gray-300 dark:border-stone-500 dark:bg-stone-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-gray-400"
        placeholder="Leave a comment..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      <div className="mt-6 flex justify-between">
        <button
          onClick={onClose}
          className="px-4 py-2 bg-gray-300 dark:bg-stone-600 text-gray-700 dark:text-white rounded hover:bg-stone-400"
        >
          Not Now
        </button>
        <button
          onClick={handleSubmit}
          className={`px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transitin duration-300 ${isSubmitDisabled && 'cursor-not-allowed'}`}
          disabled={isSubmitDisabled}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default RatingPopup;
