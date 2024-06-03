import { useShallow } from "zustand/react/shallow";
import {
  ColorFormField,
  SelectFormField,
  TextFormField,
  TextareaFormField,
} from "../../design-system";
import { usePageBuilderStore } from "../../hooks";
import { LINK_TARGET_OPTIONS } from "../../config";

const ButtonSettings = ({ element }) => {
  const { id, value, style, attributes } = element;
  const {
    updateElementStyle,
    updateElementTextContent,
    updateElementAttributes,
  } = usePageBuilderStore(
    useShallow((state) => ({
      updateElementStyle: state.updateElementStyle,
      updateElementTextContent: state.updateElementTextContent,
      updateElementAttributes: state.updateElementAttributes,
    }))
  );

  const handleBackgroundColorChange = (e) => {
    const { value } = e.target;
    updateElementStyle(id, { backgroundColor: value });
  };
  const handleColorChange = (e) => {
    const { value } = e.target;
    updateElementStyle(id, { color: value });
  };
  const handleTextChange = (e) => {
    const { value } = e.target;
    updateElementTextContent(id, value);
  };
  const handleLinkAttributeChange = (e) => {
    const { value } = e.target;
    updateElementAttributes(id, { href: value });
  };
  const handleTargetAttributeChange = (e) => {
    const { value } = e.target;
    updateElementAttributes(id, { target: value });
  };

  return (
    <>
      <ColorFormField
        label="Fill color"
        value={style.backgroundColor}
        onChange={handleBackgroundColorChange}
      />
      <ColorFormField
        label="Text color"
        value={style.color}
        onChange={handleColorChange}
      />
      <TextFormField label="Text" value={value} onChange={handleTextChange} />
      <TextareaFormField
        label="Link to"
        value={attributes.href}
        placeholder="https://"
        onChange={handleLinkAttributeChange}
        rows={3}
      />
      <SelectFormField
        label="Open link in"
        options={LINK_TARGET_OPTIONS}
        value={attributes.target}
        onChange={handleTargetAttributeChange}
      />
    </>
  );
};

export default ButtonSettings;
