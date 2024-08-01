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
      className="fixed bottom-2 right-0 w-[20%] h-[60vh] max-h-[600px] flex flex-col bg-background rounded-2xl shadow-lg border border-light-grey"
      onClick={handleOutsideClick}
    >
      <div className="flex items-center px-4 py-3 bg-card rounded-t-2xl ">
        <div className="flex items-center gap-2">
          <img
            src="http://placehold.it/345x230"
            width="32"
            height="32"
            alt="Company Logo"
            style={{ aspectRatio: 32 / 32, objectFit: "cover" }}
            className="rounded-full"
          />
          <span className="text-lg font-semibold text-gray-200 font-manrope">
            {selectedWorkFlow} Bot
          </span>
        </div>
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
          onClick={closeModal}
        >
          X
        </button>
      </div>
      <div className="flex-1 overflow-y-auto custom-scrollbar p-4 space-y-4 font-manrope">
        {messages.length > 0 ? (
          messages.map((msg, index) => (
            <div
              key={index}
              className={`flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm ${
                msg.sender === "user"
                  ? "ml-auto bg-gray-400 text-white"
                  : "bg-gray-200 text-gray-900"
              }`}
            >
              {msg.image && (
                <img
                  src={msg.image}
                  alt="Preview"
                  className="w-200px h-300px mb-2"
                />
              )}
              {msg.text && <p>{msg.text}</p>}
              {analyzing && msg.rating === null && (
                
                <p className="border-t-2 border-cardbackground">Analyzing...</p>
              )}
              {msg.rating !== null && (
                <p>Rating: {msg.rating}</p>
              )}
            </div>
          ))
        ) : (
          <p className="text-white">Please upload image for Audit</p>
        )}
      </div>
      <footer className="bg-card rounded-b-2xl p-4 flex items-center gap-2">
        <input
          type="file"
          onChange={handleFileChange }
          className="rounded-md w-full border-none bg-gray-400 bg-opacity-50 px-6 py-2 text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
          placeholder="Upload File"
        />
        <button
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gray-500 hover:bg-gray-700 text-white hover:bg-primary/90 h-10 w-10"
          onClick={handleMessageSend}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="m22 2-7 20-4-9-9-4Z"></path>
            <path d="M22 2 11 13"></path>
          </svg>
          <span className="sr-only">Send</span>
        </button>
      </footer>
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
            // className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-8"
            className="rounded-md w-full border-none bg-gray-400 bg-opacity-50 px-6 py-2  text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
          >
            <option value="" disabled className="bg-cardbackground">
              Select a Model
            </option>
            {WorkFlow.map((flow, index) => (
              <option className="bg-cardbackground" key={index} value={flow}>
                {flow}
              </option>
            ))}
          </select>
          {/* <div className="absolute top-0 right-0 h-full flex items-center pr-2 pointer-events-none">
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
          </div> */}
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
