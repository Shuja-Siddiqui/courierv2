import React, { useState } from "react";
import Card from "../card/Card";
import SimpleCard from "../card/SimpleCard";

const Step3 = ({ prevStep, nextStep, handleSubmit, handleChange, values }) => {
  const current =
    "You are an agent providing support for a logistics company known as Raven Force. You have access to a Knowledge Base (KB) containing all customer order information. Your task is to respond to customer inquiries based on this data. Ensure that your responses are accurate and confidential, so no customer information is shared or reviewed by others.";
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-center text-white">
        Edit Pre-built Prompt
      </h2>
      <textarea
        value={current}
        rows={5}
        className="w-full p-2 border rounded"
      ></textarea>

      <button
        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
      >
        Edit
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
