import React from "react";

const TicketAttachments = () => {
  const attachments = [
    { name: "AccountStatement.pdf", size: "700 KB" },
    { name: "NIC Zafar.jpg", size: "600 KB" },
    { name: "issue.PNG", size: "400 KB" },
    { name: "issuemobile.jpg", size: "70 KB" },
  ];

  return (
    <div>
      <h3 className="text-xl font-bold mb-2">Attachments</h3>
      <ul className="text-sm text-gray-400">
        <li>
          <a href="#" className="text-blue-400 underline">
            AccountStatement.pdf (700 KB)
          </a>
        </li>
        <li>
          <a href="#" className="text-blue-400 underline">
            NIC Zafar.jpg (600 KB)
          </a>
        </li>
        <li>
          <a href="#" className="text-blue-400 underline">
            issue.PNG (400 KB)
          </a>
        </li>
        <li>
          <a href="#" className="text-blue-400 underline">
            issuemobile.jpg (70 KB)
          </a>
        </li>
      </ul>
    </div>
  );
};

export default TicketAttachments;
