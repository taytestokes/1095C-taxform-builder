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
          <div style={styles.label}>
            <Icon.User size={15} />
            <p style={styles.labelName}>Email</p>
          </div>
          <input style={styles.input} />
          <div style={styles.label}>
            <Icon.Lock size={15} />
            <p style={styles.labelName}>Password</p>
          </div>
          <input style={styles.input} />
          <button style={styles.login}>SIGN IN</button>
          <div style={styles.label}>
            <Icon.HelpCircle size={15} />
            <p style={styles.labelName}>Don't have an account?</p>
          </div>
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
    input: {
      width: "90%",
      outline: "none",
      background: theme.Colors.WHITE,
      padding: theme.Spacing.SMALL,
      borderRadius: theme.BorderRadius.SMALL,
      border: theme.Border.DEFAULT,
      marginTop: theme.Spacing.XSMALL
    },
    label: {
      width: "90%",
      display: "flex",
      alignItems: "center",
      color: theme.FontColors.GRAY,
      marginTop: theme.Spacing.MEDIUM
    },
    labelName: {
      marginLeft: theme.Spacing.SMALL,
      fontSize: theme.FontSizes.MEDIUM
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
      marginTop: theme.Spacing.SMALL
    }
  });
}

export default Login;
