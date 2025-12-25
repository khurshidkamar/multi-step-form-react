import Footer from "./Footer";
import "./AddOnsStep.css";
import { addon } from "../data/addon";
import CheckBox from "./CheckBox";
import type { WizardFormData } from "../data/FormData";

type Props = {
  currentStep: number;
  data: WizardFormData;
  setData: React.Dispatch<React.SetStateAction<WizardFormData>>;
  onBack: () => void;
  onNext: () => void;
};

export default function AddOnsStep({
  currentStep,
  data,
  setData,
  onBack,
  onNext,
}: Props) {
  // Toggle addon selection
  const toggleAddon = (id: string) => {
    setData((prev) => ({
      ...prev,
      addons: prev.addons.includes(id)
        ? prev.addons.filter((addonId) => addonId !== id)
        : [...prev.addons, id],
    }));
  };

  return (
    <div className="wizard-main-content">
      <h2 className="wizard-title">Pick add-ons</h2>

      <h3 className="title-caption">
        Add-ons help enhance your gaming experience.
      </h3>

      <form className="form-check">
        {addon.map((item) => (
          <CheckBox
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            price={
              data.isYearly
                ? `$${item.yearlyPrice}/yr`
                : `$${item.monthlyPrice}/mo`
            }
            checked={data.addons.includes(item.id)}
            onToggle={toggleAddon}
          />
        ))}
      </form>

      <Footer currentStep={currentStep} onBack={onBack} onNext={onNext} />
    </div>
  );
}
