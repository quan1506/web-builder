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
        updateElementTagName: (elementId, tag) => {
          set((state) => {
            if (!state.document[elementId]) {
              return;
            }

            state.document[elementId].tag = tag;
          });
        },
        updateElementStyle: (elementId, { attributeName, attributeValue }) => {
          set((state) => {
            if (!state.document[elementId]) {
              return;
            }
            if (!state.document[elementId].style) {
              state.document[elementId].style = {};
            }

            state.document[elementId].style[attributeName] = attributeValue;
          });
        },
        updateElementAttributes: (
          elementId,
          { attributeName, attributeValue }
        ) => {
          set((state) => {
            if (!state.document[elementId]) {
              return;
            }

            if (!state.document[elementId].props) {
              state.document[elementId].attributes = {};
            }

            state.document[elementId].attributes[attributeName] =
              attributeValue;
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
            rootElementId: template.rootId,
            selectedElementId: null,
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
