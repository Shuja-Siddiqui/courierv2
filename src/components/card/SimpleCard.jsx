import React from "react";

export default function SimpleCard({ data, isSelected, onSelect }) {
  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg max-w-xs">
      <div className="flex flex-row justify-end">
        <button
          className="bg-gray-700 p-2 rounded"
          onClick={onSelect}
          style={{ opacity: isSelected ? 1 : 0.5 }}
        >
          {isSelected ? "Selected" : "Select"}
        </button>
      </div>
      <h2 className="text-2xl font-bold mb-6 text-center text-white">{data.title}</h2>

      <br />
      <p className="text-gray-400">{data.body}</p>
      <br />
      <ul>
        {data.actions.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
}
