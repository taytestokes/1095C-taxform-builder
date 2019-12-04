import React, { Component } from "react";
import * as Icon from "react-feather";

// Router
import MasterRouter from "../Routes/MasterRouter";

// Styles
import "../Styles/Reset.css";
import "../Styles/SweetAlerts.css";

// Theme
import theme from "../Constants/Theme";

// Utils
import { getBrowserSize } from "../Utils/Browser";

class MasterWidget extends Component {
  render() {
    const styles = this.getStyles();
    const browserSize = getBrowserSize();

    if (browserSize === "small") {
      return (
        <div>
          <div>Hello</div>
        </div>
      );
    }

    return <div style={styles.widget}>{MasterRouter}</div>;
  }

  getStyles = () => ({
    widget: {
      width: "100vw",
      height: "100vh",
      background: theme.Colors.WHITE,
      fontFamily: theme.FontFamily.PRIMARY,
      color: theme.FontColors.DARK
    }
  });
}

export default MasterWidget;
