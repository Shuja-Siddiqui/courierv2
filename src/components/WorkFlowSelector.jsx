import React, { useState } from "react";
import { createPortal } from "react-dom";

const WorkFlowSelector = ({ setFormData }) => {
  const [selectedWorkFlow, setSelectedWorkFlow] = useState("");
  const [showButton, setShowButton] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [fileCount, setFileCount] = useState(0);
  const [isTesting, setIsTesting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [file, setFile] = useState(null);
  const [analyzing, setAnalyzing] = useState(false);

  const updateExternalModel = (value) => {
    setFormData((prevValues) => ({
      ...prevValues,
      externalModel: value,
    }));
  };

  const WorkFlow = ["POD Audit 3.1", "POD Audit Beta"]; // Example workflow options

  const handleChange = (event) => {
    setSelectedWorkFlow(event.target.value);
    updateExternalModel(event.target.value);
    setShowButton(true);
  };

  const handleButtonClick = () => {
    setIsTesting(true);
    setTimeout(() => {
      setSuccessMessage(`Preparing ${selectedWorkFlow} Bot`);
      setTimeout(() => {
        setSuccessMessage(`Building ${selectedWorkFlow} Bot`);
        setTimeout(() => {
          setSuccessMessage(`${selectedWorkFlow} Bot Connected Successfully`);
          setIsTesting(false);
        }, 2000);
      }, 2000);
    }, 2000);
  };

  const handleMessageSend = () => {
    if (!file) return;
    const newFileCount = fileCount + 1;
    setFileCount(newFileCount);
    const newMessages = [...messages];

    const reader = new FileReader();
    reader.onloadend = () => {
      newMessages.push({ text: "", image: reader.result, rating: null });
      setMessages(newMessages);
      setAnalyzing(true);
      setTimeout(() => {
        setAnalyzing(false);
        if (newFileCount === 1) {
          newMessages[newMessages.length - 1].rating = 7.5;
        } else if (newFileCount === 2) {
          newMessages[newMessages.length - 1].rating = 4;
        }
        setMessages(newMessages);
      }, 2000);
    };
    reader.readAsDataURL(file);

    setInputMessage(""); // Clear input field after sending message
    setFile(null); // Clear file after sending
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (
      selectedFile &&
      (selectedFile.type === "image/png" || selectedFile.type === "image/jpeg")
    ) {
      setFile(selectedFile);
    } else {
      alert("Only PNG or JPG files are allowed");
    }
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const Modal = () => (
    <div
      className="fixed bottom-2 right-0 w-1/5 h-4/5 flex items-center justify-center bg-gray-900 bg-opacity-75"
      onClick={handleOutsideClick}
    >
      <div className="relative w-full h-full bg-black p-4 rounded-t-lg">
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
          onClick={closeModal}
        >
          X
        </button>
        <h3 className="text-white font-bold mb-2">{selectedWorkFlow} Bot</h3>
        <div className="mt-4 flex items-center">
          <input
            type="file"
            onChange={handleFileChange}
            className="border rounded py-2 px-3 w-full bg-gray-800 text-white"
            placeholder="Type your message..."
          />
          <button
            onClick={handleMessageSend}
            className="ml-2 bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Send
          </button>
        </div>
        {messages.length > 0 && (
          <div className="mt-4 overflow-auto h-4/5">
            <div className="bg-gray-100 p-4 rounded border border-gray-300">
              {messages.map((msg, index) => (
                <div key={index} className="mb-2">
                  {msg.image && (
                    <img
                      src={msg.image}
                      alt="Preview"
                      className="w-200px h-300px mb-2"
                    />
                  )}
                  {msg.text && <p className="text-gray-800">{msg.text}</p>}
                  {analyzing && msg.rating === null && (
                    <p className="text-gray-800">Analyzing...</p>
                  )}
                  {msg.rating !== null && (
                    <p className="text-gray-800">Rating: {msg.rating}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-center text-white">
        Select a Workflow Type
      </h2>

      <div className="mb-4">
        <div className="relative">
          <select
            value={selectedWorkFlow}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-8"
          >
            <option value="" disabled>
              Select a Model
            </option>
            {WorkFlow.map((flow, index) => (
              <option key={index} value={flow}>
                {flow}
              </option>
            ))}
          </select>
          <div className="absolute top-0 right-0 h-full flex items-center pr-2 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      {showButton && (
        <button
          onClick={handleButtonClick}
          className={`${
            isTesting ? "bg-blue-300" : "bg-blue-500"
          } text-white px-4 py-2 rounded mb-2`}
          disabled={isTesting}
          // style={{
          //   background:
          //     "linear-gradient(349deg, rgba(2,0,36,1) 0%, rgba(9,121,20,1) 51%)",
          // }}
        >
          {isTesting ? (
            <svg
              className="animate-spin h-5 w-5 mr-3 text-white"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C6.4 0 2 4.4 2 10h2zm2 5.3L6.3 18l1.4-1.4A7.98 7.98 0 014 12H2c0 3.4 1.8 6.4 4.5 8.1l-.5-1.8z"
              ></path>
            </svg>
          ) : (
            "Test Connection"
          )}
        </button>
      )}

      {successMessage && (
        <p className="text-green-500 mt-2">{successMessage}</p>
      )}

      {successMessage.includes("Connected Successfully") && (
        <button
          onClick={openModal}
          className="bg-blue-500  text-white px-4 py-2 rounded mb-2 hover:bg-blue-300"
        >
          Test {selectedWorkFlow} Bot
        </button>
      )}

      {showModal && createPortal(<Modal />, document.body)}
    </div>
  );
};

export default WorkFlowSelector;
