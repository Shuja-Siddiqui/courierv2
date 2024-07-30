import React from "react";
import TicketHeader from "./TicketHeader";
import TicketDetails from "./TicketDetails";
import TicketAttachments from "./TicketAttachments";

export default function SupportTicket() {
  return (
    <div className="h-[100vh] bg-gray-900 text-white p-6">
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">
          Account Restricted: Upwork Policy Violation
        </h2>
      </div>
      <div className="flex">
        <TicketHeader />
        <div className="w-[40%] flex flex-col">
          <TicketDetails />
          <TicketAttachments />
        </div>
      </div>
    </div>
  );
}
