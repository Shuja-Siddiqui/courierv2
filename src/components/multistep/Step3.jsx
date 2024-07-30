import React, { useState } from "react";

const Step3 = ({ prevStep, nextStep, handleChange, values }) => {
  const [isEditable, setIsEditable] = useState(false);

  const handleEditClick = () => {
    setIsEditable(!isEditable);
  };
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-center text-white">
        Edit Pre-built Prompt
      </h2>
      <textarea
        value={values.prompt}
        onChange={handleChange("prompt")}
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
