import React, { Component } from "react";
import * as Icon from "react-feather";
import { css } from "glamor";

// Theme
import theme from "../Constants/Theme";

export default class Document extends Component {
  render() {
    const styles = this.getStyles();
    const { document } = this.props;

    return (
      <div style={styles.document}>
        <Icon.FileText size={20} />
        <p className={css(styles.text)}>{document.name}</p>
        <Icon.Download size={18} className={css(styles.download)} />
      </div>
    );
  }

  getStyles = () => ({
    document: {
      background: theme.Colors.WHITE,
      padding: theme.Spacing.MEDIUM,
      boxShadow: theme.Shadows.CARD,
      borderRadius: theme.BorderRadius.SMALL,
      color: theme.FontColors.GRAY,
      marginTop: theme.Spacing.MEDIUM,
      width: "32%",
      display: "flex",
      alignItems: "center"
    },
    text: {
      marginLeft: theme.Spacing.XSMALL,
      maxWidth: "80%",
      textOverflow: "ellipsis",
      overFlow: "hidden",
      whiteSpace: "nowrap",
      color: theme.FontColors.DARK,
      ":hover": {
        cursor: "default"
      }
    },
    download: {
      marginLeft: "auto",
      marginRight: theme.Spacing.XSMALL,
      ":hover": {
        cursor: "pointer",
        color: theme.Colors.PRIMARY
      }
    }
  });
}
