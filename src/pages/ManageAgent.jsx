import React, { useState } from "react";
import MultiStepForm from "../components/multistep/MultiStepForm";
import { RiRobot3Line } from "react-icons/ri";
import Modal from "../components/multistep/Modal";

export default function ManageAgent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    agentName: "",
    agentDescription: "",
    agentType: "",
    prompt:
      "You are an agent providing support for a logistics company known as Raven Force. You have access to a Knowledge Base (KB) containing all customer order information. Your task is to respond to customer inquiries based on this data. Ensure that your responses are accurate and confidential, so no customer information is shared or reviewed by others.",
    kbType: "",
  });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="h-[100vh] bg-gray-800">
      <div className="w-full flex justify-end">
        <button
          onClick={openModal}
          className="flex items-center gap-2 bg-white rounded-xl px-5 py-4 shadow-2xl text-gray-700 font-manrope "
        >
          <RiRobot3Line /> Add
        </button>
      </div>
      <div>{/* <DynamicTable columns={columns} data={data} /> */}</div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <MultiStepForm formData={formData} setFormData={setFormData} />
      </Modal>
    </div>
  );
}
