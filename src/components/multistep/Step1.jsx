import React from "react";

const Step1 = ({ nextStep, handleChange, values }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-center text-white ">
        Initalize New Agent
      </h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter Agent Name"
          value={values.agentName}
          onChange={handleChange("agentName")}
          // className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          className="rounded-md w-full border-none bg-gray-400 bg-opacity-50 px-6 py-2  text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter Agent Description"
          value={values.agentDescription}
          onChange={handleChange("agentDescription")}
          // className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          className="rounded-md w-full border-none bg-gray-400 bg-opacity-50 px-6 py-2  text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
        />
      </div>
      <button
        onClick={nextStep}
        // className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
         className="bg-cardbackground px-4 py-2 hover:scale-105  border-[0.5px] border-gray-700 rounded-md flex  justify-center items-center gap-2 text-lg"
      >
        Next
      </button>
    </div>
  );
};

export default Step1;
