import React, { Component } from "react";
import * as Icon from "react-feather";

// Theme
import theme from "../Constants/Theme";

class Login extends Component {
  render() {
    const styles = this.getStyles();

    return (
      <div style={styles.widget}>
        <div style={styles.loginContainer}>
          <div style={styles.icon}>
            <Icon.File size={25} />
          </div>
          <input placeholder="Email" style={styles.input} />
          <input placeholder="Password" style={styles.input} />
          <button style={styles.login}>SIGN IN</button>
          <button style={styles.register}>REGISTER</button>
        </div>
      </div>
    );
  }

  getStyles = () => ({
    widget: {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-around"
    },
    loginContainer: {
      width: "25%",
      height: "45%",
      padding: theme.Spacing.XLARGE,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: theme.Colors.WHITE,
      boxShadow: theme.Shadows.CARD,
      borderRadius: theme.BorderRadius.MEDIUM
    },
    icon: {
      width: 50,
      height: 50,
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      background: theme.BackgroundColors.LIGHT,
      color: theme.FontColors.DARK,
      padding: theme.Spacing.SMALL,
      borderRadius: theme.BorderRadius.CIRCLE,
      border: theme.Border.DEFAULT,
      marginBottom: theme.Spacing.MEDIUM
    },
    input: {
      width: "90%",
      outline: "none",
      background: theme.Colors.WHITE,
      padding: theme.Spacing.SMALL,
      borderRadius: theme.BorderRadius.SMALL,
      border: theme.Border.DEFAULT,
      marginTop: theme.Spacing.XSMALL
    },
    login: {
      width: "90%",
      outline: "none",
      backgroundColor: theme.Colors.PRIMARY,
      color: theme.FontColors.LIGHT,
      padding: theme.Spacing.SMALL,
      borderRadius: theme.BorderRadius.SMALL,
      border: "none",
      marginTop: theme.Spacing.MEDIUM
    },
    register: {
      width: "90%",
      outline: "none",
      backgroundColor: theme.BackgroundColors.LIGHT,
      color: theme.FontColors.DARK,
      padding: theme.Spacing.SMALL,
      borderRadius: theme.BorderRadius.SMALL,
      border: theme.Border.DEFAULT,
      marginTop: theme.Spacing.XSMALL
    }
  });
}

export default Login;
