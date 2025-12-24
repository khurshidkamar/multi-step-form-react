import Step from "./Step";
type Props = { currentStep: number };
export default function StepIndicator({ currentStep }: Props) {
  return (
    <aside className="sidebar">
      <Step number={1} label="Your Info" active={currentStep === 1} />
      <Step number={2} label="Select Plan" active={currentStep === 2} />
      <Step number={3} label="Add-ons" active={currentStep === 3} />
      <Step number={4} label="Summary" active={currentStep === 4} />
    </aside>
  );
}
