import React, { Component } from "react";
import axios from "axios";
import * as Icon from "react-feather";
import { css } from "glamor";
import Loader from "react-loader-spinner";
import { NavLink } from "react-router-dom";

// Components
import Document from "./Document";

// Theme
import theme from "../Constants/Theme";

export default class Documents extends Component {
  constructor() {
    super();

    this.state = {
      documents: [],
      loading: false
    };
  }

  componentDidMount() {
    this.setState({
      loading: true
    });

    this._getDocuments();
  }

  _getDocuments = () => {
    axios
      .get("/documents/all")
      .then(response => {
        this.setState({
          documents: response.data,
          loading: false
        });
      })
      .catch(() => {
        this.setState({
          loading: false
        });
      });
  };

  _removeDocument = id => {
    axios.delete(`/documents/delete/${id}`).then(response => {
      console.log(response);
      this.setState({
        documents: response.data
      });
    });
  };

  render() {
    const styles = this.getStyles();

    if (this.state.loading) {
      return (
        <div style={styles.loadingstate}>
          <Loader
            type="ThreeDots"
            color={theme.FontColors.DARK}
            height={45}
            width={45}
          />
        </div>
      );
    }

    if (this.state.documents.length < 1) {
      return (
        <div style={styles.zerostate}>
          <Icon.AlertCircle size={40} />
          <p style={styles.zerostateText}>
            It looks like you don't have any documents
          </p>
          <NavLink
            className={css(styles.zerostateButton)}
            to="/dashboard/upload"
          >
            Get Started
          </NavLink>
        </div>
      );
    }

    return (
      <div style={styles.component}>
        <div style={styles.documentsContainer}>
          <div style={styles.banner}>
            <div style={styles.bannerContainer}>
              <h1 style={styles.title}>Documents</h1>
              <p style={styles.subtitle}>({this.state.documents.length})</p>
            </div>
            <div style={styles.bannerContainer}>
              <NavLink
                className={css(styles.bannerButton)}
                to="/dashboard/upload"
              >
                <p>New Document</p>
              </NavLink>
            </div>
          </div>
          <div style={styles.documents}>
            {this.state.documents.map(document => (
              <Document
                removeDocument={this._removeDocument}
                document={document}
                key={document.name}
              />
            ))}
          </div>
        </div>
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
    documentsContainer: {
      height: "90%",
      width: "72%",
      display: "flex",
      flexDirection: "column"
    },
    banner: {
      padding: `${theme.Spacing.MEDIUM}px 0px`,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    },
    title: {
      fontSize: theme.FontSizes.JUMBO,
      color: theme.FontColors.DARK,
      marginLeft: theme.Spacing.XSMALL
    },
    subtitle: {
      fontSize: theme.FontSizes.LARGE,
      color: theme.Colors.PRIMARY,
      marginLeft: theme.Spacing.XSMALL,
      marginTop: theme.Spacing.XSMALL
    },
    bannerContainer: {
      display: "flex",
      alignItems: "center",
      paddingRight: theme.Spacing.XSMALL
    },
    bannerButton: {
      fontSize: theme.FontSizes.MEDIUM,
      backgroundColor: theme.Colors.PRIMARY,
      color: theme.FontColors.LIGHT,
      border: "none",
      borderRadius: theme.BorderRadius.SMALL,
      padding: `${theme.Spacing.SMALL}px ${theme.Spacing.LARGE}px`,
      outline: "none",
      textDecoration: "none",
      display: "flex",
      boxShadow: theme.Shadows.CARD,
      marginRight: theme.Spacing.SMALL,
      alignItems: "center",
      ":hover": {
        cursor: "pointer"
      }
    },
    loadingstate: {
      width: "100vw",
      height: "92vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    },
    zerostate: {
      width: "100vw",
      height: "92vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    },
    zerostateText: {
      margin: `${theme.Spacing.LARGE}px 0px`,
      fontSize: theme.FontSizes.XLARGE,
      fontWeight: "bold"
    },
    zerostateButton: {
      fontSize: theme.FontSizes.MEDIUM,
      backgroundColor: theme.Colors.PRIMARY,
      color: theme.FontColors.LIGHT,
      border: "none",
      borderRadius: theme.BorderRadius.SMALL,
      padding: `${theme.Spacing.SMALL}px ${theme.Spacing.XLARGE}px`,
      outline: "none",
      textDecoration: "none",
      ":hover": {
        cursor: "pointer"
      }
    },
    documents: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      marginBottom: theme.Spacing.MEDIUM
    }
  });
}
