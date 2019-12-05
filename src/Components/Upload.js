import React, { Component } from "react";

// Components
import Uploader from "./Uploader";

// Theme
import theme from "../Constants/Theme";

export default class Upload extends Component {
  render() {
    const styles = this.getStyles();

    return (
      <div style={styles.upload}>
        <Uploader />
      </div>
    );
  }

  getStyles = () => ({
    upload: {
      width: "60vw",
      height: "100vh",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      borderLeft: theme.Border.DEFAULT
    }
  });
}
