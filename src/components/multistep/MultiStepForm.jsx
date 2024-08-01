import React, { useState, useEffect } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";
import { selectAgentDetails, setAgentData } from "../../redux/agentSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectConfirm, setFalse } from "../../redux";
import { addAgent } from "../../api/agent";

const MultiStepForm = ({
  formData,
  setFormData,
  emailData,
  setEmailData,
  onClose,
  loader,
  openConfirm,
  confirmModalOpen,
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const dispatch = useDispatch();
  const confirm = useSelector(selectConfirm);
  const agents = useSelector(selectAgentDetails);

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleChange = (input) => (e) => {
    setFormData({ ...formData, [input]: e.target.value });
  };

  const handleEmail = (input) => (e) => {
    setEmailData({ ...emailData, [input]: e.target.value });
  };

  const handleSubmit = async () => {
    // setCurrentStep(6);
    formData.status = "Active";
    openConfirm();
    // onClose();
  };

  useEffect(() => {
    if (confirm) {
      const data = agents === null ? [] : agents;
      const newArray = [...data, formData];
      dispatch(setAgentData(newArray));
      // Add Agent
      console.log("Multi", formData);
      const obj = {
        name: formData?.agentName,
        description: formData?.agentDescription,
        agent_type: formData?.agentType,
        workflow: formData?.workFlow,
        prompt: formData?.prompt,
        kb_type: formData?.kbType,
        db_type: formData?.dbType,
        db_connection: formData?.dbConnection,
        deploy_type: formData?.deployType,
        external_model: formData?.externalModel,
        status: formData?.status,
      };
      // addAgent(obj)
      //   .then((res) => {
      //     console.log("res", res);
      //   })
      //   .catch((err) => console.log(err));
      // reset Form
      setFormData({
        agentName: "",
        agentDescription: "",
        agentType: "",
        workFlow: "",
        prompt: "",
        kbType: "",
        deployType: "",
        status: "",
      });
      onClose();
      loader();
      dispatch(setFalse());
    }
  }, [confirmModalOpen]);

  const renderStepIndicator = () => (
    <div className="flex justify-center items-center mb-6">
      {formData?.agentType === "Audit"
        ? [1, 2, 3, 4, 5].map((step) => (
            <div key={step} className="flex items-center">
              <div
                className={`w-8 h-8 flex justify-center items-center rounded-full ${
                  currentStep === step
                    ? "bg-gray-900 text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                {step}
              </div>
              {step < 5 && <div className="w-10 h-1 bg-gray-300"></div>}
            </div>
          ))
        : [1, 2, 3, 4, 5, 6].map((step) => (
            <div key={step} className="flex items-center">
              <div
                className={`w-8 h-8 flex justify-center items-center rounded-full ${
                  currentStep === step
                    ? "bg-gray-900 text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                {step}
              </div>
              {step < 6 && <div className="w-10 h-1 bg-gray-300"></div>}
            </div>
          ))}
    </div>
  );

  return (
    <div className="max-w-[100%] mx-auto p-6 bg-cardbackground rounded-lg shadow-md border border-black h-[80vh] overflow-auto custom-scrollbar">
      {renderStepIndicator()}

      {currentStep === 1 && (
        <Step1
          nextStep={nextStep}
          handleChange={handleChange}
          values={formData}
        />
      )}
      {currentStep === 2 && (
        <Step2
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          values={formData}
        />
      )}
      {currentStep === 3 && (
        <Step3
          nextStep={nextStep}
          prevStep={prevStep}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          values={formData}
        />
      )}
      {currentStep === 4 && (
        <Step4
          prevStep={prevStep}
          nextStep={nextStep}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          values={formData}
        />
      )}
      {currentStep === 5 && (
        <Step5
          prevStep={prevStep}
          nextStep={nextStep}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          handleEmail={handleEmail}
          emailData={emailData}
          values={formData}
          setFormData={setFormData}
        />
      )}

      {currentStep === 6 && (
        <Step6
          prevStep={prevStep}
          // nextStep={nextStep}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          handleEmail={handleEmail}
          values={formData}
        />
      )}
      {/* {currentStep === 5 && <Step5 values={formData} />} */}
    </div>
  );
};

export default MultiStepForm;
