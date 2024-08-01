import React, { useEffect, useState } from "react";
import MultiStepForm from "../components/multistep/MultiStepForm";
import { RiRobot3Line } from "react-icons/ri";
import Modal from "../components/multistep/Modal";
import AgentTable from "../components/table/AgentTable";
import { selectAgentDetails } from "../redux/agentSlice";
import { useDispatch, useSelector } from "react-redux";
import ConfirmModal from "../components/multistep/ConfirmModal";
import { setTrue } from "../redux";
import { TbHeartRateMonitor } from "react-icons/tb";
import { BiDiamond } from "react-icons/bi";

export default function ManageAgent({ onDataChange }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    agentName: "",
    agentDescription: "",
    agentType: "",
    workFlow: "",
    prompt: "",
    kbType: "Database",
    deployType: "",
    status: "",
    externalModel: "",
  });
  const [emailData, setEmailData] = useState({
    clientSecret: "",
    refreshToken: "",
  });
  const [isTesting, setIsTesting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleModalClose = (response) => {
    setConfirmModalOpen(false);
    console.log("emailData", emailData);
    // console.log("response", response);

    if (response === "yes") {
      dispatch(setTrue());
    } else if (response === "no") {
      setFormData({
        agentName: "",
        agentDescription: "",
        agentType: "",
        workFlow: "",
        prompt: "",
        kbType: "Database",
        deployType: "",
        status: "",
      });
      closeModal();
    }
  };

  // const data = useSelector(selectAgentDetails);
  const data = JSON.parse(localStorage.getItem("agentData"));

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleButtonClick = () => {
    setIsTesting(true);
    setTimeout(() => {
      setSuccessMessage(`Initalizing ${formData?.agentName} Agent`);
      setTimeout(() => {
        setSuccessMessage(`Workflow ${formData?.workFlow}`);
        setTimeout(() => {
          setSuccessMessage(`Building ......`);
          setTimeout(() => {
            setSuccessMessage(`Deploying .......`);
            setIsTesting(false);
          }, 2000);
        }, 2000);
      }, 2000);
    }, 2000);
  };

  useEffect(() => {
    onDataChange(formData?.status);
  }, [formData?.status]);

  return (
    <div className="h-[100vh] bg-background p-4">
      <div className="w-full flex justify-between ">
        <div className="flex justify-center items-center text-white text-5xl gap-2">
          <span>
            <BiDiamond className="mt-2" />
          </span>
          <span>Agents</span>
        </div>
        <button
          onClick={openModal}
          className="bg-cardbackground px-4 py-2 hover:scale-105  border-[0.5px] border-gray-700 rounded-md flex  justify-center items-center gap-2 text-lg"
        >
          <RiRobot3Line /> Add
        </button>
      </div>

      {isTesting ? (
        <div className="w-full mt-4 p-4">
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
          {successMessage && (
            <p className="text-green-500 mt-2">{successMessage}</p>
          )}
        </div>
      ) : (
        <div className="mt-6">
          <AgentTable data={data} />
        </div>
      )}

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <MultiStepForm
          formData={formData}
          setFormData={setFormData}
          emailData={emailData}
          setEmailData={setEmailData}
          onClose={closeModal}
          loader={handleButtonClick}
          openConfirm={() => setConfirmModalOpen(true)}
          confirmModalOpen={confirmModalOpen}
        />
      </Modal>

      <ConfirmModal isOpen={confirmModalOpen} onClose={handleModalClose} />
    </div>
  );
}
