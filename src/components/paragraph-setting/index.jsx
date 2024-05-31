import { useShallow } from "zustand/react/shallow";
import { ColorFormField, RangeSliderFormField } from "../../design-system";
import { usePageBuilderStore } from "../../hooks";

const ParagraphSettings = ({ element }) => {
  const { id, style } = element;
  const { updateElementStyle } = usePageBuilderStore(
    useShallow((state) => ({
      updateElementStyle: state.updateElementStyle,
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

  return (
    <>
      <ColorFormField
        label="Text color"
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
    </>
  );
};

export default ParagraphSettings;
