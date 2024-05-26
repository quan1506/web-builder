import { useShallow } from "zustand/react/shallow";
import { AppBar, Iframe, TemplateElementRenderer } from "../../components";
import { Button } from "../../design-system";
import { usePageBuilderStore } from "../../hooks";
import "./TemplateBuilderPage.css";

const TemplateBuilderPage = () => {
  const { selectedElementId, selectElement, document, rootElementId } =
    usePageBuilderStore(
      useShallow((state) => ({
        selectedElementId: state.selectedElementId,
        selectElement: state.selectElement,
        document: state.document,
        rootElementId: state.rootElementId,
      }))
    );

  const rootElement = document[rootElementId];

  return (
    <div>
      <AppBar accessories={<Button> Export </Button>} />
      <main className="template-builder-page-container">
        <section className="left-panel">
          <Iframe title="template-builder">
            <TemplateElementRenderer
              element={rootElement}
              document={document}
              onClick={selectElement}
            />
          </Iframe>
        </section>

        <section className="right-panel">
          <h2>Template Settings</h2>
          <div>Selected Element: {selectedElementId}</div>
        </section>
      </main>
    </div>
  );
};

export default TemplateBuilderPage;
