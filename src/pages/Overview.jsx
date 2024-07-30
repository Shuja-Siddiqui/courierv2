import React from "react";
import AverageCard from "../components/card/AverageCard";
import ChatHistoryTable from "../components/table/ChatHistoryTable";
import TaskHistory from "../components/overview/TaskHistory";
const Overview = () => {
  return (
    <div className="h-screen bg-background p-4">
      <AverageCard />
      <div className=" text-white p-4 rounded my-4">
        <h2 className="text-lg font-bold">OverView</h2>
      </div>
      <div className="w-full flex justify-between">
        <ChatHistoryTable />
        <TaskHistory />
      </div>
    </div>
  );
};
export default Overview;
