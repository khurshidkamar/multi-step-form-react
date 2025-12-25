import "./Footer.css";

type Props = {
  currentStep: number;
  onBack?: () => void;
  onNext: () => void;
};

export default function Footer({ currentStep, onBack, onNext }: Props) {
  return (
    <footer className="footer">
      {/* STEP 1 */}
      {currentStep === 1 && (
        <button type="submit" className="next-btn">
          Next Step
        </button>
      )}

      {/* STEP 4 */}
      {currentStep === 4 && (
        <>
          <button className="back-button" onClick={onBack}>
            Go Back
          </button>
          <button className="next-btn" onClick={onNext}>
            Confirm
          </button>
        </>
      )}

      {/* STEPS 2 & 3 */}
      {currentStep !== 1 && currentStep !== 4 && (
        <>
          <button className="back-button" onClick={onBack}>
            Go Back
          </button>
          <button className="next-btn" onClick={onNext}>
            Next Step
          </button>
        </>
      )}
    </footer>
  );
}
