import React, { Component } from "react";
import "./Progress.css";

// Theme
import theme from "../Constants/Theme";

class Progress extends Component {
  render() {
    const styles = this.getStyles();

    return (
      <div style={styles.progressbar}>
        <div style={styles.progress} />
      </div>
    );
  }

  getStyles = () => ({
    progressbar: {
      width: "100%",
      background: theme.Colors.PRIMARY,
      height: theme.Spacing.XSMALL,
      borderRadius: theme.BorderRadius.MEDIUM
    },
    progress: {
      width: `${this.props.progress}%`
    }
  });
}

export default Progress;
