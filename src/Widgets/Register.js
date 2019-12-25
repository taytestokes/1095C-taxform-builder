import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import swal from "@sweetalert/with-react";
import FileIcon from "react-file-icon";
import { Form } from 'semantic-ui-react';

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
      password,
    };

    if (email === "" || password === "") return;

    this.setState({
      loading: true
    });

    if (!isEmail(email)) {
      this.setState({
        loading: false,
      });

      return swal({
        text: "Invalid email format, please try again.",
        button: "Okay"
      });
    };

    if (password.length < 6) {
      this.setState({
        loading: false,
      });

      return swal({
        text: 'Password must be atleast 6 characters long.',
        button: 'Okay'
      })
    }

    axios
      .post("/auth/register", userInfo)
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
        <div style={styles.registerContainer}>
          <div style={styles.logoContainer}>
            <FileIcon
              fold={true}
              color={theme.Colors.WHITE}
              size={60}
              extension="1095C"
              labelColor={theme.Colors.PRIMARY}
            />
          </div>
          <Form style={styles.form} size="small">
            <Form.Input required placeholder="Email" name="email" onChange={this._handleChange} />
            <Form.Input required placeholder="Password" type="password" name="password" onChange={this._handleChange} />
            <Form.Button fluid primary type="submit" onClick={this._handleRegister} loading={loading}>Sign Up</Form.Button>
          </Form>
          <div style={styles.cancel}>
            <p>Already have an account?</p>
            <Link to="/" style={{ marginLeft: theme.Spacing.XSMALL }}>
              Sign In
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
    registerContainer: {
      width: 300,
      height: 400,
      padding: theme.Spacing.LARGE,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
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
    cancel: {
      width: '100%',
      fontSize: theme.FontSizes.LARGE,
      color: theme.FontColors.GRAY,
      marginTop: theme.Spacing.LARGE,
      fontWeight: 500,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });
}

export default Register;
