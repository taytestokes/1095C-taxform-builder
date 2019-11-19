import React from "react";

// React Router DOM
import { Switch, Route } from "react-router-dom";

// Components
import Documents from "../Components/Documents";
import Upload from "../Components/Upload";

// Router
export default (
  <Switch>
    <Route path="/dashboard/documents" component={Documents} />
    <Route path="/dashboard/upload" component={Upload} />
  </Switch>
);
