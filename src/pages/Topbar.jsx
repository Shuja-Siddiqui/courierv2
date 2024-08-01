// src/pages/Topbar.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdLogout } from "react-icons/md";
import { ChevronRightIcon } from "@heroicons/react/16/solid";

const Topbar = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleClick = (card) => {
    
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    
  };

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  };

  return (
    <div className="bg-background text-white flex justify-between p-4 items-center shadow-2xl border-b-[1px] border-gray-900">
      <button className="flex justify-between items-center p-4 w-[40%] border border-0.5 border-gray-500 rounded-lg" onClick={() => handleClick()}>
        <span>Chat with Copilot</span>
        <ChevronRightIcon className="w-5 h-5 ml-2" /> {/* Icon added here */}
      </button>

      <div className="flex items-center space-x-4">
        {/* <button className="bg-gray-700 px-4 py-2 rounded-lg bg-gradient-to-br border-[1px] border-gray-600 from-gray-500 to-background hover:scale-110 text-white flex items-center shadow-sm shadow-gray-500">
          <span className="">Select date</span>
        </button> */}
        <button
          className="bg-gray-700 p-2 rounded-lg bg-gradient-to-br border-[1px] border-gray-600 from-gray-500 to-background hover:scale-110 text-white flex items-center shadow-sm shadow-gray-500"
          onClick={handleLogout}
        >
          <MdLogout size={24} />
        </button>
      </div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-cardbackground rounded-lg p-6 w-[50%] text-center text-white">
            <h2 className="text-2xl font-bold mb-4"> Running on alpha version </h2>
            
            <button
              onClick={handleCloseModal}
              className="bg-cardbackground px-4 py-2 hover:scale-105 border-[0.5px] border-gray-700 rounded-md mt-4"
            >
              Close
            </button>
          </div>
        </div>
      )} 
    </div>
  );
};

export default Topbar;
