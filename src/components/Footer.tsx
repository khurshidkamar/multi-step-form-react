import "./Footer.css";
type Props = { currentStep: number; onBack?: () => void; onNext: () => void };
export default function Footer({ currentStep, onBack, onNext }: Props) {
  return (
    <footer className="footer">
      {currentStep === 1 ? null : (
        <button className="back-button" onClick={onBack}>
          Go Back
        </button>
      )}
      <button onClick={onNext} className="next-btn">
        Next Step
      </button>
    </footer>
  );
}
