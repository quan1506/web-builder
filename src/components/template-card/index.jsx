import TemplatePreview from "../template-preview";
import "./templateCard.css";

const TemplateCard = ({ template, onClick }) => {
  return (
    <button
      className="template-card"
      onClick={onClick}
      aria-label={`Select ${template.name} template`}
    >
      <div className="template-preview-container">
        <TemplatePreview template={template} />
      </div>
      <div className="template-introduction-container">
        <p className="template-title">{template.name}</p>
        <p className="template-description">{template.description}</p>
      </div>
    </button>
  );
};

export default TemplateCard;
