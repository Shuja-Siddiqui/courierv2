import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="w-[90%] h-[90vh] bg-background rounded-lg shadow-lg py-6 px-8 relative">
        <button
          onClick={onClose}
          className="absolute top-0 right-0 mt-2 mr-2 text-red-400 hover:text-red-800 text-3xl"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
