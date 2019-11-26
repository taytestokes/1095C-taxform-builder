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
            Documents
          </NavLink>
          <NavLink
            activeStyle={styles.activeLink}
            style={styles.navlink}
            to="/dashboard/upload"
          >
            Uploads
          </NavLink>
        </div>
        <div style={styles.logout}></div>
      </div>
    );
  }

  getStyles = () => ({
    navbar: {
      width: "100vw",
      height: "8vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: theme.Colors.WHITE,
      boxShadow: theme.Shadows.CARD,
      fontWeight: "bold"
    },
    links: {
      width: "75%",
      height: "100%",
      display: "flex",
      alignItems: "center"
    },
    navlink: {
      width: "10%",
      height: "90%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-around",
      textDecoration: "none",
      fontSize: theme.FontSizes.MEDIUM,
      color: "#A7B3B6",
      marginTop: theme.Spacing.SMALL
    },
    activeLink: {
      color: theme.FontColors.DARK
    },
    text: {
      paddingLeft: theme.Spacing.MEDIUM
    }
  });
}
