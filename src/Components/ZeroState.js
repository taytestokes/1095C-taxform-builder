import React, { Component } from "react";
import * as Icon from "react-feather";
import { NavLink } from "react-router-dom";
import { css } from "glamor";

// Theme
import theme from "../Constants/Theme";

export default class DocumentsZeroState extends Component {
  render() {
    const styles = this.getStyles();

    return (
      <div style={styles.zerostate}>
        <Icon.AlertCircle size={45} style={{ color: theme.FontColors.GRAY }} />
        <p style={styles.zerostateText}>
          It looks like you don't have any documents, get started by clicking
          the button below
        </p>
        <NavLink className={css(styles.zerostateButton)} to="/dashboard/upload">
          Get Started
        </NavLink>
      </div>
    );
  }

  getStyles = () => ({
    zerostate: {
      width: "100vw",
      height: "92vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    },
    zerostateText: {
      width: "25%",
      margin: `${theme.Spacing.LARGE}px 0px`,
      fontSize: theme.FontSizes.LARGE,
      fontWeight: 500,
      color: theme.FontColors.GRAY,
      textAlign: "center",
      lineHeight: 1.2
    },
    zerostateButton: {
      fontSize: theme.FontSizes.MEDIUM,
      fontWeight: 700,
      backgroundColor: theme.Colors.PRIMARY,
      color: theme.FontColors.LIGHT,
      border: `1px solid ${theme.Colors.PRIMARY}`,
      borderRadius: theme.BorderRadius.SMALL,
      padding: `${theme.Spacing.SMALL}px ${theme.Spacing.XLARGE}px`,
      outline: "none",
      textDecoration: "none",
      transition: "ease .2s",
      ":hover": {
        background: theme.Colors.HOVER_PRIMARY,
        borderColor: theme.Colors.HOVER_PRIMARY,
        cursor: "pointer"
      }
    }
  });
}
