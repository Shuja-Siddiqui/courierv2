import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function TicketTable() {
  const ticketsData = [
    {
      id: '#12345',
      customer: 'John Doe',
      email: 'john@example.com',
      subject: 'Website not loading',
      status: 'Open',
      created: '2023-06-23',
      chatHistory: [
        { sender: 'John Doe', message: 'Website not loading', timestamp: '2023-06-23 10:00' },
        { sender: 'Support Agent', message: 'We are looking into it.', timestamp: '2023-06-23 10:15' },
      ],
    },
    {
      id: '#12346',
      customer: 'Jane Smith',
      email: 'jane@example.com',
      subject: 'Login issues',
      status: 'Resolved',
      created: '2023-06-22',
      chatHistory: [
        { sender: 'Jane Smith', message: 'Cannot log in to my account', timestamp: '2023-06-22 09:00' },
        { sender: 'Support Agent', message: 'Password reset link sent.', timestamp: '2023-06-22 09:15' },
      ],
    },
    {
      id: '#12347',
      customer: 'Bob Johnson',
      email: 'bob@example.com',
      subject: 'Error 404 on page',
      status: 'Open',
      created: '2023-06-21',
      chatHistory: [
        { sender: 'Bob Johnson', message: 'Getting 404 error on products page', timestamp: '2023-06-21 08:00' },
        { sender: 'Support Agent', message: 'Please try again.', timestamp: '2023-06-21 08:15' },
      ],
    },
    {
      id: '#12348',
      customer: 'Alice Brown',
      email: 'alice@example.com',
      subject: 'Payment failed',
      status: 'Escalated',
      created: '2023-06-20',
      chatHistory: [
        { sender: 'Alice Brown', message: 'Payment failed during checkout', timestamp: '2023-06-20 07:00' },
        { sender: 'Support Agent', message: 'Checking with payment gateway.', timestamp: '2023-06-20 07:15' },
      ],
    },
    {
      id: '#12349',
      customer: 'Tom Clark',
      email: 'tom@example.com',
      subject: 'Account suspended',
      status: 'Resolved',
      created: '2023-06-19',
      chatHistory: [
        { sender: 'Tom Clark', message: 'My account has been suspended', timestamp: '2023-06-19 06:00' },
        { sender: 'Support Agent', message: 'Issue resolved, account reactivated.', timestamp: '2023-06-19 06:15' },
      ],
    },
  ];
  
  const navigate = useNavigate();

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr>
            <th className="py-2 px-4">Ticket ID</th>
            <th className="py-2 px-4">Customer</th>
            <th className="py-2 px-4">Subject</th>
            <th className="py-2 px-4">Status</th>
            <th className="py-2 px-4">Created</th>
            <th className="py-2 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {ticketsData.map((ticket) => (
            <tr key={ticket.id} className="border-b">
              <td className="py-2 px-4">{ticket.id}</td>
              <td className="py-2 px-4">{ticket.customer}</td>
              <td className="py-2 px-4">{ticket.subject}</td>
              <td className="py-2 px-4">{ticket.status}</td>
              <td className="py-2 px-4">{ticket.created}</td>
              <td className="py-2 px-4">
                <button
                  className="text-blue-500"
                  onClick={() => navigate(`/support/ticket/${ticket.id}`)}
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
