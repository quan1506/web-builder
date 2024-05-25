import { Link } from "wouter";
import { PagePath } from "../../config/path";

const TemplateSelectionPage = () => {
  return (
    <main>
      <h1>Choose a template to start</h1>
      <ul>
        <li>
          <Link href={`${PagePath.BUILDER}/template_1`}>Template 1</Link>
        </li>
        <li>
          <Link href={`${PagePath.BUILDER}/template_2`}>Template 2</Link>
        </li>
        <li>
          <Link href={`${PagePath.BUILDER}/template_1`}>Template 3</Link>
        </li>
      </ul>
    </main>
  );
};

export default TemplateSelectionPage;
