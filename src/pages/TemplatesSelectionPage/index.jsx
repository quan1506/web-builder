import { useLocation } from "wouter";
import { AppBar, TemplateCard } from "../../components";
import { usePageBuilderStore } from "../../hooks";
import { TEMPLATES } from "../../templates";
import { PagePath } from "../../config";
import "./TemplatesSelectionPage.css";

const TemplateSelectionPage = () => {
  const [, setLocation] = useLocation();
  const loadTemplate = usePageBuilderStore((state) => state.loadTemplate);

  const handleTemplateClick = (template) => {
    loadTemplate(template);
    setLocation(`${PagePath.BUILDER}/${template.id}`);
  };

  return (
    <div>
      <AppBar />
      <main className="template-selection-page-container">
        <h1 className="template-list-title">Choose a template to start</h1>
        <div className="template-list-container">
          {TEMPLATES.map((template) => (
            <TemplateCard
              key={template.id}
              template={template}
              onClick={() => handleTemplateClick(template)}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default TemplateSelectionPage;
