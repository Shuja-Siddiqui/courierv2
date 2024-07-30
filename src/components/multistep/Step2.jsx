import React, { useState } from "react";
import SimpleCard from "../card/SimpleCard";

const Step2 = ({ nextStep, prevStep, handleChange, values }) => {
  const [selectedCardId, setSelectedCardId] = useState(null);

  const handleSelect = (id) => {
    setSelectedCardId(id);
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

  const agentNames = ["Support", "Sales", "Finance", "Audit", "Bidder"];
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-center">
        Select a Workflow Type
      </h2>

      <div className="mb-4">
        <select
          value={values.agentType}
          onChange={handleChange("agentType")}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="" disabled>
            Select a Agent
          </option>
          {agentNames.map((agent, index) => (
            <option key={index} value={agent}>
              {agent}
            </option>
          ))}
        </select>
      </div>
      {values.agentType === "Support" ? (
        <div className="w-full flex gap-4 mb-8">
          {card.map((data, index) => (
            <SimpleCard
              key={index}
              data={data}
              isSelected={selectedCardId === index}
              onSelect={() => handleSelect(index)}
            />
          ))}
        </div>
      ) : (
        <></>
      )}

      <button
        onClick={prevStep}
        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
      >
        Prev
      </button>
      <button
        onClick={nextStep}
        className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Next
      </button>
    </div>
  );
};

export default Step2;
