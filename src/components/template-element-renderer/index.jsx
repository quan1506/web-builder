import { useShallow } from "zustand/react/shallow";
import { usePageBuilderStore } from "../../hooks";
import { VOID_HTML_ELEMENTS } from "./constants";
import { memo } from "react";

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
    isRoot,
    style,
    attributes,
    value,
    children,
    isEditable,
  } = element;
  const isVoidElement = VOID_HTML_ELEMENTS.includes(El);
  const elementInteractiveStyle = {
    cursor: "default",
    userSelect: "none",
    outline: !isRoot && isSelected ? "2px solid #3474e0" : "initial",
    outlineOffset: "-2px",
  };
  const elementStyle = {
    ...style,
    ...elementInteractiveStyle,
  };
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
      key={id}
      style={elementStyle}
      {...attributes}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={handleClick}
    >
      {isVoidElement ? undefined : (
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

export default memo(TemplateElementRenderer);
