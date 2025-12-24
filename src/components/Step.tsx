import "./Step.css";
type Props = { number: number; label: string; active: boolean };

export default function Step({ number, label, active }: Props) {
  return (
    <>
      <div>
        {active ? (
          <>
            <div className="step-number-grid">
              <div className="step-number-active">{number}</div>
              <div className="step-label">
                <span>Step {number}</span>
                <span className="step-label">{label}</span>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="step-number-grid">
              <div className="step-number">{number}</div>
              <div className="step-label">
                <span>Step {number}</span>
                <span className="step-label">{label}</span>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
