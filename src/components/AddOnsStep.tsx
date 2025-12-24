import Footer from "./Footer";
type Props = { currentStep: number; onBack: () => void; onNext: () => void };
export default function AddOnsStep({ currentStep, onBack, onNext }: Props) {
  return (
    <div className="wizard-main-content">
      <h2 className="wizard-title">Pick add-ons</h2>
      <h3 className="title-caption">
        Add-ons help enhance your gaming experience.
      </h3>
      <Footer currentStep={currentStep} onBack={onBack} onNext={onNext} />
    </div>
  );
}
