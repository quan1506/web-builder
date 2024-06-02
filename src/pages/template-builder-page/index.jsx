import {
  AppBar,
  Iframe,
  SettingsPanel,
  TemplateElementRenderer,
} from "../../components";
import { Button } from "../../design-system";
import { useExportHtmlPage, usePageBuilderStore } from "../../hooks";
import "./TemplateBuilderPage.css";

const TemplateBuilderPage = () => {
  const rootElementId = usePageBuilderStore((state) => state.rootElementId);
  const exportHtmlPage = useExportHtmlPage();

  const handleExportButtonClicked = () => {
    const htmlPage = exportHtmlPage();
    const blob = new Blob([htmlPage], { type: "text/html" });
    const url = URL.createObjectURL(blob);

    const downloadLink = document.createElement("a");
    downloadLink.href = url;
    downloadLink.download = "index.html";
    downloadLink.click();

    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <AppBar
        accessories={
          <Button onClick={handleExportButtonClicked}> Export </Button>
        }
      />
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
