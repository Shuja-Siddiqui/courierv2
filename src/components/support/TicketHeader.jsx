import React, { useState } from "react";

const TicketHeader = () => {
  const message = `
    Hi Alex,
    Our Trust & Safety team recently reviewed your account and found that more than one person may be accessing it.
    
    Our Terms of Service prohibit account sharing or duplication in any way because of the security risk this poses both to the account owner and to the integrity of the Raven Force platform as a whole. Everyone using Raven Force needs their own account. Additionally, subcontracting is limited to fixed-price contracts and contracts with agencies. We encourage agents to create a Team and freelancers to create and manage an Agency to help their organizations collaborate on Raven Force.

    Until we can get this sorted out together, we've placed restrictions on your account that limit what you can do on Raven Force.

    What's next?

    In order to get back to using Raven Force, we would like you to verify your identity. Doing so helps us keep Raven Force safe by ensuring everyone knows who they are working with.

    1. Please follow this link https://link.to/xyz within the next few days to complete identity verification.
  `;

  const [userMessage, setUserMessage] = useState("");
  const [chatHistory, setChatHistory] = useState(message.split("\n"));

  const handleSendMessage = () => {
    if (userMessage.trim()) {
      setChatHistory([...chatHistory, userMessage]);
      setUserMessage("");
    }
  };
  return (
    <div className="w-[79%]">
      <div className="bg-gray-800 p-4 rounded-lg mb-4">
        <div className="flex items-center mb-2">
          <div className="bg-green-600 h-8 w-8 rounded-full flex items-center justify-center">
            <span className="text-white">U</span>
          </div>
          <div className="ml-2">
            <div className="font-bold">Support Team</div>
            <div className="text-xs text-gray-400">May 31, 2024 22:45</div>
          </div>
        </div>

        {/* <div className="text-gray-300 text-sm">
          {message.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </div> */}

        <div className="text-gray-300 text-sm">
          {chatHistory.map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </div>

        <div className="flex justify-between items-center bg-gray-700 p-4 rounded-lg mt-4">
          <input
            type="text"
            className="w-[92%] p-2 text-gray-900 rounded-lg"
            placeholder="Type your message..."
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
          />
          <button
            className="bg-green-600 text-white px-4 py-2 rounded-lg"
            style={{
              background:
                "linear-gradient(349deg, rgba(2,0,36,1) 0%, rgba(9,121,20,1) 51%)",
            }}
            onClick={handleSendMessage}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketHeader;
