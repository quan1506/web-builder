import BaseFormField from "../base-form-field";
import { useId } from "../../hooks";
import "./selectFormField.css";

const SelectFormField = ({ label, value, options, onChange }) => {
  const inputId = useId("select-input-");

  return (
    <BaseFormField label={label} labelHtmlFor={inputId}>
      <select
        id={inputId}
        value={value}
        onChange={onChange}
        className="select-form-field-input"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </BaseFormField>
  );
};

export default SelectFormField;
