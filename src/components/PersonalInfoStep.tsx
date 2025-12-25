import Footer from "./Footer";
import InputBox from "./InputBox";
import "./PersonalInfoStep.css";
type Props = { currentStep: number; onNext: () => void };

export default function PersonalInfoStep({ currentStep, onNext }: Props) {
  return (
    <div className="wizard-main-content">
      <h2 className="wizard-title">Personal info</h2>
      <h3 className="title-caption">
        Please prove your name, email address, and phone number.
      </h3>
      <form>
        <InputBox textLabel={"Name"} placeHolder={"e.g. Stephen King"} />
        <InputBox
          textLabel={"Email Address"}
          placeHolder={"e.g. stephenking@lorem.com"}
        />
        <InputBox textLabel={"Phone "} placeHolder={"e.g. Stephen King"} />
      </form>
      <Footer currentStep={currentStep} onNext={onNext} />
    </div>
  );
}
