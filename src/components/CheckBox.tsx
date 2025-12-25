type Props = {
  key: string;
  title: string;
  description: string;
  price: string;
};
export default function CheckBox({ key, title, description, price }: Props) {
  return (
    <label htmlFor={key} className="addon-item">
      <input type="checkbox" id="checkservice1" className="addon-checkbox" />

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
