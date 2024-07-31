// Modal.jsx
import React from "react";

const ConfirmModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-gray-800 rounded-lg shadow-lg p-6 w-96">
        <h2 className="text-white text-xl mb-4">Are you sure to deploy?</h2>
        <div className="flex justify-end space-x-4">
          <button
            className="bg-red-400 text-white px-4 py-2 rounded-md hover:bg-red-700"
            onClick={() => onClose("no")}
          >
            No
          </button>
          <button
            className="bg-green-400 text-white px-4 py-2 rounded-md hover:bg-green-700"
            onClick={() => onClose("yes")}
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
