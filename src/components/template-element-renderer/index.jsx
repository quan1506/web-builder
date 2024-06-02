import { useShallow } from "zustand/react/shallow";
import { usePageBuilderStore } from "../../hooks";
import { VOID_HTML_ELEMENTS } from "../../config";
import image_placeholder from "../../assets/image-placeholder.png";

const TemplateElementRenderer = ({ elementId }) => {
  const { element, isSelected, selectElement } = usePageBuilderStore(
    useShallow((state) => ({
      element: state.document[elementId],
      isSelected: state.selectedElementId === elementId,
      selectElement: state.selectElement,
    }))
  );

  if (!element) {
    return null;
  }

  const {
    id,
    tag: El,
    type,
    isRoot,
    style,
    attributes,
    value,
    children,
    isEditable,
  } = element;
  const isVoidElement = VOID_HTML_ELEMENTS.includes(El);
  const shouldShowPlaceholderImage =
    type === "image" && (!attributes?.src || attributes.src === "");

  const elementInteractiveStyle = {
    cursor: "default",
    userSelect: "none",
    outline: !isRoot && isSelected ? "2px solid #3474e0" : "initial",
    outlineOffset: "-2px",
  };
  const imagePlaceholderStyle = {
    aspectRatio: "1 / 1",
  };
  const elementStyle = {
    ...style,
    ...elementInteractiveStyle,
    ...(shouldShowPlaceholderImage && imagePlaceholderStyle),
  };
  const elementAttributes = shouldShowPlaceholderImage
    ? {
        ...attributes,
        src: image_placeholder,
      }
    : attributes;
  const shouldDisableHighlight = !isEditable || isRoot;

  const handleMouseOver = (e) => {
    e.stopPropagation();

    if (shouldDisableHighlight) {
      return;
    }

    if (!isSelected) {
      e.target.style.outline = "1px solid #3474e0";
    }
  };

  const handleMouseOut = (e) => {
    e.stopPropagation();

    if (shouldDisableHighlight) {
      return;
    }

    if (!isSelected) {
      e.target.style.outline = "none";
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!isEditable) {
      return;
    }

    if (!isSelected) {
      selectElement(id);
    }
  };

  return (
    <El
      style={elementStyle}
      {...elementAttributes}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={handleClick}
    >
      {isVoidElement ? null : (
        <>
          {value}
          {children?.map((childId) => (
            <TemplateElementRenderer key={childId} elementId={childId} />
          ))}
        </>
      )}
    </El>
  );
};

export default TemplateElementRenderer;
