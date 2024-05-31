import BaseFormField from "../base-form-field";
import { useId } from "../../hooks";
import "./colorFormField.css";

const ColorFormField = ({ label, value, onChange }) => {
  const inputId = useId("color-input-");

  return (
    <BaseFormField label={label} labelHtmlFor={inputId} helperText={value}>
      <input
        type="color"
        id={inputId}
        value={value || "#ffffff"}
        onChange={onChange}
        className="color-form-field-input"
      />
    </BaseFormField>
  );
};

export default ColorFormField;
