import React from 'react';

const SkeletonLoader = ({ itemCount = 4, layout = 'horizontal', type }) => {
  const itemClassNames = {
    table: 'flex justify-between items-center py-3 border-b px-4',
    list: 'flex items-center justify-between py-3 border-b',
    gallery: 'flex items-center justify-between py-3 border-b',
  };

  return (
    <div className="animate-pulse">
      {[...Array(itemCount)].map((_, index) => (
        <div key={index} className={itemClassNames[type]}>
          <div className="flex items-center space-x-3">
            {type === 'table' && (
              <>
                <div className="h-4 bg-gray-300 rounded w-16"></div>
                <div className="h-4 bg-gray-300 rounded w-16"></div>
              </>
            )}
            {type === 'list' && (
              <>
                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                <div className="h-4 bg-gray-300 rounded w-32"></div>
              </>
            )}
            {type === 'gallery' && (
              <>
                <div className="w-10 h-10 bg-gray-300 rounded-md"></div>
                <div className="h-4 bg-gray-300 rounded w-24"></div>
              </>
            )}
          </div>
          {layout === 'horizontal' && type === 'table' && (
            <>
              <div className="h-4 bg-gray-300 rounded w-32"></div>
              <div className="h-4 bg-gray-300 rounded w-32"></div>
            </>
          )}
          {layout === 'horizontal' && type === 'list' && (
            <div className="h-4 bg-gray-300 rounded w-20"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SkeletonLoader;
