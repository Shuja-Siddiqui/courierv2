import React from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaHistory } from "react-icons/fa";
import { FaTicket } from "react-icons/fa6";

export default function TicketTable() {
  const ticketsData = [
    {
      id: "#12345",
      customer: "John Doe",
      email: "john@example.com",
      subject: "Website not loading",
      status: "Open",
      created: "2023-06-23",
      chatHistory: [
        {
          sender: "John Doe",
          message: "Website not loading",
          timestamp: "2023-06-23 10:00",
        },
        {
          sender: "Support Agent",
          message: "We are looking into it.",
          timestamp: "2023-06-23 10:15",
        },
      ],
    },
    {
      id: "#12346",
      customer: "Jane Smith",
      email: "jane@example.com",
      subject: "Login issues",
      status: "Resolved",
      created: "2023-06-22",
      chatHistory: [
        {
          sender: "Jane Smith",
          message: "Cannot log in to my account",
          timestamp: "2023-06-22 09:00",
        },
        {
          sender: "Support Agent",
          message: "Password reset link sent.",
          timestamp: "2023-06-22 09:15",
        },
      ],
    },
    {
      id: "#12347",
      customer: "Bob Johnson",
      email: "bob@example.com",
      subject: "Error 404 on page",
      status: "Open",
      created: "2023-06-21",
      chatHistory: [
        {
          sender: "Bob Johnson",
          message: "Getting 404 error on products page",
          timestamp: "2023-06-21 08:00",
        },
        {
          sender: "Support Agent",
          message: "Please try again.",
          timestamp: "2023-06-21 08:15",
        },
      ],
    },
    {
      id: "#12348",
      customer: "Alice Brown",
      email: "alice@example.com",
      subject: "Payment failed",
      status: "Escalated",
      created: "2023-06-20",
      chatHistory: [
        {
          sender: "Alice Brown",
          message: "Payment failed during checkout",
          timestamp: "2023-06-20 07:00",
        },
        {
          sender: "Support Agent",
          message: "Checking with payment gateway.",
          timestamp: "2023-06-20 07:15",
        },
      ],
    },
    {
      id: "#12349",
      customer: "Tom Clark",
      email: "tom@example.com",
      subject: "Account suspended",
      status: "Resolved",
      created: "2023-06-19",
      chatHistory: [
        {
          sender: "Tom Clark",
          message: "My account has been suspended",
          timestamp: "2023-06-19 06:00",
        },
        {
          sender: "Support Agent",
          message: "Issue resolved, account reactivated.",
          timestamp: "2023-06-19 06:15",
        },
      ],
    },
  ];

  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <div className="flex text-white text-3xl justify-center items-center gap-2 mt-8">
        <FaTicket /> Support Tickets
      </div>
      <section className="container px-4 mx-auto">
        <div className="flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-700 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-700">
                  <thead className="bg-gray-800">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-400"
                      >
                        Ticket ID
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-400"
                      >
                        Customer
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-400"
                      >
                        Subject
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-400"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-400"
                      >
                        Created
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-400"
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-gray-900 divide-y divide-gray-700">
                    {ticketsData.map((ticket, index) => (
                      <tr
                        key={ticket.id}
                        className={
                          index % 2 === 0 ? "bg-gray-700" : "bg-gray-600"
                        }
                      >
                        <td className="px-4 py-4 text-sm text-gray-300 whitespace-nowrap">
                          {ticket.id}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-300 whitespace-nowrap">
                          {ticket.customer}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-300 whitespace-nowrap">
                          {ticket.subject}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-300 whitespace-nowrap">
                          {ticket.status}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-300 whitespace-nowrap">
                          {ticket.created}
                        </td>
                        <td className="px-4 py-4 text-lg text-white whitespace-nowrap">
                          <button
                            className="transition-colors duration-200 hover:text-gray-900 focus:outline-none"
                            onClick={() =>
                              navigate(`/support/ticket/${ticket.id}`)
                            }
                          >
                            <FaEye />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
