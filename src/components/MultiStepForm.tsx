import { useState } from "react";
import StepIndicator from "./StepIndicator";
import PersonalInfoStep from "./PersonalInfoStep";
import SelectPlanStep from "./SelectPlanStep";
import AddOnsStep from "./AddOnsStep";
import SummaryStep from "./SummaryStep";
import "./MultiStepForm.css";
import type { WizardFormData } from "../data/FormData";
import ThankYouStep from "./ThankYouStep";

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<WizardFormData>({
    name: "",
    email: "",
    phone: "",
    plan: "arcade",
    isYearly: false,
    addons: [],
  });
  return (
    <>
      <div className="form-container">
        <div className="wizard-main">
          <div className="wizard-card">
            <StepIndicator currentStep={step} />
          </div>
          <div className="wizard-content">
            {step === 1 && (
              <PersonalInfoStep
                currentStep={step}
                data={formData}
                setData={setFormData}
                onNext={() => setStep(2)}
              />
            )}
            {step === 2 && (
              <SelectPlanStep
                currentStep={step}
                onBack={() => setStep(1)}
                data={formData}
                setData={setFormData}
                onNext={() => setStep(3)}
              />
            )}
            {step === 3 && (
              <AddOnsStep
                currentStep={step}
                onBack={() => setStep(2)}
                data={formData}
                setData={setFormData}
                onNext={() => setStep(4)}
              />
            )}
            {step === 4 && (
              <SummaryStep
                currentStep={step}
                data={formData}
                onBack={() => setStep(3)}
                onNext={() => setStep(5)}
              />
            )}
            {step === 5 && <ThankYouStep />}
          </div>
        </div>
      </div>
    </>
  );
}
