import { Icon } from '@iconify/react';
import React from 'react';
import { useLocation } from 'react-router-dom';

// Statistics card component
const StatisticCard = ({ iconBgColor, iconColor, count, title, arrowUpBgColor, isDashboard, bgColor }) => (
  <div className={`bg-white ${bgColor} p-4 border border-[#E8E9ED] rounded-lg group`}>
    {isDashboard && (
      <div className={`p-3 ${iconBgColor} w-fit mb-20 rounded-md group-hover:scale-110 transition-transform duration-300`}>
        <Icon icon='gridicons:multiple-users' className={`h-6 w-6 ${iconColor}`} />
      </div>
    )}
    <div className="flex justify-between">
      <div>
        <p className="text-lg md:text-xl font-semibold group-hover:text-white">{count}</p>
        <h2 className="text-[#6E7379] group-hover:text-white">{title}</h2>
      </div>
      {isDashboard && (
        <div className={`p-2 ${arrowUpBgColor} h-fit rounded-full self-end group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300`}>
          <Icon icon="tabler:arrow-up-right" className="text-white h-6 w-6" />
        </div>
      )}
    </div>
  </div>
);

const StatisticsSection = () => {
  const location = useLocation();
  const isDashboard = location.pathname === '/admin';

  // Data array for statistics
  const statisticsData = [
    {
      iconBgColor: 'bg-[#CEE0FF]',
      iconColor: 'text-[#0866FF]',
      count: '972',
      title: 'Total Invoice',
      arrowUpBgColor: 'bg-[#3c87ff]',
      bgColor: 'hover:bg-gradient-to-t hover:from-[#0866ff] hover:to-[#74a9ff]',
    },
    {
      iconBgColor: 'bg-[#CEF3DC]',
      iconColor: 'text-[#08C352]',
      count: '384',
      title: 'Completed',
      arrowUpBgColor: 'bg-[#10D087]',
      bgColor: 'hover:bg-gradient-to-t hover:from-[#08C352] hover:to-[#15C584]',
    },
    {
      iconBgColor: 'bg-[#FFEBCC]',
      iconColor: 'text-[#FF9900]',
      count: '347',
      title: 'Pending',
      arrowUpBgColor: 'bg-[#fbb751]',
      bgColor: 'hover:bg-gradient-to-t hover:from-[#FF9900] hover:to-[#fad090]',
    },
    {
      iconBgColor: 'bg-[#FFE5E5]',
      iconColor: 'text-[#DE0000]',
      count: '798',
      title: 'Canceled',
      arrowUpBgColor: 'bg-[#fd3c3c]',
      bgColor: 'hover:bg-gradient-to-t hover:from-[#DE0000] hover:to-[#f55d5d]',
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 mb-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {statisticsData.map((stat, index) => (
        <StatisticCard key={index} {...stat} isDashboard={isDashboard} />
      ))}
    </div>
  );
};

export default StatisticsSection;
