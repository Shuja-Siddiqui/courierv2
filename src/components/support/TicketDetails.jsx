import React from "react";

const TicketDetails = () => {
  const colors = [
    "text-green-500",
    "text-yellow-500",
    "text-orange-500",
    "text-cyan-500",
  ];
  return (
    <div className="flex flex-col gap-4 text-sm border border-gray-500 p-8">
      <div className="flex justify-between">
        <span
          className={colors[0 % colors.length]}
          style={{ fontWeight: "bold" }}
        >
          ID
        </span>
        <span>#47372006</span>
      </div>
      <div className="flex justify-between">
        <span className={colors[1 % colors.length]}>Status</span>
        <span>Solved</span>
      </div>
      <div className="flex justify-between">
        <span className={colors[2 % colors.length]}>Created</span>
        <span>May 31, 2024 22:45</span>
      </div>
      <div className="flex justify-between">
        <span className={colors[3 % colors.length]}>Last Activity</span>
        <span>June 23, 2024 00:02</span>
      </div>
    </div>
  );
};

export default TicketDetails;
