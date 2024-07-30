import React from "react";

const Card = ({ title, value, change }) => {
  return (
    <div className="p-4 bg-gray-800 shadow-lg shadow-gray-700 hover:scale-105 border-[2px] border-gray-800 rounded-lg">
      <div className="text-xl font-bold text-white">{title}</div>
      <div className="text-2xl font-semibold text-white mt-2">{value}</div>
    </div>
  );
};

const AverageCard = () => {
  const cardsData = [
    // { title: "Total Number Of Chats", value: 276 },
    // { title: "User Feedbacks", value: 6.5 },
    // { title: "Number Of Email Bot", value: 200 },
    // { title: "Escalated Tickets", value: 7.7 },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* 1 */}
      <div className="p-4 bg-gray-800 shadow-lg shadow-gray-700 hover:scale-105 border-[2px] border-gray-800 rounded-lg">
        <div className="text-xl font-bold text-white">
          Total Number Of Chats
        </div>
        <div className="text-2xl font-semibold text-white mt-2">276</div>
        <div className="mt-2">
          <div className={"w-full flex gap-3 text-sm text-green-500"}>
            <p className="w-[10%]">89</p>
            <p>Completed</p>
          </div>
          <div className={"w-full flex gap-3 text-sm text-yellow-500"}>
            <p className="w-[10%]">70</p>
            <p>Pending</p>
          </div>
          <div className={"w-full flex gap-3 text-sm text-orange-500"}>
            <p className="w-[10%]">170</p>
            <p>In Progress</p>
          </div>
        </div>
      </div>

      {/* 2 */}
      <div className="p-4 bg-gray-800 shadow-lg shadow-gray-700 hover:scale-105 border-[2px] border-gray-800 rounded-lg">
        <div className="text-xl font-bold text-white">Feedback Score</div>
        <div className="text-2xl font-semibold text-white mt-2">6.5</div>
        <div className="mt-2">
          <div className={"w-full flex gap-3 text-sm text-green-500"}>
            <p className="w-[10%]">19</p>
            <p>Good</p>
          </div>
          <div className={"w-full flex gap-3 text-sm text-yellow-500"}>
            <p className="w-[10%]">70</p>
            <p>Average</p>
          </div>
          <div className={"w-full flex gap-3 text-sm text-orange-500"}>
            <p className="w-[10%]">170</p>
            <p>Bad</p>
          </div>
        </div>
      </div>

      {/* 3 */}
      <div className="p-4 bg-gray-800 shadow-lg shadow-gray-700 hover:scale-105 border-[2px] border-gray-800 rounded-lg">
        <div className="text-xl font-bold text-white">Number Of Workflows</div>
        <div className="text-2xl font-semibold text-white mt-2">200</div>
        <div className="mt-2">
          <div className={"w-full flex gap-3 text-sm text-green-500"}>
            <p className="w-[10%]">1</p>
            <p>Support</p>
          </div>
          <div className={"w-full flex gap-3 text-sm text-yellow-500"}>
            <p className="w-[10%]">2</p>
            <p>Audit</p>
          </div>
        </div>
      </div>

      {/* 4 */}
      <div className="p-4 bg-gray-800 shadow-lg shadow-gray-700 hover:scale-105 border-[2px] border-gray-800 rounded-lg">
        <div className="text-xl font-bold text-white">Escalated Tickets</div>
        <div className="text-2xl font-semibold text-white mt-2">7.7</div>
        <div className="mt-2">
          <div className={"w-full flex gap-3 text-sm text-green-500"}>
            <p className="w-[10%]">9.0</p>
            <p>Good</p>
          </div>
          <div className={"w-full flex gap-3 text-sm text-yellow-500"}>
            <p className="w-[10%]">7.7</p>
            <p>Average</p>
          </div>
          <div className={"w-full flex gap-3 text-sm text-orange-500"}>
            <p className="w-[10%]">3.0</p>
            <p>Bad</p>
          </div>
        </div>
      </div>
      {cardsData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          value={card.value}
          change={card.change}
        />
      ))}
    </div>
  );
};

export default AverageCard;
