import React from 'react';

const SupportCard = ({ title, value, change }) => {
  return (
    <div className="p-4 bg-gray-900 shadow-lg shadow-gray-800 hover:scale-105 border-[2px] border-gray-900 rounded-lg">
      <div className="text-xl font-bold text-white">{title}</div>
      <div className="text-2xl font-semibold text-white">{value}</div>
      <div className={`text-sm ${change > 0 ? 'text-green-500' : 'text-red-500 ' }`}>
        {change > 0 ? `+${change}%` : `${change}%`} from last month
      </div>
    </div>
  );
};

const SupportCards = () => {
  const cardsData = [
    { title: 'Total Tickets', value: 276, change: 10 },
    { title: 'Open Tickets', value: 6, change: 5 },
    { title: 'Resolved Tickets', value: 200, change: 15 },
    { title: 'Escalated Tickets', value: 70, change: -3 },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {cardsData.map((card, index) => (
        <SupportCard
          key={index}
          title={card.title}
          value={card.value}
          change={card.change}
        />
      ))}
    </div>
  );
};

export default SupportCards;
