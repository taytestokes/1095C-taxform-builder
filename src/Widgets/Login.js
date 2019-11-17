// Packages
import React, { Component } from "react";
import * as Icon from "react-feather";
import { css } from "glamor";
import { Link } from "react-router-dom";
import axios from "axios";
import swal from "@sweetalert/with-react";
import Loader from "react-loader-spinner";

// Utils
import { isEmail } from "../Utils/Format";

// Theme
import theme from "../Constants/Theme";

class Login extends Component {
  state = {
    email: "",
    password: "",
    loading: false
  };

  _handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  _handleLogin = () => {
    const { email, password } = this.state;

    const userInfo = {
      email,
      password
    };

    this.setState({
      loading: true
    });

    if (email === "" || password === "") {
      this.setState({
        loading: false
      });
      return swal({
        text: "Email and Password are required",
        button: "OKAY"
      });
    }

    if (!isEmail(email)) {
      return swal({
        text: "Invalid email format, please try again.",
        button: "OKAY"
      });
    }

    axios
      .post("/auth/login", userInfo)
      .then(() => {
        this.setState({
          loading: false
        });

        this.props.history.push("/dashboard");
      })
      .catch(err => {
        this.setState({
          loading: false
        });
        //create the error object
        const error = Object.create(err);
        //modify the error message based off of the response
        if (error.response.status === 400) {
          //if username or password is missing
          error.message = "Username and Password are required";
        } else if (error.response.status === 401) {
          //if username or password are incorrect
          error.message = "Invalid Username or Password";
        } else {
          error.message = "Internal Server Error";
        }
        // flash a pop up of the error message
        swal({
          text: error.message,
          button: "Okay"
        });
      });
  };

  render() {
    const styles = this.getStyles();
    const { loading } = this.state;

    return (
      <div style={styles.widget}>
        <div style={styles.loginContainer}>
          <div style={styles.label}>
            <Icon.User size={15} />
            <p style={styles.labelName}>Email</p>
          </div>
          <input
            className={css(styles.input)}
            name="email"
            onChange={this._handleChange}
          />
          <div style={styles.label}>
            <Icon.Lock size={15} />
            <p style={styles.labelName}>Password</p>
          </div>
          <input
            className={css(styles.input)}
            name="password"
            onChange={this._handleChange}
            type="password"
          />
          <button className={css(styles.login)} onClick={this._handleLogin}>
            {loading ? (
              <Loader type="ThreeDots" height={10} width={20} color="#FFF" />
            ) : (
              "SIGN IN"
            )}
          </button>
          <div style={styles.label}>
            <Icon.HelpCircle size={15} />
            <p style={styles.labelName}>Don't have an account?</p>
          </div>
          <Link className={css(styles.register)} to="/register">
            REGISTER
          </Link>
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
      height: "50%",
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
      marginTop: theme.Spacing.XSMALL,
      ":focus": {
        border: theme.Border.FOCUS
      }
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
      padding: theme.Spacing.MEDIUM,
      borderRadius: theme.BorderRadius.SMALL,
      border: "none",
      marginTop: theme.Spacing.XLARGE,
      fontSize: theme.FontSizes.SMALL,
      ":hover": {
        cursor: "pointer",
        opacity: 0.8
      }
    },
    register: {
      width: "90%",
      outline: "none",
      backgroundColor: theme.BackgroundColors.LIGHT,
      color: theme.FontColors.DARK,
      padding: theme.Spacing.MEDIUM,
      borderRadius: theme.BorderRadius.SMALL,
      border: theme.Border.DEFAULT,
      marginTop: theme.Spacing.SMALL,
      textDecoration: "none",
      display: "flex",
      justifyContent: "space-around",
      fontSize: theme.FontSizes.SMALL,
      ":hover": {
        cursor: "pointer",
        opacity: 0.8
      }
    }
  });
}

export default Login;
