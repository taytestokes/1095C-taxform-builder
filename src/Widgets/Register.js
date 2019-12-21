import React, { Component } from "react";
import { css } from "glamor";
import { Link } from "react-router-dom";
import axios from "axios";
import swal from "@sweetalert/with-react";
import Loader from "react-loader-spinner";

// Utils
import { isEmail } from "../Utils/Format";

// Theme
import theme from "../Constants/Theme";

class Register extends Component {
  state = {
    email: "",
    password: "",
    loading: false
  };

  componentDidMount() {
    this._checkForSession();
  }

  _handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  _handleRegister = () => {
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
      .post("/auth/register", userInfo)
      .then(() => {
        this.setState({
          loading: false
        });

        this.props.history.push("/dashboard/home");
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

  _checkForSession = () => {
    axios.get("/auth/session").then(({ data }) => {
      if (data.user) {
        this.props.history.push("/dashboard");
      }
    });
  };

  render() {
    const styles = this.getStyles();
    const { loading } = this.state;

    return (
      <div style={styles.widget}>
        <div style={styles.registerContainer}>
          <input
            className={styles.input}
            name="email"
            onChange={this._handleChange}
            placeholder="Email"
          />
          <input
            className={styles.input}
            name="password"
            onChange={this._handleChange}
            type="password"
            placeholder="Password"
          />
          <button className={styles.register} onClick={this._handleRegister}>
            {loading ? (
              <Loader type="ThreeDots" height={10} width={20} color="#FFF" />
            ) : (
                "Register"
              )}
          </button>
          <Link className={css(styles.login)} to="/">
            Sign In
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
    registerContainer: {
      width: 300,
      height: 350,
      padding: theme.Spacing.LARGE,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    },
    input: css({
      width: "100%",
      height: "13%",
      outline: "none",
      background: theme.Colors.WHITE,
      padding: theme.Spacing.SMALL,
      borderRadius: theme.BorderRadius.SMALL,
      border: theme.Border.DEFAULT,
      marginTop: theme.Spacing.SMALL,
      transition: "ease .2s",
      fontSize: theme.FontSizes.MEDIUM,
      ":focus": {
        border: theme.Border.FOCUS
      }
    }),
    register: css({
      width: "100%",
      outline: "none",
      backgroundColor: "transparent",
      color: theme.Colors.PRIMARY,
      padding: theme.Spacing.MEDIUM,
      borderRadius: theme.BorderRadius.SMALL,
      border: `1px solid ${theme.Colors.PRIMARY}`,
      marginTop: theme.Spacing.SMALL,
      fontSize: theme.FontSizes.SMALL,
      transition: "ease .2s",
      fontWeight: 700,
      ":hover": {
        cursor: "pointer",
        background: theme.Colors.PRIMARY,
        color: theme.Colors.WHITE
      }
    }),
    login: css({
      width: "100%",
      outline: "none",
      backgroundColor: theme.Colors.GRAY,
      color: theme.FontColors.GRAY,
      padding: theme.Spacing.MEDIUM,
      border: `1px solid ${theme.Colors.GRAY}`,
      borderRadius: theme.BorderRadius.SMALL,
      marginTop: theme.Spacing.SMALL,
      textDecoration: "none",
      display: "flex",
      justifyContent: "space-around",
      fontSize: theme.FontSizes.SMALL,
      transition: "ease .2s",
      fontWeight: 700,
      ":hover": {
        cursor: "pointer",
        background: theme.Colors.HOVER_GRAY,
        border: `1px solid ${theme.Colors.HOVER_GRAY}`
      }
    })
  });
}

export default Register;
