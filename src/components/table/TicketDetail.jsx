import React from 'react';
import { useParams } from 'react-router-dom';


const TicketDetail = () => {
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
    
  const { id } = useParams();
  const ticket = ticketsData.find(ticket => ticket.id === id);

  if (!ticket) {
    return <div>Ticket not found</div>;
  }

  return (
    <div className="flex justify-center items-center p-8 bg-gray-100 min-h-screen">
      <div className="w-full pr-4 bg-white shadow-md rounded-lg p-4">
        <h2 className="text-xl font-bold mb-4">Chat History</h2>
        <div className="space-y-4">
          {ticket.chatHistory.map((chat, index) => (
            <div key={index} className="p-4 border rounded-lg">
              <div className="font-bold">{chat.sender}</div>
              <div>{chat.message}</div>
              <div className="text-xs text-gray-500">{chat.timestamp}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-5/12 pl-4">
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-bold mb-4">Ticket Info</h2>
          <p><strong>ID:</strong> {ticket.id}</p>
          <p><strong>Customer:</strong> {ticket.customer}</p>
          <p><strong>Email:</strong> {ticket.email}</p>
          <p><strong>Subject:</strong> {ticket.subject}</p>
          <p><strong>Status:</strong> {ticket.status}</p>
          <p><strong>Created:</strong> {ticket.created}</p>
          {ticket.status === 'Open' && (
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">
              Chat with Customer
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TicketDetail;
