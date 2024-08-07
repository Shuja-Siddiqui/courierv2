import React, { useState } from "react";
import { BiSolidPhoneIncoming } from "react-icons/bi";
import { FaEye } from "react-icons/fa";
import { selectAgentDetails } from "../../redux/agentSlice";
import { useSelector } from "react-redux";

export default function InboundTable() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTranscript, setCurrentTranscript] = useState(null);
  const agents = useSelector(selectAgentDetails);

  const agentType = agents?.filter((agent) => agent.agentType === "Support");
  const agentPhone = agentType?.filter((agent) => agent.deployType.Phone === true);
  const agentName = agentPhone.length > 0 ? agentPhone[0].agentName : null;
  const selectedPhoneNumber = agentPhone.length > 0 ? agentPhone[0].selectedPhoneNumber : null;

  const data = [
    {
      id: "001",
      customerNumber: "+92-300-1234567",
      receiveNumber: selectedPhoneNumber,
      agent: agentName,
      transcript: [
        { speaker: agentName, text: "Hello, how can I help you today?" },
        { speaker: "Customer", text: "Where is my order?" },
        { speaker: agentName, text: "Your order is on the way and will arrive tomorrow." },
        // Add more chat lines here as needed
      ],
    },
    {
      id: "002",
      customerNumber: "+92-300-2345678",
      receiveNumber: selectedPhoneNumber,
      agent: agentName,
      transcript: [
        { speaker: agentName, text: "Hello, how can I assist you?" },
        { speaker: "Customer", text: "I need to change my shipping address." },
        { speaker: agentName, text: "Sure, please provide the new address." },
        // Add more chat lines here as needed
      ],
    },
    {
      id: "003",
      customerNumber: "+92-300-3456789",
      receiveNumber: selectedPhoneNumber,
      agent: agentName,
      transcript: [
        { speaker: agentName, text: "Hi, how can I help?" },
        { speaker: "Customer", text: "I received a damaged product." },
        { speaker: agentName, text: "I'm sorry to hear that. We'll send a replacement right away." },
        // Add more chat lines here as needed
      ],
    },
    {
      id: "004",
      customerNumber: "+92-300-4567890",
      receiveNumber: selectedPhoneNumber,
      agent: agentName,
      transcript: [
        { speaker: agentName, text: "Hello, what can I do for you?" },
        { speaker: "Customer", text: "I want to cancel my order." },
        { speaker: agentName, text: "I can help with that. Can you provide your order number?" },
        // Add more chat lines here as needed
      ],
    },
    {
      id: "005",
      customerNumber: "+92-300-5566778",
      receiveNumber: selectedPhoneNumber,
      agent: agentName,
      transcript: [
        { speaker: agentName, text: "Hello, how can I help?" },
        { speaker: "Customer", text: "Where is my order?" },
        { speaker: agentName, text: "It's out for delivery and should arrive by this evening." },
        // Add more chat lines here as needed
      ],
    },
  ];

  const openModal = (transcript) => {
    setCurrentTranscript(transcript);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentTranscript(null);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <div className="flex text-white text-3xl justify-center items-center gap-2">
        <BiSolidPhoneIncoming /> Inbound Calls Transcripts
      </div>
      <section className="container px-4 mx-auto">
        <div className="flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-700 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-700">
                  <thead className="bg-gray-800">
                    <tr>
                      <th className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-400">
                        Call ID
                      </th>
                      <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-400">
                        Customer Number
                      </th>
                      <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-400">
                        Receive Number
                      </th>
                      <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-400">
                        Transcript
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-gray-900 divide-y divide-gray-700">
                    {data.map((item, index) => (
                      <tr
                        key={item.id}
                        className={index % 2 === 0 ? "bg-gray-700" : "bg-gray-600"}
                      >
                        <td className="px-4 py-4 text-sm text-gray-300 whitespace-nowrap">
                          {item.id}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-300 whitespace-nowrap">
                          {item.customerNumber}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-300 whitespace-nowrap">
                          {item.receiveNumber}
                        </td>
                        <td className="px-4 py-4 text-lg text-white whitespace-nowrap">
                          <button
                            className="transition-colors duration-200 hover:text-gray-900 focus:outline-none"
                            onClick={() => openModal(item.transcript)}
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

      {isOpen && currentTranscript && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-gray-800 w-[90%] max-w-3xl p-6 rounded-lg shadow-lg relative">
            <button
              onClick={closeModal}
              className="absolute top-0 right-0 mt-2 mr-2 text-red-400 hover:text-red-800 text-3xl"
            >
              &times;
            </button>
            <div>
              <h3 className="text-xl leading-6 font-medium text-center text-white mb-2">
                Call Transcript
              </h3>
              <hr />
              <div className="space-y-2 mt-4">
                {currentTranscript.map((line, index) => (
                  <p key={index} className="text-lg text-gray-200">
                    <strong>{line.speaker}:</strong> {line.text}
                  </p>
                ))}
              </div>
              
            </div>
            
          </div>
        </div>
      )}
    </div>
  );
}
