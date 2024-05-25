import { useParams } from "wouter";
import { AppBar } from "../../components";
import { Button } from "../../designSystem";
import "./TemplateBuilderPage.css";

const TemplateBuilderPage = () => {
  const { templateId } = useParams();

  return (
    <div>
      <AppBar accessories={<Button> Export </Button>} />
      <main className="template-builder-page-container">
        <section className="left-panel">
          <h2>Template ID: {templateId}</h2>
        </section>

        <section className="right-panel">
          <h2>Template Settings</h2>
        </section>
      </main>
    </div>
  );
};

export default TemplateBuilderPage;
