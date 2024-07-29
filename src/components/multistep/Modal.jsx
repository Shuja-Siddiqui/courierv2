import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      onClick={handleOverlayClick}
    >
      <div className="w-[85%] max-h-[80vh] bg-gray-800 rounded-lg shadow-lg p-6 relative overflow-y-auto ">
        <button
          onClick={onClose}
          className="absolute top-0 right-4  text-3xl text-red-600 hover:text-red-800"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
