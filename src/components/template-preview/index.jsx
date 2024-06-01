import { VOID_HTML_ELEMENTS } from "../../config";
import Iframe from "../iframe";
import "./templatePreview.css";

const TemplatePreview = ({ template }) => {
  const rootElement = template.document[template.rootElementId];

  return (
    <div className="template-preview-container">
      <Iframe
        title={`Template preview - ${template.name}`}
        className="template-preview-iframe"
        isRenderedInsideButton
      >
        <ElementPreview element={rootElement} template={template} />
      </Iframe>
    </div>
  );
};

const ElementPreview = ({ element, template }) => {
  if (!element) {
    return null;
  }

  const { tag: El, type, children, style, attributes, value } = element;
  const imagePlaceholderStyle = {
    aspectRatio: "1 / 1",
  };
  const elementStyle = {
    ...style,
    userSelect: "none",
    ...(type === "image" &&
      attributes.src === "/image-placeholder.jpg" &&
      imagePlaceholderStyle),
  };
  const isVoidElement = VOID_HTML_ELEMENTS.includes(El);

  return (
    <El style={elementStyle} {...attributes}>
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