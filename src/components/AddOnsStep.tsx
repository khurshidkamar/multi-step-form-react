import Footer from "./Footer";
import "./AddOnsStep.css";
import { addon } from "../data/addon";
import CheckBox from "./CheckBox";
type Props = {
  currentStep: number;
  onBack: () => void;
  onNext: () => void;
  isYearly: boolean;
};
export default function AddOnsStep({
  currentStep,
  onBack,
  onNext,
  isYearly,
}: Props) {
  return (
    <div className="wizard-main-content">
      <h2 className="wizard-title">Pick add-ons</h2>
      <h3 className="title-caption">
        Add-ons help enhance your gaming experience.
      </h3>
      <form className="form-check">
        {addon.map((addon) => (
          <CheckBox
            key={addon.id}
            title={addon.title}
            description={addon.description}
            price={
              !isYearly
                ? `$${addon.monthlyPrice}/mo`
                : `$${addon.yearlyPrice}/yr`
            }
          />
        ))}
      </form>
      <Footer currentStep={currentStep} onBack={onBack} onNext={onNext} />
    </div>
  );
}
