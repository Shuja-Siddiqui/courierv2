import React from "react";
import AverageCard from "../components/card/AverageCard";
import ChatHistoryTable from "../components/table/ChatHistoryTable";
import TaskHistory from "../components/overview/TaskHistory";
import Gmail from "../components/oAuth/Gmail";
const Overview = () => {
  return (
    <div className="h-[100%] bg-background p-4">
      <AverageCard />
      <div className=" text-white p-4 rounded my-4">
        <h2 className="text-lg font-bold">Overview</h2>
      </div>
      <div className="w-full flex justify-between">
        <ChatHistoryTable />
        <TaskHistory />
      </div>
      <Gmail />
    </div>
  );
};
export default Overview;
