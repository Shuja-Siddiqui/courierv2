import React from "react";
import { GoPaperclip } from "react-icons/go";

const TicketAttachments = () => {
  const attachments = [
    { name: "AccountStatement.pdf", size: "700 KB" },
    { name: "NIC Zafar.jpg", size: "600 KB" },
    { name: "issue.PNG", size: "400 KB" },
    { name: "issuemobile.jpg", size: "70 KB" },
  ];

  return (
    <div className="border border-gray-500 p-8">
      <h3 className="text-xl font-bold mb-2">Attachments</h3>
      <ul className="text-sm text-gray-400">
        {attachments?.map((item) => {
          return (
            <li className="list-none mb-2">
              <a href="#" className="flex items-center gap-2 text-green-400">
                <GoPaperclip /> {item?.name} {`(${item?.size})`}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TicketAttachments;
