import React, { Component } from "react";
import axios from "axios";

// Theme
import theme from "../Constants/Theme";

export default class Documents extends Component {
  componentDidMount() {
    this._getDocuments();
  }

  _getDocuments = () => {
    axios.get("/documents/all").then(response => {
      console.log(response.data);
    });
  };

  render() {
    const styles = this.getStyles();

    return (
      <div style={styles.component}>
        <div style={styles.container}></div>
      </div>
    );
  }

  getStyles = () => ({
    component: {
      width: "100vw",
      height: "92vh",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center"
    },
    container: {
      height: "90%",
      width: "90%",
      display: "flex",
      flexDirection: "column"
    }
  });
}
