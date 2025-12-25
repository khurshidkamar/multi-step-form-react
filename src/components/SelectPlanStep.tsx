import { useState } from "react";
import Footer from "./Footer";
import "./SelectPlanStep.css";
import BillingToggle from "./BillingToggle";
import PlanCard from "./PlanCard";
import { plans } from "../data/plans";

import type { WizardFormData } from "../data/FormData";

type Props = {
  currentStep: number;
  data: WizardFormData;
  setData: React.Dispatch<React.SetStateAction<WizardFormData>>;
  onBack: () => void;
  onNext: () => void;
};

export default function SelectPlanStep({
  currentStep,
  data,
  setData,
  onBack,
  onNext,
}: Props) {
  const [selectedPlan, setSelectedPlan] = useState("arcade");

  return (
    <div className="wizard-main-content">
      <h2 className="wizard-title">Select your plan</h2>
      <h3 className="title-caption">
        You have the option of monthly or yearly billing.
      </h3>
      <div className="grid-card-container">
        {plans.map((plan) => (
          <PlanCard
            key={plan.id}
            title={plan.title}
            price={
              !data.isYearly
                ? `$${plan.monthlyPrice}/mo`
                : `$${plan.yearlyPrice}/yr`
            }
            icon={plan.icon}
            isYearly={data.isYearly}
            selected={selectedPlan === plan.id}
            onSelect={() => setSelectedPlan(plan.id)}
          />
        ))}
      </div>
      <BillingToggle
        isYearly={data.isYearly}
        onChange={(value: boolean) =>
          setData((prev) => ({
            ...prev,
            isYearly: value,
          }))
        }
      />
      <Footer currentStep={currentStep} onBack={onBack} onNext={onNext} />
    </div>
  );
}
