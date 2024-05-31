import usePageBuilderStore from "./usePageBuilderStore";
import { useShallow } from "zustand/react/shallow";

const usePageSettings = (rootElement) => {
  const { id, style = {}, children } = rootElement;
  const pageContentElementId = children[0];
  const { pageContentElement, updateElementStyle } = usePageBuilderStore(
    useShallow((state) => ({
      pageContentElement: state.document[pageContentElementId],
      updateElementStyle: state.updateElementStyle,
    }))
  );

  const backdropColor = style.backgroundColor;
  const pageBackgroundColor = pageContentElement?.style.backgroundColor;
  const pageWidth = pageContentElement?.style.width;

  const updateBackdropColor = (backgroundColor) => {
    updateElementStyle(id, { backgroundColor });
  };

  const updatePageBackgroundColor = (backgroundColor) => {
    updateElementStyle(pageContentElementId, { backgroundColor });
  };

  const updatePageWidth = (width) => {
    updateElementStyle(pageContentElementId, { width });
  };

  return [
    {
      backdropColor,
      pageBackgroundColor,
      pageWidth,
    },
    {
      updateBackdropColor,
      updatePageBackgroundColor,
      updatePageWidth,
    },
  ];
};

export default usePageSettings;
