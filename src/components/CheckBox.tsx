type Props = {
  id: string;
  title: string;
  description: string;
  price: string;
  checked: boolean;
  onToggle: (id: string) => void;
};

export default function CheckBox({
  id,
  title,
  description,
  price,
  checked,
  onToggle,
}: Props) {
  return (
    <label className={`addon-item ${checked ? "selected" : ""}`}>
      <input
        type="checkbox"
        id={id}
        className="addon-checkbox"
        checked={checked}
        onChange={() => onToggle(id)}
      />

      <div className="addon-text">
        <span className="addon-checkbox-label">{title}</span>
        <span className="addon-description">{description}</span>
      </div>

      <div className="addon-price">
        <span>{price}</span>
      </div>
    </label>
  );
}
