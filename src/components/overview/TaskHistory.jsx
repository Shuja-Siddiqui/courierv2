import { useState } from "react";

function TaskHistory() {
  const tasks = [
    "832 POD images audited across 17 drivers at LAX-2",
    "1,903 POD images audited across 35 drivers at JFK-09",
    "Removed 41 orderIDs from invoice #17 for invalid PODs",
    "Flagged 79 orderIDs to manager for invalid PODs",
    "Analyzed all historical PODs to identify image benchmark",
    "14 POD images unreadable",
  ];
  const colors = ["text-green-500", "text-yellow-500", "text-orange-500"];
  return (
    <div className="w-[20%] p-4 bg-gray-800 text-white rounded-3xl shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Email Updates</h2>
        <select className="text-white rounded-md bg-gray-700 p-1">
          <option>Select date</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <ul className="space-y-2">
        {tasks.map((task, index) => (
          <li
            style={{ listStyleType: "none" }}
            className={colors[index % colors.length]}
            key={index}
          >
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskHistory;
