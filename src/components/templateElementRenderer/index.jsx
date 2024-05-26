import { VOID_HTML_ELEMENTS } from "./constants";

const TemplateElementRenderer = ({ element, document, onClick }) => {
  const El = element.tag;

  const handleMouseOver = (e) => {
    e.stopPropagation();
    e.target.style.outline = "2px solid blue";
  };

  const handleMouseOut = (e) => {
    e.target.style.outline = "none";
  };

  const handleClick = (e) => {
    e.stopPropagation();
    onClick(element.id);
  };

  const isVoidElement = VOID_HTML_ELEMENTS.includes(element.tag);

  return (
    <El
      key={element.id}
      style={element.style}
      {...element.attributes}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={handleClick}
    >
      {isVoidElement ? undefined : (
        <>
          {element.value}
          {element.children?.map((childId) => (
            <TemplateElementRenderer
              key={childId}
              element={document[childId]}
              document={document}
              onClick={onClick}
            />
          ))}
        </>
      )}
    </El>
  );
};

export default TemplateElementRenderer;
