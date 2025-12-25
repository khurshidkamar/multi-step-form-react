import type { WizardFormData } from "../data/FormData";
import Footer from "./Footer";

type Props = {
  currentStep: number;
  data: WizardFormData;
  onBack: () => void;
};

export default function SummaryStep({ currentStep, data, onBack }: Props) {
  return (
    <div className="wizard-main-content">
      <h2 className="wizard-title">Finishing up</h2>
      <h3 className="title-caption">
        Double-check everything looks OK befor confirming.
      </h3>
      <Footer currentStep={currentStep} onBack={onBack} />
    </div>
  );
}
