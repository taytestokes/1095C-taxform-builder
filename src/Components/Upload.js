import React, { Component } from "react";

// Components
import Uploader from "./Uploader";

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
      width: "100vw",
      height: "92vh",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center"
    }
  });
}
