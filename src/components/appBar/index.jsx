import { Link } from "wouter";
import { PagePath } from "../../config/path";
import "./appBar.css";

export const AppBar = ({ accessories }) => {
  return (
    <header className="app-bar">
      <div>
        <Link href={PagePath.TEMPLATES} className="branding-name-link">
          Flodesk
        </Link>
      </div>
      <div>{accessories}</div>
    </header>
  );
};

export default AppBar;
