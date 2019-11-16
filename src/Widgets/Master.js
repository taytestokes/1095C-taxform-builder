import React, { Component } from "react";

// Router
import MasterRouter from "../Routes/MasterRouter";

// Styles
import "../Styles/Reset.css";

class MasterWidget extends Component {
  render() {
    return <div>{MasterRouter}</div>;
  }
}

export default MasterWidget;
