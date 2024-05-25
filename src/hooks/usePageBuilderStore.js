import { create } from "zustand";

const usePageBuilderStore = create((set) => ({
  templateId: null,
  pageSettings: {},
  pageTree: {},
  selectedNodeId: null,

  setTemplateId: (templateId) => set({ templateId }),
  updatePageSettings: (settings) => set({ pageSettings: settings }),
  selectNode: (nodeId) => set({ selectedNodeId: nodeId }),
  updateNodeSettings: (nodeId, settings) => {
    set((state) => ({
      pageTree: {
        ...state.pageTree,
        [nodeId]: {
          ...state.pageTree[nodeId],
          settings,
        },
      },
    }));
  },
}));

export default usePageBuilderStore;
