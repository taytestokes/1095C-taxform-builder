import React, { Component } from "react";

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
      background: theme.BackgroundColors.LIGHT_GRAY,
      height: 8,
      borderRadius: theme.BorderRadius.MEDIUM
    },
    progress: {
      width: `${this.props.progress}%`,
      background: theme.Colors.PRIMARY,
      height: 8,
      borderRadius: theme.BorderRadius.MEDIUM,
      transition: "ease 50ms"
    }
  });
}

export default Progress;
