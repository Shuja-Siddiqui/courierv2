import React from "react";

const TicketDetails = () => {
  return (
    <div className="text-sm">
      <div className="flex justify-between">
        <span>ID</span>
        <span>#47372006</span>
      </div>
      <div className="flex justify-between">
        <span>Status</span>
        <span>Solved</span>
      </div>
      <div className="flex justify-between">
        <span>Created</span>
        <span>May 31, 2024 22:45</span>
      </div>
      <div className="flex justify-between">
        <span>Last Activity</span>
        <span>June 23, 2024 00:02</span>
      </div>
    </div>
  );
};

export default TicketDetails;
