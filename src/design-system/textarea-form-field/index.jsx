import BaseFormField from "../base-form-field";
import { useId } from "../../hooks";
import "./textAreaFormField.css";

const TextAreaFormField = ({ label, value, onChange, ...props }) => {
  const inputId = useId("textarea-input-");

  return (
    <BaseFormField label={label} labelHtmlFor={inputId}>
      <textarea
        id={inputId}
        value={value}
        onChange={onChange}
        className="textarea-form-field-input"
        rows={6}
        {...props}
      />
    </BaseFormField>
  );
};

export default TextAreaFormField;
