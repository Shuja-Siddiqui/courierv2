import React, { useState } from "react";
import SimpleCard from "../card/SimpleCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";

const Step2 = ({ nextStep, prevStep, handleChange, values }) => {
  const [selectedCardId, setSelectedCardId] = useState(null);
  const [errors, setErrors] = useState({});

  const handleSelect = (id, name) => {
    setSelectedCardId(id);
    values.workFlow = name;
  };

  const validate = () => {
    let tempErrors = {};
    let isValid = true;

    // Validate Agent Type
    if (!values.agentType) {
      tempErrors.agentType = "Please select an agent type";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleNextStep = () => {
    if (validate()) {
      nextStep();
    }
  };

  const card = [
    {
      title: "Efficiently Integrate and Automate Customer Support Tasks.",
      body: "Connect the support agent with your knowledge base, and integrate the chatbot on your website, email, or dashboard for seamless support.",
      actions: [
        "Retrieves information from PDFs, databases, and CSV files to generate accurate responses.",
        "Integrates with your website, email, and dashboard for easy deployment.",
        "Uses pre-built prompts to execute tasks and respond to customer queries.",
        "Tracks orders and provides a comprehensive analysis of the workflow.",
        "Connects to the knowledge base for on-brand, on-policy responses.",
        "Searches TMS to get the latest order information.",
        "Updates TMS with new address or instructions and sends updates to driver apps.",
      ],
      button: "Select",
    },
    {
      title: "Streamline Address Change Requests for Logistics Support.",
      body: "Automate the process of updating address change requests with your calling support agent, integrated seamlessly into your existing systems.",
      actions: [
        "Connects to the customer knowledge base for accurate information retrieval.",
        "Integrates with the TMS to fetch and update address details.",
        "Initiates calls to the dispatcher or driver to confirm address changes.",
        "Updates the TMS and Ulala with new address details.",
        "Notifies customers of successful address updates via email or SMS.",
      ],
    },
    {
      title: "Efficiently Process Returns and RMA Requests.",
      body: "Automate the handling of returns and Return Merchandise Authorization (RMA) requests to streamline operations.",
      actions: [
        "Connects to the returns management system to access RMA requests.",
        "Verifies return eligibility based on company policies.",
        "Updates the TMS with return authorization and instructions.",
        "Coordinates with the warehouse for return processing and restocking.",
        "Sends confirmation and instructions to customers regarding their return.",
      ],
    },
    {
      title: " Automate Incident Management and Resolution.",
      body: "Streamline the handling of incidents and disruptions in the logistics process to minimize impact.",
      actions: [
        "Identifies and logs incidents based on predefined criteria or customer reports.",
        "Retrieves relevant data from TMS or any KB and other systems to assess the incident.",
        "Escalates critical incidents to appropriate support teams for immediate action.",
        "Tracks incident resolution progress and updates stakeholders.",
        "Provides resolution details and preventive measures to affected customers.",
      ],
    },
    {
      title: "Automatically Process Rate Quote Requests.",
      body: "Automate the generation and delivery of rate quotes for shipments and logistics services.",
      actions: [
        "Retrieves shipment details and requirements from customer inquiries.",
        "Integrates with rate calculation systems to generate accurate quotes.",
        "Sends rate quotes to customers via email or chatbot.",
        "Follows up on quote requests to confirm acceptance or further discussion.",
        "Updates records with quote details and customer responses.",
      ],
    },
  ];
  const auditCard = [
    {
      title: "Verify delivery POD images",
      body: "Agent reviews POD images and grades each image from 1 to 10, automatically flagging deliveries at risk of dispute.",
      actions: [
        "Retrieve and analyze delivery POD images from TMS",
        "Review image quality grading between 1-10",
        "Flag images with grades below 7",
        "Generate report",
        "Send email to ops or notify through other channel (optional)",
      ],
      button: "Select",
    },
    {
      title: "Automate Inventory Audits for Accuracy and Compliance",
      body: "Streamline the process of conducting inventory audits to ensure accuracy and compliance.",
      actions: [
        "Connects to the inventory management system to retrieve current stock levels",
        "Automatically compares physical inventory counts with system records",
        "Flags discrepancies for further investigation",
        "Generates inventory audit reports highlighting discrepancies and adjustments needed",
        "Updates inventory records with audit findings and corrective actions",
      ],
    },
    {
      title: "Automate Audits of Vendor and Partner Performance",
      body: "Streamline the evaluation of vendor and partner performance to ensure service quality.",
      actions: [
        "Connects to performance management systems and vendor databases",
        "Automatically collects and analyzes performance metrics (e.g., delivery times, accuracy)",
        "Flags underperforming vendors or partners for review",
        "Generates performance audit reports with recommendations for improvement",
        "Updates audit records with performance findings and actions taken",
      ],
    },
    {
      title: "Automate Verification of Shipment Documentation",
      body: "Efficiently verify shipment documentation to ensure accuracy and compliance.",
      actions: [
        "Connects to shipment management systems to access shipment documents",
        "Automatically checks for completeness and accuracy of shipment paperwork (e.g., bills of lading, packing slips)",
        "Flags missing or incorrect documentation for review",
        "Generates reports on documentation issues and compliance status",
        "Updates audit records with verification results and corrective actions",
      ],
    },
  ];
  const salesCard = [
    {
      title: "Automate Lead Management and Follow-Up Tasks",
      body: "Streamline the process of managing and following up on leads to boost sales efficiency.",
      actions: [
        "Connects to CRM and external lead generation apps to import new leads.",
        "Categorizes and prioritizes leads based on predefined criteria.",
        "Sends automated follow-up emails to leads with personalized content.",
        "Schedules follow-up calls or meetings based on lead engagement.",
        "Tracks lead interactions and updates CRM with status and notes.",
      ],
    },
    {
      title: "Automate Proposal Generation and Delivery",
      body: "Efficiently generate and send proposals to potential clients with minimal manual effort.",
      actions: [
        "Retrieves client requirements and details from CRM or external forms.",
        "Uses pre-defined templates to generate customized proposals.",
        "Integrates with document management systems to store and retrieve templates.",
        "Sends proposals to clients via email or secure document sharing platforms.",
        "Follows up with clients on proposal status and schedules review meetings.",
      ],
    },
    {
      title: "Automate Contract Management and Renewal Notifications",
      body: "Automate the management and renewal process of sales contracts to maintain continuous client engagement.",
      actions: [
        "Connects to contract management systems to track contract statuses and expiration dates.",
        "Sends automated reminders for contract renewals or reviews.",
        "Generates renewal proposals or updates based on current contract terms.",
        "Coordinates with clients to finalize contract renewals or amendments.",
        "Updates CRM with contract changes and renewal status.",
      ],
    },
    {
      title: "Automate Load Board Bidding",
      body: "Agent autonomously generates and submits intelligent bids on connected load boards.",
      actions: [
        "Analyze historical win rates of bids for load types.",
        "Generate a smart bid for each posted load.",
        "Submit bid.",
        "Update TMS.",
      ],
    },
  ];
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/professional-services");
  };

  const agentNames = ["Support", "Sales", "Finance", "Audit", "Bidder"];
  return (
    <div>
      <div className="flex  justify-between items-center mb-6">
        <div>{""}</div>{" "}
        <h2 className=" text-2xl font-bold  text-center text-white ml-44">
          Select a Workflow Type
        </h2>
        <button
          className="   bg-white text-black font-medium rounded py-2 px-4 hover:bg-gray-900 hover:text-white border border-gray-900 hover:border-white hover:scale-105"
          onClick={handleClick}
        >
          Professional Services
        </button>
      </div>
      <div className="mb-4">
        <div className="relative">
          <select
            value={values.agentType}
            onChange={handleChange("agentType")}
            // className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-8"
            className="rounded-md w-full border-none bg-gray-400 bg-opacity-50 px-6 py-2  text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
          >
            <option value="" disabled className="bg-cardbackground">
              Select an Agent
            </option>
            {agentNames.map((agent, index) => (
              <option className="bg-cardbackground " key={index} value={agent}>
                {agent}
              </option>
            ))}
          </select>
          {errors.agentType && (
            <p className="text-red-500 text-sm mt-1">{errors.agentType}</p>
          )}
          {/* <div className="absolute top-0 right-0 h-full flex items-center pr-2 pointer-events-none">
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
          </div> */}
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
              onSelect={() => handleSelect(index, data?.title)}
            />
          ))}
        </div>
      )}

      {values.agentType === "Sales" && (
        <div className="w-full flex gap-4 mb-8">
          {salesCard.map((data, index) => (
            <SimpleCard
              key={index}
              data={data}
              isSelected={selectedCardId === index}
              onSelect={() => handleSelect(index)}
            />
          ))}
        </div>
      )}
      {values.agentType === "Bidder" && (
        <div className="w-full flex justify-center items-center gap-4 mb-8">
          <h1 className="text-6xl text-white">Coming Soon</h1>
        </div>
      )}
      {values.agentType === "Finance" && (
        <div className="w-full flex justify-center items-center gap-4 mb-8">
          <h1 className="text-6xl text-white">Coming Soon</h1>
        </div>
      )}
      {(values.agentType === "Audit" ||
        values.agentType === "Support" ||
        values.agentType === "Sales") && (
        <div className="flex">
          <button
            onClick={prevStep}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
          >
            Prev
          </button>
          <button
            onClick={handleNextStep}
            // className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            className="bg-cardbackground px-4 py-2 hover:scale-105  border-[0.5px] border-gray-700 rounded-md flex  justify-center items-center gap-2 text-lg"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Step2;
