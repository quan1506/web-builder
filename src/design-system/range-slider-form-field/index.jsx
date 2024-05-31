import { useId } from "../../hooks";
import "./rangeSliderFormField.css";

const RangeSliderFormField = ({ label, min, max, value, onChange }) => {
  const inputId = useId("range-input-");

  return (
    <div className="range-slider-form-field">
      <div>
        <label htmlFor={inputId}>{label}</label>
        <span className="range-slider-form-field-current-value">{value}</span>
      </div>

      <input
        type="range"
        id={inputId}
        min={min}
        max={max}
        value={value}
        onChange={onChange}
        className="range-slider-form-field-input"
      />
    </div>
  );
};

export default RangeSliderFormField;
