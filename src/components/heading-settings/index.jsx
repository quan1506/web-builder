import { SelectFormField } from "../../design-system";
import { usePageBuilderStore } from "../../hooks";
import { HEADING_TAG_OPTIONS } from "../../config";
import TextSettings from "../text-setting";

const HeadingSettings = ({ element }) => {
  const { id, tag } = element;
  const updateElementTag = usePageBuilderStore(
    (state) => state.updateElementTag
  );

  return (
    <>
      <SelectFormField
        label="Heading tag"
        value={tag}
        onChange={(e) => updateElementTag(id, e.target.value)}
        options={HEADING_TAG_OPTIONS}
      />
      <TextSettings element={element} />
    </>
  );
};

export default HeadingSettings;
