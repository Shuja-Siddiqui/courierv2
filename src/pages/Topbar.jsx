// src/pages/Topbar.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { MdLogout } from "react-icons/md";
import { ChevronRightIcon } from "@heroicons/react/16/solid";

const Topbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  };

  return (
    <div className="bg-background text-white flex justify-between p-4 items-center shadow-2xl border-b-[1px] border-gray-900">
      <button className="flex justify-between items-center p-4 w-[40%] border border-0.5 border-gray-500 rounded-lg">
        <span>Chat with Copilot</span>
        <ChevronRightIcon className="w-5 h-5 ml-2" /> {/* Icon added here */}
      </button>

      <div className="flex items-center space-x-4">
        <button className="bg-gray-700 px-4 py-2 rounded-lg bg-gradient-to-br border-[1px] border-gray-600 from-gray-500 to-background hover:scale-110 text-white flex items-center shadow-sm shadow-gray-500">
          <span className="">Select date</span>
        </button>
        <button
          className="bg-gray-700 p-2 rounded-lg bg-gradient-to-br border-[1px] border-gray-600 from-gray-500 to-background hover:scale-110 text-white flex items-center shadow-sm shadow-gray-500"
          onClick={handleLogout}
        >
          <MdLogout size={24} />
        </button>
      </div>
    </div>
  );
};

export default Topbar;
