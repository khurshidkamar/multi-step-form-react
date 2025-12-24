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
            {step === 1 && (
              <PersonalInfoStep currentStep={step} onNext={() => setStep(2)} />
            )}
            {step === 2 && (
              <SelectPlanStep
                currentStep={step}
                onBack={() => setStep(1)}
                onNext={() => setStep(3)}
              />
            )}
            {step === 3 && (
              <AddOnsStep
                currentStep={step}
                onBack={() => setStep(2)}
                onNext={() => setStep(4)}
              />
            )}
            {step === 4 && (
              <SummaryStep currentStep={step} onBack={() => setStep(3)} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
