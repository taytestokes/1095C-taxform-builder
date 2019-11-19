import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import * as Icon from "react-feather";

// Theme
import theme from "../Constants/Theme";

export default class Navbar extends Component {
  render() {
    const styles = this.getStyles();

    return (
      <div style={styles.navbar}>
        <div style={styles.links}>
          <NavLink
            activeStyle={styles.activeLink}
            style={styles.navlink}
            to="/dashboard/documents"
          >
            <Icon.FileText size={15} />
            <p style={styles.text}>Documents</p>
          </NavLink>
          <NavLink
            activeStyle={styles.activeLink}
            style={styles.navlink}
            to="/dashboard/upload"
          >
            <Icon.Upload size={15} />
            <p style={styles.text}>Upload</p>
          </NavLink>
        </div>
        <div style={styles.logout}>
          <NavLink style={styles.navlink} to="/">
            <Icon.LogOut size={15} />
            <p style={styles.text}>Sign Out</p>
          </NavLink>
        </div>
      </div>
    );
  }

  getStyles = () => ({
    navbar: {
      width: "10vw",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      background: theme.Colors.WHITE,
      boxShadow: theme.Shadows.CARD
    },
    links: {
      width: "100%",
      height: "50%",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end"
    },
    navlink: {
      width: "85%",
      height: "10%",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      marginTop: theme.Spacing.MEDIUM,
      textDecoration: "none",
      fontSize: theme.FontSizes.MEDIUM,
      color: theme.FontColors.DARK,
      borderRadius: "5px 0 0 5px",
      paddingLeft: theme.Spacing.MEDIUM
    },
    activeLink: {
      background: theme.BackgroundColors.LIGHT
    },
    text: {
      paddingLeft: theme.Spacing.MEDIUM
    },
    logout: {
      width: "100%",
      height: "40%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      alignItems: "flex-end",
      marginBottom: theme.Spacing.MEDIUM
    }
  });
}
