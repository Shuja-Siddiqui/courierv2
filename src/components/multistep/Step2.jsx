import React, { useState } from "react";
import SimpleCard from "../card/SimpleCard";
import { Swiper, SwiperSlide } from "swiper/react";

const Step2 = ({ nextStep, prevStep, handleChange, values }) => {
  const [selectedCardId, setSelectedCardId] = useState(null);

  const handleSelect = (id, name) => {
    setSelectedCardId(id);
    values.workFlow = name;
  };

  const card = [
    {
      title: "Automate inbound customer support tickets",
      body: "Agent responds to and resolves a wide array of customer support tickets including: WISMO, address change requests and more",
      actions: [
        "Retrieves information from company knowledge base to generate on-brand, on-policy responses",
        "Searches TMS to retrieve most up-to-date order information",
        "Retrieves POD images & serves in response",
        "Initiates call to dispatcher or driver to confirm changes to address or delivery instructions",
        "Updates TMS with updated address and/or instructions and pushes to driver apps",
      ],
    },
    {
      title:
        "Automate followup with carriers and drivers for inbound/outbound loads",
      body: "Agent autonomously reads scheduled loads (inbound/outbound) then generates emails to carriers/drivers requesting tracking updates and flags late shipments within your TMS or email notifications",
      actions: [
        "Identify all scheduled loads from TMS",
        "Read emails, 3rd-party and own tracking events to parse the most up-to-date status",
        "Generate emails to carriers/drivers asking for track updates with responses",
        "Flag loads which will miss an inbound/outbound cutoff time",
        "Generate email notification to your ops team and/or update TMS",
      ],
    },
    {
      title: "Automate inbound customer support tickets",
      body: "Agent responds to and resolves a wide array of customer support tickets including: WISMO, address change requests and more",
      actions: [
        "Retrieves information from company knowledge base to generate on-brand, on-policy responses",
        "Searches TMS to retrieve most up-to-date order information",
        "Retrieves POD images & serves in response",
        "Initiates call to dispatcher or driver to confirm changes to address or delivery instructions",
        "Updates TMS with updated address and/or instructions and pushes to driver apps",
      ],
    },
    {
      title: "Automate inbound customer support tickets",
      body: "Agent responds to and resolves a wide array of customer support tickets including: WISMO, address change requests and more",
      actions: [
        "Retrieves information from company knowledge base to generate on-brand, on-policy responses",
        "Searches TMS to retrieve most up-to-date order information",
        "Retrieves POD images & serves in response",
        "Initiates call to dispatcher or driver to confirm changes to address or delivery instructions",
        "Updates TMS with updated address and/or instructions and pushes to driver apps",
      ],
    },
    {
      title: "Automate inbound customer support tickets",
      body: "Agent responds to and resolves a wide array of customer support tickets including: WISMO, address change requests and more",
      actions: [
        "Retrieves information from company knowledge base to generate on-brand, on-policy responses",
        "Searches TMS to retrieve most up-to-date order information",
        "Retrieves POD images & serves in response",
        "Initiates call to dispatcher or driver to confirm changes to address or delivery instructions",
        "Updates TMS with updated address and/or instructions and pushes to driver apps",
      ],
    },
  ];
  const auditCard = [
    {
      title: "Automate Follow-up with Carriers and Drivers",
      body: "The agent autonomously manages communication with carriers and drivers, ensuring timely tracking updates and flagging potential delays within your TMS or via email notifications.",
      actions: [
        "Identify all scheduled loads from TMS",
        "Parse the most up-to-date status from emails, third-party, and own tracking events",
        "Generate emails to carriers/drivers requesting tracking updates",
        "Flag loads at risk of missing inbound/outbound cutoff times",
        "Notify your operations team and/or update TMS with flagged loads",
      ],
    },
    {
      title: "Automate Inbound Customer Support Tickets",
      body: "The agent handles various customer support requests, such as WISMO and address changes, by leveraging company knowledge bases and current order data.",
      actions: [
        "Generate on-brand responses using company knowledge base",
        "Retrieve the latest order information from TMS",
        "Provide POD images in responses",
        "Coordinate with dispatchers or drivers for address or delivery instruction changes",
        "Update TMS and driver apps with new address and instructions",
      ],
    },
    {
      title: "Streamline Return Merchandise Authorization (RMA)",
      body: "This agent facilitates the RMA process, ensuring efficient handling of product returns and exchanges, including coordination with logistics and inventory management.",
      actions: [
        "Initiate RMA process based on customer requests",
        "Verify product return eligibility using order history",
        "Coordinate with inventory management for restocking",
        "Communicate with customers on return status and next steps",
        "Update CRM with RMA details and resolution status",
      ],
    },
    {
      title: "Enhance Fraud Detection and Prevention",
      body: "The agent uses advanced algorithms to detect and prevent fraudulent activities by analyzing transaction data and flagging suspicious patterns.",
      actions: [
        "Monitor transactions in real-time for anomalies",
        "Analyze historical data to identify fraud patterns",
        "Flag suspicious transactions for manual review",
        "Notify security team of potential fraud cases",
        "Update risk assessment models based on new findings",
      ],
    },
    {
      title: "Optimize Inventory Management",
      body: "The agent helps optimize inventory levels by analyzing sales trends, predicting demand, and coordinating with suppliers to maintain optimal stock levels.",
      actions: [
        "Analyze sales data to predict future demand",
        "Coordinate with suppliers for timely restocking",
        "Identify slow-moving inventory for potential markdowns",
        "Update inventory records with new stock levels",
        "Generate reports on inventory turnover and stock levels",
      ],
    },
  ];
  
  const agentNames = ["Support", "Sales", "Finance", "Audit", "Bidder"];
  return (
    <div>
    <h2 className="text-2xl font-bold mb-6 text-center text-white">
      Select a Workflow Type
    </h2>

    <div className="mb-4">
      <div className="relative">
        <select
          value={values.agentType}
          onChange={handleChange("agentType")}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-8"
        >
          <option value="" disabled>
            Select an Agent
          </option>
          {agentNames.map((agent, index) => (
            <option key={index} value={agent}>
              {agent}
            </option>
          ))}
        </select>
        <div className="absolute top-0 right-0 h-full flex items-center pr-2 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </div>
      </div>
    </div>

    {values.agentType === "Support" && (
      <div className="w-full flex gap-4 mb-8">
        {card.map((data, index) => (
          <SimpleCard
            key={index}
            data={data}
            isSelected={selectedCardId === index}
            onSelect={() => handleSelect(index, data?.title)}
          />
        ))}
      </div>
    )}

    {values.agentType === "Audit" && (
      <div className="w-full flex gap-4 mb-8">
        {auditCard.map((data, index) => (
          <SimpleCard
            key={index}
            data={data}
            isSelected={selectedCardId === index}
            onSelect={() => handleSelect(index)}
          />
        ))}
      </div>
    )}

    <button
      onClick={prevStep}
      className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
    >
      Prev
    </button>
    <button
      onClick={nextStep}
      className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    >
      Next
    </button>
  </div>
  );
};

export default Step2;
