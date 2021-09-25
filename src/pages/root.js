import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import PagesLogin from "./login";
import PagesDashboard from "./dashboard";

export default function PagesRoot() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <PagesLogin />
        </Route>
        <Route path="/dashboard">
          <PagesDashboard />
        </Route>
        <Redirect from="/" to="/login" />
      </Switch>
    </Router>
  );
}
