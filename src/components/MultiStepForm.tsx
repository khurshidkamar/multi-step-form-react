import { useState } from "react";
import StepIndicator from "./StepIndicator";
import PersonalInfoStep from "./PersonalInfoStep";
import SelectPlanStep from "./SelectPlanStep";
import AddOnsStep from "./AddOnsStep";
import SummaryStep from "./SummaryStep";
import "./MultiStepForm.css";
export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  return (
    <>
      <div className="form-container">
        <div className="wizard-main">
          <div className="wizard-card">
            <StepIndicator currentStep={step} />
          </div>
          <div className="wizard-content">
            {step === 1 && <PersonalInfoStep onNext={() => setStep(2)} />}
            {step === 2 && <SelectPlanStep onNext={() => setStep(3)} />}
            {step === 3 && <AddOnsStep onNext={() => setStep(4)} />}
            {step === 4 && <SummaryStep />}
          </div>
        </div>
      </div>
    </>
  );
}
