// Packages
import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import swal from "@sweetalert/with-react";
import { Form, Button, } from 'semantic-ui-react';
import FileIcon from "react-file-icon";

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

    if (email === '') return;
    if (password === '') return;

    this.setState({
      loading: true
    });

    if (email === "" || password === "") {
      this.setState({
        loading: false
      });
      return swal({
        text: "Email and Password are required",
        button: "Okay"
      });
    }

    if (!isEmail(email)) {
      return swal({
        text: "Invalid email format, please try again.",
        button: "Okay"
      });
    }

    axios
      .post("/auth/login", userInfo)
      .then(() => {
        this.setState({
          loading: false
        });
        this.props.history.push("/dashboard/documents");
      })
      .catch(err => {
        this.setState({
          loading: false
        });

        const error = Object.create(err);

        if (error.response.status === 400) {
          error.message = "Username and Password are required";
        } else if (error.response.status === 401) {

          error.message = "Invalid Username or Password";
        } else {
          error.message = "Internal Server Error";
        };

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
          <Form style={styles.form} size="small">
            <Form.Input required placeholder="Email" name="email" onChange={this._handleChange} />
            <Form.Input required placeholder="Password" type="password" name="password" onChange={this._handleChange} />
            <Form.Button fluid primary type="submit" onClick={this._handleLogin} loading={loading}>Sign In</Form.Button>
          </Form>
          <div style={{ fontSize: theme.FontSizes.MEDIUM, color: theme.FontColors.GRAY, marginTop: theme.Spacing.MEDIUM, fontWeight: 600 }}>OR</div>
          <Link to="/register" style={{ width: '100%' }}>
            <Button fluid style={{ marginTop: theme.Spacing.MEDIUM }}>Register</Button>
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
      justifyContent: "space-around",
      background: '#f9fafb',
    },
    loginContainer: {
      width: 300,
      padding: theme.Spacing.LARGE,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      background: theme.Colors.WHITE
    },
    logoContainer: {
      background: '#1b1c1d',
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: theme.BorderRadius.SMALL,
      padding: theme.Spacing.MEDIUM,
      color: theme.Colors.GRAY,
    },
    form: {
      marginTop: theme.Spacing.LARGE,
      width: '100%',
    },
  });
}

export default Login;
