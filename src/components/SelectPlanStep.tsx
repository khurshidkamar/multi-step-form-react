import { useState } from "react";
import Footer from "./Footer";
import "./SelectPlanStep.css";
import BillingToggle from "./BillingToggle";
import PlanCard from "./PlanCard";
import { plans } from "../data/plans";

type Props = { currentStep: number; onBack: () => void; onNext: () => void };

export default function SelectPlanStep({ currentStep, onBack, onNext }: Props) {
  const [isYearly, setIsYearly] = useState(false);
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
              !isYearly ? `$${plan.monthlyPrice}/mo` : `$${plan.yearlyPrice}/yr`
            }
            icon={plan.icon}
            isYearly={isYearly}
            selected={selectedPlan === plan.id}
            onSelect={() => setSelectedPlan(plan.id)}
          />
        ))}
      </div>
      <BillingToggle isYearly={isYearly} onChange={setIsYearly} />
      <Footer currentStep={currentStep} onBack={onBack} onNext={onNext} />
    </div>
  );
}
