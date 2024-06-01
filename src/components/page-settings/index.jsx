import { ColorFormField, RangeSliderFormField } from "../../design-system";
import { PAGE_WIDTH_RANGE } from "../../config";
import { usePageSettings } from "../../hooks";

const PageSettings = ({ element: rootElement }) => {
  const [
    { backdropColor, pageBackgroundColor, pageWidth },
    { updateBackdropColor, updatePageBackgroundColor, updatePageWidth },
  ] = usePageSettings(rootElement);

  return (
    <>
      <ColorFormField
        label="Backdrop color"
        value={backdropColor}
        onChange={(e) => updateBackdropColor(e.target.value)}
      />
      <ColorFormField
        label="Page background color"
        value={pageBackgroundColor}
        onChange={(e) => updatePageBackgroundColor(e.target.value)}
      />
      <RangeSliderFormField
        label="Page width"
        min={PAGE_WIDTH_RANGE.min}
        max={PAGE_WIDTH_RANGE.max}
        value={pageWidth}
        onChange={(e) => updatePageWidth(Number(e.target.value))}
      />
    </>
  );
};

export default PageSettings;
