import { useId } from "../../hooks";
import "./colorFormField.css";

const ColorFormField = ({ label, value, onChange }) => {
  const inputId = useId("color-input-");

  return (
    <div className="color-form-field">
      <div>
        <label htmlFor={inputId}>{label}</label>
        <span className="color-form-field-current-value">{value}</span>
      </div>
      <input
        type="color"
        id={inputId}
        value={value || "#ffffff"}
        onChange={onChange}
        className="color-form-field-input"
      />
    </div>
  );
};

export default ColorFormField;
