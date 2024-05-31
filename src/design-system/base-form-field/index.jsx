import "./baseFormField.css";

const BaseFormField = ({ label, labelHtmlFor, helperText, children }) => (
  <div className="base-form-field">
    <div className="base-form-field-label-container">
      <label htmlFor={labelHtmlFor}>{label}</label>
      {helperText && (
        <span className="base-form-field-helper-text">{helperText}</span>
      )}
    </div>
    {children}
  </div>
);

export default BaseFormField;
