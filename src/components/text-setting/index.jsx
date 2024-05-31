import { useShallow } from "zustand/react/shallow";
import {
  ColorFormField,
  RangeSliderFormField,
  SelectFormField,
  TextareaFormField,
} from "../../design-system";
import { usePageBuilderStore } from "../../hooks";
import { FONT_WEIGHT_OPTIONS } from "../../config";

const TextSettings = ({ element }) => {
  const { id, style } = element;
  const { updateElementStyle, updateElementTextContent } = usePageBuilderStore(
    useShallow((state) => ({
      updateElementStyle: state.updateElementStyle,
      updateElementTextContent: state.updateElementTextContent,
    }))
  );
  const handleColorChange = (e) => {
    const { value } = e.target;
    updateElementStyle(id, { color: value });
  };
  const handleFontSizeChange = (e) => {
    const value = Number(e.target.value);
    updateElementStyle(id, { fontSize: value });
  };
  const handleFontWeightChange = (e) => {
    const value = Number(e.target.value);
    updateElementStyle(id, { fontWeight: value });
  };
  const handleTextContentChange = (e) => {
    const { value } = e.target;
    updateElementTextContent(id, value);
  };

  return (
    <>
      <ColorFormField
        label="Font color"
        value={style.color}
        onChange={handleColorChange}
      />
      <RangeSliderFormField
        label="Font size"
        min={6}
        max={80}
        value={style.fontSize}
        onChange={handleFontSizeChange}
      />
      <SelectFormField
        label="Font weight"
        options={FONT_WEIGHT_OPTIONS}
        value={style.fontWeight}
        onChange={handleFontWeightChange}
      />
      <TextareaFormField
        label="Content"
        value={element.value}
        onChange={handleTextContentChange}
      />
    </>
  );
};

export default TextSettings;
