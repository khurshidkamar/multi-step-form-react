import Footer from "./Footer";
import type { WizardFormData } from "../data/FormData";
import { plans } from "../data/plans";
import { addon } from "../data/addon";
import "./SummaryStep.css";
type Props = {
  currentStep: number;
  data: WizardFormData;
  onBack: () => void;
  onNext: () => void;
};

export default function SummaryStep({
  currentStep,
  data,
  onBack,
  onNext,
}: Props) {
  const selectedPlan = plans.find((p) => p.id === data.plan)!;

  const planPrice = data.isYearly
    ? selectedPlan.yearlyPrice
    : selectedPlan.monthlyPrice;

  const selectedAddons = addon.filter((a) => data.addons.includes(a.id));

  const addonsTotal = selectedAddons.reduce((sum, a) => {
    return sum + (data.isYearly ? a.yearlyPrice : a.monthlyPrice);
  }, 0);

  const total = planPrice + addonsTotal;

  return (
    <div className="wizard-main-content">
      <h2 className="wizard-title">Finishing up</h2>
      <h3 className="title-caption">
        Double-check everything looks OK before confirming.
      </h3>

      <div className="summary-container">
        {/* Plan */}
        <div className="summary-box">
          <div className="main-plan">
            <div>
              <span className="plan-name">
                {selectedPlan.title} ({data.isYearly ? "Yearly" : "Monthly"})
              </span>
              <button type="button" className="change-btn" onClick={onBack}>
                Change
              </button>
            </div>

            <span className="plan-price">
              ${planPrice}/{data.isYearly ? "yr" : "mo"}
            </span>
          </div>

          <hr />

          {/* Add-ons */}
          {selectedAddons.map((a) => (
            <div key={a.id} className="addon-row">
              <span>{a.title}</span>
              <span>
                +$
                {data.isYearly ? a.yearlyPrice : a.monthlyPrice}/
                {data.isYearly ? "yr" : "mo"}
              </span>
            </div>
          ))}
        </div>

        {/* Total */}
        <div className="total-row">
          <span>Total (per {data.isYearly ? "year" : "month"})</span>
          <span className="total-price">
            ${total}/{data.isYearly ? "yr" : "mo"}
          </span>
        </div>
      </div>

      <Footer currentStep={currentStep} onBack={onBack} onNext={onNext} />
    </div>
  );
}
