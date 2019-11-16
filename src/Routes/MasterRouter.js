import React from "react";

// react-router-dom packages
import { Switch, Route } from "react-router-dom";

// Widgets
import Dashboard from "../Widgets/Dashboard";
import Login from "../Widgets/Login";

// Router
export default (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route path="/dashboard" component={Dashboard} />
  </Switch>
);
