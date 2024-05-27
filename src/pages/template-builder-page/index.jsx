import { useShallow } from "zustand/react/shallow";
import { AppBar, Iframe, TemplateElementRenderer } from "../../components";
import { Button } from "../../design-system";
import { usePageBuilderStore } from "../../hooks";
import "./TemplateBuilderPage.css";

const TemplateBuilderPage = () => {
  const { rootElementId } = usePageBuilderStore(
    useShallow((state) => ({
      rootElementId: state.rootElementId,
    }))
  );

  return (
    <div>
      <AppBar accessories={<Button> Export </Button>} />
      <main className="template-builder-page-container">
        <section className="left-panel">
          <Iframe title="template-builder">
            <TemplateElementRenderer elementId={rootElementId} />
          </Iframe>
        </section>

        <section className="right-panel">
          <h2>Template Settings</h2>
          <button
            onClick={() => {
              usePageBuilderStore.getState().updateElementStyle("element-2", {
                attributeName: "color",
                // Random color
                attributeValue: `#${Math.floor(
                  Math.random() * 16777215
                ).toString(16)}`,
              });
            }}
          >
            Test
          </button>
        </section>
      </main>
    </div>
  );
};

export default TemplateBuilderPage;
