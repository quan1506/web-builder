import { Link } from "wouter";
import { AppBar } from "../../components";
import { PagePath } from "../../config/path";
import "./TemplatesSelectionPage.css";

const TemplateSelectionPage = () => {
  return (
    <div>
      <AppBar />
      <main className="template-selection-page-container">
        <h1 className="template-list-title">Choose a template to start</h1>
        <div className="template-list-container">
          <div>
            <Link href={`${PagePath.BUILDER}/template_1`}>Template 1</Link>
          </div>
          <div>
            <Link href={`${PagePath.BUILDER}/template_2`}>Template 2</Link>
          </div>
          <div>
            <Link href={`${PagePath.BUILDER}/template_3`}>Template 3</Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TemplateSelectionPage;
