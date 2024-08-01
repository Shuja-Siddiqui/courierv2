import React from "react";

export default function SimpleCard({ data, isSelected, onSelect }) {
  return (
    <div className="bg-background text-white p-6 rounded-lg shadow-lg max-w-xs">
      <div className="flex flex-row justify-end">
        <button
        
          className={`bg-cardbackground px-4 py-1 hover:scale-105  border-[0.5px] border-gray-700 rounded-md flex  justify-center items-center gap-2 text-lg ${
            data.button !== "Select" ? "cursor-not-allowed opacity-50" : ""
          }`}
          onClick={onSelect}
          style={{
            opacity: isSelected ? 1 : data.button === "Select" ? 0.5 : 1,
          }}
          disabled={data.button !== "Select"}
        >
          {data.button === "Select"
            ? isSelected
              ? "Selected"
              : "Select"
            : "Coming Soon"}
        </button>
      </div>
      <div className="flex flex-col">
        <h2 className="text-2xl font-bold mb-6 text-center h-36">
          {data.title}
        </h2>

        <br />
        <p className="text-gray-400 h-36">{data.body}</p>
        <br />
        <ul>
          {data.actions.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
