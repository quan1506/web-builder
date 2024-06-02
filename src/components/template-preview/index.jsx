import { VOID_HTML_ELEMENTS } from "../../config";
import Iframe from "../iframe";
import image_placeholder from "../../assets/image-placeholder.png";
import "./templatePreview.css";

const TemplatePreview = ({ template }) => {
  const rootElement = template.document[template.rootElementId];

  return (
    <Iframe
      title={`Template preview - ${template.name}`}
      className="template-preview-iframe"
      isPreview
    >
      <ElementPreview element={rootElement} template={template} />
    </Iframe>
  );
};

const ElementPreview = ({ element, template }) => {
  if (!element) {
    return null;
  }

  const { tag: El, type, children, style, attributes, value } = element;
  const shouldShowPlaceholderImage =
    type === "image" && (!attributes?.src || attributes.src === "");
  const imagePlaceholderStyle = {
    aspectRatio: "1 / 1",
  };
  const elementStyle = {
    ...style,
    userSelect: "none",
    ...(shouldShowPlaceholderImage && imagePlaceholderStyle),
  };
  const elementAttributes = shouldShowPlaceholderImage
    ? {
        ...attributes,
        src: image_placeholder,
      }
    : attributes;
  const isVoidElement = VOID_HTML_ELEMENTS.includes(El);

  return (
    <El style={elementStyle} {...elementAttributes}>
      {isVoidElement ? null : (
        <>
          {value}
          {children?.map((childId) => (
            <ElementPreview
              key={childId}
              element={template.document[childId]}
              template={template}
            />
          ))}
        </>
      )}
    </El>
  );
};

export default TemplatePreview;
