import "./Footer.css";
type Props = { currentStep: number; onBack?: () => void; onNext: () => void };
export default function Footer({ currentStep, onBack, onNext }: Props) {
  return (
    <footer className="footer">
      {currentStep === 1 ? (
        <button type="submit" className="next-btn">
          Next Step
        </button>
      ) : (
        <>
          <button className="back-button" onClick={onBack}>
            Go Back
          </button>{" "}
          <button className="next-btn" onClick={onNext}>
            Next Step
          </button>
        </>
      )}
    </footer>
  );
}
