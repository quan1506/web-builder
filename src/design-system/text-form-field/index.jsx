import BaseFormField from "../base-form-field";
import { useId } from "../../hooks";
import "./textFormField.css";

const TextFormField = ({ label, value, onChange }) => {
  const inputId = useId("text-input-");

  return (
    <BaseFormField label={label} labelHtmlFor={inputId}>
      <input
        id={inputId}
        value={value}
        onChange={onChange}
        className="text-form-field-input"
        type="text"
      />
    </BaseFormField>
  );
};

export default TextFormField;
