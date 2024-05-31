import { ColorFormField, RangeSliderFormField } from "../../design-system";
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
        min={300}
        max={1024}
        value={pageWidth}
        onChange={(e) => updatePageWidth(Number(e.target.value))}
      />
    </>
  );
};

export default PageSettings;
