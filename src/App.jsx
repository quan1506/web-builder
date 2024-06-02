import { Router, Route, Switch, Redirect } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import TemplatesSelectionPage from "./pages/templates-selection-page";
import TemplateBuilderPage from "./pages/template-builder-page";
import { PagePath } from "./config";

const App = () => (
  <Router hook={useHashLocation}>
    <Switch>
      <Route path={PagePath.TEMPLATES} component={TemplatesSelectionPage} />
      <Route
        path={`${PagePath.BUILDER}/:templateId`}
        component={TemplateBuilderPage}
      />
      <Route>
        <Redirect to={PagePath.TEMPLATES} />
      </Route>
    </Switch>
  </Router>
);

export default App;
