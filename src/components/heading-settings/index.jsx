import { SelectFormField } from "../../design-system";
import { usePageBuilderStore } from "../../hooks";
import { HEADING_TAG_OPTIONS } from "../../config";
import TextSettings from "../text-setting";
import { useShallow } from "zustand/react/shallow";

const HeadingSettings = ({ element }) => {
  const { id, tag } = element;
  const { updateElementTag, updateElementStyle } = usePageBuilderStore(
    useShallow((state) => ({
      updateElementTag: state.updateElementTag,
      updateElementStyle: state.updateElementStyle,
    }))
  );

  const handleHeadingTagChange = (e) => {
    const { value } = e.target;
    const headingFontSize = HEADING_TAG_OPTIONS.find(
      (option) => option.value === value
    )?.fontSize;

    updateElementTag(id, value);
    if (headingFontSize) {
      updateElementStyle(id, { fontSize: headingFontSize });
    }
  };

  return (
    <>
      <SelectFormField
        label="Heading tag"
        value={tag}
        onChange={handleHeadingTagChange}
        options={HEADING_TAG_OPTIONS}
      />
      <TextSettings element={element} />
    </>
  );
};

export default HeadingSettings;
