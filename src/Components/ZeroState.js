import React, { Component } from "react";
import * as Icon from "react-feather";

// Theme
import theme from "../Constants/Theme";

export default class DocumentsZeroState extends Component {
  render() {
    const styles = this.getStyles();

    return (
      <div style={styles.zerostate}>
        <Icon.AlertCircle size={45} style={{ color: theme.FontColors.GRAY }} />
        <p style={styles.zerostateText}>
          It looks like we weren't able to find any documents
        </p>
      </div>
    );
  }

  getStyles = () => ({
    zerostate: {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    },
    zerostateText: {
      width: "75%",
      margin: `${theme.Spacing.LARGE}px 0px`,
      fontSize: theme.FontSizes.LARGE,
      fontWeight: 500,
      color: theme.FontColors.GRAY,
      textAlign: "center",
      lineHeight: 1.2
    }
  });
}
