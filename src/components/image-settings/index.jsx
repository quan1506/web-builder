import { IMAGE_WIDTH_RANGE } from "../../config";
import { RangeSliderFormField, TextFormField } from "../../design-system";
import { useGetPageWidth, usePageBuilderStore } from "../../hooks";

const ImageSettings = ({ element }) => {
  const { id, attributes, lockedAttributes } = element;
  const updateElementAttributes = usePageBuilderStore(
    (state) => state.updateElementAttributes
  );
  const pageWidth = useGetPageWidth();

  const handleImageSrcChange = (e) => {
    const { value } = e.target;
    updateElementAttributes(id, { src: value });
  };

  const handleImageAltChange = (e) => {
    const { value } = e.target;
    updateElementAttributes(id, { alt: value });
  };

  const handleImageWidthChange = (e) => {
    const width = Number(e.target.value);
    updateElementAttributes(id, { width });
  };

  return (
    <>
      <TextFormField
        label="Image address"
        value={attributes?.src || ""}
        placeholder="https://"
        onChange={handleImageSrcChange}
      />
      {lockedAttributes?.includes("width") ? null : (
        <RangeSliderFormField
          label="Width"
          value={attributes?.width || 0}
          min={IMAGE_WIDTH_RANGE.min}
          max={pageWidth || IMAGE_WIDTH_RANGE.max}
          onChange={handleImageWidthChange}
        />
      )}
      <TextFormField
        label="Description"
        value={attributes?.alt || ""}
        placeholder="Describe this image..."
        onChange={handleImageAltChange}
      />
    </>
  );
};

export default ImageSettings;
