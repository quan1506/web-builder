import { useShallow } from "zustand/react/shallow";
import { usePageBuilderStore } from "../../hooks";
import { VOID_HTML_ELEMENTS } from "./constants";

const TemplateElementRenderer = ({ elementId }) => {
  const { element, isSelected, selectElement } = usePageBuilderStore(
    useShallow((state) => ({
      element: state.document[elementId],
      isSelected: state.selectedElementId === elementId,
      isRoot: state.rootElementId === elementId,
      selectElement: state.selectElement,
    }))
  );
  if (!element) {
    return null;
  }

  const El = element.tag;
  const isVoidElement = VOID_HTML_ELEMENTS.includes(element.tag);
  const elementInteractiveStyle = {
    cursor: "default",
    userSelect: "none",
    outline: isSelected ? "2px solid #3474e0" : "initial",
    outlineOffset: "-2px",
  };
  const elementStyle = {
    ...element.style,
    ...elementInteractiveStyle,
  };

  const handleMouseOver = (e) => {
    e.stopPropagation();

    if (!isSelected) {
      e.target.style.outline = "1px solid #3474e0";
    }
  };

  const handleMouseOut = (e) => {
    e.stopPropagation();

    if (!isSelected) {
      e.target.style.outline = "none";
    }
  };

  const handleClick = (e) => {
    e.stopPropagation();

    if (!isSelected) {
      selectElement(element.id);
    }
  };

  return (
    <El
      key={element.id}
      style={elementStyle}
      {...element.attributes}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={handleClick}
    >
      {isVoidElement ? undefined : (
        <>
          {element.value}
          {element.children?.map((childId) => (
            <TemplateElementRenderer key={childId} elementId={childId} />
          ))}
        </>
      )}
    </El>
  );
};

export default TemplateElementRenderer;
