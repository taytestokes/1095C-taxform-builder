import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { css } from "glamor";
import axios from "axios";
import { withRouter } from "react-router-dom";

// Theme
import theme from "../Constants/Theme";

class Navbar extends Component {
  _logout = () => {
    axios
      .get("/auth/logout")
      .then(() => {
        this.props.history.push("/");
      })
      .catch(error => {
        if (error) throw error;
      });
  };

  render() {
    const styles = this.getStyles();

    return (
      <div style={styles.navbar}>
        <div style={styles.links}>
          <NavLink
            activeStyle={styles.activeLink}
            className={css(styles.navlink)}
            to="/dashboard/documents"
          >
            Documents
          </NavLink>
          <NavLink
            activeStyle={styles.activeLink}
            className={css(styles.navlink)}
            to="/dashboard/upload"
          >
            Upload
          </NavLink>
          <button className={css(styles.logout)} onClick={this._logout}>
            Sign Out
          </button>
        </div>
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
      width: "72%",
      height: "100%",
      display: "flex",
      alignItems: "center"
    },
    navlink: {
      width: "10%",
      height: "90%",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      textDecoration: "none",
      fontSize: theme.FontSizes.MEDIUM,
      color: "#A7B3B6",
      transition: "ease .2s",
      ":hover": {
        color: theme.Colors.PRIMARY
      }
    },
    activeLink: {
      color: theme.Colors.PRIMARY
    },
    text: {
      paddingLeft: theme.Spacing.MEDIUM
    },
    logout: {
      marginLeft: "auto",
      width: "8%",
      height: "45%",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      textDecoration: "none",
      fontSize: theme.FontSizes.MEDIUM,
      color: "#A7B3B6",
      background: "transparent",
      border: "none",
      borderRadius: theme.BorderRadius.SMALL,
      outline: "none",
      fontWeight: "bold",
      padding: "none",
      ":hover": {
        cursor: "pointer"
      }
    }
  });
}

export default withRouter(Navbar);
