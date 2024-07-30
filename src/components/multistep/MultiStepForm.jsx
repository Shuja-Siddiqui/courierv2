import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";

const MultiStepForm = ({
  formData,
  setFormData,
  emailData,
  setEmailData,
  onClose,
}) => {
  const [currentStep, setCurrentStep] = useState(1);

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

  const handleSubmit = () => {
    console.log(formData);
    setCurrentStep(6);
    formData.status = "Active";
    onClose();
  };

  const renderStepIndicator = () => (
    <div className="flex justify-center items-center mb-6">
      {[1, 2, 3, 4, 5, 6].map((step) => (
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
    <div className="max-w-[100%] mx-auto p-6 bg-gray-800 rounded-lg shadow-md border border-gray-600 h-[80vh] overflow-y-scroll">
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
          // handleSubmit={handleSubmit}
          handleChange={handleChange}
          handleEmail={handleEmail}
          emailData={emailData}
          values={formData}
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
