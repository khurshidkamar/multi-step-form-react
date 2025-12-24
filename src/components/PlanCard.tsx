import "./PlanCard.css";
type PlanCardProps = {
  title: string;
  price: string;
  icon: string;
  selected: boolean;
  isYearly: boolean;
  onSelect: () => void;
};
export default function PlanCard({
  title,
  price,
  icon,
  selected,
  onSelect,
  isYearly,
}: PlanCardProps) {
  return (
    <button
      type="button"
      className={`grid-card ${selected ? "selected" : ""}`}
      onClick={onSelect}
    >
      <img src={icon} alt={title} />
      <div className="card-text">
        <span className="plan-title">{title}</span>
        <span className="plan-price">{price}</span>
        {isYearly && <span className="plan-offer">2 months free</span>}
      </div>
    </button>
  );
}
