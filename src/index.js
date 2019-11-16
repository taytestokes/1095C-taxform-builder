import React from "react";
import ReactDOM from "react-dom";

// Routing
import { BrowserRouter } from "react-router-dom";

// Widgets
import MasterWidget from "./Widgets/Master";

// DOM Render
ReactDOM.render(
  <BrowserRouter>
    <MasterWidget />
  </BrowserRouter>,
  document.getElementById("root")
);
