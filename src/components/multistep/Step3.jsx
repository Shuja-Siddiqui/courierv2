import React, { useEffect, useState } from "react";

const Step3 = ({ prevStep, nextStep, handleChange, values }) => {
  const [isEditable, setIsEditable] = useState(false);
  const [updatedPrompt, setUpdatedPrompt] = useState("");

  useEffect(() => {
    switch (values.agentType) {
      case "Support":
        setUpdatedPrompt(
          "You are a support agent at Normal Logistics. Provide assistance with shipping inquiries, delivery issues, and customer service."
        );
        break;
      case "Sales":
        setUpdatedPrompt(
          "You are a sales agent at Normal Logistics. Manage customer orders, handle product inquiries, and follow up on sales leads."
        );
        break;
      case "Finance":
        setUpdatedPrompt(
          "You handle financial queries at Normal Logistics. Ensure accurate billing, process transactions, and resolve financial discrepancies."
        );
        break;
      case "Audit":
        setUpdatedPrompt(
          "You are an auditor at Normal Logistics. Review financial records for accuracy, compliance, and regulatory adherence."
        );
        break;
      case "Bidder":
        setUpdatedPrompt(
          "You manage bidding processes at Normal Logistics. Handle proposals, negotiate terms, and oversee contract awards."
        );
        break;
      default:
        setUpdatedPrompt(
          "You are a support agent at Normal Logistics. Provide assistance with shipping inquiries, delivery issues, and customer service."
        );
    }
  }, [values.AgentType]);

  const handleEditClick = () => {
    if (isEditable) {
      handleChange("prompt", updatedPrompt);
    }
    setIsEditable(!isEditable);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-center text-white">
        Edit Pre-built Prompt
      </h2>
      <textarea
        value={updatedPrompt}
        onChange={(e) => setUpdatedPrompt(e.target.value)}
        rows={5}
        className="w-full p-2 border rounded"
        readOnly={!isEditable}
      ></textarea>

      <button
        onClick={handleEditClick}
        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
      >
        {isEditable ? "Save" : "Edit"}
      </button>

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

export default Step3;
