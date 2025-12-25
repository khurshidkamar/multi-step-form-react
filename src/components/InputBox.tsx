import "./InputBox.css";
type Props = {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: string;
};

export default function InputBox({
  label,
  placeholder,
  value,
  onChange,
  error,
  type = "text",
}: Props) {
  return (
    <div className="input-box">
      <label>{label}</label>

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={error ? "error" : ""}
      />

      {error && <span className="error-text">{error}</span>}
    </div>
  );
}
