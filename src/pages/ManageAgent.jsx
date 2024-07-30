import React, { useEffect, useState } from "react";
import MultiStepForm from "../components/multistep/MultiStepForm";
import { RiRobot3Line } from "react-icons/ri";
import Modal from "../components/multistep/Modal";
import AgentTable from "../components/table/AgentTable";

export default function ManageAgent({ onDataChange }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    agentName: "",
    agentDescription: "",
    agentType: "",
    workFlow: "",
    prompt: "",
    kbType: "",
    deployType: "",
    status: "",
  });
  const [emailData, setEmailData] = useState({
    email: "",
    password: "",
    iMap: "",
  });

  const data = [formData];

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    onDataChange(formData?.status);
  }, [formData?.status]);

  return (
    <div className="h-[685px] bg-background p-4">
      <div className="w-full flex ">
        <button
          onClick={openModal}
          className="flex items-center gap-2 bg-white rounded-xl px-5 py-4 shadow-2xl text-gray-700 font-manrope"
        >
          <RiRobot3Line /> Add
        </button>
      </div>

      <div>
        <AgentTable data={data} />
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <MultiStepForm
          formData={formData}
          setFormData={setFormData}
          emailData={emailData}
          setEmailData={setEmailData}
          onClose={closeModal}
        />
      </Modal>
    </div>
  );
}
