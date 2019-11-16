import React, { Component } from "react";

// Router
import MasterRouter from "../Routes/MasterRouter";

// Styles
import "../Styles/Reset.css";

// Theme
import theme from "../Constants/Theme";

class MasterWidget extends Component {
  render() {
    const styles = this.getStyles();

    return <div style={styles.widget}>{MasterRouter}</div>;
  }

  getStyles = () => ({
    widget: {
      width: "100vw",
      height: "100vh",
      background: theme.BackgroundColors.LIGHT,
      fontFamily: theme.FontFamily.PRIMARY,
      color: theme.FontColors.DARK
    }
  });
}

export default MasterWidget;
