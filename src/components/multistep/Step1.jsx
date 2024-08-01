import React, { useState } from "react";

const Step1 = ({ nextStep, handleChange, values }) => {
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    let isValid = true;

    if (!values.agentName || values.agentName.trim() === "") {
      tempErrors.agentName = "Agent Name is required";
      isValid = false;
    }

    if (!values.agentDescription || values.agentDescription.trim() === "") {
      tempErrors.agentDescription = "Agent Description is required";
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

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-center text-white">
        Initalize New Agent
      </h2>
      <form action="">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter Agent Name"
            value={values.agentName}
            onChange={handleChange("agentName")}
            className="rounded-md w-full border-none bg-gray-400 bg-opacity-50 px-6 py-2 text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
          />
          {errors.agentName && (
            <p className="text-red-500 text-sm mt-1">{errors.agentName}</p>
          )}
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter Agent Description"
            value={values.agentDescription}
            onChange={handleChange("agentDescription")}
            className="rounded-md w-full border-none bg-gray-400 bg-opacity-50 px-6 py-2 text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
          />
          {errors.agentDescription && (
            <p className="text-red-500 text-sm mt-1">
              {errors.agentDescription}
            </p>
          )}
        </div>
      </form>
      <button
        onClick={handleNextStep}
        className="bg-cardbackground px-4 py-2 hover:scale-105 border-[0.5px] border-gray-700 rounded-md flex justify-center items-center gap-2 text-lg"
      >
        Next
      </button>
    </div>
  );
};

export default Step1;
