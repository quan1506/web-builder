import BaseFormField from "../base-form-field";
import { useId } from "../../hooks";
import "./rangeSliderFormField.css";

const RangeSliderFormField = ({ label, min, max, value, onChange }) => {
  const inputId = useId("range-input-");

  return (
    <BaseFormField label={label} labelHtmlFor={inputId} helperText={value}>
      <input
        type="range"
        id={inputId}
        min={min}
        max={max}
        value={value}
        onChange={onChange}
        className="range-slider-form-field-input"
      />
    </BaseFormField>
  );
};

export default RangeSliderFormField;
