import "./BillingToggle.css";

type Props = {
  isYearly: boolean;
  onChange: (isYearly: boolean) => void;
};

export default function BillingToggle({ isYearly, onChange }: Props) {
  return (
    <div className="billing-toggle">
      <span className={!isYearly ? "active" : ""}>Monthly</span>

      <label className="switch">
        <input
          type="checkbox"
          checked={isYearly}
          onChange={(e) => onChange(e.target.checked)}
        />
        <span className="slider" />
      </label>

      <span className={isYearly ? "active" : ""}>Yearly</span>
    </div>
  );
}
