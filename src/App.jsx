import { Route, Switch, Redirect } from "wouter";
import TemplatesSelectionPage from "./pages/TemplatesSelectionPage";
import TemplateBuilderPage from "./pages/TemplateBuilderPage";
import { PagePath } from "./config";

const App = () => (
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
);

export default App;
