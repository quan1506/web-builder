import {
  AppBar,
  Iframe,
  SettingsPanel,
  TemplateElementRenderer,
} from "../../components";
import { Button } from "../../design-system";
import { usePageBuilderStore } from "../../hooks";
import "./TemplateBuilderPage.css";

const TemplateBuilderPage = () => {
  const rootElementId = usePageBuilderStore((state) => state.rootElementId);

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
          <SettingsPanel />
        </section>
      </main>
    </div>
  );
};

export default TemplateBuilderPage;
