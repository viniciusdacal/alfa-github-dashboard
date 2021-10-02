import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import PagesLogin from "./login";
import PagesDashboard from "./dashboard";
import PagesAuth from "./auth";

export default function PagesRoot() {
  return (
    <Router>
      <Switch>
        <Route path="/auth">
          <PagesAuth />
        </Route>
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
