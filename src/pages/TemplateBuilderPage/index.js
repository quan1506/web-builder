import { useParams } from "wouter";

const TemplateBuilderPage = () => {
  const { templateId } = useParams();

  return (
    <main>
      <h1>Template Builder Page</h1>
      <p>Template ID: {templateId}</p>
    </main>
  );
};

export default TemplateBuilderPage;
