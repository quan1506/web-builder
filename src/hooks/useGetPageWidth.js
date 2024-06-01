import usePageBuilderStore from "./usePageBuilderStore";
import { useShallow } from "zustand/react/shallow";

const useGetPageWidth = () => {
  return usePageBuilderStore(
    useShallow((state) => {
      const rootElement = state.document[state.rootElementId];
      const pageContentElementId = rootElement?.children?.[0];
      const pageContentElement = state.document[pageContentElementId];
      const pageWidth = pageContentElement?.style?.width;

      return pageWidth;
    })
  );
};

export default useGetPageWidth;
