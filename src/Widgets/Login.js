// Packages
import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import swal from "@sweetalert/with-react";
import { Form, Label } from 'semantic-ui-react';

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
            <Label color='red' ribbon style={{ left: -35 }}>
              1095C Generator
            </Label>
            <Form.Input required placeholder="Email" name="email" onChange={this._handleChange} style={{ marginTop: theme.Spacing.LARGE }} />
            <Form.Input required placeholder="Password" type="password" name="password" onChange={this._handleChange} />
            <Form.Button fluid primary type="submit" onClick={this._handleLogin} loading={loading} style={{ background: '#1b1c1d' }}>Sign In</Form.Button>
          </Form>
          <div style={styles.cancel}>
            <p>Don't have an account?</p>
            <Link to="/register" style={{ marginLeft: theme.Spacing.SMALL }}>
              Register
            </Link>
          </div>
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
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      background: theme.Colors.WHITE,
      padding: theme.Spacing.LARGE,
      borderRadius: theme.BorderRadius.SMALL,
      border: theme.Border.DEFAULT
    },
    logoContainer: {
      background: '#1b1c1d',
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: theme.Spacing.MEDIUM,
      color: theme.Colors.GRAY,

    },
    form: {
      width: 250,
      height: 200,
    },
    cancel: {
      width: '100%',
      fontSize: theme.FontSizes.LARGE,
      color: theme.FontColors.GRAY,
      marginTop: theme.Spacing.LARGE,
      fontWeight: 500,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    }
  });
}

export default Login;
