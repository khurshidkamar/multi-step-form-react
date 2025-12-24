import "./InputBox.css";
type Props = { textLabel: string; placeHolder: string };

export default function InputBox({ textLabel, placeHolder }: Props) {
  return (
    <div className="input-box">
      <label>{textLabel}</label>
      <input placeholder={placeHolder} />
    </div>
  );
}
