import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { persist } from "zustand/middleware";

const usePageBuilderStore = create(
  devtools(
    persist(
      immer((set) => ({
        templateId: null,
        rootElementId: null,
        selectedElementId: null,
        document: {},

        setTemplateId: (templateId) => set({ templateId }),
        selectElement: (elementId) => set({ selectedElementId: elementId }),
        updateElementTag: (elementId, tag) => {
          set((state) => {
            if (!state.document[elementId]) {
              return;
            }

            state.document[elementId].tag = tag;
          });
        },
        updateElementStyle: (elementId, style) => {
          set((state) => {
            if (!state.document[elementId]) {
              return;
            }

            state.document[elementId].style = {
              ...state.document[elementId].style,
              ...style,
            };
          });
        },
        updateElementAttributes: (elementId, attribute) => {
          set((state) => {
            if (!state.document[elementId]) {
              return;
            }

            state.document[elementId].attributes = {
              ...state.document[elementId].attributes,
              ...attribute,
            };
          });
        },
        updateElementTextContent: (elementId, textContent) => {
          set((state) => {
            if (!state.document[elementId]) {
              return;
            }

            state.document[elementId].value = textContent;
          });
        },
        loadTemplate: (template) => {
          set({
            templateId: template.id,
            rootElementId: template.rootElementId,
            selectedElementId: template.rootElementId,
            document: template.document,
          });
        },
      })),
      {
        name: "page-builder",
      }
    )
  )
);

export default usePageBuilderStore;
