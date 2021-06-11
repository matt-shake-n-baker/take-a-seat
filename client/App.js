import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginForm from "./pages/LoginForm";
import Workspaces from "./pages/Workspaces";

const App = () => {
  return (
    <div>
      <main>Welcome!</main>
      <Switch>
        <Route exact path="/" component={Workspaces} />
        <Route exact path="/workspaces" component={Workspaces} />
        <Route exact path="/login" component={LoginForm} />
      </Switch>
    </div>
  );
};

export default App;
